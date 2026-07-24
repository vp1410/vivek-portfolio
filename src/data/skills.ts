import type { IconType } from "react-icons";
import {
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiZap,
} from "react-icons/fi";

export type SkillCategory = {
  title: string;
  description: string;
  icon: IconType;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    description:
      "Production APIs, business logic and maintainable backend platforms.",
    icon: FiServer,
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Frontend Engineering",
    description:
      "Responsive interfaces and data-driven application experiences.",
    icon: FiCode,
    skills: [
      "React",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native architecture, serverless applications and deployment.",
    icon: FiCloud,
    skills: [
      "AWS",
      "Lambda",
      "API Gateway",
      "IAM",
      "Docker",
      "Linux",
      "GitHub Actions",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Reliable data pipelines, orchestration and reporting infrastructure.",
    icon: FiLayers,
    skills: [
      "Apache Airflow",
      "ETL",
      "Data Pipelines",
      "Data Validation",
      "Data Modeling",
      "Reporting Systems",
    ],
  },
  {
    title: "AI Systems",
    description:
      "Enterprise conversational AI and knowledge-grounded applications.",
    icon: FiZap,
    skills: [
      "Amazon Bedrock",
      "RAG",
      "MCP",
      "Knowledge Bases",
      "Prompt Engineering",
      "AI Architecture",
    ],
  },
  {
    title: "Databases",
    description:
      "Database architecture, optimization and production data management.",
    icon: FiDatabase,
    skills: [
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Schema Design",
      "Query Optimization",
      "Indexing",
    ],
  },
];