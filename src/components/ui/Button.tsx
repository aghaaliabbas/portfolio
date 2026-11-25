import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "light" | "onAccent";
  icon?: ReactNode;
  /** Internal route. Use instead of `href` for in-app navigation. */
  to?: string;
  /** Section id to scroll to after navigating to `to` */
  scrollTo?: string;
}

/** Link styled as a button — every CTA on this site navigates somewhere. */
export function Button({ children, variant = "primary", icon, className = "", href, to, scrollTo, target, ...rest }: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} state={scrollTo ? { scrollTo } : undefined} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={classes} {...rest}>
      {content}
    </a>
  );
}
