"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/data";
import { Icon } from "./Icon";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const ctaHref = site.resumeUrl || "/contact";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`flex items-center gap-1 rounded-full border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-outline-variant/40 bg-surface/80 shadow-[0_10px_34px_rgba(15,23,42,0.12)] px-2 py-1.5"
            : "border-outline-variant/25 bg-surface/55 shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-2 py-2"
        }`}
      >
        {/* Availability status */}
        {site.availableForHire && (
          <div className="flex items-center gap-2 pl-3 pr-1 md:pr-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="hidden font-label-mono text-[12px] uppercase tracking-widest text-on-surface-variant sm:inline">
              available
            </span>
          </div>
        )}

        {/* Divider */}
        <span className="mx-1 hidden h-5 w-px bg-outline-variant/40 md:block" />

        {/* Desktop links with sliding active pill */}
        <ul className="hidden items-center md:flex">
          {nav.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`relative block rounded-full px-4 py-2 font-body-md text-body-md transition-colors ${
                    active
                      ? "text-on-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href={ctaHref}
          target={site.resumeUrl ? "_blank" : undefined}
          className="group ml-1 hidden items-center gap-1.5 rounded-full bg-on-surface px-5 py-2 font-body-md text-body-md font-semibold text-surface transition-all hover:bg-primary md:flex"
        >
          {site.resumeUrl ? "Resume" : "Let's talk"}
          <Icon
            name="arrow_forward"
            className="text-[18px] transition-transform group-hover:translate-x-0.5"
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-surface-container md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full mt-3 w-[min(92vw,22rem)] rounded-3xl border border-outline-variant/30 bg-surface/90 p-2 shadow-[0_16px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden"
          >
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 font-body-md text-body-md transition-colors ${
                  isActive(l.href)
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {l.label}
                {isActive(l.href) && <Icon name="arrow_forward" className="text-[18px]" />}
              </Link>
            ))}
            <Link
              href={ctaHref}
              target={site.resumeUrl ? "_blank" : undefined}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl bg-on-surface px-4 py-3 font-body-md font-semibold text-surface"
            >
              {site.resumeUrl ? "Resume" : "Let's talk"}
              <Icon name="arrow_forward" className="text-[18px]" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
