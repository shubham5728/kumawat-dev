import { profile, stats } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from "./icons";
import Avatar from "./Avatar";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
          {/* Left — narrative */}
          <div>
            <Reveal index={0}>
              <p className="mb-4 font-mono text-sm text-muted">
                {profile.role}
              </p>
            </Reveal>

            <Reveal index={1}>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90 sm:text-2xl sm:leading-snug">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal index={3}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal index={4}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
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
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <GitHubIcon width={18} height={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <LinkedInIcon width={18} height={18} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <MailIcon width={18} height={18} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — portrait */}
          <Reveal index={2} className="flex justify-center md:justify-end">
            <Avatar src={profile.photo} name={profile.name} />
          </Reveal>
        </div>

        {/* Stats strip */}
        <Reveal index={5}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-5 py-6">
                <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
