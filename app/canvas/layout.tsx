import { ReactNode } from "react";
import { Metadata } from "next";
import DashTopNav from "@/app/canvas/_components/DashTopNav";
import DashSidebar from "@/app/canvas/_components/DashSidebar";

export const metadata: Metadata = {
  title: "CanvasBel | Canvas",
  description: "Welcome to CanvasBel",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[10.938rem_1fr]">
      <DashSidebar />
      <DashTopNav>
        <main className="flex flex-col gap-4 p-4 lg:gap-6">{children}</main>
      </DashTopNav>
    </div>
  );
}
