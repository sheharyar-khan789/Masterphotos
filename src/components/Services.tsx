"use client";

import { useState } from "react";
import Image from "next/image";
import { serviceCategories } from "@/lib/site";
import { photos } from "@/lib/media";

const servicePhoto = photos.find((p) => p.id === "photo-05")!;

export default function Services() {
  const [openId, setOpenId] = useState<string>(serviceCategories[0].id);

  return (
    <section id="services" className="relative bg-background-elevated py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-14 max-w-xl">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Services Overview</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="tracked mt-3 text-[11px] uppercase text-muted">
            Photo &middot; Video &middot; Cinematography &middot; Printing &amp; Scanning
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={servicePhoto.src}
              alt={servicePhoto.title}
              width={servicePhoto.width}
              height={servicePhoto.height}
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="tracked text-[10px] uppercase text-gold-soft">01 &middot; 03</p>
              <p className="font-display mt-1 text-lg font-bold uppercase">
                Photography &amp; Cinematography
              </p>
            </div>
          </div>

          <div className="max-h-[34rem] overflow-y-auto divide-y divide-line pr-1 lg:max-h-[38rem]">
            {serviceCategories.map((cat) => {
              const open = openId === cat.id;
              return (
                <div key={cat.id} className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? "" : cat.id)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-5 py-4 text-left"
                  >
                    <span className="tracked font-accent text-2xl italic text-gold-soft">{cat.number}</span>
                    <span className="flex-1">
                      <span className="font-display block text-lg font-bold uppercase tracked-tight">
                        {cat.title}
                      </span>
                      <span className="tracked mt-0.5 block text-[10px] uppercase text-muted">
                        {cat.items.length} services
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-gold-soft transition-transform ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  {open && (
                    <ul className="space-y-3 pb-5 pl-11">
                      {cat.items.map((item) => (
                        <li key={item.title}>
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          {item.description && (
                            <p className="mt-0.5 max-w-md text-sm leading-relaxed text-muted">
                              {item.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-sm border border-line p-6 md:flex md:items-center md:justify-between">
          <div>
            <p className="tracked text-[10px] uppercase text-muted">Studio Lab Note</p>
            <p className="mt-1 max-w-lg text-sm text-muted">
              Photography, videography and cinematography services are demonstrated with real studio
              work throughout this site — see the video showcase below for a sample film.
            </p>
          </div>
          <a
            href="#video"
            className="tracked mt-4 inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase text-gold-soft md:mt-0"
          >
            Watch the Film
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
