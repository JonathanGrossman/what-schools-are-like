import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuSeparator } from "../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { ChevronUp, LogOut, User2 } from "lucide-react";
import { handleSignIn, handleSignOut } from "@/lib/auth";
import { useAuthContext } from "@/context/authContext";

export function FooterSidebar() {
  const authContext = useAuthContext();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          {!authContext.user && (
            <SidebarMenuButton onClick={handleSignIn}>
              <User2 /> Login
            </SidebarMenuButton>
          )}
          {authContext.user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div>
                  <SidebarMenuButton className="hover:bg-transparent hover:text-black active:bg-transparent active:text-black">
                    {authContext.user.image && (
                      <img
                        src={authContext.user.image}
                        alt="User image"
                        className="h-8 w-8 rounded-[5px]"
                      />
                    )}
                    {!authContext.user.image && <User2 />}
                    {authContext.user.name
                      ? authContext.user.name
                      : "Logged in"}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="flex flex-col gap-2 justify-center w-[--radix-popper-anchor-width] border rounded-[5px] p-2 mb-2 text-sm shadow-md bg-white"
              >
                <DropdownMenuItem>
                  <div className="flex gap-2 items-center">
                    <div>
                      {authContext.user.image && (
                        <img
                          src={authContext.user.image}
                          alt="User image"
                          className="h-8 w-8 rounded-[5px]"
                        />
                      )}
                      {!authContext.user.image && <User2 />}
                    </div>
                    <div className="flex flex-col">
                      <div>
                        {authContext.user.name
                          ? authContext.user.name
                          : "Logged in"}
                      </div>
                      {authContext.user.email && (
                        <div className="text-xs">{authContext.user.email}</div>
                      )}
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleSignOut}
                  className="cursor-pointer flex gap-2 items-center hover:outline-none"
                >
                  <LogOut className="h-4 w-4" />
                  <div>Log out</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
