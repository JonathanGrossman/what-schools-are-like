"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-background via-yellow-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Shop
            </h1>
          </div>
          <p className="text-lg text-foreground/70">
            Get official podcast merchandise and exclusive items
          </p>
        </div>

        {/* Merchandise Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {/* Product 1 - Water Bottle */}
          <Link href="/shop/water-bottle">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
              <ShoppingBag className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Water Bottle
              </h2>
              <p className="text-foreground/70">
                Premium podcast water bottle - stay hydrated while staying in
                the know
              </p>
            </div>
          </Link>

          {/* Product 2 - Clear Waterproof Sticker */}
          <Link href="/shop/clear-waterproof-sticker">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
              <ShoppingBag className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Clear Waterproof Sticker
              </h2>
              <p className="text-foreground/70">
                Durable waterproof sticker perfect for laptops, water bottles,
                and more
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
