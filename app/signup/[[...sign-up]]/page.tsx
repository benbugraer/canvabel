import SignUp from "@/components/authentication/SignUp";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CanvasBel | Sign Up",
  description: "Lets sign up to CanvasBel",
};
export default function SignUpPage() {
  return (
    <div>
      <SignUp />
    </div>
  );
}
