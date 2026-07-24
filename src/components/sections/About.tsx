import { Container } from "../common/Container";
import { highlights } from "../../data/highlights";

export function About() {
  return (
    <section
      id="about"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <Container className="py-24">
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
              My experience spans backend engineering, full-stack
              product development, database architecture, cloud
              services, data pipelines and AI applications.
            </p>

            <p>
              I focus on understanding the business problem first,
              then designing practical systems that perform well,
              remain easy to maintain and scale as requirements grow.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-3xl font-semibold text-white">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}