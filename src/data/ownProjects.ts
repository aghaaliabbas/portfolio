import type { CaseStudy } from "@/types";

// My own products, kept separate from client work. Both repos are private, so there are no code links.
export const ownProjects: CaseStudy[] = [
  {
    id: "job-search",
    kicker: "AI workflow",
    title: "AI-assisted job search pipeline",
    body: "An AI search finds remote jobs, which are then scored against candidate profiles, given tailored CVs and tracked to application. A person reviews every job and applies by hand. I built the portal and the workflow; scoring and CVs run on the open-source career-ops tool.",
    result: "In active use by a business development team for five candidate profiles across the UK, Europe and America",
    tags: ["Next.js", "React", "Supabase", "Prisma", "Tailwind", "Claude Cowork"],
    tone: "primary",
    icon: "file-search",
  },
  {
    id: "lrs",
    kicker: "Slack app",
    title: "LRS: leave management in Slack",
    body: "A Slack bot for leave requests, approvals and yearly balances, with role-based permissions, leave cycles based on each employee's anniversary and separate settings for each workspace.",
    result: "In use by one team today, and I'm looking to expand it",
    tags: ["TypeScript", "Firebase Cloud Functions", "Slack Bolt", "Firestore"],
    tone: "brass",
    icon: "calendar-check",
  },
];
