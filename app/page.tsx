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
      <div className="pb-[40rem] relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl sm:pb-40 mt-6 lg:mt-0 lg:pb-48">
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
        <div className="sm:max-w-xl">
          <h1
            className="text-5xl font-bold tracking-tight text-primary sm:text-6xl animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            Welcome{" "}
            <span
              className="animate-in"
              style={{ "--index": 2 } as CSSProperties}
            >
              <Cover>CanvasBel</Cover>
            </span>
          </h1>
          <p
            className="mt-4 text-xl text-tertiary animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            A platform for creating and sharing beautiful designs and art with
            the world. Get started today!
          </p>
        </div>

        <div
          className="gap-6 flex mt-12 animate-in"
          style={{ "--index": 4 } as CSSProperties}
        >
          <Button href="/signup">Sign Up</Button>
          <Button href="/signin">Sign In</Button>
        </div>
        <div
          className="mt-12 grid grid-cols-4 lg:flex gap-1 lg:gap-4 animate-in"
          style={{ "--index": 5 } as CSSProperties}
        >
          {techStack.map(({ url, icon: Icon }) => (
            <DockWithPreview key={url} url={url}>
              <Icon className="w-5 h-5" />
            </DockWithPreview>
          ))}
        </div>
        {/* <div>
            <div className="mt-32">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl animate-in"
                style={{ "--index": 6 } as CSSProperties}
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8"></div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}
