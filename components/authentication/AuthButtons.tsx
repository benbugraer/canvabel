import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface AuthButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function AuthButton({
  text,
  className,
  onClick,
}: AuthButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "group flex h-10 w-full items-center justify-center gap-3 rounded-lg bg-black dark:bg-white p-2 font-bold transition-colors duration-300 ease-in-out hover:bg-secondary dark:hover:bg-secondary",
          className
        )}
      >
        <span
          className={cn(
            "text-white dark:text-black transition-colors duration-300 ease-in-out group-hover:text-black dark:group-hover:text-white"
          )}
        >
          {text}
        </span>
        <div
          className={cn(
            "relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-300",
            "bg-secondary group-hover:bg-black dark:bg-black dark:group-hover:bg-white"
          )}
        >
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-white dark:text-black opacity-0 group-hover:opacity-100"
              )}
            />
            <ArrowRight
              size={16}
              className={cn(
                "size-7 transform p-1 text-black dark:text-white opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
              )}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
