import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Container } from "../common/Container";

const navigation = [
    { label: "Impact", href: "#impact" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Innovation", href: "#innovation" },
    { label: "Skills", href: "#skills" },
  ];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b14]/85 backdrop-blur-xl">
      <Container>
        <nav
          className="flex min-h-16 items-center justify-between"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight text-white"
          >
            Vivek Panchal
            <span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
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
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/10 sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white md:hidden"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}