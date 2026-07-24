import { Container } from "../common/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <Container className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Vivek Panchal
        </p>

        <p>
          Built with React, TypeScript and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}