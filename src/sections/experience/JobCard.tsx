import { Badge, Card, Reveal } from "@/components/ui";
import { formatDuration, formatPeriod } from "@/lib/date";
import type { Experience } from "@/types";
import styles from "./Experience.module.css";

export function JobCard({ job }: { job: Experience }) {
  const current = job.end === null;
  const where = [job.type, job.location].filter(Boolean).join(" · ");

  return (
    <Reveal>
      <Card as="article" className={styles.card}>
        <div className={styles.side}>
          <h2 className={styles.company}>{job.company}</h2>
          <p className={styles.meta}>{formatPeriod(job.start, job.end)}</p>
          <p className={styles.meta}>
            {formatDuration(job.start, job.end)}
            {current && <span className={styles.now}>Current</span>}
          </p>
          {where && <p className={styles.meta}>{where}</p>}
        </div>

        <div>
          <h3 className={styles.role}>{job.role}</h3>
          {job.blurb && <p className={styles.blurb}>{job.blurb}</p>}

          <ul className={styles.points}>
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          {job.metrics && (
            <dl className={styles.metrics}>
              {job.metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <dd>{m.value}</dd>
                  <dt>{m.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <ul className={styles.tags}>
            {job.tags.map((t) => (
              <li key={t}>
                <Badge variant={current ? "accent" : "default"}>{t}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Reveal>
  );
}
