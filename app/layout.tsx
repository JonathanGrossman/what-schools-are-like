import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteTitle } from "@/lib/constants";
import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Providers } from "./providers";
import { AuthContextProvider } from "@/context/authContext";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteTitle,
  description:
    "Real talk from the kids who know. Listen to honest conversations about student life, school challenges, and everything in between.",
  generator: "v0.app",
  icons: {
    icon: [
      // {
      //   url: "/icon-light-32x32.png",
      //   media: "(prefers-color-scheme: light)",
      // },
      // {
      //   url: "/icon-dark-32x32.png",
      //   media: "(prefers-color-scheme: dark)",
      // },
      // {
      //   url: "/icon.svg",
      //   type: "image/svg+xml",
      // },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <body>
        <Providers>
          <AuthContextProvider defaultOpen={false} variant="floating">
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              <SidebarInset>{children}</SidebarInset>
            </SidebarProvider>
          </AuthContextProvider>
        </Providers>
      </body>
    </html>
  );
}
