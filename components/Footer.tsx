import { site, social } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-outline-variant/30 bg-surface-container-low py-12">
      <div className="mx-auto flex max-w-max-width flex-col justify-between gap-8 px-margin-mobile md:flex-row md:px-margin-desktop">
        <div className="max-w-xs space-y-4">
          <span className="font-headline-md text-headline-md font-extrabold text-on-surface">
            {site.name}
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} {site.name}. Built with precision.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-mono text-label-mono uppercase text-primary">
            Connect
          </span>
          <div className="flex gap-8">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
