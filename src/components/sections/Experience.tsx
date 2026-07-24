import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { Badge } from "../common/Badge";
import { experience } from "../../data/experience";

export function Experience() {
  return (
    <section id="experience">
      <Container className="py-24">
        <SectionTitle
          eyebrow="Experience"
          title="Building reliable systems across cloud, data and product engineering."
          description="A selection of responsibilities and measurable outcomes from my professional journey."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-white/10 md:block" />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-4 border-[#070b14] bg-blue-500 md:block" />

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.role}
                      </h3>

                      <p className="mt-1 text-blue-300">
                        {job.company}
                      </p>
                    </div>

                    <div className="text-sm text-slate-400 sm:text-right">
                      <p>{job.period}</p>
                      <p className="mt-1">{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-3 text-sm leading-7 text-slate-400 sm:text-base">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                        />

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {job.technologies.map((technology) => (
                      <Badge key={technology}>
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}