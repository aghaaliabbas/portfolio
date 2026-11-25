import type { RateRow, Service } from "@/types";

export const servicesHero = {
  tag: "Services and rates",
  title: "One engineer, end to end. Production standard.",
  body: "Long-term remote contracts preferred, full-time remote considered. I take the build myself, from scoping to production and monitoring.",
};

export const services: Service[] = [
  {
    num: "01",
    title: "AI and agentic systems",
    body: "Agents that plan and act, RAG over your own documents, evaluation harnesses so quality is measurable. OpenAI and Claude APIs, LangChain and LangGraph, pgvector and Pinecone.",
  },
  {
    num: "02",
    title: "Full-stack product build",
    body: "React and Next.js front ends on Node and TypeScript services, PostgreSQL with Prisma, AWS serverless underneath. Tested with Jest, Cypress and Playwright before it goes near a user.",
  },
  {
    num: "03",
    title: "React Native apps",
    body: "iOS and Android from first commit to store release — push notifications, deep linking, real-time sync, and the performance work that keeps sessions crash-free.",
  },
  {
    num: "04",
    title: "Vibe-code audits",
    body: "AI-generated codebases reviewed for the things generation misses: security holes, missing tests, state that leaks, and the architecture decisions that cost you next quarter.",
  },
];

export const rates: RateRow[] = [
  { engagement: "AI / Agentic AI work", rate: "$20–25 / hr", notes: "Agents, RAG, LLM features and evals" },
  { engagement: "Full-stack build", rate: "$15–20 / hr", notes: "React, Next.js, Node, AWS serverless" },
  { engagement: "Monthly retainer", rate: "$1500-2000", notes: "Ongoing capacity, three months or longer" },
  { engagement: "Discovery call", rate: "Free", notes: "Fifteen minutes to scope the problem" },
];

export const ratesNote = "Minimum contract one month; three months or longer preferred. Invoiced via Upwork, Deel, Payoneer or wire.";

export const steps: Service[] = [
  { num: "01", title: "Fifteen-minute call", body: "You describe the problem. I say whether I'm the right person for it, plainly." },
  { num: "02", title: "Scope and estimate", body: "A written scope with milestones, risks and a rate — usually within two days." },
  { num: "03", title: "First week ships", body: "Working software in the first week, then a weekly cadence you can plan around." },
];
