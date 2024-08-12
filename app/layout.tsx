import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CanvasBel | Home",
  description: "Welcome to CanvasBel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body
          className={clsx(
            "antialiased bg-contrast dark:bg-primary text-primary",
            raleway.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="mx-auto max-w-[87.5rem] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
