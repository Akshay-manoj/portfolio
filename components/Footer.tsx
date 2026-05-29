import { footer, site, social } from "@/lib/content";

export function Footer() {
  const links = [
    { href: social.github, label: "GitHub" },
    { href: social.linkedin, label: "LinkedIn" },
    { href: social.twitter, label: "Twitter" },
  ].filter((l) => l.href);

  return (
    <footer className="relative z-10 border-t border-outline-variant/30">
      <div className="mx-auto flex max-w-max-width flex-col items-center justify-between gap-4 px-margin-mobile py-8 sm:flex-row md:px-margin-desktop">
        <p className="font-label-mono text-[12px] uppercase tracking-widest text-on-surface-variant">
          © {new Date().getFullYear()} {site.name}
          {footer.note ? ` — ${footer.note}` : ""}
        </p>
        {links.length > 0 && (
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
