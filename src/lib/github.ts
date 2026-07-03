import {
  profile,
  flagshipRepos,
  excludedRepos,
  categoryKeywords,
  manualProjects,
  type Category,
} from "./data";

// Shape of the fields we consume from the GitHub REST API.
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  homepage: string | null;
  pushed_at: string;
}

// Normalized project used by the UI, enriched with any flagship overrides.
export interface Project {
  id: number;
  name: string;
  displayName: string;
  url: string;
  homepage: string | null;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  pushedAt: string;
  updatedLabel: string;
  categories: Category[];
  isFlagship: boolean;
  // Live deployment URL (Vercel etc.) — clients click through to this first.
  liveUrl: string | null;
  // Private repo: hide the GitHub link since it isn't publicly accessible.
  isPrivate: boolean;
  headline?: string;
  highlights?: string[];
  problem?: string;
  solution?: string;
}

const GITHUB_API = `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`;

const excludedSet = new Set(excludedRepos.map((n) => n.toLowerCase()));

const flagshipByName = new Map(
  flagshipRepos.map((r) => [r.name.toLowerCase(), r])
);
const flagshipOrder = new Map(
  flagshipRepos.map((r, i) => [r.name.toLowerCase(), i])
);

function toTitle(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

// Human-friendly "updated N ago" from an ISO timestamp.
function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "Updated today";
  if (days === 1) return "Updated yesterday";
  if (days < 30) return `Updated ${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `Updated ${months}mo ago`;
  const years = Math.floor(months / 12);
  return `Updated ${years}y ago`;
}

// Infer categories for a non-flagship repo from its name/description/language.
function inferCategories(repo: GitHubRepo): Category[] {
  const haystack = `${repo.name} ${repo.description ?? ""} ${(repo.topics ?? []).join(" ")}`.toLowerCase();
  const found = new Set<Category>();
  for (const { category, match } of categoryKeywords) {
    if (match.some((kw) => haystack.includes(kw))) found.add(category);
  }
  if (found.size === 0) found.add("Machine Learning");
  return [...found];
}

/**
 * Fetch public repositories from GitHub, filter noise (forks, empty repos,
 * the profile repo), enrich the flagship projects, and sort so curated
 * projects lead and the rest follow by recency.
 *
 * ISR: prerendered at build, revalidated hourly so the feed stays live
 * without hitting GitHub's unauthenticated rate limit on every request.
 */
export async function getProjects(): Promise<Project[]> {
  let repos: GitHubRepo[] = [];

  try {
    const res = await fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GitHub API responded ${res.status}`);
      return fallbackProjects();
    }

    repos = (await res.json()) as GitHubRepo[];
  } catch (err) {
    console.error("Failed to reach GitHub API:", err);
    return fallbackProjects();
  }

  const projects = repos
    .filter(
      (r) =>
        !r.fork &&
        !r.archived &&
        r.name.toLowerCase() !== profile.githubUser.toLowerCase() &&
        !excludedSet.has(r.name.toLowerCase())
    )
    .map(mapRepo);

  // Manual/private live projects lead the list, then the sorted GitHub feed.
  return [...manualAsProjects(), ...sortProjects(projects)];
}

function mapRepo(repo: GitHubRepo): Project {
  const flagship = flagshipByName.get(repo.name.toLowerCase());
  return {
    id: repo.id,
    name: repo.name,
    displayName: toTitle(repo.name),
    url: repo.html_url,
    homepage: repo.homepage && repo.homepage.trim() ? repo.homepage : null,
    description:
      flagship?.blurb ||
      repo.description ||
      "A project exploring data, models, and clean engineering.",
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics ?? [],
    pushedAt: repo.pushed_at,
    updatedLabel: relativeTime(repo.pushed_at),
    categories: flagship?.categories ?? inferCategories(repo),
    isFlagship: Boolean(flagship),
    liveUrl: repo.homepage && repo.homepage.trim() ? repo.homepage : null,
    isPrivate: false,
    headline: flagship?.headline,
    highlights: flagship?.highlights,
    problem: flagship?.problem,
    solution: flagship?.solution,
  };
}

// Curated projects not in the public feed (e.g. private, live on Vercel).
// Only surfaced when a live URL is present so clients never hit a dead link.
function manualAsProjects(): Project[] {
  return manualProjects
    .filter((m) => m.liveUrl.trim().length > 0)
    .map((m, i) => ({
      id: -1000 - i,
      name: m.name,
      displayName: m.name,
      url: m.liveUrl, // primary click → live site (repo may be private)
      homepage: m.liveUrl,
      description: m.blurb,
      language: null,
      stars: 0,
      forks: 0,
      topics: [],
      pushedAt: new Date().toISOString(),
      updatedLabel: "",
      categories: m.categories,
      isFlagship: true,
      liveUrl: m.liveUrl,
      isPrivate: m.isPrivate,
      headline: m.headline,
      highlights: m.highlights,
      problem: m.problem,
      solution: m.solution,
    }));
}

function sortProjects(projects: Project[]): Project[] {
  return projects.sort((a, b) => {
    const aRank = flagshipOrder.get(a.name.toLowerCase());
    const bRank = flagshipOrder.get(b.name.toLowerCase());

    if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
    if (aRank !== undefined) return -1;
    if (bRank !== undefined) return 1;

    // Non-flagship: most stars first, then most recently pushed.
    if (b.stars !== a.stars) return b.stars - a.stars;
    return new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime();
  });
}

// If GitHub is unreachable at build/request time, still render the curated set
// so the site is never empty.
function fallbackProjects(): Project[] {
  return flagshipRepos.map((r, i) => ({
    id: -1 - i,
    name: r.name,
    displayName: toTitle(r.name),
    url: `${profile.github}/${r.name}`,
    homepage: null,
    description: r.blurb,
    language: null,
    stars: 0,
    forks: 0,
    topics: [],
    pushedAt: new Date().toISOString(),
    updatedLabel: "Updated recently",
    categories: r.categories,
    isFlagship: true,
    liveUrl: null,
    isPrivate: false,
    headline: r.headline,
    highlights: r.highlights,
    problem: r.problem,
    solution: r.solution,
  }));
}
