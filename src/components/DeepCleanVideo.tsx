"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-play YouTube Short. Shows a lazy-loaded 9:16 thumbnail; only on
 * click does it load the privacy-enhanced (youtube-nocookie) iframe. No
 * autoplay on page load.
 */
export function DeepCleanVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-black">
        {playing ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/iKbH5yohkNw?autoplay=1&rel=0"
            title="AC Deep Cleaning in Dubai: What We Found Inside the Unit"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Play video: a real AC deep clean"
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ytimg.com/vi/iKbH5yohkNw/hqdefault.jpg"
              alt="Preview of an AC deep clean in a Dubai home"
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
