export type Experience = {
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
    technologies: string[];
  };
  
  export const experience: Experience[] = [
    {
      role: "Senior Software Developer",
      company: "QuinStreet, Inc.",
      location: "Rochester, NY",
      period: "June 2021 – Present",
      achievements: [
        "Owned and architected the core data and reporting infrastructure for CloudControlMedia, integrating Google Ads, Bing, Meta, LinkedIn, TikTok and Basis into a unified analytics platform.",
        "Designed scalable ingestion pipelines and normalized cross-platform campaign data supporting more than 20 client integrations.",
        "Reduced sweeper processing runtime to under 20 minutes and reporting jobs to under 60 minutes through query optimization, indexing and asynchronous processing.",
        "Improved dashboard performance to 2–3 second load times by redesigning reporting tables and optimizing aggregation queries.",
        "Migrated legacy shell cron jobs to Apache Airflow Python DAGs with dependency management, retries and improved production observability.",
        "Designed the architecture for an AI live-avatar agent using Amazon Bedrock, RAG, MCP and enterprise knowledge bases.",
        "Built production forecasting and billable reporting systems using Java, Spring Boot and MySQL.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Python",
        "MySQL",
        "Apache Airflow",
        "AWS",
        "Amazon Bedrock",
        "React",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Rochester Regional Health",
      location: "Rochester, NY",
      period: "February 2020 – December 2020",
      achievements: [
        "Architected a serverless backend using AWS Lambda, API Gateway, IAM and DynamoDB, improving scalability and performance.",
        "Designed database schemas and developed a healthcare innovation evaluation platform that transformed medical data into structured insights.",
        "Established Git branching and code-management practices that improved collaboration and deployment stability.",
      ],
      technologies: [
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "JavaScript",
        "Git",
      ],
    },
    {
      role: "Lead Web Developer",
      company: "Rochester Institute of Technology",
      location: "Rochester, NY",
      period: "December 2020 – May 2021",
      achievements: [
        "Led development of a secure therapy platform using WordPress, PHP and MySQL.",
        "Designed role-based content management and backend architecture for controlled access to platform resources.",
      ],
      technologies: ["PHP", "WordPress", "MySQL", "JavaScript"],
    },
    {
      role: "Junior PHP Developer",
      company: "Network18 Media Pvt. Ltd.",
      location: "Mumbai, India",
      period: "August 2017 – February 2018",
      achievements: [
        "Revamped legacy education platforms into a customized framework, improving operational efficiency by approximately 60%.",
        "Developed and maintained backend workflows and marketing automation templates.",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
  ];