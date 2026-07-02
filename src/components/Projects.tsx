import { getProjects } from "@/lib/github";
import { profile } from "@/lib/data";
import ProjectsGrid from "./ProjectsGrid";
import Reveal from "./Reveal";
import { GitHubIcon } from "./icons";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
                05 — Selected Work
              </h2>
              <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Projects pulled live from GitHub, filterable by focus area.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <GitHubIcon width={16} height={16} />
              All repositories
            </a>
          </div>
        </Reveal>

        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
