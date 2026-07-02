"use client";

import { useState } from "react";

/**
 * Profile image with a graceful fallback: if public/profile.jpg is missing
 * (or fails to load) we render the person's initials instead, so the layout
 * never shows a broken image.
 */
export default function Avatar({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-mono text-6xl font-semibold text-muted">
            {initials}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
    </div>
  );
}
