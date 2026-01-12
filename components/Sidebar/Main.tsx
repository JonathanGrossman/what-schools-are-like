"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown } from "lucide-react";
import { iconMapMain, main } from "@/lib/constants";

export function Main() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Main
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          {main.map((item: any) => {
            const Icon = iconMapMain[item.icon as keyof typeof iconMapMain];

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="rounded-[5px]">
                  <a href={item.url}>
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
