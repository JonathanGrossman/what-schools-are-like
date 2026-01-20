import { Home, Inbox, MicVocal, Music, ShoppingBag } from "lucide-react";

export const siteTitle = "What School Is Like These Days";

export const iconMapMain = {
  Home,
  ShoppingBag,
  Inbox,
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
  {
    title: "Suggestion Box",
    url: "/podcast/suggestion-box",
    icon: "Inbox",
  },
];

export const iconMapPodcasts = {
  Music,
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
];

export const listenButtons = [
  {
    text: "Spotify",
    link: "https://open.spotify.com/show/0eeTfxMogjXZL65vn7bzbm",
    icon: "fa fa-spotify",
  },
  {
    text: "Amazon",
    link: "https://music.amazon.com/podcasts/def4c065-ec28-445e-a413-74f9dfe8e048/what-schools-are-like-these-days",
    icon: "fa fa-amazon",
  },
];
