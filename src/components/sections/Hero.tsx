import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import profilePhoto from "../../assets/images/profile.jpg";
import { ButtonLink } from "../common/ButtonLink";
import { Container } from "../common/Container";

export function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pb-20 pt-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <a
  href="#contact"
  className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 transition hover:border-emerald-300/40 hover:bg-emerald-400/15"
>
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
  </span>

  Open to Senior Software Engineer opportunities
</a>
<p className="mb-5 font-medium text-blue-400">
  Backend · Full Stack · AI · Cloud
</p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Designing scalable backend platforms, AI-powered applications and{" "}
              <span className="text-blue-400">
                enterprise data systems.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Senior Software Engineer with 5+ years of experience building
              cloud-native applications, production AI systems, reporting
              infrastructure and data pipelines supporting multi-million-dollar
              operations across Education and Home Services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#projects">
                View my work
                <FiArrowRight />
              </ButtonLink>

              <ButtonLink
  href={`${import.meta.env.BASE_URL}resume.pdf`}
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
                aria-label="Vivek Panchal on GitHub"
                className="transition hover:text-white"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vivek-panchal-/"
                target="_blank"
                rel="noreferrer"
                aria-label="Vivek Panchal on LinkedIn"
                className="transition hover:text-white"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:vicky.vivek14@gmail.com"
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
            className="relative mx-auto aspect-[4/5] w-full max-w-sm sm:max-w-md"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
              <img
                src={profilePhoto}
                alt="Vivek Panchal"
                className="h-full w-full object-cover object-[center_20%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#070b14]/70 px-5 py-4 backdrop-blur-md">
                <p className="font-medium text-white">Vivek Panchal</p>

                <p className="mt-1 text-sm text-slate-300">
                  Senior Software Engineer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}