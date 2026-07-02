import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">
            {profile.username}
            <span className="text-muted">.dev</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            Resume
          </a>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
