import { ReactNode } from "react";
import { Metadata } from "next";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardNav from "./_components/DashboardNav";

export const metadata: Metadata = {
  title: "CanvasBel | Dashboard",
  description: "Welcome to CanvasBel",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid min-h-screen w-full lg:grid-cols-[220px_1fr] "
      suppressHydrationWarning
    >
      <DashboardSidebar />
      <DashboardNav>
        <div className="flex flex-col gap-4 p-4 lg:gap-6">{children}</div>
      </DashboardNav>
    </div>
  );
}
