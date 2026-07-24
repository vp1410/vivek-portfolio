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
          eyebrow="Technical skills"
          title="Technologies I use to build production software."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}