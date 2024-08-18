import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";

export default function Dashboard() {
  return (
    <div className="lg:block border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[50px] items-center justify-between border-b px-3 w-full">
          <Link
            href="/"
            className="relative text-lg font-normal tracking-tighter mr-8 flex items-center space-x-2"
          >
            <span className="text-primary">
              Canvas<span className="font-black">BEL</span>
            </span>
          </Link>
          <div className="justify-end items-end gap-3 flex">
            <Link href="/">
              <GoHomeFill className="w-7 h-7" />
            </Link>
            <UserButton />
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            Hello World
          </nav>
        </div>
      </div>
    </div>
  );
}
