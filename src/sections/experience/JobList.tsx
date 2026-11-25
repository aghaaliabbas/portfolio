import { Container } from "@/components/ui";
import { experience } from "@/data";
import { JobCard } from "./JobCard";
import styles from "./Experience.module.css";

export function JobList() {
  return (
    <section aria-label="Job history" className={styles.section}>
      <Container>
        <ol className={styles.list}>
          {experience.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
