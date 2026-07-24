export type Experience = {
    role: string;
    company: string;
    location: string;
    period: string;
    summary: string;
    achievements: string[];
    technologies: string[];
  };
  
  export const experience: Experience[] = [
    {
      role: "Senior Software Developer",
      company: "QuinStreet, Inc.",
      location: "Rochester, NY",
      period: "June 2021 – 2026",
      summary:
        "Owned and delivered backend, data, reporting, AI and integration solutions across QuinStreet's Education and Modernize Home Services business verticals.",
      achievements: [
        "Designed advertising platform integrations and reporting infrastructure supporting approximately $2M–$2.5M in quarterly business revenue.",
        "Integrated Google Ads, Meta, TikTok, LinkedIn, Basis and Bing using Python services that automated collection and normalization of campaign data.",
        "Designed and owned more than 20 production Apache Airflow DAGs for client onboarding, ingestion, validation, scheduling, monitoring and ETL lifecycle management.",
        "Integrated more than 20 enterprise clients across Education and Modernize Home Services while managing production CRUD workflows and data-pipeline operations.",
        "Designed complete database architectures and built production forecasting and billable reporting applications using Java, Spring Boot and MySQL.",
        "Improved reporting performance through query optimization, indexing and aggregation redesign, helping dashboards load in approximately 2–3 seconds.",
        "Reduced large ETL and processing workflows to under 20 minutes through database and application-level optimization.",
        "Designed the architecture for an AI live-avatar agent using Amazon Bedrock, RAG, MCP and enterprise knowledge bases.",
        "Participated in QuinStreet's SideQuest innovation initiative as part of the research team, exploring data- and AI-driven product ideas with potential to create new revenue streams.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Python",
        "React",
        "MySQL",
        "Apache Airflow",
        "AWS",
        "Amazon Bedrock",
        "RAG",
        "MCP",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Rochester Regional Health",
      location: "Rochester, NY",
      period: "February 2020 – December 2020",
      summary:
        "Built healthcare and campus-safety applications spanning user experience, web development, mobile workflows and serverless AWS architecture.",
      achievements: [
        "Created the initial user experience for the Cognisight team, helping transform complex medical data into meaningful, actionable information and improving user experience by approximately 70%.",
        "Developed the Emerging Technology Marketing website, allowing users to submit healthcare technology ideas and providing an administrative scoring and review experience for senior leadership.",
        "Developed a Contact Tracer mobile and web application for Rochester Institute of Technology with QR-code check-in, check-out and toast-notification functionality.",
        "Designed serverless APIs using DynamoDB, AWS Lambda, IAM and API Gateway, improving performance and scalability by approximately 80%.",
        "Managed Git repositories and introduced branching and merge practices tailored to the development team's workflow.",
      ],
      technologies: [
        "AWS Lambda",
        "API Gateway",
        "IAM",
        "DynamoDB",
        "JavaScript",
        "Mobile Development",
        "Git",
      ],
    },
    {
      role: "Lead Web Developer",
      company: "Rochester Institute of Technology",
      location: "Rochester, NY",
      period: "December 2020 – May 2021",
      summary:
        "Led development of a secure web platform supporting therapy-related content and role-based access.",
      achievements: [
        "Designed and developed a secure therapy platform using WordPress, PHP and MySQL.",
        "Implemented role-based content access and administrative workflows for controlled resource management.",
        "Collaborated with stakeholders to translate functional requirements into a maintainable web application.",
      ],
      technologies: ["PHP", "WordPress", "MySQL", "JavaScript", "HTML", "CSS"],
    },
    {
      role: "Junior PHP Developer",
      company: "Network18 Media Pvt. Ltd.",
      location: "Mumbai, India",
      period: "August 2017 – February 2018",
      summary:
        "Developed and modernized education-focused web platforms and backend workflows.",
      achievements: [
        "Modernized legacy education platforms using a customized framework, improving operational efficiency by approximately 60%.",
        "Developed and maintained backend features, database workflows and marketing automation templates.",
        "Worked across PHP, MySQL, JavaScript, HTML and CSS to support production web applications.",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    },
  ];