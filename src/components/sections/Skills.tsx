import { motion } from "framer-motion";
import { Badge } from "../common/Badge";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { skillCategories } from "../../data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <Container className="py-24">
        <SectionTitle
          eyebrow="Technical expertise"
          title="A full-stack toolkit grounded in backend, cloud and data engineering."
          description="Technologies and engineering practices I use to design, build and operate production software."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-xl text-blue-300">
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}