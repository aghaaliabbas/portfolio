import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "ai",
    title: "AI & Agentic AI",
    featured: true,
    skills: [
      "Anthropic Claude API",
      "OpenAI API",
      "LangChain & LangGraph",
      "RAG systems",
      "Multi-agent orchestration",
      "Vector databases (pgvector, Pinecone, Chroma)",
      "Structured output & function calling",
      "LLM evals & quality control",
      "Prompt engineering",
      "Production AI: monitoring, guardrails, cost & latency",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Next.js (App Router)", "TypeScript", "Redux", "Micro-frontends", "HTML5 / CSS3", "Performance optimization"],
  },
  {
    id: "mobile",
    title: "Mobile",
    skills: ["React Native", "Ionic", "App Store & Play Store releases", "Push notifications", "Deep linking"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "GraphQL & REST", "AWS Lambda", "Microservices", "WebSockets", "JWT / OAuth"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, RDS, S3, CloudFront, EC2, Amplify)", "Firebase", "Docker", "GitHub Actions", "AWS CodePipeline", "Datadog", "Amplitude"],
  },
  {
    id: "data",
    title: "Databases",
    skills: ["PostgreSQL + Prisma", "Supabase", "Firestore", "MongoDB", "MySQL", "Convex"],
  },
  {
    id: "testing",
    title: "Testing",
    skills: ["Jest", "Cypress", "Playwright", "Mocha", "Enzyme", "TDD"],
  },
];
