import { Bot, Coins, HeartPulse, Smartphone } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import type { CaseStudy } from "@/types";
import styles from "./SelectedWork.module.css";

const icons = {
  bot: Bot,
  "heart-pulse": HeartPulse,
  smartphone: Smartphone,
  coins: Coins,
} as const;

export function CaseCard({ study }: { study: CaseStudy }) {
  const Icon = icons[study.icon];
  return (
    <Card as="article" tone="outline" flush interactive className={styles.card}>
      <div className={`${styles.banner} ${study.tone === "brass" ? styles.brass : styles.primary}`}>
        <Icon size={40} strokeWidth={1.5} aria-hidden="true" />
        <span className={styles.kicker}>{study.kicker}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.text}>{study.body}</p>
        <p className={styles.result}>{study.result}</p>
        <ul className={styles.tags}>
          {study.tags.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
