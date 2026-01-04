import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Inbox, MicVocal, Music } from "lucide-react";
import Link from "next/link";

export function PodcastMenu() {
  const iconMap = {
    Music,
    Inbox,
    MicVocal,
  };

  const podcastMenu = [
    { link: "/podcast", icon: "Music", tip: "Episodes" },
    { link: "/podcast/suggestion-box", icon: "Inbox", tip: "Suggestion Box" },
    {
      link: "/podcast/interview-series",
      icon: "MicVocal",
      tip: "Interview Series",
    },
  ];
  return (
    <div className="flex items-center justify-center w-fit gap-2">
      {podcastMenu.map((menuItem) => {
        const Icon = iconMap[menuItem.icon as keyof typeof iconMap];
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={menuItem.link}
                className="flex items-center justify-center w-fit gap-2 cursor-pointer text-secondary border px-2 py-1 rounded-lg bg-gray-200"
              >
                <Icon className="w-4 h-4 text-secondary" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{menuItem.tip}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
