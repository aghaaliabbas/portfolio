import type { CSSProperties } from "react";
import styles from "./SoftCircle.module.css";

interface SoftCircleProps {
  size: number;
  /** "sage" for hero/page headers, "cream" for the terracotta contact band */
  tone?: "sage" | "cream";
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

/** Decorative soft circle — the design's signature motif. Position it inside a `position: relative` parent. */
export function SoftCircle({ size, tone = "sage", top, right, bottom, left }: SoftCircleProps) {
  const style: CSSProperties = { width: size, height: size, top, right, bottom, left };
  return <span aria-hidden="true" className={`${styles.circle} ${styles[tone]}`} style={style} />;
}
