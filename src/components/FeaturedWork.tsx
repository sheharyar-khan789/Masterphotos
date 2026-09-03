import Image from "next/image";
import { featured } from "@/lib/media";

export default function FeaturedWork() {
  const [first, second, third] = featured.supporting;
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Selected Work</p>
            <h2 className="font-display max-w-lg text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
              A Selection of Our Visual Stories
            </h2>
          </div>
          <a
            href="#portfolio"
            className="tracked inline-flex items-center gap-2 text-xs font-semibold uppercase text-gold-soft"
          >
            View Full Portfolio
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:row-span-2 md:aspect-auto md:h-full">
            <Image
              src={featured.large.src}
              alt={featured.large.title}
              width={featured.large.width}
              height={featured.large.height}
              loading="lazy"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="tracked absolute bottom-5 left-5 text-xs font-medium uppercase text-white/90">
              {featured.large.title}
            </p>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <Image
              src={first.src}
              alt={first.title}
              width={first.width}
              height={first.height}
              loading="lazy"
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src={second.src}
                alt={second.title}
                width={second.width}
                height={second.height}
                loading="lazy"
                sizes="25vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src={third.src}
                alt={third.title}
                width={third.width}
                height={third.height}
                loading="lazy"
                sizes="25vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
