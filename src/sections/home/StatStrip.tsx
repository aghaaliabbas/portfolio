import { Card, Container, Reveal } from "@/components/ui";
import { homeStats } from "@/data";
import styles from "./StatStrip.module.css";

export function StatStrip() {
  return (
    <section aria-label="Track record" className={styles.strip}>
      <Container>
        <ul className={styles.grid}>
          {homeStats.map((stat, i) => (
            <li key={stat.label}>
              <Reveal delay={i * 0.06} className={styles.cell}>
                <Card className={styles.card}>
                  <p className={styles.value}>{stat.value}</p>
                  <p className={styles.label}>{stat.label}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
