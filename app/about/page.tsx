import type { Metadata } from "next";
import {
  about,
  interests,
  journey,
  site,
  skills,
  softSkills,
} from "@/lib/data";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | DevPortfolio",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto max-w-max-width px-margin-mobile pb-32 pt-32 md:px-margin-desktop">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        {/* Left: portrait + status (sticky on desktop) */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="sticky top-32">
            <Reveal>
              <div className="group relative">
                <div className="absolute -inset-4 rounded-xl bg-primary-container/10 blur-2xl transition-all duration-500 group-hover:bg-primary-container/20" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container soft-shadow">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-surface-container-high to-primary-container/10">
                    <Icon name="person" className="text-[120px] text-primary/30" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon name="terminal" className="text-primary" filled />
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      CURRENT_STATUS
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-secondary">
                    {about.currentStatus}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right: bio + journey + skills */}
        <div className="md:col-span-7 lg:col-span-8">
          <Reveal>
            <section>
              <h1 className="mb-8 font-headline-xl-mobile text-headline-xl-mobile text-on-surface md:font-headline-xl md:text-headline-xl">
                {about.headlineLead}
                <span className="text-primary">{about.headlineAccent}</span>.
              </h1>
              <div className="max-w-2xl space-y-6">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {about.intro}
                </p>
                <p className="font-body-md text-body-md text-secondary">
                  {about.body}
                </p>
              </div>
            </section>
          </Reveal>

          {/* Journey timeline */}
          <section className="mt-24">
            <Reveal>
              <h2 className="mb-12 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
                <span className="h-[2px] w-8 bg-primary" /> My Journey
              </h2>
            </Reveal>
            <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/30">
              {journey.map((job, i) => (
                <Reveal key={job.role} delay={i * 0.1}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-surface">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="mb-2 block font-label-mono text-label-mono text-primary">
                      {job.period}
                    </span>
                    <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">
                      {job.role}
                    </h3>
                    <p className="font-body-md text-body-md text-secondary">
                      {job.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Technical skills bento */}
          <section className="mt-24">
            <Reveal>
              <h2 className="mb-12 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
                <span className="h-[2px] w-8 bg-primary" /> Technical Skills
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((group, gi) => (
                <Reveal key={group.category} delay={gi * 0.08}>
                  <div className="h-full rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 transition-colors hover:border-primary/30">
                    <div className="mb-4 flex items-center gap-3 text-primary">
                      <Icon name={group.icon} />
                      <span className="font-label-mono text-label-mono uppercase tracking-wider">
                        {group.category}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item, ii) => (
                        <li
                          key={item}
                          className="flex items-center justify-between font-body-md text-body-md text-secondary"
                        >
                          <span>{item}</span>
                          <span className="font-label-mono text-[10px] text-primary/40">
                            {String(gi * 4 + ii + 1).padStart(2, "0")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Soft skills + interests */}
          <section className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
                <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
                  Soft Skills
                </h2>
                <ul className="space-y-4">
                  {softSkills.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <Icon name="check_circle" className="text-sm text-primary" filled />
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-xl border border-outline-variant/20 bg-surface-container-high p-8">
                <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  {interests.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-outline-variant/30 bg-white px-4 py-2 font-label-mono text-label-mono text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </main>
  );
}
