import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { ButtonLink } from "../common/ButtonLink";
import { Container } from "../common/Container";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pb-20 pt-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
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
              <span className="text-blue-400">
                AI-powered systems.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Full-stack engineer with 5+ years of experience
              designing backend systems, cloud applications, ETL
              pipelines, data platforms and production AI solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#projects">
                View my work
                <FiArrowRight />
              </ButtonLink>

              <ButtonLink
                href="/resume.pdf"
                variant="secondary"
                download
              >
                <FiDownload />
                Download resume
              </ButtonLink>
            </div>

            <div className="mt-9 flex items-center gap-5 text-xl text-slate-400">
              <a
                href="https://github.com/vp1410"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="transition hover:text-white"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="transition hover:text-white"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email Vivek Panchal"
                className="transition hover:text-white"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
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
      </Container>
    </section>
  );
}