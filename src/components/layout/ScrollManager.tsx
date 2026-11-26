import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the top on page change, or to a section when a link asks for one via `state.scrollTo`. */
export function ScrollManager() {
  const { pathname, state, key } = useLocation();

  useEffect(() => {
    const target = (state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      // Wait a frame so the destination page has rendered.
      const frame = requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, state, key]);

  return null;
}
