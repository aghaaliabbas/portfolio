import { SoftCircle } from "./SoftCircle";
import styles from "./Portrait.module.css";

interface PortraitProps {
  src: string;
  alt: string;
}

/**
 * Round photo that takes the place of the hero's soft circle, with a brass circle offset behind it.
 * Size it from the parent with the `--portrait-size` custom property.
 */
export function Portrait({ src, alt }: PortraitProps) {
  return (
    <figure className={styles.portrait}>
      <SoftCircle size={170} bottom={-14} left={-22} />
      <div className={styles.frame}>
        <img src={src} alt={alt} width={640} height={800} className={styles.image} decoding="async" fetchPriority="high" />
      </div>
    </figure>
  );
}
