"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";

export default function MobileMenu({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
      >
        {open ? <CloseIcon width={18} height={18} /> : <MenuIcon width={18} height={18} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-border bg-background/95 backdrop-blur-md">
          <nav
            className="mx-auto flex max-w-5xl flex-col px-5 py-2"
            aria-label="Mobile"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-muted transition-colors last:border-0 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
