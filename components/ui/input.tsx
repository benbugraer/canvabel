import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-tertiary bg-white px-3 py-2 text-sm focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary dark:bg-primary s dark:placeholder:text-gray-400 dark:focus-visible:bg-secondary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
