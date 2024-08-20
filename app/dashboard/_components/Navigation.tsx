import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { CSSProperties } from "react";
import { GoHomeFill } from "react-icons/go";

export default function Navigation() {
  return (
    <div className="lg:block border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className="flex h-[50px] items-center justify-between border-b px-3 w-full animate-in-reverse"
          style={{ "--index": 1 } as CSSProperties}
        >
          <Link
            href="/"
            className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2 animate-in-reverse"
            style={{ "--index": 2 } as CSSProperties}
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
          <div
            className="justify-end items-end gap-3 flex animate-in-reverse"
            style={{ "--index": 3 } as CSSProperties}
          >
            <Link href="/">
              <GoHomeFill className="w-7 h-7" />
            </Link>
            <UserButton />
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/"
              className="animate-in"
              style={{ "--index": 4 } as CSSProperties}
            >
              Page one
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
