import { Card, Reveal, Section } from "@/components/ui";
import { engagementCards } from "@/data";
import styles from "./Engagement.module.css";

export function Engagement() {
  return (
    <Section id="engagement" eyebrow="Engagement">
      <ul className={styles.grid}>
        {engagementCards.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={i * 0.07} className={styles.cell}>
              <Card className={styles.card}>
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.body}>{c.body}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
