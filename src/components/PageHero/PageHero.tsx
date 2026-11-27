import type { ReactNode } from "react";
import { Badge, Container, Portrait, Reveal, SoftCircle } from "@/components/ui";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  tag: string;
  title: string;
  body: string;
  /** Shows a round photo where the decorative circle would otherwise be */
  photo?: { src: string; alt: string };
  /** Optional action buttons shown under the intro */
  children?: ReactNode;
}

/** Header used at the top of the Experience and Services pages. */
export function PageHero({ tag, title, body, photo, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={`${styles.inner} ${photo ? styles.withPhoto : ""}`}>
        {!photo && <SoftCircle size={180} top={10} right="var(--gutter)" />}
        <div>
          <Reveal y={12}>
            <Badge variant="accent" kicker>
              {tag}
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.title}>{title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.body}>{body}</p>
          </Reveal>
          {children && (
            <Reveal delay={0.24} className={styles.actions}>
              {children}
            </Reveal>
          )}
        </div>
        {photo && (
          <Reveal delay={0.2} className={styles.photo}>
            <Portrait {...photo} />
          </Reveal>
        )}
      </Container>
    </section>
  );
}
