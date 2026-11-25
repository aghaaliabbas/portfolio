import { Reveal, Section } from "@/components/ui";
import { caseStudies } from "@/data";
import { CaseCard } from "./CaseCard";
import styles from "./SelectedWork.module.css";

export function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Four builds, four different problems."
      description="From a multi-agent planner to a crypto exchange — the common thread is shipping to production."
    >
      <div className={styles.grid}>
        {caseStudies.map((study, i) => (
          <Reveal key={study.id} delay={(i % 2) * 0.08} className={styles.cell}>
            <CaseCard study={study} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
