import Link from "next/link";
import Image from "next/image";
import { copy, images, project } from "@/lib/project-data";
import { navLinks } from "@/lib/pages";

export function Header({
  registerHref = "/#register",
}: {
  registerHref?: string;
  tone?: "overlay" | "solid";
}) {
  return (
    <header className="relative z-50 border-b border-stone bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 bg-paper-elevated px-2 py-1.5">
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              width={160}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
            <span className="sr-only">{project.name}</span>
          </Link>
          <p className="hidden text-[0.68rem] tracking-[0.22em] text-bronze uppercase md:block">
            Oakville · Coming soon
          </p>
          <Link href={registerHref} className="btn-primary min-h-10 px-4 text-xs">
            {project.primaryCta}
          </Link>
        </div>
        <div className="mt-4 hidden h-px bg-gold/70 xl:block" />
        <nav
          aria-label="Primary"
          className="mt-3 hidden items-center justify-center gap-7 xl:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.78rem] font-semibold tracking-[0.16em] text-ink uppercase transition-colors hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="relative mt-3 xl:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between border border-stone bg-paper-elevated px-3 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
            Menu
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute inset-x-0 z-50 mt-2 border border-stone bg-paper-elevated p-3 shadow-xl">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-ink hover:bg-paper-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </details>
      </div>
      <p className="sr-only">{copy.independentDisclosure}</p>
    </header>
  );
}
