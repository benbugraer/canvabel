"use client";

import { CSSProperties, ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import ExportButton from "./ExportButton";

export default function DashTopNav({ children }: { children: ReactNode }) {
  return (
    <header className="flex flex-col">
      <div className="flex h-14 lg:h-[55px] items-center gap-4 border-b border-primary px-3">
        <div
          className="flex justify-center items-center gap-2 ml-auto mr-6 animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          <ExportButton />  
          <ThemeSwitcher />
          <UserButton />
        </div>
      </div>
      {children}
    </header>
  );
}
