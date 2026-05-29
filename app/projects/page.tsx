import type { Metadata } from "next";
import { projectsPage, site, social } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";

export const metadata: Metadata = {
  title: `Projects | ${site.name}`,
  description: projectsPage.intro,
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-max-width px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      {/* Hero */}
      <section className="mb-16">
        <Reveal>
          <h1 className="relative mb-4 inline-block font-headline-xl-mobile text-headline-xl-mobile text-on-surface md:font-headline-xl md:text-headline-xl">
            {projectsPage.title}
            <span className="absolute -right-8 top-0 hidden text-primary opacity-20 md:block">
              <Icon name="terminal" className="text-[40px]" />
            </span>
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {projectsPage.intro}
          </p>
        </Reveal>
      </section>

      <ProjectsExplorer />

      {/* CTA */}
      {social.github && (
        <Reveal>
          <section className="relative z-10 mt-24 rounded-2xl border border-outline-variant/30 bg-surface-container/60 p-12 text-center backdrop-blur-sm">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-surface">
              {projectsPage.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              {projectsPage.cta.body}
            </p>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-inverse-surface px-8 py-3 font-body-md text-body-md text-inverse-on-surface transition-all hover:opacity-90"
            >
              {projectsPage.cta.button}
              <Icon
                name="arrow_forward"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </section>
        </Reveal>
      )}
    </main>
  );
}
