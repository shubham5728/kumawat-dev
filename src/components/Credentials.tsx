import { education, achievements } from "@/lib/data";
import Reveal from "./Reveal";
import { StarIcon } from "./icons";

export default function Credentials() {
  return (
    <section id="credentials" className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-20 sm:py-24 md:grid-cols-2">
        {/* Education */}
        <Reveal index={0}>
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
            03 — Education
          </h2>
          <div className="mt-6 space-y-4">
            {education.map((e) => (
              <div
                key={e.degree}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {e.degree}
                </h3>
                <p className="text-sm text-foreground/70">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Achievements */}
        <Reveal index={1}>
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
            04 — Achievements
          </h2>
          <ul className="mt-6 space-y-3">
            {achievements.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 text-sm"
              >
                <StarIcon
                  width={18}
                  height={18}
                  className="mt-0.5 shrink-0 text-foreground"
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
