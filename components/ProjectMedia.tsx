import Image from "next/image";

// Project thumbnail: real image when provided, otherwise a tasteful
// gradient placeholder showing the project title.
export function ProjectMedia({
  image,
  title,
}: {
  image?: string;
  title: string;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-surface-container-highest to-primary-container/10 transition-transform duration-700 group-hover:scale-110">
      <span className="px-4 text-center font-label-mono text-label-mono uppercase tracking-widest text-primary/50">
        {title}
      </span>
    </div>
  );
}
