export type SkillCategory = {
    title: string;
    skills: string[];
  };
  
  export const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        "Java",
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Spring Boot",
        "Node.js",
        "Flask",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      title: "Cloud & Data",
      skills: [
        "AWS",
        "Apache Airflow",
        "Docker",
        "ETL Pipelines",
        "GitHub Actions",
      ],
    },
    {
      title: "AI",
      skills: [
        "Amazon Bedrock",
        "RAG",
        "MCP",
        "Knowledge Bases",
        "Prompt Engineering",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "Database Architecture",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material UI",
      ],
    },
  ];