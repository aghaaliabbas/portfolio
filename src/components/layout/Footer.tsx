import { Container, SocialIcon } from "@/components/ui";
import { profile } from "@/data";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>
          {profile.name} — {profile.headline}
        </span>
        <ul className={styles.socials}>
          {profile.socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                aria-label={s.label}
                className={styles.link}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <SocialIcon id={s.id} size={18} />
              </a>
            </li>
          ))}
        </ul>
        <span className={styles.place}>{profile.location} · Remote worldwide</span>
      </Container>
    </footer>
  );
}
