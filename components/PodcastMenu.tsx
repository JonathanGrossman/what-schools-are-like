import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { iconMapPodcasts, podcasts } from "@/lib/constants";
import Link from "next/link";

export function PodcastMenu() {
  return (
    <div className="flex items-center justify-center w-fit gap-2">
      {podcasts.map((menuItem) => {
        const Icon =
          iconMapPodcasts[menuItem.icon as keyof typeof iconMapPodcasts];
        return (
          <Tooltip key={menuItem.title}>
            <TooltipTrigger asChild>
              <Link
                href={menuItem.url}
                className="flex items-center justify-center w-fit gap-2 cursor-pointer text-secondary border px-2 py-1 rounded-lg bg-gray-200"
              >
                <Icon className="w-4 h-4 text-secondary" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{menuItem.title}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
