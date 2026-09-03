import { site, whatsappUrl } from "@/lib/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-12 max-w-xl">
          <p className="tracked mb-3 text-xs font-semibold uppercase text-gold-soft">Start a Conversation</p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracked-tight sm:text-4xl">
            Let&apos;s Create Something Memorable.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            For photography, videography, cinematography, printing or scanning services, get in
            touch with {site.name}.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div className="rounded-sm border border-line bg-background-elevated p-6">
              <p className="tracked mb-4 text-[10px] uppercase text-muted">Studio Contact Details</p>

              <a href={site.phoneHref} className="flex items-center justify-between border-b border-line py-4">
                <span>
                  <span className="tracked block text-[10px] uppercase text-muted">Direct Phone</span>
                  <span className="mt-0.5 block text-sm font-medium">{site.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={whatsappUrl("Hi Master Photos, I'd like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-line py-4"
              >
                <span>
                  <span className="tracked block text-[10px] uppercase text-whatsapp">WhatsApp Fast Booking</span>
                  <span className="mt-0.5 block text-sm font-medium">{site.phoneDisplay}</span>
                </span>
                <span className="tracked text-xs font-semibold uppercase text-whatsapp">Chat</span>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-center justify-between border-b border-line py-4">
                <span>
                  <span className="tracked block text-[10px] uppercase text-muted">Email Inquiries</span>
                  <span className="mt-0.5 block text-sm font-medium">{site.email}</span>
                </span>
              </a>

              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-line py-4"
              >
                <span>
                  <span className="tracked block text-[10px] uppercase text-muted">Instagram</span>
                  <span className="mt-0.5 block text-sm font-medium">{site.instagramHandle}</span>
                </span>
              </a>

              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-line py-4"
              >
                <span>
                  <span className="tracked block text-[10px] uppercase text-muted">Facebook</span>
                  <span className="mt-0.5 block text-sm font-medium">Master Photos</span>
                </span>
              </a>

              <div className="py-4">
                <span className="tracked block text-[10px] uppercase text-muted">Studio Location</span>
                <span className="mt-0.5 block text-sm font-medium">{site.address}</span>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracked mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase text-gold-soft"
                >
                  View on Google Maps
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <a
                href={whatsappUrl("Hi Master Photos, I'd like to enquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="tracked mt-2 flex w-full items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-xs font-semibold uppercase text-white"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
