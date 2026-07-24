import { Container } from "../common/Container";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <Container>
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Vivek Panchal
            <span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/10"
          >
            Let&apos;s talk
          </a>
        </nav>
      </Container>
    </header>
  );
}