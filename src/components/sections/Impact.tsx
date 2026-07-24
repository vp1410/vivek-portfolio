import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionTitle } from "../common/SectionTitle";
import { impactMetrics } from "../../data/impact";

export function Impact() {
  return (
    <section
      id="impact"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <Container className="py-24">
        <SectionTitle
          eyebrow="Impact at a glance"
          title="Engineering outcomes connected to measurable business value."
          description="A snapshot of the scale, performance and business impact of the systems I have helped design and deliver."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#0b101b] p-7"
            >
              <p className="text-3xl font-semibold tracking-tight text-white">
                {metric.value}
              </p>

              <h3 className="mt-3 font-medium text-blue-300">{metric.label}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {metric.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}