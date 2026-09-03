import { whyPrinciples } from "@/lib/site";

export default function WhyChoose() {
  return (
    <section className="relative bg-background-elevated py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-14 max-w-xl">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Core Principles</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            Why Master Photos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Our creative philosophy guides every assignment, from formal portraits to full-scale
            multi-day celebrations.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2">
          {whyPrinciples.map((principle, i) => (
            <div key={principle.title} className="bg-background-elevated p-8">
              <p className="tracked text-[10px] uppercase text-gold-soft">
                Principle {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-lg font-bold uppercase tracked-tight">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
