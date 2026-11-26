import { Badge, Card, Reveal, Section } from "@/components/ui";
import { skillGroups } from "@/data";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills">
      <ul className={styles.grid}>
        {skillGroups.map((group, i) => (
          <li key={group.id}>
            <Reveal delay={(i % 3) * 0.06} className={styles.cell}>
              <Card tone="outline" className={styles.card}>
                <h3 className={styles.title}>{group.title}</h3>
                <ul className={styles.chips}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant={group.featured ? "accent" : "default"}>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
