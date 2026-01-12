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
import { iconMapPodcasts, podcasts } from "@/lib/constants";

export function Podcasts() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Podcasts
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          {podcasts.map((item: any) => {
            const Icon =
              iconMapPodcasts[item.icon as keyof typeof iconMapPodcasts];

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
