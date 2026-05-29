import type { Metadata } from "next";
import { contact, site, social } from "@/lib/data";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Let's Work Together",
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto max-w-max-width px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      {/* Header */}
      <Reveal>
        <header className="mb-20">
          <h1 className="mb-6 font-headline-xl-mobile text-headline-xl-mobile text-on-surface md:font-headline-xl md:text-headline-xl">
            {contact.headline}
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {contact.intro}
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Form */}
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        {/* Info sidebar */}
        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="space-y-8">
            <div className="space-y-10 rounded-xl border border-outline-variant/10 bg-surface-container-high/80 p-8 backdrop-blur-sm md:p-10">
              <div>
                <h3 className="mb-6 font-label-mono text-label-mono font-bold uppercase tracking-widest text-primary">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary-container p-3">
                      <Icon name="mail" className="text-on-primary-container" />
                    </div>
                    <div>
                      <p className="font-label-mono text-label-mono text-on-surface-variant">
                        Email
                      </p>
                      <a
                        href={`mailto:${social.email}`}
                        className="font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
                      >
                        {social.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary-container p-3">
                      <Icon name="location_on" className="text-on-primary-container" />
                    </div>
                    <div>
                      <p className="font-label-mono text-label-mono text-on-surface-variant">
                        Location
                      </p>
                      <p className="font-headline-md text-headline-md text-on-surface">
                        {site.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-label-mono text-label-mono font-bold uppercase tracking-widest text-primary">
                  Social Connect
                </h3>
                <div className="flex gap-4">
                  {[
                    { href: social.github, icon: "code" },
                    { href: `mailto:${social.email}`, icon: "alternate_email" },
                    { href: social.linkedin, icon: "share" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target={s.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex h-12 w-12 animate-float items-center justify-center rounded-full border border-outline-variant/30 bg-surface text-on-surface-variant soft-shadow transition-all hover:bg-primary hover:text-on-primary"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <Icon name={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual asset */}
            <div className="group relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <div className="h-full w-full bg-gradient-to-br from-inverse-surface via-primary/40 to-primary-container transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-white/20 px-3 py-1 font-label-mono text-label-mono text-white/90 backdrop-blur-md">
                  Available for Freelance
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
