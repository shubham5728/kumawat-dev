export default function ProjectsSkeleton() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <div className="h-4 w-40 rounded bg-surface" />
        <div className="mt-4 h-8 w-96 max-w-full rounded bg-surface" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-56 animate-pulse rounded-lg border border-border bg-surface"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
