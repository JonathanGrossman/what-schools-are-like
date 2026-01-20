"use client";

import { Button } from "@/components/ui/button";
import { listenButtons } from "@/lib/constants";
import { episodes } from "@/lib/episodes";
import { Music } from "lucide-react";

export default function PodcastPage() {
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

          <div>
            <div className="flex justify-center flex-wrap items-center gap-3">
              {listenButtons.map((button) => {
                return (
                  <Button
                    asChild
                    size="sm"
                    className="bg-secondary hover:shadow-xl transition-all duration-300 text-white px-4 py-3 text-sm rounded-full font-semibold"
                  >
                    <a
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={button.icon} />
                      Listen on {button.text}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
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
