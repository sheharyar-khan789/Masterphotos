export type MediaCategory =
  | "photography"
  | "videography"
  | "cinematography"
  | "weddings"
  | "events";

export type PhotoItem = {
  type: "photo";
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  location: string;
  categories: MediaCategory[];
};

export type VideoItem = {
  type: "video";
  id: string;
  src: string;
  poster: string;
  posterWidth: number;
  posterHeight: number;
  title: string;
  location: string;
  categories: MediaCategory[];
};

export type MediaItem = PhotoItem | VideoItem;

const p = (file: string) => `/media/photos/${file}`;
const v = (file: string) => `/media/videos/${file}`;
const poster = (file: string) => `/media/posters/${file}`;

export const photos: PhotoItem[] = [
  {
    type: "photo",
    id: "photo-06",
    src: p("photo-06.webp"),
    width: 1170,
    height: 1463,
    title: "Groom Portrait, String-Light Courtyard",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-17",
    src: p("photo-17.webp"),
    width: 1080,
    height: 1080,
    title: "Nikah Ceremony, Ring Exchange",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-03",
    src: p("photo-03.webp"),
    width: 1080,
    height: 1350,
    title: "Bridal Portrait, Golden Bokeh",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-09",
    src: p("photo-09.webp"),
    width: 1080,
    height: 1350,
    title: "Evening Walk, Reception Lawn",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-15",
    src: p("photo-15.webp"),
    width: 1080,
    height: 1350,
    title: "Rukhsati Walk, Send-off",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-01",
    src: p("photo-01.webp"),
    width: 1080,
    height: 1350,
    title: "Groom's Velvet Sherwani Portrait",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-02",
    src: p("photo-02.webp"),
    width: 1170,
    height: 1463,
    title: "Bridal Lehenga Portrait",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-04",
    src: p("photo-04.webp"),
    width: 1080,
    height: 1350,
    title: "Bridal Portrait, Evening Light",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-05",
    src: p("photo-05.webp"),
    width: 1170,
    height: 1463,
    title: "Groom's Turban & Ceremonial Attire",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-07",
    src: p("photo-07.webp"),
    width: 1170,
    height: 1463,
    title: "Groom Seated Portrait",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-08",
    src: p("photo-08.webp"),
    width: 1080,
    height: 1350,
    title: "Reception Suit Portrait",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-10",
    src: p("photo-10.webp"),
    width: 1170,
    height: 820,
    title: "Stage Portrait, Wedding Party",
    location: "Jhelum",
    categories: ["photography", "events"],
  },
  {
    type: "photo",
    id: "photo-11",
    src: p("photo-11.webp"),
    width: 1170,
    height: 781,
    title: "Stage Portrait, Family Gathering",
    location: "Jhelum",
    categories: ["photography", "events"],
  },
  {
    type: "photo",
    id: "photo-12",
    src: p("photo-12.webp"),
    width: 1170,
    height: 1463,
    title: "Mehndi Entrance Walk",
    location: "Jhelum",
    categories: ["photography", "weddings", "events"],
  },
  {
    type: "photo",
    id: "photo-13",
    src: p("photo-13.webp"),
    width: 1170,
    height: 781,
    title: "Family Portrait, Mehndi Celebration",
    location: "Jhelum",
    categories: ["photography", "events"],
  },
  {
    type: "photo",
    id: "photo-14",
    src: p("photo-14.webp"),
    width: 1080,
    height: 1350,
    title: "Groom Portrait, Venue Entrance",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
  {
    type: "photo",
    id: "photo-16",
    src: p("photo-16.webp"),
    width: 1080,
    height: 1080,
    title: "Nikah Ceremony, Detail",
    location: "Jhelum",
    categories: ["photography", "weddings"],
  },
];

export const videos: VideoItem[] = [
  {
    type: "video",
    id: "video-01",
    src: v("video-01.mp4"),
    poster: poster("poster-01.jpg"),
    posterWidth: 1276,
    posterHeight: 718,
    title: "Venue Establishing Shot, Evening",
    location: "Jhelum",
    categories: ["videography", "cinematography", "weddings"],
  },
  {
    type: "video",
    id: "video-02",
    src: v("video-02.mp4"),
    poster: poster("poster-02.jpg"),
    posterWidth: 716,
    posterHeight: 1274,
    title: "Bridal Details Film",
    location: "Jhelum",
    categories: ["videography", "cinematography", "weddings"],
  },
  {
    type: "video",
    id: "video-03",
    src: v("video-03.mp4"),
    poster: poster("poster-03.jpg"),
    posterWidth: 360,
    posterHeight: 640,
    title: "Groom Preparation Film",
    location: "Jhelum",
    categories: ["videography", "cinematography", "weddings"],
  },
  {
    type: "video",
    id: "video-04",
    src: v("video-04.mp4"),
    poster: poster("poster-04.jpg"),
    posterWidth: 716,
    posterHeight: 1274,
    title: "Wedding Detail Film",
    location: "Jhelum",
    categories: ["videography", "cinematography", "weddings"],
  },
];

export const allMedia: MediaItem[] = [...photos, ...videos];

export const heroPhoto = {
  type: "photo" as const,
  id: "hero-studio",
  src: "/media/photos/hero-studio.jpg",
  width: 1024,
  height: 683,
  title: "Master Photos Editing Studio",
  location: "Jhelum",
  categories: ["photography"] as MediaCategory[],
};

export const featured = {
  large: photos.find((ph) => ph.id === "photo-17")!,
  supporting: [
    photos.find((ph) => ph.id === "photo-03")!,
    photos.find((ph) => ph.id === "photo-09")!,
    photos.find((ph) => ph.id === "photo-15")!,
  ],
};

export const primaryVideo = videos.find((vi) => vi.id === "video-01")!;
export const secondaryVideos = videos.filter((vi) => vi.id !== "video-01");

export const portfolioFilters: { id: "all" | MediaCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "photography", label: "Photography" },
  { id: "videography", label: "Videography" },
  { id: "cinematography", label: "Cinematography" },
  { id: "weddings", label: "Weddings" },
  { id: "events", label: "Events" },
];
