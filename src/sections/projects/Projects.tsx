import { useMemo, useState } from "react";
import { Button, Reveal, Section } from "@/components/ui";
import { projects } from "@/data";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

type Filter = "all" | Project["category"];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hybrid-mobile", label: "Hybrid mobile" },
  { id: "web", label: "Web" },
  { id: "native-mobile", label: "Native" },
];

const PAGE_SIZE = 6;

const linkCount = (p: Project) => [p.webUrl, p.appStoreUrl, p.playStoreUrl].filter(Boolean).length;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  // Projects with live links first; Array.sort is stable so ties keep source order.
  const sorted = useMemo(() => [...projects].sort((a, b) => linkCount(b) - linkCount(a)), []);
  const filtered = sorted.filter((p) => filter === "all" || p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, PAGE_SIZE);

  const select = (f: Filter) => {
    setFilter(f);
    setExpanded(false);
  };

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Apps I've shipped"
      description="A selection of web and mobile products delivered to production and the app stores."
    >
      <Reveal>
        <div className={styles.filters} role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`${styles.filter} ${filter === f.id ? styles.filterActive : ""}`}
              aria-pressed={filter === f.id}
              onClick={() => select(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className={styles.grid}>
        {visible.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {filtered.length > PAGE_SIZE && (
        <div className={styles.more}>
          <Button
            href="#projects"
            variant="ghost"
            onClick={(e) => {
              e.preventDefault();
              setExpanded((v) => !v);
            }}
          >
            {expanded ? "Show fewer" : `Show all ${filtered.length} projects`}
          </Button>
        </div>
      )}
    </Section>
  );
}
