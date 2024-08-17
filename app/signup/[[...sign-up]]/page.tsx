import SignUp from "@/components/authentication/SignUp";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CanvasBel | Sign Up",
  description: "Lets sign up to CanvasBel",
};
export default function SignUpPage() {
  return (
    <div className="flex my-24">
      <SignUp />
      <Toaster />
    </div>
  );
}
