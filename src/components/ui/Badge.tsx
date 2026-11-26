import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "brass" | "outline";
  /** Larger size for section kickers */
  kicker?: boolean;
}

export function Badge({ children, variant = "default", kicker = false }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[variant]} ${kicker ? styles.kicker : ""}`}>{children}</span>;
}
