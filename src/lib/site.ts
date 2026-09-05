export const site = {
  name: "Master Photos",
  tagline: "Photo • Video • Cinematography • Printing & Scanning Services",
  contactPerson: "Raheel Ali Butt",
  phoneDisplay: "+92 333 6222337",
  phoneHref: "tel:+923336222337",
  whatsappNumber: "923336222337",
  email: "masterphotos85@gmail.com",
  instagramHandle: "@masterphotos85",
  instagramUrl: "https://instagram.com/masterphotos85",
  facebookUrl: "https://www.facebook.com/MasterPhotosJhelum/",
  googleMapsUrl: "https://maps.app.goo.gl/QfgQwZatiFqGvbq86?g_st=aw",
  address: "Master Photos, C.M H Road, Jhelum Cantt, Jhelum, 49600",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type ServiceItem = { title: string; description?: string };
export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wedding-cinematography",
    number: "01",
    title: "Wedding Cinematography",
    items: [
      {
        title: "Full Wedding Films",
        description:
          "Cinematic storytelling capturing every emotion and important moment of your wedding day, from the Baraat ceremony through the Walima reception.",
      },
      {
        title: "Wedding Highlight Reels",
        description:
          "A beautifully edited 3–5 minute cinematic short film capturing the essence and most memorable moments of your wedding.",
      },
      {
        title: "Same-Day Edit (SDE)",
        description:
          "A stunning cinematic highlight video edited and screened on the same day of your event.",
      },
      {
        title: "Pre-Wedding Shoots",
        description: "Creative, story-driven video sessions for couples before their wedding day.",
      },
      {
        title: "Documentary-Style Wedding Films",
        description:
          "Complete, in-depth coverage documenting the full wedding journey and its meaningful moments.",
      },
    ],
  },
  {
    id: "event-coverage",
    number: "02",
    title: "Event-Wise Coverage",
    items: [
      { title: "Mehndi Event Cinematography" },
      { title: "Nikah Ceremony Coverage" },
      { title: "Baraat Ceremony Coverage" },
      { title: "Walima Reception Coverage" },
      { title: "Dholki & Mayo Event Coverage" },
      { title: "Engagement Ceremony Filming" },
    ],
  },
  {
    id: "special-events",
    number: "03",
    title: "Special Events",
    items: [
      { title: "Birthday Celebrations" },
      { title: "Corporate Events & Conferences" },
      { title: "Anniversary Celebrations" },
      { title: "Baby Showers & Aqeeqah Ceremonies" },
      { title: "Graduation Ceremonies" },
      { title: "Concerts & Live Performances" },
    ],
  },
  {
    id: "aerial-drone",
    number: "04",
    title: "Aerial & Drone Coverage",
    items: [
      { title: "Cinematic Drone Shots for Venues & Outdoor Locations" },
      { title: "Aerial Coverage for Large Events" },
    ],
  },
  {
    id: "post-production",
    number: "05",
    title: "Post-Production Services",
    items: [
      { title: "Professional Video Editing & Color Grading" },
      { title: "Custom Music Scoring & Sound Design" },
      { title: "Motion Graphics & Cinematic Titles" },
      { title: "Photo Album & Slideshow Design" },
      { title: "Digital Delivery — Online Gallery / USB" },
    ],
  },
  {
    id: "premium-addons",
    number: "06",
    title: "Premium Add-Ons",
    items: [
      { title: "Multi-Camera Setup for Complete Coverage" },
      { title: "Live Streaming on LED Screens" },
      { title: "Guest Message Video Booth" },
      { title: "Custom Wedding Trailers & Teasers" },
    ],
  },
  {
    id: "corporate-commercial",
    number: "07",
    title: "Corporate & Commercial Video Production",
    items: [
      { title: "Event Management" },
      { title: "Television Video Commercials" },
      { title: "Corporate Profile Videos" },
      { title: "Promotional Videos" },
    ],
  },
  {
    id: "printing-scanning",
    number: "08",
    title: "Printing & Scanning",
    items: [
      {
        title: "Printing Services",
        description: "High-quality photo printing and album production, finished to archival standards.",
      },
      {
        title: "Scanning Services",
        description: "Precision digital scanning and restoration for prints, negatives and documents.",
      },
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const whyPrinciples = [
  {
    title: "Professional Quality",
    description:
      "Careful lens choice and colour science, with meticulous frame-by-frame editing for a consistently clean result.",
  },
  {
    title: "Creative Cinematography",
    description:
      "Visual storytelling shaped by composition, mood and lighting that preserve the genuine feeling of each moment.",
  },
  {
    title: "Reliable Service",
    description:
      "Punctual coverage and organised, dependable post-production from the first shot to final delivery.",
  },
  {
    title: "Attention to Detail",
    description:
      "From ceremonial details to candid reactions, every important moment is composed with care.",
  },
] as const;

export const team = [
  {
    id: "raheel",
    name: "Raheel Ali Butt",
    role: "Studio Management & Client Relations",
    initials: "RAB",
  },
] as const;
