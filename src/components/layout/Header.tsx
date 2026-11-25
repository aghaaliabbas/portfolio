import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container } from "@/components/ui";
import { navLinks, profile } from "@/data";
import { useScrolled } from "@/hooks/useScrolled";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.raised : ""}`}>
      <Container className={styles.bar}>
        <Link to="/" className={styles.brand} onClick={close}>
          {profile.name}
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Primary">
          {navLinks.map((item) =>
            item.scrollTo ? (
              <Link key={item.label} to={item.to} state={{ scrollTo: item.scrollTo }} className={styles.link} onClick={close}>
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
                onClick={close}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Button href={profile.bookingUrl} target="_blank" className={styles.cta}>
            Book a 15-min call
          </Button>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
    </header>
  );
}
