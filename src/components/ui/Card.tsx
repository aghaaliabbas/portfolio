import type { ElementType, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  /** "surface" = filled tan card (default); "outline" = cream card with a divider border */
  tone?: "surface" | "outline";
  interactive?: boolean;
  /** Remove inner padding (for cards with a full-bleed header) */
  flush?: boolean;
  className?: string;
}

export function Card({ children, as: Tag = "div", tone = "surface", interactive = false, flush = false, className = "" }: CardProps) {
  const classes = [styles.card, tone === "outline" ? styles.outline : "", interactive ? styles.interactive : "", flush ? styles.flush : "", className]
    .filter(Boolean)
    .join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
