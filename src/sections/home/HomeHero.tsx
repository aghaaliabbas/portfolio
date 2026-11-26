import portrait from "@/assets/portrait.jpg";
import { Badge, Button, Container, Portrait, Reveal } from "@/components/ui";
import { homeHero, profile } from "@/data";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <Reveal y={12}>
            <Badge variant="accent" kicker>
              {homeHero.tag}
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className={styles.title}>{homeHero.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.body}>{homeHero.body}</p>
          </Reveal>
          <Reveal delay={0.24} className={styles.actions}>
            <Button to="/" scrollTo="work">
              See selected work
            </Button>
            <Button to="/experience" variant="ghost">
              Full experience
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className={styles.photo}>
          <Portrait src={portrait} alt={`Portrait of ${profile.name}`} />
        </Reveal>
      </Container>
    </section>
  );
}
