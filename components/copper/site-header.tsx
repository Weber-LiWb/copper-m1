import Link from "next/link";
import { Logo } from "@/components/copper/logo";
import { ModeToggle } from "@/components/copper/mode-toggle";

const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#plus", label: "Copper Plus" },
  { href: "#privacy", label: "Privacy" },
];

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="bg-background/90 sticky top-0 z-50 border-b backdrop-blur"
    >
      {/* Phones: logo and toggle on top, links on a second row. md and up: one row. */}
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
        <Link href="/" aria-label="Copper State Labs home">
          <Logo className="w-32 md:w-44" />
        </Link>
        <nav
          aria-label="Main"
          className="order-last flex w-full gap-6 text-sm font-medium md:order-none md:ml-auto md:w-auto"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
