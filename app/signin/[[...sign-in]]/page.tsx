import SignIn from "@/components/authentication/SignIn";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CanvasBel | Sign In",
  description: "Lets sign in to CanvasBel",
};
export default function SignInPage() {
  return (
    <div className="flex my-24">
      <SignIn />
      <Toaster />
    </div>
  );
}
