import { Container } from "@/components/ui";
import { services } from "@/data";
import { NumberedCards } from "./NumberedCards";
import styles from "./Services.module.css";

export function ServiceList() {
  return (
    <section aria-labelledby="services-title" className={styles.section}>
      <Container>
        <h2 id="services-title" className={styles.srOnly}>
          What I offer
        </h2>
        <NumberedCards items={services} columns={2} />
      </Container>
    </section>
  );
}
