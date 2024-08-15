// hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <motion.button
      className="rounded-md  relative px-10 flex items-center justify-center text-center duration-500 ease-linear transition-colors text-white hover:text-black dark:bg-white  dark:text-black dark:hover:bg-tertiary  dark:hover:text-white bg-black hover:bg-tertiary hover:transition-colors hover:duration-500 hover:ease-linear  hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        className="flex items-center py-2 px-2 gap-3 capitalize font-normal ease-linear"
      >
        {children}
      </Link>
    </motion.button>
  );
}
