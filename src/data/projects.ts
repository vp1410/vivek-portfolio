export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    impact: string;
  };
  
  export const projects: Project[] = [
    {
      id: "ai-live-avatar",
      title: "AI Live Avatar Agent",
      description:
        "Designed the end-to-end architecture for an AI conversational avatar using Amazon Bedrock, RAG, MCP and enterprise knowledge bases.",
      tags: [
        "Amazon Bedrock",
        "RAG",
        "MCP",
        "AWS",
      ],
      impact:
        "Enabled continuous conversational support on client websites.",
    },
    {
      id: "reporting-forecasting",
      title: "Reporting & Forecasting Platforms",
      description:
        "Designed database architectures and built production reporting and forecasting applications using Java, Spring Boot and MySQL.",
      tags: [
        "Java",
        "Spring Boot",
        "MySQL",
        "React",
      ],
      impact:
        "Improved reporting reliability, planning workflows and access to business insights.",
    },
    {
      id: "advertising-integrations",
      title: "Advertising Data Integrations",
      description:
        "Integrated advertising platforms and automated campaign data collection across Google Ads, Meta, TikTok, Basis and LinkedIn.",
      tags: [
        "Python",
        "REST APIs",
        "ETL",
        "AdTech",
      ],
      impact:
        "Reduced manual reporting work and standardized cross-platform campaign data.",
    },
    {
      id: "airflow-pipelines",
      title: "Airflow ETL Pipelines",
      description:
        "Designed and developed Apache Airflow DAGs to automate ETL workflows and orchestrate reliable production data pipelines.",
      tags: [
        "Airflow",
        "Python",
        "ETL",
        "Data Engineering",
      ],
      impact:
        "Improved workflow reliability, scheduling and pipeline visibility.",
    },
  ];