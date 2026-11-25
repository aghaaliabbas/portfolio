export interface SocialLink {
  id: "github" | "linkedin" | "email" | "upwork" | "gitlab";
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  /** Where "Book a 15-min call" points. Swap for a Cal.com/Calendly link when ready. */
  bookingUrl: string;
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  /** e.g. Contract, Freelance, Self-employed */
  type?: string;
  /** ISO year-month, e.g. "2026-01" */
  start: string;
  /** null = present */
  end: string | null;
  location?: string;
  /** One-line context about the company/product */
  blurb?: string;
  highlights: string[];
  metrics?: Metric[];
  tags: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  /** Marks the group to feature first (AI focus) */
  featured?: boolean;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  start: number;
  end: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: "web" | "hybrid-mobile" | "native-mobile";
  tech: string[];
  webUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export interface CaseStudy {
  id: string;
  kicker: string;
  title: string;
  body: string;
  /** One verified outcome line, in the display face */
  result: string;
  tags: string[];
  tone: "terracotta" | "sage";
  icon: "bot" | "heart-pulse" | "smartphone" | "coins";
}

export interface InfoCard {
  title: string;
  body: string;
}

export interface Service {
  num: string;
  title: string;
  body: string;
}

export interface RateRow {
  engagement: string;
  rate: string;
  notes: string;
}
