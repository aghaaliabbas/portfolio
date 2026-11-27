import { Reveal, Section } from "@/components/ui";
import { ownProjects } from "@/data";
import { CaseCard } from "./CaseCard";
import styles from "./SelectedWork.module.css";

export function OwnProjects() {
  return (
    <Section id="built" eyebrow="My own products" eyebrowTone="brass" title="Things I've built." description="Designed and built by me.">
      <div className={styles.grid}>
        {ownProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08} className={styles.cell}>
            <CaseCard study={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
