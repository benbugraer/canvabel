"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ReactNode } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaImage } from "react-icons/fa6";
import { PiTextTFill } from "react-icons/pi";
import { MdSettings } from "react-icons/md";
// import { UserButton } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const navItems = [
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
export default function DashboardNav({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="flex h-14 lg:h-[55px] items-center gap-4 border-b border-primary px-3">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition">
            <HiMenuAlt3 className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle className="text-primary">
                  Canvas<span className="font-black">BEL</span>
                </SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <DialogClose asChild key={item.label}>
                  <div>
                    <Button variant="outline" className="w-full">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </div>
                </DialogClose>
              ))}
            </div>
          </SheetContent>
        </Dialog>
        {/* <div className="flex justify-center items-center gap-4 ml-auto pr-6">
          <UserButton />
        </div> */}
      </div>
      {children}
    </div>
  );
}
