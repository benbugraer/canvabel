"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { useUser } from "@clerk/nextjs"; // Clerk hook
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import ShineBorder from "../magicui/shine-border";
import { cn } from "@/lib/utils";
import { Cover } from "../ui/cover";
import Button from "@/components/Button";
export default function HeroSection() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center mt-[2rem] mb-[3rem] p-3">
      <div className="my-5">
        <div className="z-10 flex mb-4 items-center justify-center">
          <Link
            target="_blank"
            href="https://github.com/benbugraer"
            className={cn(
              "group rounded-md border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 animate-in"
            )}
            style={{ "--index": 1 } as CSSProperties}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>Created By BugraEr</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
        </div>
      </div>
      <h1
        className="scroll-m-20 animate-in text-5xl sm:text-4xl md:text-6xl font-semibold tracking-tighter lg:text-6xl text-center max-w-[1000px]"
        style={{ "--index": 2 } as CSSProperties}
      >
        Welcome To <Cover>CanvasBel</Cover>
      </h1>
      <p
        className="mx-auto animate-in max-w-[700px] text-tertiary md:text-lg text-center mt-4"
        style={{ "--index": 3 } as CSSProperties}
      >
        Create your own canvas and share it with the world. You can also explore
        other people&apos;s canvases and get inspired.
      </p>

      <div
        className="flex gap-7 mt-8 animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        {user ? (
          // <Button href="/dashboard">Dashboard</Button>
          <Link href="/dashboard">
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-12 py-3 bg-[#0070f3] rounded-lg text-white font-semibold text-sm transition duration-200 ease-linear flex items-center justify-center gap-1">
              <p>Dashboard</p>
              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </button>
          </Link>
        ) : (
          <>
            <Button href="/signin">Sign In</Button>
            <Button href="/signup">Sign Up</Button>
          </>
        )}
      </div>

      <div
        className="relative animate-in flex max-w-6xl justify-center overflow-hidden mt-14"
        style={{ "--index": 5 } as CSSProperties}
      >
        <ShineBorder
          className="relative flex h-[500px] mb-10 lg:w-[900px] flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-sm"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <h1>Hellow</h1>
        </ShineBorder>
      </div>
    </div>
  );
}
