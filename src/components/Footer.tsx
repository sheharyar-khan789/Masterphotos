import Image from "next/image";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-background-elevated py-16">
      <div className="container-edge grid gap-10 md:grid-cols-3 md:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/media/brand/logo-48.png"
              alt="Master Photos logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <span className="font-display tracked text-sm font-bold uppercase">{site.name}</span>
          </div>
          <p className="tracked mt-4 max-w-xs text-[11px] uppercase text-muted">{site.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Master Photos on Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-line text-muted transition-colors hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Master Photos on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-line text-muted transition-colors hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.3c0-.9.25-1.5 1.55-1.5H16.6V4.14C16.32 4.1 15.36 4 14.24 4c-2.33 0-3.93 1.42-3.93 4.03v2.37H7.7v3h2.6V21h3.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="tracked text-[10px] uppercase text-muted">Navigation</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="tracked text-[10px] uppercase text-muted">Studio Presence</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              {site.address}
              {" — "}
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-soft transition-colors hover:text-foreground"
              >
                Google Maps
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-foreground">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-edge mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[11px] text-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <p>Jhelum, Punjab, Pakistan</p>
      </div>
    </footer>
  );
}
