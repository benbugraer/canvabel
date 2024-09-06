"use client";
import Link from "next/link";
import { DashSidebarNav } from "@/app/canvas/_components/DashSidebarNav";
import { CSSProperties } from "react";

export default function DashSidebar() {
  return (
    <div className="lg:block hidden h-full">
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-[55px] items-center justify-between border-b border-primary px-3 w-full">
          <Link
            href="/"
            className="ml-6 relative text-lg font-normal tracking-tighter mr-8 flex items-center animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
        </div>
        <div className="animate-in my-auto" style={{ "--index": 3 } as CSSProperties}>
          <DashSidebarNav />
        </div>
      </div>
    </div>
  );
}
