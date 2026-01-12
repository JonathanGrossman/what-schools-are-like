"use client";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { iconMapMain, main } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  House,
  Languages,
} from "lucide-react";
import Link from "next/link";

export function HeaderSidebar() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" className="rounded-[5px] h-[40px] w-[40px]" />
            <div>WSILTD</div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
