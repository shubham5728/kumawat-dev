"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/github";
import type { Category } from "@/lib/data";
import ProjectCard from "./ProjectCard";

type Filter = "All" | Category;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  // Build the tab list from categories that actually appear in the data.
  const filters = useMemo<Filter[]>(() => {
    const present = new Set<Category>();
    projects.forEach((p) => p.categories.forEach((c) => present.add(c)));
    const order: Category[] = [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Science",
    ];
    return ["All", ...order.filter((c) => present.has(c))];
  }, [projects]);

  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(active)),
    [active, projects]
  );

  return (
    <>
      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground ${
                isActive
                  ? "border-foreground bg-accent text-accent-contrast"
                  : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-muted">No projects in this category.</p>
      )}
    </>
  );
}
