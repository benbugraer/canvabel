"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-12 py-1.5 bg-[#333] dark:bg-[#fff] text-[#fff]  dark:text-[#333] rounded-md font-semibold transition duration-100 ease-linear"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
