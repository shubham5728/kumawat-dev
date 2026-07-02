import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind.
        </p>
        <p className="font-mono">Deployed on Vercel · Data live from GitHub</p>
      </div>
    </footer>
  );
}
