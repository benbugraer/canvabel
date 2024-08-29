"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { UserButton } from "@clerk/nextjs";
import { DashSidebarNav } from "@/app/dashboard/_components/DashSidebarNav";

export default function DashboardSideBar() {
  return (
    <div className="lg:block hidden w-full overflow-hidden border-primary h-full ">
      <div className="flex h-full max-h-screen flex-col gap-2 animate-in">
        <div className="flex h-[55px] items-center justify-between border-b border-primary px-3 w-full">
          <Link
            href="/"
            className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2 animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
        </div>
        <div
          className="flex-1 overflow-auto py-2 animate-in"
          style={{ "--index": 4 } as CSSProperties}
        >
          <nav className="items-center">
            <DashSidebarNav />
          </nav>
        </div>
      </div>
    </div>
  );
}
