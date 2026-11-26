export interface NavLinkItem {
  label: string;
  to: string;
  /** Section id to scroll to after navigating */
  scrollTo?: string;
}

export const navLinks: NavLinkItem[] = [
  { label: "Work", to: "/", scrollTo: "work" },
  { label: "Experience", to: "/experience" },
  { label: "Services", to: "/services" },
];
