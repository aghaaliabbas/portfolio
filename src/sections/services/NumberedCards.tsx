import { Card, Reveal } from "@/components/ui";
import type { Service } from "@/types";
import styles from "./Services.module.css";

/** Numbered cards used for both the service list and the "How it starts" steps. */
export function NumberedCards({ items, columns }: { items: Service[]; columns: 2 | 3 }) {
  return (
    <ol className={`${styles.cards} ${columns === 2 ? styles.two : styles.three}`}>
      {items.map((item, i) => (
        <li key={item.num}>
          <Reveal delay={(i % columns) * 0.07} className={styles.cell}>
            <Card as="article" className={styles.card}>
              <p className={styles.num}>{item.num}</p>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </Card>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
