import Image from "next/image";
import { photos } from "@/lib/media";

const aboutPhoto = photos.find((p) => p.id === "photo-14")!;

export default function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-32">
      <div className="container-edge grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-sm md:order-1">
          <Image
            src={aboutPhoto.src}
            alt={aboutPhoto.title}
            width={aboutPhoto.width}
            height={aboutPhoto.height}
            loading="lazy"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">About</p>
          <h2 className="font-display max-w-md text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            Visual Stories,{" "}
            <span className="font-accent italic normal-case text-gold-soft">Captured With Purpose.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Master Photos is a photography, videography and cinematography studio based in Jhelum,
            also offering professional printing and scanning services. Every wedding, event and
            portrait session is approached with an editorial eye and cinematic intention.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
            From ceremony coverage to considered portrait sessions, the studio combines technical
            command with an artistic sensibility, so every frame holds up long after the day itself.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-6">
            <div>
              <p className="tracked text-[10px] uppercase text-muted">Focus</p>
              <p className="mt-1 text-sm font-medium">Weddings &amp; Events</p>
            </div>
            <div>
              <p className="tracked text-[10px] uppercase text-muted">Also Offering</p>
              <p className="mt-1 text-sm font-medium">Printing &amp; Scanning</p>
            </div>
          </div>

          <a
            href="#services"
            className="tracked mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase text-gold-soft"
          >
            Explore Our Services
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
