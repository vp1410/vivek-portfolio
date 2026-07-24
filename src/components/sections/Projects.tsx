import { motion } from "framer-motion";
import { Badge } from "../common/Badge";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects">
      <Container className="py-24">
        <SectionTitle
          eyebrow="Featured work"
          title="Systems designed for real business problems."
          description="Selected work across AI, reporting, data engineering and advertising technology."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 font-semibold text-blue-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <p className="mt-5 border-l-2 border-blue-500/50 pl-4 text-sm leading-6 text-slate-300">
                {project.impact}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}