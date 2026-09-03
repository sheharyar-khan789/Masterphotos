import Image from "next/image";
import { heroPhoto } from "@/lib/media";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[75svh] w-full items-end overflow-hidden bg-background md:min-h-[92svh]">
      <div className="absolute inset-0">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.title}
          width={heroPhoto.width}
          height={heroPhoto.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-[62%_35%] md:object-[52%_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      <div className="container-edge relative z-10 pb-16 pt-40 md:pb-24">
        <p className="tracked mb-4 text-xs font-semibold uppercase text-gold-soft">
          &bull; {site.name}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-extrabold uppercase leading-[1.05] tracked-tight sm:text-5xl md:text-6xl">
          Capturing Moments.
          <br />
          <span className="font-accent italic normal-case text-gold-soft">Crafting Stories.</span>
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
          Professional photography, videography and cinematography for meaningful moments, events and visual spaces.
        </p>
        <p className="tracked mt-2 text-[11px] uppercase text-muted/70">
          {site.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracked text-[#14110a] transition-colors hover:bg-gold-soft"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full px-7 py-3 text-xs font-semibold uppercase tracked ring-1 ring-line transition-colors hover:bg-background-elevated"
          >
            Contact Us
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="tracked absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase text-muted/70 md:flex"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-muted/50" />
      </a>
    </section>
  );
}
