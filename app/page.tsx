import { Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteTitle } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="pt-16 h-screen">
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-12">
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                {siteTitle}
              </h1>

              <p className="text-xl sm:text-2xl text-secondary font-semibold flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Real Talk From Kids Who Know
              </p>
            </div>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto leading-relaxed">
              Join us for honest conversations about student life, school
              challenges, friendships, and everything in between.
            </p>

            <div className="pt-8 flex justify-center flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:shadow-xl transition-all duration-300 text-white px-8 py-6 text-lg rounded-full font-semibold"
              >
                <a
                  href="https://open.spotify.com/show/0eeTfxMogjXZL65vn7bzbm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music className="w-5 h-5 mr-2" />
                  Listen on Spotify
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:shadow-xl transition-all duration-300 text-white px-8 py-6 text-lg rounded-full font-semibold"
              >
                <a
                  href="https://music.amazon.com/podcasts/def4c065-ec28-445e-a413-74f9dfe8e048/what-schools-are-like-these-days"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Music className="w-5 h-5 mr-2" />
                  Listen on Amazon
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
