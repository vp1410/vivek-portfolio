import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  target?: "_blank" | "_self";
  ariaLabel?: string;
};

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-500",
  secondary:
    "border border-white/10 text-white hover:border-white/25 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download = false,
  target = "_self",
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}