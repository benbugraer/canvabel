"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navigation() {
  return (
    <header
      className="bg-tertiary lg:rounded-lg  lg:w-5/12  mx-auto lg:my-6 top-0 sticky z-40  backdrop-blur-xl animate-in-reverse"
      style={{ "--index": 0 } as CSSProperties}
    >
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-lg"></hr>

      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2"
        >
          <span className="text-primary">
            Canvas<span className="font-black">BEL</span>
          </span>
        </Link>
        <nav className="flex  items-center gap-5 justify-end ml-auto">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-lg text-white font-light text-sm transition duration-200 ease-linear">
            <Link href="/signup">Sign Up / Sign In </Link>
          </button>
          <ThemeSwitcher />
        </nav>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 shadow-lg"></hr>
    </header>
  );
}
