import Link from "next/link";
import { CSSProperties } from "react";
import { AntDesignGithubOutlined } from "@/public/icons/GithubIcon";
import { HugeiconsNewTwitter } from "@/public/icons/XIcon";
import { DeviconLinkedin } from "@/public/icons/LinkedinIcon";

const Footer = () => {
  const dockItems = [
    {
      url: "https://github.com/benbugraer",
      icon: <AntDesignGithubOutlined className="w-6 h-6" />,
    },
    {
      url: "https://x.com/benbugraer",
      icon: <HugeiconsNewTwitter className="w-6 h-6" />,
    },
    {
      url: "https://www.linkedin.com/in/bugraer/",
      icon: <DeviconLinkedin className="w-6 h-6" />,
    },
  ];
  return (
    <main className="flex min-w-screen flex-col items-center justify-between border-t pt-[4rem] px-7 pb-7">
      <footer
        aria-labelledby="footer-heading"
        className="font-inter w-full max-w-7xl animate-in"
        style={{ "--index": 6 } as CSSProperties}
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="space-y-8">
              <Link
                href="/"
                className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2"
              >
                <span className="text-primary">
                  Canvas<span className="font-black">BEL</span>
                </span>
              </Link>
              <p className="text-md max-w-xs leading-6 text-gray-700 dark:text-gray-400">
                I built this because my dad need this for his business. I hope
                you find it useful too.
              </p>

              <div className="gap-2 text-sm flex">
                <h1> Made it by</h1>{" "}
                <Link
                  target="_blank"
                  href="https://github.com/benbugraer"
                  className="font-bold uppercase"
                >
                  Bugra Er
                </Link>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
              <div className="md:mt-0">
                <h3 className="text-sm uppercase leading-6">Connect with me</h3>
                <div className="mt-6 flex gap-3">
                  {dockItems.map((item) => (
                    <div key={item.url}>
                      <a
                        target="_blank"
                        href={item.url}
                        className="leading-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-tertiary duration-500 hover:duration-500 hover:text-accent-foreground h-9 py-2 w-9"
                      >
                        {item.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 dark:text-gray-400 text-gray-700">
              &copy; 2024 Canvasbel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
