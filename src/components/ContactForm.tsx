"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const services = [
  "Photography (Weddings & Formals)",
  "Videography",
  "Cinematography",
  "Printing Services",
  "Scanning Services",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!phone) nextErrors.phone = "Please enter a phone or WhatsApp number.";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const service = String(form.get("service") || "");
      const message = String(form.get("message") || "");

      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New inquiry from ${name} — Master Photos website`,
          name,
          phone,
          email: email || "not provided",
          service,
          message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-background-elevated p-6 text-center">
        <p className="font-display text-base font-bold uppercase tracked-tight">Inquiry Sent</p>
        <p className="mt-2 text-sm text-muted">
          Thank you — we&apos;ve received your details and will respond soon. For a faster reply,
          message us directly on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="tracked mt-4 text-xs font-semibold uppercase text-gold-soft"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-sm border border-line bg-background-elevated p-6">
      <p className="font-display text-lg font-bold uppercase tracked-tight">Send Studio Inquiry</p>
      <p className="text-sm text-muted">
        Share your event date and desired visual style. We&apos;ll respond promptly.
      </p>

      <div>
        <label htmlFor="name" className="tracked block text-[11px] font-medium uppercase text-muted">
          Your Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. Usman Ali"
          className="mt-2 w-full rounded-sm border border-line bg-background px-4 py-3 text-sm outline-none focus:border-gold-soft"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="tracked block text-[11px] font-medium uppercase text-muted">
          Phone / WhatsApp *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+92 333 0000000"
          className="mt-2 w-full rounded-sm border border-line bg-background px-4 py-3 text-sm outline-none focus:border-gold-soft"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-400">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="tracked block text-[11px] font-medium uppercase text-muted">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="yourname@email.com"
          className="mt-2 w-full rounded-sm border border-line bg-background px-4 py-3 text-sm outline-none focus:border-gold-soft"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="tracked block text-[11px] font-medium uppercase text-muted">
          Desired Service *
        </label>
        <select
          id="service"
          name="service"
          defaultValue={services[0]}
          className="mt-2 w-full rounded-sm border border-line bg-background px-4 py-3 text-sm outline-none focus:border-gold-soft"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="tracked block text-[11px] font-medium uppercase text-muted">
          Event Details / Inquiries
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please mention preferred dates, venue (e.g. Jhelum, Gujrat, Islamabad), and any specific requests."
          className="mt-2 w-full resize-none rounded-sm border border-line bg-background px-4 py-3 text-sm outline-none focus:border-gold-soft"
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Please try again or message us on WhatsApp.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="tracked w-full rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase text-[#14110a] transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
