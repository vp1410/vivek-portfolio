import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
};

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500",
  secondary:
    "border border-white/10 text-white hover:border-white/25 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  download = false,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}