"use client";

import GoogleForm from "@/components/GoogleForm";

export default function WaterBottlePage() {
  return (
    <main className="pt-16 min-h-screen bg-gradient-to-br from-background via-yellow-50 to-red-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GoogleForm
          formId="1FAIpQLSeIol60grsWGTR54ovnVL-Tno-J4p64UCvp9WWL0BQ5qUM8Gw"
          subtitle="Premium podcast water bottle - stay hydrated while staying in the
            know. Perfect for school, the gym, or anywhere you're on the go."
          title="Water Bottle"
        />
      </div>
    </main>
  );
}
