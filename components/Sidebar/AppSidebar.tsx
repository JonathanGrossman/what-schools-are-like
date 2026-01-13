"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import { Podcasts } from "./Podcasts";
import { Main } from "./Main";
import { FooterSidebar } from "./FooterSidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <HeaderSidebar />
      <SidebarContent className="gap-0">
        <Main />
        <Podcasts />
      </SidebarContent>
      <FooterSidebar />
    </Sidebar>
  );
}
