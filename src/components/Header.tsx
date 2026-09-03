"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-background/95 backdrop-blur border-b border-line" : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/media/brand/logo-48.png"
            alt="Master Photos logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full md:h-10 md:w-10"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display tracked text-sm font-bold uppercase md:text-base">
              {site.name}
            </span>
            <span className="tracked text-[9px] uppercase text-muted md:text-[10px]">
              Photo &middot; Film &middot; Lab
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tracked text-xs font-medium uppercase text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-whatsapp/15 px-4 py-2 text-xs font-semibold uppercase tracked text-whatsapp ring-1 ring-whatsapp/40 transition-colors hover:bg-whatsapp hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracked text-[#14110a] transition-colors hover:bg-gold-soft"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-line lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-background lg:hidden">
          <nav className="container-edge flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="tracked rounded-lg px-3 py-3 text-sm font-medium uppercase text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-whatsapp px-5 py-3 text-center text-xs font-semibold uppercase tracked text-white"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-background-elevated px-5 py-3 text-center text-xs font-semibold uppercase tracked ring-1 ring-line"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
