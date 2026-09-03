import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600-italic.css";
import "./globals.css";
import { site } from "@/lib/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = "https://masterphotos.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Photography, Videography & Cinematography in Jhelum`,
    template: `%s | ${site.name}`,
  },
  description:
    "Master Photos is a professional photography, videography, cinematography, printing and scanning studio based in Jhelum, Punjab.",
  keywords: [
    "Master Photos",
    "Jhelum photographer",
    "wedding photography Jhelum",
    "wedding cinematography Pakistan",
    "videography Jhelum",
    "photo printing Jhelum",
    "photo scanning services",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Photography, Videography & Cinematography`,
    description:
      "Professional photography, videography, cinematography, printing and scanning services in Jhelum, Punjab.",
    url: siteUrl,
    siteName: site.name,
    images: ["/media/photos/photo-06.webp"],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Photography, Videography & Cinematography`,
    description:
      "Professional photography, videography, cinematography, printing and scanning services in Jhelum, Punjab.",
    images: ["/media/photos/photo-06.webp"],
  },
  icons: {
    icon: [
      { url: "/media/brand/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/media/brand/logo-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/media/brand/logo-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
