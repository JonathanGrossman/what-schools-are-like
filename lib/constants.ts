import { Home, Inbox, MicVocal, Music, ShoppingBag } from "lucide-react";

export const siteTitle = "What School Is Like These Days";

export const iconMapMain = {
  Home,
  ShoppingBag,
};

export const main = [
  {
    title: "Home",
    url: "/",
    icon: "Home",
  },
  {
    title: "Shop",
    url: "/shop",
    icon: "ShoppingBag",
  },
];

export const iconMapPodcasts = {
  Music,
  Inbox,
  MicVocal,
};
export const podcasts = [
  {
    title: "What School Is Like",
    url: "/podcast",
    icon: "Music",
  },
  {
    title: "Interview Series",
    url: "/podcast/interview-series",
    icon: "MicVocal",
  },
  {
    title: "Suggestion Box",
    url: "/podcast/suggestion-box",
    icon: "Inbox",
  },
];
