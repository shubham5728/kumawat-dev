import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          {profile.username}
          <span className="text-muted">.dev</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-4">
          <nav className="hidden sm:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
