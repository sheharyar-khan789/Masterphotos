"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { allMedia, portfolioFilters, type MediaCategory } from "@/lib/media";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | MediaCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? allMedia
        : allMedia.filter((item) => item.categories.includes(filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="relative bg-background-elevated py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Curated Gallery</p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
              Our Portfolio
            </h2>
            <p className="tracked mt-2 text-[11px] uppercase text-muted">
              {allMedia.length} visual works &middot; real studio media
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filters">
          {portfolioFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`tracked rounded-full px-4 py-2 text-[11px] font-semibold uppercase transition-colors ${
                filter === f.id
                  ? "bg-gold text-[#14110a]"
                  : "bg-transparent text-muted ring-1 ring-line hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-sm break-inside-avoid text-left"
              aria-label={`Open ${item.title}`}
            >
              <div className="relative w-full">
                <Image
                  src={item.type === "photo" ? item.src : item.poster}
                  alt={item.title}
                  width={item.type === "photo" ? item.width : item.posterWidth}
                  height={item.type === "photo" ? item.height : item.posterHeight}
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-70 transition-opacity group-hover:opacity-90" />

                {item.type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 ring-1 ring-white/40">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-white" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                )}

                <span className="tracked absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[9px] font-semibold uppercase text-white/90">
                  {item.type === "video" ? "Film" : item.categories.includes("events") ? "Events" : "Weddings"}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="tracked text-xs font-medium uppercase text-white">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-white/60">{item.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="tracked mt-10 text-center text-[10px] uppercase text-muted/70">
          All photography, videography and cinematography shown here was captured by Master Photos.
        </p>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
