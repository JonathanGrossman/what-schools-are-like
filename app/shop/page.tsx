"use client";

import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="pt-16 h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Shop
            </h1>
          </div>
          <p className="text-lg text-foreground/70">
            Get official podcast merchandise and exclusive items
          </p>
        </div>
        <div className="mb-12">
          <a
            href="https://storeforwsiltd.creator-spring.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img
              src="./shop.png"
              className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
