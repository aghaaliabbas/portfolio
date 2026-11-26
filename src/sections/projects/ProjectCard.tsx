import { ExternalLink, Globe, Smartphone } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import type { Project } from "@/types";
import styles from "./Projects.module.css";

const categoryLabel: Record<Project["category"], string> = {
  web: "Web",
  "hybrid-mobile": "Hybrid mobile",
  "native-mobile": "Native mobile",
};

export function ProjectCard({ project }: { project: Project }) {
  const links = [
    project.webUrl && { label: "Live site", href: project.webUrl, icon: <Globe size={14} /> },
    project.appStoreUrl && { label: "App Store", href: project.appStoreUrl, icon: <Smartphone size={14} /> },
    project.playStoreUrl && { label: "Google Play", href: project.playStoreUrl, icon: <Smartphone size={14} /> },
  ].filter((l): l is { label: string; href: string; icon: React.ReactElement } => Boolean(l));

  return (
    <Card interactive as="article" className={styles.card}>
      <span className={styles.category}>{categoryLabel[project.category]}</span>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.tech}>
        {project.tech.map((t) => (
          <li key={t}>
            <Badge>{t}</Badge>
          </li>
        ))}
      </ul>
      {links.length > 0 && (
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {l.icon}
                {l.label}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
