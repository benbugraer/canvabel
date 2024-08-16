import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
// import Navigation from "@/components/Navigation";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import ForgotPassword from "./forgotpassword/page";
// import { UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CanvasBel | Home",
  description: "Welcome to CanvasBel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider appearance={{}}>
        <body
          className={clsx(
            "antialiased bg-contrast dark:bg-primary text-primary",
            raleway.className
          )}
        >
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          {/* <SignedIn>
            <UserButton />
          </SignedIn> */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Navigation /> */}
            <div className="">{children}</div>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
