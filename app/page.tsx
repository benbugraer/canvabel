import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShineBorder from "@/components/magicui/shine-border";
import { CSSProperties } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { DockWithPreview } from "@/components/DockWithPreview";
import { DeviconNextjs } from "@/public/icons/NextIcon";
import { DeviconSupabase } from "@/public/icons/SupabaseIcon";
import { DeviconTailwindcss } from "@/public/icons/TailwindIcon";
import { LogosTypescriptIcon } from "@/public/icons/TypeIcon";
import { SimpleIconsClerk } from "@/public/icons/ClerkIcon";
import { SimpleIconsShadcnui } from "@/public/icons/ShadcnIcon";
import { LogosReact } from "@/public/icons/ReactIcons";

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
    <div className="relative overflow-hidden">
      <div className=" pb-[40rem] pt-16 sm:pb-40 sm:pt-24 lg:pb-48">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] animate-in"
          )}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-xl">
            <h1
              className="text-4xl font-bold tracking-tight text-primary sm:text-6xl animate-in"
              style={{ "--index": 1 } as CSSProperties}
            >
              Welcome CanvasBel
            </h1>
            <p
              className="mt-4 text-xl text-tertiary animate-in"
              style={{ "--index": 2 } as CSSProperties}
            >
              A platform for artists to showcase their work and connect with
              their audience.
            </p>
          </div>
          <div className="gap-5 flex mt-12">
            <Button
              className="inline-block w-60 animate-in bg-black text-white hover:bg-tertiary hover:text-black dark:bg-white dark:text-black dark:hover:bg-tertiary dark:hover:text-white duration-300 ease-linear transition-colors hover:duration-300 hover:ease-linear hover:transition-colors"
              style={{ "--index": 3 } as CSSProperties}
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button
              className="inline-block w-60 animate-in bg-black text-white hover:bg-tertiary hover:text-black dark:bg-white dark:text-black dark:hover:bg-tertiary dark:hover:text-white duration-300 ease-linear transition-colors hover:duration-300 hover:ease-linear hover:transition-colors"
              style={{ "--index": 4 } as CSSProperties}
            >
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>
          <div
            className="mt-12 grid grid-cols-4 lg:flex gap-1 lg:gap-4  animate-in"
            style={{ "--index": 5 } as CSSProperties}
          >
            {techStack.map(({ url, icon: Icon }) => (
              <DockWithPreview key={url} url={url}>
                <Icon className="w-4 h-4" />
              </DockWithPreview>
            ))}
          </div>
          <div>
            <div className="mt-32">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl animate-in"
                style={{ "--index": 6 } as CSSProperties}
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <ShineBorder
                      className="relative flex h-[600px]  w-11/12 flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
                      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                        Shine Border
                      </span>
                    </ShineBorder>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
