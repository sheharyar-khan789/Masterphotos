"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { primaryVideo, secondaryVideos } from "@/lib/media";

function VideoTile({
  video,
  aspect,
  large,
}: {
  video: (typeof secondaryVideos)[number];
  aspect: string;
  large?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => ref.current?.play());
  };

  return (
    <div className={`group relative w-full overflow-hidden rounded-sm bg-background-elevated ${aspect}`}>
      {!playing ? (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${video.title}`}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={video.poster}
            alt={video.title}
            width={video.posterWidth}
            height={video.posterHeight}
            loading="lazy"
            sizes={large ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 20vw, 45vw"}
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className={`flex items-center justify-center rounded-full bg-white/90 ${large ? "h-16 w-16" : "h-11 w-11"}`}>
              <svg viewBox="0 0 24 24" className={`ml-0.5 fill-[#14110a] ${large ? "h-7 w-7" : "h-4 w-4"}`} aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          <span className="tracked absolute bottom-4 left-4 text-left text-xs font-medium uppercase text-white">
            {video.title}
          </span>
        </button>
      ) : (
        <video
          ref={ref}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section id="video" className="relative bg-background py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-12 max-w-xl">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Video Showcase</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            See the Story in Motion
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            A sample of real cinematography and videography work from Master Photos. Tap to play.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div className="md:col-span-2">
            <VideoTile video={primaryVideo} aspect="aspect-video" large />
          </div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-6">
            {secondaryVideos.map((v) => (
              <VideoTile key={v.id} video={v} aspect="aspect-[9/16] md:aspect-[3/4]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
