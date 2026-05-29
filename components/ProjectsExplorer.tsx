"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Category } from "@/lib/data";
import { Icon } from "./Icon";
import { ProjectMedia } from "./ProjectMedia";

const FILTERS: { label: string; value: "all" | Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" },
];

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "all" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <>
      {/* Filter bar */}
      <section className="relative z-20 mb-12">
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-outline-variant/30 bg-surface-container-low/80 p-4 backdrop-blur-sm">
          <span className="mr-2 font-label-mono text-label-mono uppercase text-outline">
            Filter By:
          </span>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-5 py-2 font-body-md text-body-md transition-all ${
                filter === f.value
                  ? "bg-primary text-on-primary hover:opacity-90"
                  : "border border-outline-variant bg-surface-container-lowest text-on-surface-variant hover:border-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="relative ml-auto hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tech stack..."
              className="w-64 rounded-lg border border-outline-variant bg-surface-container-lowest py-2 pl-10 pr-4 font-body-md text-body-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
            className="soft-shadow-hover flex flex-col overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest"
          >
            <div className="group relative aspect-video overflow-hidden">
              <ProjectMedia image={p.image} title={p.title} />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-surface-container-lowest p-3 shadow-lg">
                  <Icon name="visibility" className="text-primary" />
                </span>
              </div>
            </div>
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-3 font-headline-md text-headline-md text-on-surface">
                {p.title}
              </h3>
              <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                {p.description}
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary-container px-3 py-1 font-label-mono text-[12px] text-on-secondary-fixed-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 font-body-md text-body-md text-on-primary transition-all hover:opacity-90 active:scale-95"
                  >
                    <Icon name="open_in_new" className="text-[18px]" /> View Live
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-outline-variant bg-transparent py-2.5 font-body-md text-body-md text-on-surface-variant transition-all hover:bg-surface-container-low"
                  >
                    <Icon name="code" className="text-[18px]" /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}

        {visible.length === 0 && (
          <p className="col-span-full py-16 text-center font-body-md text-on-surface-variant">
            No projects match your filters.
          </p>
        )}
      </section>
    </>
  );
}
