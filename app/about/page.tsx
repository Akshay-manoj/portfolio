import type { Metadata } from "next";
import Image from "next/image";
import {
  about,
  expertise,
  interests,
  journey,
  site,
  skills,
  softSkills,
} from "@/lib/content";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
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
                  {about.portrait && about.portrait !== "#" ? (
                    <Image
                      src={about.portrait}
                      alt={site.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 via-surface-container-high to-primary-container/10">
                      <Icon name="person" className="text-[120px] text-primary/30" />
                    </div>
                  )}
                </div>
              </div>
              {about.currentStatus && (
                <div className="mt-8">
                  <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <Icon name="terminal" className="text-primary" filled />
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        {about.currentStatusLabel}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-secondary">
                      {about.currentStatus}
                    </p>
                  </div>
                </div>
              )}
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
                {about.intro && (
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    {about.intro}
                  </p>
                )}
                {about.body && (
                  <p className="font-body-md text-body-md text-secondary">
                    {about.body}
                  </p>
                )}
              </div>
            </section>
          </Reveal>

          {/* Technical expertise */}
          {expertise.length > 0 && (
            <section className="mt-24">
              <Reveal>
                <h2 className="mb-12 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
                  <span className="h-[2px] w-8 bg-primary" /> {about.expertiseTitle}
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {expertise.map((e, i) => (
                  <Reveal key={e.label} delay={i * 0.06}>
                    <div className="group flex h-full items-center gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-all hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-container/15 text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                        <Icon name={e.icon} className="text-[22px]" />
                      </span>
                      <span className="font-body-md text-body-md font-semibold text-on-surface">
                        {e.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {/* Journey timeline */}
          {journey.length > 0 && (
            <section className="mt-24">
              <Reveal>
                <h2 className="mb-12 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
                  <span className="h-[2px] w-8 bg-primary" /> {about.journeyTitle}
                </h2>
              </Reveal>
              <div className="relative space-y-12 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/30">
                {journey.map((job, i) => (
                  <Reveal key={`${job.role}-${i}`} delay={i * 0.1}>
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
          )}

          {/* Technical skills bento */}
          {skills.length > 0 && (
            <section className="mt-24">
              <Reveal>
                <h2 className="mb-12 flex items-center gap-3 font-headline-md text-headline-md text-on-surface">
                  <span className="h-[2px] w-8 bg-primary" /> {about.skillsTitle}
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
          )}

          {/* Soft skills + interests */}
          {(softSkills.length > 0 || interests.length > 0) && (
            <section className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {softSkills.length > 0 && (
                <Reveal>
                  <div className="h-full rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
                    <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
                      {about.softSkillsTitle}
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
              )}
              {interests.length > 0 && (
                <Reveal delay={0.1}>
                  <div className="h-full rounded-xl border border-outline-variant/20 bg-surface-container-high p-8">
                    <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
                      {about.interestsTitle}
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
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
