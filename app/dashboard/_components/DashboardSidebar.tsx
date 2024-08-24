"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaImage } from "react-icons/fa6";
import { PiTextTFill } from "react-icons/pi";
import { MdSettings } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const sidebarItems = [
  {
    label: "Image",
    icon: FaImage,
  },
  {
    label: "Text",
    icon: PiTextTFill,
  },
  {
    label: "Settings",
    icon: MdSettings,
  },
];

export default function DashboardSideBar() {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden border-r border-primary h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-[55px] items-center justify-between border-b border-primary px-3 w-full">
          <Link
            href="/"
            className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2"
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {sidebarItems.map(({ label, icon: Icon }, index: number) => (
              <div key={label}>
                <div
                  className={clsx(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-primary transition-all hover:text-secondary"
                  )}
                >
                  <div className=" rounded-lg dark:bg-tertiary  p-1 bg-tertiary">
                    <Icon className="h-4 w-4" />
                  </div>
                  {label}
                </div>
                {index === 1 && <Separator className="my-[0.75rem]" />}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
