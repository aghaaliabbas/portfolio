import { ArrowRight } from "lucide-react";
import { Badge, Button, Card, Container, Reveal } from "@/components/ui";
import { experience, roleHabits } from "@/data";
import { formatYears } from "@/lib/date";
import styles from "./RoleHistory.module.css";

// Byteverx is the umbrella practice, not a separate employer, so it's left out of this list.
const roles = experience.filter((e) => e.id !== "byteverx").slice(0, 6);

export function RoleHistory() {
  return (
    <section className={styles.section} aria-labelledby="roles-title">
      <Container className={styles.grid}>
        <Reveal>
          <Badge variant="accent" kicker>
            {roleHabits.tag}
          </Badge>
          <h2 id="roles-title" className={styles.title}>
            {roleHabits.title}
          </h2>
          <p className={styles.body}>{roleHabits.body}</p>
          <Button to="/experience" variant="ghost" icon={<ArrowRight size={16} />} className={styles.more}>
            Full experience
          </Button>
        </Reveal>

        <ul className={styles.list}>
          {roles.map((r, i) => (
            <li key={r.id}>
              <Reveal delay={i * 0.05}>
                <Card className={styles.row}>
                  <div>
                    <p className={styles.company}>{r.company}</p>
                    <p className={styles.role}>{r.role}</p>
                  </div>
                  <span className={styles.years}>{formatYears(r.start, r.end)}</span>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
