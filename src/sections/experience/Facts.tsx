import { Badge, Button, Card, Container, Reveal } from "@/components/ui";
import { education, factCards, upwork } from "@/data";
import styles from "./Facts.module.css";

export function Facts() {
  const edu = education[0];
  return (
    <section aria-label="Education, freelance record and working style" className={styles.section}>
      <Container>
        <ul className={styles.grid}>
          {edu && (
            <li>
              <Reveal className={styles.cell}>
                <Card className={styles.card}>
                  <Badge variant="accent">Education</Badge>
                  <h3 className={styles.title}>{edu.degree}</h3>
                  <p className={styles.body}>
                    {edu.school}, {edu.location} · {edu.start}–{edu.end}
                  </p>
                </Card>
              </Reveal>
            </li>
          )}
          <li>
            <Reveal delay={0.07} className={styles.cell}>
              <Card className={styles.card}>
                <Badge variant="brass">Freelance record</Badge>
                <h3 className={styles.title}>{upwork.status} on Upwork</h3>
                <p className={styles.body}>
                  {upwork.jobSuccess} job success · {upwork.rating} rating over {upwork.completedJobs} jobs · {upwork.hours} hours billed
                </p>
                <Button href={upwork.profileUrl} target="_blank" variant="ghost" className={styles.link}>
                  View Upwork profile
                </Button>
              </Card>
            </Reveal>
          </li>
          {factCards.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={0.14 + i * 0.07} className={styles.cell}>
                <Card className={styles.card}>
                  <Badge variant={c.tone}>{c.tag}</Badge>
                  <h3 className={styles.title}>{c.title}</h3>
                  <p className={styles.body}>{c.body}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
