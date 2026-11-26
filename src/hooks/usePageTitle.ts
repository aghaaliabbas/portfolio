import { useEffect } from "react";

const BASE = "Agha Ali Abbas — Senior AI & Full-Stack Engineer";

/** Sets the browser tab title for a page; the home page keeps the full default title. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Agha Ali Abbas` : BASE;
  }, [title]);
}
