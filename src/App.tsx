import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import "./App.css";

const highlights = [
  { value: "5+", label: "Years of experience" },
  { value: "20+", label: "Client integrations" },
  { value: "6+", label: "Advertising platforms" },
  { value: "24/7", label: "AI-powered support" },
];

const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "React",
  "TypeScript",
  "MySQL",
  "AWS",
  "Apache Airflow",
  "Amazon Bedrock",
  "RAG",
  "REST APIs",
  "Docker",
];

const projects = [
  {
    title: "AI Live Avatar Agent",
    description:
      "Designed the end-to-end architecture for an AI conversational avatar using Amazon Bedrock, RAG, MCP, and knowledge bases.",
    tags: ["Amazon Bedrock", "RAG", "MCP", "AWS"],
  },
  {
    title: "Reporting & Forecasting Platforms",
    description:
      "Built production reporting and forecasting applications using Java, Spring Boot, MySQL, and scalable database architectures.",
    tags: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    title: "Advertising Data Integrations",
    description:
      "Automated campaign data collection and reporting across Google Ads, Meta, TikTok, Basis, and LinkedIn.",
    tags: ["Python", "REST APIs", "ETL", "Advertising"],
  },
  {
    title: "Airflow Data Pipelines",
    description:
      "Designed Apache Airflow DAGs to automate ETL workflows and streamline reliable data pipeline orchestration.",
    tags: ["Airflow", "Python", "ETL", "Data Engineering"],
  },
];

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Vivek Panchal<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-500/10"
          >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32"
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 font-medium text-blue-400">
                Senior Software Engineer
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                I build scalable software, data platforms and{" "}
                <span className="text-blue-400">AI-powered systems.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Software engineer with 5+ years of experience designing backend
                systems, full-stack applications, cloud architectures, ETL
                pipelines and advertising technology integrations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                >
                  View my work
                  <FiArrowRight />
                </a>

                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium transition hover:border-white/25 hover:bg-white/5"
                >
                  <FiDownload />
                  Download resume
                </a>
              </div>

              <div className="mt-9 flex items-center gap-5 text-xl text-slate-400">
                <a
                  href="https://github.com/"
                  aria-label="GitHub"
                  className="transition hover:text-white"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  className="transition hover:text-white"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                  className="transition hover:text-white"
                >
                  <FiMail />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto aspect-square w-full max-w-md"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl" />

              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-4xl font-semibold text-blue-300">
                    VP
                  </div>
                  <p className="mt-6 text-sm text-slate-400">
                    Professional photo coming next
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              About me
            </p>

            <div className="mt-6 grid gap-12 lg:grid-cols-2">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Turning complex business requirements into reliable,
                maintainable software.
              </h2>

              <div className="space-y-5 text-lg leading-8 text-slate-400">
                <p>
                  My experience spans backend engineering, full-stack product
                  development, database architecture, cloud services, data
                  pipelines and AI applications.
                </p>
                <p>
                  I focus on understanding the business problem first, then
                  designing practical systems that perform well, remain easy to
                  maintain and can scale as requirements grow.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-3xl font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
            Featured work
          </p>

          <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Systems designed for real business problems.
            </h2>
            <p className="max-w-md text-slate-400">
              Selected work across AI, reporting, data engineering and
              advertising technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 font-semibold text-blue-300">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              Technical skills
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Technologies I use to build production software.
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-blue-500/10 px-7 py-14 text-center sm:px-12">
            <p className="font-medium text-blue-300">Let&apos;s connect</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Looking for a software engineer who can turn complex ideas into
              production systems?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
              I am currently exploring senior software engineering
              opportunities across full-stack, backend, cloud and AI-focused
              teams.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              <FiMail />
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vivek Panchal</p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;