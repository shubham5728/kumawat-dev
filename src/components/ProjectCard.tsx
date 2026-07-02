import type { Project } from "@/lib/github";
import {
  StarIcon,
  ForkIcon,
  GitHubIcon,
  ExternalIcon,
  ArrowUpRightIcon,
} from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
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
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.displayName} on GitHub`}
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

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

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

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-4 text-xs text-muted">
          {project.language && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              {project.language}
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <StarIcon width={14} height={14} />
            {project.stars}
          </span>
          {project.forks > 0 && (
            <span className="inline-flex items-center gap-1">
              <ForkIcon width={14} height={14} />
              {project.forks}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.displayName} live demo`}
              className="text-muted transition-colors hover:text-foreground"
            >
              <ExternalIcon width={16} height={16} />
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.displayName} source`}
            className="text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon width={16} height={16} />
          </a>
        </div>
      </div>

      <p className="mt-3 font-mono text-[11px] text-muted">
        {project.updatedLabel}
      </p>
    </article>
  );
}
