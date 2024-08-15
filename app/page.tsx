import { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { DockWithPreview } from "@/components/DockWithPreview";
import { DeviconNextjs } from "@/public/icons/NextIcon";
import { DeviconSupabase } from "@/public/icons/SupabaseIcon";
import { DeviconTailwindcss } from "@/public/icons/TailwindIcon";
import { LogosTypescriptIcon } from "@/public/icons/TypeIcon";
import { SimpleIconsClerk } from "@/public/icons/ClerkIcon";
import { SimpleIconsShadcnui } from "@/public/icons/ShadcnIcon";
import { LogosReact } from "@/public/icons/ReactIcons";
import { Cover } from "@/components/ui/cover";
import Button from "../components/Button";
import DotPattern from "../components/magicui/dot-pattern";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";

export default function Home() {
  const techStack = [
    { url: "https://nextjs.org/", icon: DeviconNextjs },
    { url: "https://react.dev/", icon: LogosReact },
    { url: "https://www.typescriptlang.org/", icon: LogosTypescriptIcon },
    { url: "https://tailwindcss.com/", icon: DeviconTailwindcss },
    { url: "https://shadcnui.com/", icon: SimpleIconsShadcnui },
    { url: "https://supabase.com/", icon: DeviconSupabase },
    { url: "https://clerk.com/", icon: SimpleIconsClerk },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[2rem] p-3">
      <div className="my-5">
        <div className="z-10 flex mb-4 items-center justify-center">
          <Link
            href="https://github.com/benbugraer"
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 animate-in"
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
        className="scroll-m-20 animate-in text-5xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-6xl text-center max-w-[1000px]"
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
        <Button href="/signup">Sign Up</Button>
        <Button href="/signin">Sign In</Button>
      </div>
      <div
        className="relative animate-in flex max-w-6xl justify-center overflow-hidden mt-7"
        style={{ "--index": 5 } as CSSProperties}
      >
        <ShineBorder
          className="relative flex h-[500px] mb-10 lg:w-[900px] flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-sm"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Shine Border
          </span>
        </ShineBorder>
      </div>
    </div>
  );
}
