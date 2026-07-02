import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRightIcon } from "./icons";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "GitHub", value: `@${profile.username}`, href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", value: "Shubham Kumawat", href: profile.linkedin, Icon: LinkedInIcon },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
          03 — Contact
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Let&apos;s build something that ships.
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          Open to data-science and ML-engineering roles, collaborations, and
          interesting problems. The fastest way to reach me is email.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {links.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-foreground/40"
            >
              <span className="flex items-center gap-3">
                <Icon width={20} height={20} />
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-muted">
                    {label}
                  </span>
                  <span className="block text-sm font-medium">{value}</span>
                </span>
              </span>
              <ArrowUpRightIcon
                width={18}
                height={18}
                className="text-muted transition-colors group-hover:text-foreground"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
