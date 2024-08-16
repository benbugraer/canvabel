import Navigation from "./Navigation";
import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex min-w-screen flex-col items-center justify-between pb-[4rem]">
        {children}
      </main>
    </>
  );
}
