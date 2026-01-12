"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import { Podcasts } from "./Podcasts";
import { Main } from "./Main";

export function AppSidebar() {
  return (
    <Sidebar>
      <HeaderSidebar />
      <SidebarContent className="gap-0">
        <Main />
        <Podcasts />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
