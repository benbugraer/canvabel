import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import ForgotPassword from "@/components/authentication/ForgotPassword";

export const metadata: Metadata = {
  title: "CanvasBel | Forgot Password",
  description: "Lets sign in to CanvasBel",
};
export default function ForgotPasswordPage() {
  return (
    <div className="flex">
      <ForgotPassword />
      <Toaster />
    </div>
  );
}
