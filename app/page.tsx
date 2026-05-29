import Link from "next/link";
import Image from "next/image";
import { home, projects, site, social } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { CopyEmailButton } from "@/components/CopyEmailButton";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const hasFeatured = featured.length > 0;
  const showStat = Boolean(site.heroStat.value || site.heroStat.label);
  const portrait = site.portrait && site.portrait !== "#" ? site.portrait : "";

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative mx-auto mb-32 max-w-max-width overflow-hidden rounded-3xl px-margin-mobile py-12 md:px-margin-desktop">
        <div className="relative z-10 grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
          <Reveal className="space-y-8 lg:col-span-7">
            {site.availableForHire && home.badge && (
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-container px-3 py-1 text-on-primary-container">
                <Icon name="verified" className="text-[18px]" filled />
                <span className="font-label-mono text-label-mono uppercase tracking-widest">
                  {home.badge}
                </span>
              </div>
            )}
            <h1 className="max-w-2xl font-headline-xl-mobile text-headline-xl-mobile text-on-background md:font-headline-xl md:text-headline-xl">
              {home.headlineLead}
              <span className="text-primary">{home.headlineAccent}</span>
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              {home.intro}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={home.primaryCta.href}
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-body-md font-bold text-on-primary shadow-lg transition-all hover:translate-y-[-2px]"
              >
                {home.primaryCta.label}
                <Icon name="arrow_forward" />
              </Link>
              <Link
                href={home.secondaryCta.href}
                className="rounded-xl border border-outline px-8 py-4 font-body-md font-bold text-on-surface transition-all hover:bg-surface-container"
              >
                {home.secondaryCta.label}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative flex justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[450px]">
              <div className="absolute inset-0 rotate-3 scale-105 rounded-3xl bg-primary-container/20" />
              <div className="absolute inset-0 -rotate-3 rounded-3xl bg-surface-container-highest" />
              <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl shadow-xl">
                {portrait ? (
                  <Image
                    src={portrait}
                    alt={site.name}
                    fill
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-surface-container-high to-primary-container/20">
                    <Icon name="person" className="text-[120px] text-primary/30" />
                  </div>
                )}
              </div>
              {showStat && (
                <div className="glass-card absolute -bottom-6 -right-6 z-20 hidden rounded-2xl p-6 shadow-xl md:block">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-primary p-3">
                      <Icon name="terminal" className="text-on-primary" />
                    </div>
                    <div>
                      <p className="font-label-mono text-label-mono font-bold text-primary">
                        {site.heroStat.value}
                      </p>
                      <p className="font-body-md font-semibold text-on-surface">
                        {site.heroStat.label}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech marquee */}
      <Marquee />

      {/* Featured work */}
      <section className="mx-auto mb-32 max-w-max-width px-margin-mobile md:px-margin-desktop">
        <Reveal className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <p className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-primary">
              {hasFeatured ? home.featured.eyebrow : home.featured.emptyEyebrow}
            </p>
            <h2 className="font-headline-lg text-headline-lg text-on-background">
              {hasFeatured ? home.featured.title : home.featured.emptyTitle}
            </h2>
          </div>
          {hasFeatured && (
            <Link
              href="/projects"
              className="flex items-center gap-2 font-bold text-primary hover:underline"
            >
              {home.featured.viewAll} <Icon name="open_in_new" />
            </Link>
          )}
        </Reveal>

        {!hasFeatured ? (
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-dashed border-outline-variant/50 bg-surface-container-low/40 px-8 py-20 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container/15 text-primary">
                <Icon name="construction" className="text-[32px]" />
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                {home.featured.emptyHeading}
              </h3>
              <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                {home.featured.emptyBody}
              </p>
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-on-surface px-6 py-3 font-body-md text-body-md font-semibold text-surface transition-all hover:bg-primary"
                >
                  {home.featured.emptyCta}
                  <Icon
                    name="arrow_forward"
                    className="text-[18px] transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              )}
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link
                  href="/projects"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-surface-container-highest to-primary-container/10 transition-transform duration-700 group-hover:scale-105">
                      <Icon name={p.icon || "code"} className="text-[64px] text-primary/30" />
                    </div>
                    <div className="absolute left-4 top-4 flex gap-2">
                      {p.tech.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-surface/90 px-3 py-1 text-[12px] font-bold backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-grow flex-col p-8">
                    <h3 className="mb-3 font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mb-6 flex-grow text-on-surface-variant">
                      {p.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-6">
                      <Icon name={p.icon || "code"} className="text-outline" />
                      <Icon
                        name="arrow_right_alt"
                        className="text-on-surface transition-colors group-hover:text-primary"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto mb-32 max-w-max-width px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-surface-container-highest p-12 md:p-20">
            <div className="absolute right-0 top-0 h-full w-1/3 -skew-x-12 bg-primary/5" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="mb-6 font-headline-lg text-headline-lg text-on-surface">
                {home.cta.title}
              </h2>
              <p className="mb-10 font-body-lg text-body-lg text-on-surface-variant">
                {home.cta.body}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-primary px-10 py-5 text-center font-bold text-on-primary transition-all hover:shadow-lg active:scale-95"
                >
                  {home.cta.primary}
                </Link>
                {social.email && <CopyEmailButton label={home.cta.secondary} />}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
