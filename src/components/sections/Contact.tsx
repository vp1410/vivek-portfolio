import { FiMail } from "react-icons/fi";
import { Container } from "../common/Container";

export function Contact() {
  return (
    <section id="contact">
      <Container className="py-24">
        <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-blue-500/10 px-7 py-14 text-center sm:px-12">
          <p className="font-medium text-blue-300">
            Let&apos;s connect
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Looking for an engineer who can turn complex ideas
            into production systems?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
            I am currently exploring senior software engineering
            opportunities across full-stack, backend, cloud and
            AI-focused teams.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
          >
            <FiMail />
            Get in touch
          </a>
        </div>
      </Container>
    </section>
  );
}