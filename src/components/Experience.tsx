import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
            02 — Experience
          </h2>
          <p className="mt-4 max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            A short timeline of the work.
          </p>
        </Reveal>

        <ol className="mt-12 border-l border-border">
          {experience.map((item, i) => (
            <Reveal as="li" index={i} key={item.period} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-foreground" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.period}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-foreground/70">
                {item.org}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
