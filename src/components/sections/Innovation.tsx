import { motion } from "framer-motion";
import { FiCompass, FiDatabase, FiTrendingUp } from "react-icons/fi";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";

const themes = [
  {
    icon: FiDatabase,
    title: "Data-driven research",
    description:
      "Explored how enterprise data could be transformed into practical product opportunities.",
  },
  {
    icon: FiCompass,
    title: "Product discovery",
    description:
      "Collaborated on early-stage research, idea evaluation and business use-case exploration.",
  },
  {
    icon: FiTrendingUp,
    title: "New revenue opportunities",
    description:
      "Investigated concepts that could expand QuinStreet's products beyond existing business models.",
  },
];

export function Innovation() {
  return (
    <section
      id="innovation"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <Container className="py-24">
        <SectionTitle
          eyebrow="Innovation"
          title="Contributing beyond day-to-day engineering delivery."
          description="Selected for QuinStreet's SideQuest initiative, an internal program focused on researching new data- and technology-driven product opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7 sm:p-10"
        >
          <p className="max-w-4xl text-lg leading-8 text-slate-200">
            As part of the SideQuest research team, I participated in
            brainstorming, researching and evaluating ways QuinStreet could
            leverage modern data, analytics and AI capabilities to create new
            products and additional revenue opportunities.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {themes.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-[#070b14]/40 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-300">
                  <Icon />
                </div>

                <h3 className="mt-5 font-semibold text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}