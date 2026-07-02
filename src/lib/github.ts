import { profile, flagshipRepos } from "./data";

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
  isFlagship: boolean;
  headline?: string;
  highlights?: string[];
}

const GITHUB_API = `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=pushed`;

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
        r.name.toLowerCase() !== profile.githubUser.toLowerCase()
    )
    .map(mapRepo);

  return sortProjects(projects);
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
    isFlagship: Boolean(flagship),
    headline: flagship?.headline,
    highlights: flagship?.highlights,
  };
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
    isFlagship: true,
    headline: r.headline,
    highlights: r.highlights,
  }));
}
