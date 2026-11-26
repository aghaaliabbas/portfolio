import type { ReactNode } from "react";
import { Badge, Container, Reveal, SoftCircle } from "@/components/ui";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  tag: string;
  title: string;
  body: string;
  /** Optional action buttons shown under the intro */
  children?: ReactNode;
}

/** Header used at the top of the Experience and Services pages. */
export function PageHero({ tag, title, body, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <SoftCircle size={180} top={10} right="var(--gutter)" />
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
      </Container>
    </section>
  );
}
