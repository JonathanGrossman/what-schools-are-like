"use client";

import { ListChecks, ShoppingBag } from "lucide-react";
import ShopItem from "./ShopItem";

export default function MainShop(props: any) {
  const { files } = props;
  return (
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
      <div className="flex flex-wrap -m-2 items-center">
        {files.map((file: string) => {
          return <ShopItem file={file} />;
        })}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex items-center justify-center h-full">
          <a
            href="https://storeforwsiltd.creator-spring.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="h-full flex items-center justify-center"
          >
            <div className="cursor-pointer h-full flex gap-2 text-secondary">
              <ListChecks />
              View all items{" "}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
