"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import { Icon } from "./Icon";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-surface/80 backdrop-blur-md transition-shadow ${
        scrolled ? "border-outline-variant/30 soft-shadow" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-on-surface"
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                isActive(l.href)
                  ? "font-body-md text-body-md border-b-2 border-primary pb-1 text-primary"
                  : "font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
              }
            >
              {l.label}
            </Link>
          ))}
          {site.resumeUrl ? (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary px-6 py-2 font-body-md font-semibold text-on-primary transition-all hover:opacity-80 active:scale-95"
            >
              Resume
            </a>
          ) : (
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-2 font-body-md font-semibold text-on-primary transition-all hover:opacity-80 active:scale-95"
            >
              Resume
            </Link>
          )}
        </div>

        <button
          className="text-on-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-max-width flex-col px-margin-mobile py-2">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-3 font-body-md text-body-md ${
                  isActive(l.href) ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={site.resumeUrl || "/contact"}
              className="mt-2 mb-3 rounded-lg bg-primary px-6 py-3 text-center font-body-md font-semibold text-on-primary"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
