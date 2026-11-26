import type { CaseStudy, InfoCard, Stat } from "@/types";

export const homeHero = {
  tag: "AI / Agentic engineer · Lahore, Pakistan · Remote",
  title: "I build AI agents that do real production work.",
  body: "Nine years of full-stack engineering — React, Next.js, Node, AWS — now pointed at agentic systems: RAG pipelines, multi-agent workflows and LLM features that ship to production. Sole architect of a multi-agent system for McKinsey & Company, with earlier work for IBM, Vhi, Drivelah and Buybit.",
};

export const homeStats: Stat[] = [
  { value: "9+", label: "Years shipping production software" },
  { value: "5 + 1", label: "Agents and an orchestrator, built solo for McKinsey & Company" },
  { value: "100%", label: "Upwork job success, 21 jobs, 5.0 rating" },
  { value: "1,000+", label: "Hours billed on Upwork as Top Rated" },
];

// Every claim below comes from experience.md. Nothing here is a placeholder.
export const caseStudies: CaseStudy[] = [
  {
    id: "mckinsey",
    kicker: "Agentic AI",
    title: "Multi-agent value creation planner",
    body: "For McKinsey & Company: an orchestrator coordinating five specialized agents that generates value creation plans. Built solo, then extended to company profiles and LLM-generated reports.",
    result: "One developer, five agents plus an orchestrator",
    tags: ["Multi-agent", "LLMs", "Orchestration"],
    tone: "primary",
    icon: "bot",
  },
  {
    id: "vhi",
    kicker: "Healthcare",
    title: "Hospital portal and portal monitoring",
    body: "For Ireland-based health insurer Vhi: the hospital portal in React and Node.js, plus Datadog monitoring that kept internal portals healthy, in a regulated EU environment.",
    result: "Datadog monitoring across Vhi's internal portals",
    tags: ["React", "Node.js", "Datadog"],
    tone: "brass",
    icon: "heart-pulse",
  },
  {
    id: "drivelah",
    kicker: "Mobile marketplace",
    title: "Car-sharing app with BLE hardware",
    body: "For Singapore's Drivelah: React Native and ReactJS apps on a Sharetribe Flex backend, with BLE hardware integration, fleet management and analytics-driven debugging.",
    result: "99% crash-free sessions",
    tags: ["React Native", "Sharetribe Flex", "Amplitude"],
    tone: "primary",
    icon: "smartphone",
  },
  {
    id: "buybit",
    kicker: "Crypto exchange",
    title: "Real-time exchange and token minting portal",
    body: "For Spain-based Buybit: an Angular and React front end for a real-time exchange, plus a portal for minting the company's own coin, on Firebase Functions and Firestore.",
    result: "40% faster data access",
    tags: ["Angular", "React", "Firebase"],
    tone: "brass",
    icon: "coins",
  },
];

export const roleHabits = {
  tag: "Where I've done it",
  title: "Enterprise rigour, startup pace.",
  body: "At IBM, Jest and Cypress testing got apps to 99% stability. At Drivelah, analytics-driven debugging reached 99% crash-free sessions and CI/CD automation made deployments 50% faster. Both habits come with me.",
};

export const engagementCards: InfoCard[] = [
  { title: "$40–75 / hour", body: "Long-term remote contract, or a $3,000–5,000 monthly retainer." },
  { title: "Available now", body: "Immediate start, three months or longer preferred. Remote." },
  { title: "Embedded or end-to-end", body: "Work inside your team, or own a feature from scoping to production — web, mobile and AI integration." },
];
