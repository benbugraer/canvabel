"use client";
import Link from "next/link";
// import { BorderBeam } from "../magicui/border-beam";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs"; // Clerk hook
import Button from "@/components/Button";
import { CSSProperties } from "react";
import { Cover } from "../ui/cover";

export default function HeroSection() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center mt-[4rem] lg:mt-[1rem] mb-[3rem] p-3">
      <h1
        className="scroll-m-20 text-3xl sm:text-3xl md:text-5xl font-semibold tracking-tight lg:text-5xl text-center max-w-[550px] animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        Welcome To <Cover>CanvasBEL</Cover> Let&apos;s Design Something
      </h1>
      <p
        className="mx-auto max-w-[700px] text-tertiary md:text-lg text-sm text-center mt-2 animate-in"
        style={{ "--index": 2 } as CSSProperties}
      >
        Is a platform where you can design and using your creativity for your
        projects. You can create your own design or use the template provided.
      </p>
      <div
        className="flex gap-7 mt-8 animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        {user ? (
          <Link href="/canvas">
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-12 py-3 bg-[#0070f3] rounded-lg text-white font-semibold text-sm transition duration-200 ease-linear flex items-center justify-center gap-1">
              <p>Canvas</p>
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
        className="relative flex max-w-4xl justify-center overflow-hidden rounded-lg animate-in mt-7"
        style={{ "--index": 4 } as CSSProperties}
      >
        <div className="relative rounded-lg">
          <Image
            width={1400}
            height={800}
            src="/hero/dashboard-light.png"
            alt="Hero Image"
            className="block dark:hidden w-[1400px] border border-secondary rounded-lg object-contain shadow-lg"
          />
          <Image
            width={1400}
            height={800}
            src="/hero/dashboard-dark.png"
            alt="Hero Image"
            className="hidden dark:block w-[1400px] rounded-lg border border-secondary object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
