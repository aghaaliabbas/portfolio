import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow?: string;
  eyebrowTone?: "accent" | "sage";
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, eyebrowTone = "accent", title, description, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={title || eyebrow ? `${id}-title` : undefined}>
      <Container>
        {(title || eyebrow) && (
          <Reveal className={styles.heading}>
            {eyebrow &&
              (title ? (
                <Badge variant={eyebrowTone} kicker>
                  {eyebrow}
                </Badge>
              ) : (
                // No separate title: the kicker is the section's heading.
                <h2 id={`${id}-title`} className={styles.kickerHeading}>
                  <Badge variant={eyebrowTone} kicker>
                    {eyebrow}
                  </Badge>
                </h2>
              ))}
            {title && (
              <h2 id={`${id}-title`} className={styles.title}>
                {title}
              </h2>
            )}
            {description && <p className={styles.description}>{description}</p>}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
