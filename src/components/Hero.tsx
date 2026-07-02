import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, ArrowUpRightIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:py-32">
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 font-mono text-base text-muted sm:text-lg">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View my work
            <ArrowUpRightIcon width={16} height={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <GitHubIcon width={16} height={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <LinkedInIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
