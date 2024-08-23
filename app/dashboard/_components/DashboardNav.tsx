"use client";

import { UserButton } from "@clerk/nextjs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { PiExport } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import Link from "next/link";
import { CSSProperties } from "react";

export default function DashboardNavMobile() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[50px] justify-between lg:justify-end  items-center gap-2 border-b w-full px-3">
        <Dialog>
          <SheetTrigger className="min-[1200px]:hidden p-2 transition">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  className="relative text-lg font-normal tracking-tighter mr-8 flex items-center  animate-in-reverse"
                  style={{ "--index": 2 } as CSSProperties}
                >
                  <span className="text-primary">
                    Canvas<span className="font-black">BEL</span>
                  </span>
                </Link>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="">
                  <Button variant="outline" className="w-full">
                    Add{" "}
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/cms/ai">
                  <Button variant="outline" className="w-full"></Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/cms/api">
                  <Button variant="outline" className="w-full"></Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/cms/settings">
                  <Button variant="outline" className="w-full"></Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        <div className="flex gap-4 mr-10">
          <span className="flex items-center justify-center text-center gap-3">
            <p className="text-sm">Export</p> <PiExport className="w-7 h-7" />
          </span>
          <UserButton />
        </div>
      </header>
    </div>
  );
}
