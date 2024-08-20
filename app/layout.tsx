import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
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
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider>
        <body
          className={clsx(
            "antialiased bg-contrast dark:bg-primary text-primary",
            raleway.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div>{children}</div>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
