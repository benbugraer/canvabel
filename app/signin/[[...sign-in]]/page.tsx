import SignIn from "@/components/authentication/SignIn";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CanvasBel | Sign In",
  description: "Lets sign in to CanvasBel",
};
export default function SignInPage() {
  return (
    <div>
      <SignIn />
    </div>
  );
}
