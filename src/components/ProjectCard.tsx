import type { Project } from "@/lib/github";
import {
  StarIcon,
  ForkIcon,
  GitHubIcon,
  ArrowUpRightIcon,
} from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  // Clients click through to the live site first; fall back to the repo.
  const primaryUrl = project.liveUrl || project.homepage || project.url;

  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {project.isFlagship && (
              <span className="rounded-full border border-foreground/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                Featured
              </span>
            )}
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent-contrast">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-contrast" />
                Live
              </span>
            )}
            {project.categories.slice(0, 1).map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] uppercase tracking-widest text-muted"
              >
                {c}
              </span>
            ))}
          </div>
          <h3 className="truncate text-lg font-semibold tracking-tight">
            {project.displayName}
          </h3>
        </div>
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.displayName}`}
          className="shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        >
          <ArrowUpRightIcon />
        </a>
      </div>

      {project.headline && (
        <p className="mt-1 text-sm font-medium text-foreground/80">
          {project.headline}
        </p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {(project.problem || project.solution) && (
        <dl className="mt-4 space-y-3">
          {project.problem && (
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                The Problem
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                {project.problem}
              </dd>
            </div>
          )}
          {project.solution && (
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                The Solution
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                {project.solution}
              </dd>
            </div>
          )}
        </dl>
      )}

      {/* Spacer keeps the footer pinned to the bottom of the card */}
      <div className="flex-1" />

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex items-center gap-4 text-xs text-muted">
          {project.language && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              {project.language}
            </span>
          )}
          {(project.stars > 0 || !project.isPrivate) && (
            <span className="inline-flex items-center gap-1">
              <StarIcon width={14} height={14} />
              {project.stars}
            </span>
          )}
          {project.forks > 0 && (
            <span className="inline-flex items-center gap-1">
              <ForkIcon width={14} height={14} />
              {project.forks}
            </span>
          )}
          {project.isPrivate && (
            <span className="font-mono text-[11px]">Private repo</span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-contrast transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              Live Demo
              <ArrowUpRightIcon width={13} height={13} />
            </a>
          )}
          {!project.isPrivate && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.displayName} source on GitHub`}
              className="text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon width={16} height={16} />
            </a>
          )}
        </div>
      </div>

      {project.updatedLabel && (
        <p className="mt-3 font-mono text-[11px] text-muted">
          {project.updatedLabel}
        </p>
      )}
    </article>
  );
}
