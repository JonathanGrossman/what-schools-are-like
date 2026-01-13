"use client";

import { PodcastMenu } from "@/components/PodcastMenu";
import { MicVocal } from "lucide-react";

export default function SuggestionBoxPage() {
  const episodes = [
    { link: "15kUG1lIa7vJnoiZnrFVkA" },
    { link: "2tGC9z09kbILKHP3ZzKVHQ" },
    { link: "5S3Q2N0qLaq8p75kHkLKbF" },
    { link: "0hG9V4TUZm9s4q1Hu1PGa6" },
    { link: "0wQnAyGvM5TEbJWXaAXAS1" },
    { link: "0oHthidzQggcxNRQg1V4ge" },
  ];
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-2">
            <MicVocal className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Interview Series
            </h1>
          </div>
          <p className="text-lg text-foreground/70">
            Listen to our interview series
          </p>
        </div>

        <div className="space-y-8">
          {episodes.map((episode) => {
            return (
              <div key={episode.link}>
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
