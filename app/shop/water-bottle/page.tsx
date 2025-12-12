"use client";

import GoogleForm from "@/components/GoogleForm";
import { shop } from "@/lib/constants";

export default function WaterBottlePage() {
  return (
    <main className="pt-16 h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GoogleForm item={shop["Water_Bottle"]} />
      </div>
    </main>
  );
}
