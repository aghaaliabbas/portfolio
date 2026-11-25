import type { InfoCard } from "@/types";

export const experienceHero = {
  tag: "Experience",
  title: "Nine years of shipping, company by company.",
  body: "Senior AI and full-stack engineer with 9+ years across production web, mobile and AI-powered applications for global enterprises and startups. Today I build agentic AI systems and take them all the way to production.",
};

export const factCards: (InfoCard & { tag: string; tone: "accent" | "brass" })[] = [
  {
    tag: "How I work",
    tone: "brass",
    title: "Embedded, then in production",
    body: "Scope the problem with your team, ship to production, then monitor and iterate — evals, guardrails and cost controls included.",
  },
];
