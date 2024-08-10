import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
      <body className={clsx("antialiased w-full", raleway.className)}>
        {children}
      </body>
    </html>
  );
}
