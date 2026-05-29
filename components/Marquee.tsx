import { marqueeTech } from "@/lib/data";

export function Marquee() {
  // Track is rendered twice so the -50% translate loops seamlessly.
  const track = (
    <div className="flex shrink-0 items-center gap-16 px-8">
      {marqueeTech.map((t, i) => (
        <span
          key={i}
          className="font-headline-md text-headline-md text-on-surface-variant opacity-40"
        >
          {t}
        </span>
      ))}
    </div>
  );

  return (
    <section className="mb-32 overflow-hidden border-y border-outline-variant/30 bg-surface-container-low py-12">
      <div className="mx-auto mb-8 max-w-max-width px-margin-mobile md:px-margin-desktop">
        <h2 className="text-center font-label-mono text-label-mono uppercase text-on-secondary-fixed-variant">
          Powering World-Class Applications
        </h2>
      </div>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {track}
        {track}
      </div>
    </section>
  );
}
