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
    <article className="group relative flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-foreground/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.isFlagship && (
            <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-widest text-muted">
              Featured
            </span>
          )}
          <h3 className="text-lg font-semibold tracking-tight">
            {project.displayName}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.displayName} on GitHub`}
          className="text-muted transition-colors group-hover:text-foreground"
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
    </article>
  );
}
