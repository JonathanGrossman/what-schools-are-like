"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Podcast", link: "/podcast" },
    { name: "Shop", link: "/shop" },
  ];
  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-background border-b border-border h-16 px-12 flex">
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <img src="/logo.jpg" className="rounded-[5px] h-[50px] w-[50px]" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-md transition-all">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menu.map((item) => {
              return (
                <Link href={item.link}>
                  <DropdownMenuItem> {item.name}</DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
