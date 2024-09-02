import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CanvasBel | Dashboard",
  description: "Welcome to CanvasBel",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <div suppressHydrationWarning>{children}</div>;
}
