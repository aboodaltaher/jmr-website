import Image from "next/image";

/** A real AGEC job photo with a caption, served through next/image. */
export function JobPhoto({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={`max-w-md ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 448px, 100vw"
        className="h-auto w-full rounded-xl border border-border"
      />
      {caption && <figcaption className="mt-2 text-sm text-text-muted">{caption}</figcaption>}
    </figure>
  );
}
