import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/container/Navigation";

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
      <ClerkProvider appearance={{}}>
        <body
          className={clsx(
            "antialiased bg-contrast dark:bg-primary text-primary",
            raleway.className
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="">{children}</div>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
