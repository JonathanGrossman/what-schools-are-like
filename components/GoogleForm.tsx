"use client";

import { ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface Props {
  formId: string;
  subtitle: string;
  title: string;
}

export default function GoogleForm(props: Props) {
  const { formId, subtitle, title } = props;
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-yellow-50 to-red-50">
      <Link href="/shop">
        <Button variant="ghost" className="mb-8 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Button>
      </Link>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-accent" />
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {title}
            </h1>
          </div>
          <p className="text-lg text-foreground/70 max-w-xl">{subtitle}</p>
        </div>

        {/* Product Details & Form */}
        <div className="bg-card rounded-2xl border border-border shadow-md h-fit overflow-hidden">
          <iframe
            src={`https://docs.google.com/forms/u/0/d/e/${formId}/formResponse?embedded=true`}
            className="h-full w-full border-none"
            height="100%"
            style={{ minHeight: "800px" }}
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </main>
  );
}
