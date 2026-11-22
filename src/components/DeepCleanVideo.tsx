"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-play YouTube Short. Shows a lazy-loaded 9:16 thumbnail; only on
 * click does it load the privacy-enhanced (youtube-nocookie) iframe. No
 * autoplay on page load.
 */
export function DeepCleanVideo({
  videoId,
  title,
  alt,
  playLabel = `Play video: ${title}`,
}: {
  /** YouTube video id (no URL). */
  videoId: string;
  /** iframe title. */
  title: string;
  /** Alt text of the thumbnail. */
  alt: string;
  /** aria-label of the play button. Defaults to "Play video: {title}". */
  playLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={playLabel}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
