import type { ReactNode } from "react";
import { Container, Reveal, SoftCircle } from "@/components/ui";
import styles from "./ContactBand.module.css";

interface ContactBandProps {
  id?: string;
  heading: string;
  /** Left or right side for the decorative circle, so pages don't all look identical */
  circle?: "left" | "right";
  children: ReactNode;
}

/** Full-bleed navy closing band shared by every page. */
export function ContactBand({ id, heading, circle = "left", children }: ContactBandProps) {
  return (
    <section id={id} className={styles.band} aria-labelledby={id ? `${id}-heading` : undefined}>
      <SoftCircle size={250} tone="cream" bottom={-60} left={circle === "left" ? -50 : undefined} right={circle === "right" ? -50 : undefined} />
      <Container className={styles.inner}>
        <Reveal>
          <h2 id={id ? `${id}-heading` : undefined} className={styles.heading}>
            {heading}
          </h2>
          <div className={styles.actions}>{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}
