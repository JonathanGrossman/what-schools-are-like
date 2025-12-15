"use client";

import { shop } from "@/lib/constants";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ShopPage() {
  return (
    <main className="pt-16 h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-6">
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
        <div className="mb-12">
          <a
            href="https://storeforwsiltd.creator-spring.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className="mb-4">Visit our store . . .</div>
            <img
              src="./shop.png"
              className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full"
            />
          </a>
        </div>
        <div className="mb-4">. . .or shop for items right here</div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {Object.values(shop).map((item, idx) => {
            return (
              <Link href={`/shop/${item.link}`}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <ShoppingBag
                    className={cn(
                      "w-12 h-12 mb-4",
                      idx % 2 === 0 ? "text-primary" : "text-accent"
                    )}
                  />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h2>
                  <p className="text-foreground/70">{item.subtitle}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
