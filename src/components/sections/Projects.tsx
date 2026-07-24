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
          eyebrow="Featured Work"
          title="Production systems built for complex business problems."
          description="Selected work spanning AI, backend engineering, data platforms, cloud architecture and enterprise integrations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <div>
                <p className="text-sm font-medium text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {project.description}
              </p>

              {project.metrics && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-slate-200"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 border-l-2 border-blue-500/50 pl-4">
                <p className="text-sm leading-6 text-slate-300">
                  {project.impact}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;