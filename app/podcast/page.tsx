"use client";

import { PodcastMenu } from "@/components/PodcastMenu";
import { Music } from "lucide-react";

export default function PodcastPage() {
  const episodes = [
    { link: "6NGx3b53uIZJgms8XnDdGA?si=rVYBoi9TT_Wg3T-RkDo0OQ" },
    {
      link: "7p2DiQDkMYKtHubdkLdcFm?si=cy2uVq5pQL-ac6VjeLzQSQ",
    },
    {
      link: "6Udua5eT5hDGinG11pIeY9?si=6cObU7rGSwOSxzyjFzTTKw",
    },
    {
      link: "0T8z5B4ctz20tO9xO4BTzz?si=EefoEE0SRXq-8vlY2Lz4sw",
    },
    {
      link: "5M4HfBugxrxnAnjYqmjRpg?si=rlrx_AwpRYKkjFENAqEjFg",
    },
    {
      link: "6piAArEcFUegVbzkRTgc1M?si=mYzlMPhxSD6h2I3kW4dfjA",
    },
    {
      link: "4mLLaaSoubI2C2WkNc7Y2s?si=UzYumz-6SKqLQ5W4x8MmrA",
    },
    {
      link: "59WmkuYT9Iqbk8awGUaBRo?si=LmunDf67SF6dIRRU0gjxLw",
    },
    {
      link: "3x6ZPJ2hBuqoCxXPxCNf2q?si=isdRvel3SvqoAxH-fUkMCw",
    },
    {
      link: "5fzJNPJD5e8iwJGKpkNbb0?si=DZ84GcXdQhmIvlAkB3X-6A",
    },
    {
      link: "4qUCrmwvx7nnL8wODqo5Bs?si=nxah4xktStm_Q-oXgqjoNQ",
    },
    {
      link: "5kn7jN6mVtrD1lf847L2fk?si=fVL6Nm5oQMu2NToQmuSHxg",
    },
    {
      link: "20IDwrW9VRyuKim0OrqE4u?si=nZIEXuy7TouWyFKt0DbB7g",
    },
    {
      link: "46Flfq9uGQmKxJpPt3Swq2?si=jzXIy5YzSbK8YrsNc5oxvQ",
    },
    {
      link: "4IKaiKw4XMUaLWkt2H8m7l?si=7zI0rTAeT76PvWNZYWPDig",
    },
    {
      link: "5VVaWc6VZuwcYIf7nLEy1G?si=lH0c44AFQoW7ZYuLxjsv4Q",
    },
    {
      link: "7jPSxb8ZciuM61LbPm2c8X?si=ygzCtO6qRfaaP6Yb8ACVAw",
    },
    {
      link: "6F11hi63QZvOVvA5WxkhIa?si=1YYd2nmgRVSc4fkOKn-B7A",
    },
    {
      link: "7bffjpt3at9r8hOt3gfbZW?si=kAEsxV0kT2-mdI--wXrvwg",
    },
    {
      link: "7dsOO8Q6FtYxlyGOxbeCrB?si=wGhMjiX1QWe8-OrbE25S9w",
    },
  ];

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Music className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Episodes
            </h1>
          </div>
          <p className="text-lg text-foreground/70">
            Listen to our latest episodes
          </p>
          <PodcastMenu />
        </div>

        <div className="space-y-8">
          {episodes.map((episode) => {
            return (
              <div>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={`https://open.spotify.com/embed/episode/${episode.link}`}
                  width="100%"
                  height="252"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
