"use client";

import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import Link from "next/link";
import { CSSProperties } from "react";
import { MdImage } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";

const navItems = [
  { label: "Image", icon: MdImage },
  { label: "Text", icon: PiTextTBold },
];

export default function DashboardNav() {
  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[50px] items-center justify-between border-b px-3 w-full">
          <Link
            href="/"
            className="relative text-lg font-normale tracking-tighter mr-8 flex items-center space-x-2 animate-in-reverse"
            style={{ "--index": 0 } as CSSProperties}
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium animate">
            {navItems.map(({ label, icon: Icon }, index: number) => (
              <div key={label}>
                <div
                  className={clsx(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 animate-in"
                  )}
                  style={{ "--index": index + 1 } as CSSProperties}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
