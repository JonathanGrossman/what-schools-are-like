"use client";

import { PodcastMenu } from "@/components/PodcastMenu";
import { Inbox } from "lucide-react";

export default function SuggestionBoxPage() {
  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="w-full flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-2">
            <Inbox className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Suggestion Box
            </h1>
          </div>
          <p className="text-lg text-foreground/70">
            Have an idea for an episode? Want to comment on an existing one?
          </p>
        </div>

        <div className="space-y-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7C0KEYW71sV-AkkCeTz6DwkEahLenNuZUGrNUptnoosdlng/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </main>
  );
}
