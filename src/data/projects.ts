export type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    impact: string;
    metrics?: string[];
    tags: string[];
  };
  
  export const projects: Project[] = [
    {
      id: "ai-live-avatar",
      title: "AI Live Avatar Agent",
      category: "AI Architecture",
      description:
        "Designed the end-to-end architecture for a live conversational avatar that provides continuous support on client websites using Amazon Bedrock, retrieval-augmented generation, MCP and enterprise knowledge bases.",
      impact:
        "Created a scalable foundation for 24/7 AI-powered customer engagement and knowledge delivery.",
      metrics: ["24/7 support", "End-to-end architecture"],
      tags: ["Amazon Bedrock", "RAG", "MCP", "Knowledge Bases", "AWS"],
    },
    {
      id: "enterprise-reporting",
      title: "Enterprise Reporting Platform",
      category: "Backend & Data Platform",
      description:
        "Designed database architectures and production reporting systems using Java, Spring Boot, Python and MySQL to support campaign analytics, billable reporting and operational dashboards.",
      impact:
        "Supported advertising and reporting infrastructure associated with approximately $2M–$2.5M in quarterly revenue.",
      metrics: ["$2M–$2.5M quarterly", "2–3 sec dashboards"],
      tags: ["Java", "Spring Boot", "Python", "MySQL", "React"],
    },
    {
      id: "airflow-platform",
      title: "Airflow ETL Platform",
      category: "Data Engineering",
      description:
        "Designed and owned more than 20 production Apache Airflow DAGs covering client onboarding, data ingestion, validation, scheduling, retries, monitoring and ETL lifecycle management.",
      impact:
        "Expanded production data operations across Education and Modernize Home Services while improving reliability and visibility.",
      metrics: ["20+ DAGs", "20+ client integrations"],
      tags: ["Apache Airflow", "Python", "ETL", "Data Validation", "MySQL"],
    },
    {
      id: "advertising-integrations",
      title: "Advertising Platform Integrations",
      category: "API Integrations",
      description:
        "Integrated Google Ads, Meta, TikTok, LinkedIn, Basis and Bing using Python-based ingestion services that normalized cross-platform campaign data into a unified reporting model.",
      impact:
        "Reduced manual reporting work and created a consistent analytics foundation across major advertising platforms.",
      metrics: ["6+ platforms", "Unified reporting model"],
      tags: ["Python", "REST APIs", "Google Ads", "Meta", "TikTok", "Basis"],
    },
    {
      id: "forecasting-platform",
      title: "Forecasting Platform",
      category: "Full-Stack Product",
      description:
        "Built a production forecasting application using Java, Spring Boot and MySQL to support budget planning, KPI modeling, line-item management and report exports.",
      impact:
        "Improved forecasting workflows by centralizing calculations, reporting and scenario planning in one maintainable application.",
      metrics: ["Production application", "Automated exports"],
      tags: ["Java", "Spring Boot", "MySQL", "React", "Analytics"],
    },
    {
      id: "billable-reporting",
      title: "Billable Reporting Engine",
      category: "Revenue Systems",
      description:
        "Designed a reporting system for billable activity with optimized database structures, aggregation logic and APIs for accurate business reporting.",
      impact:
        "Improved reporting accuracy, operational visibility and access to revenue-related metrics.",
      metrics: ["Optimized queries", "Reliable billing data"],
      tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Data Modeling"],
    },
  ];