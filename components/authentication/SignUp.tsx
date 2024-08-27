"use client";

import { CSSProperties, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const { toast } = useToast();

  if (!isLoaded) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setCredentials((prev) => ({ ...prev, acceptTerms: checked }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { email, password, confirmPassword, acceptTerms } = credentials;

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Error",
        description: "You must accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (signUp) {
        await signUp.create({ emailAddress: email, password });
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        setShowOTP(true);
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
      toast({
        title: "Sign Up Failed",
        description:
          err.errors[0].message || "An error occurred during sign up.",
        variant: "destructive",
      });
    }
  }

  async function handleVerifyOTP() {
    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({
        code: otp,
      });
      if (completeSignUp?.status === "complete") {
        if (setActive) {
          await setActive({ session: completeSignUp.createdSessionId });
        }
        toast({
          title: "Sign Up Successful",
          description: "Your account has been created successfully.",
          variant: "default",
        });
        router.push("/signin");
      } else {
        toast({
          title: "Verification Failed",
          description: "The verification code is incorrect. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
      toast({
        title: "Verification Error",
        description:
          err.errors[0].message || "An error occurred during verification.",
        variant: "destructive",
      });
    }
  }

  return (
    <div
      className="relative flex flex-col mx-auto items-center justify-center overflow-hidden rounded-lg border border-primary bg-secondary px-4 py-12 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 mt-24 w-full h-full animate-in"
      style={{ "--index": 1 } as CSSProperties}
    >
      <h2
        className="text-center text-3xl font-bold uppercase mb-8 sm:mb-10 md:mb-12 animate-in"
        style={{ "--index": 2 } as CSSProperties}
      >
        {showOTP ? "Verify Email" : "Create an account"}
      </h2>
      <div
        className="w-full max-w-md space-y-6 rounded-lg bg-tertiary p-6 sm:p-8 md:p-10 shadow-md animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        {!showOTP ? (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {["email", "password", "confirmPassword"].map((field) => (
              <div key={field}>
                <h1 className="text-sm mb-1 ml-1 text-primary">
                  {field
                    .split(/(?=[A-Z])/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h1>
                <Input
                  type={
                    field.includes("password") ||
                    field.includes("confirmPassword")
                      ? "password"
                      : "text"
                  }
                  name={field}
                  placeholder={`Enter your ${field
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .toLowerCase()}`}
                  value={credentials[
                    field as keyof typeof credentials
                  ].toString()}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="acceptTerms"
                checked={credentials.acceptTerms}
                onCheckedChange={handleCheckboxChange}
              />
              <label
                htmlFor="acceptTerms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Create account
            </Button>
          </form>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm text-secondary mx-auto flex items-center justify-center">
              Please enter the verification code sent to your email.
            </p>
            <InputOTP value={otp} onChange={setOTP} maxLength={6}>
              <InputOTPGroup className="flex items-center justify-center mx-auto">
                {Array.from({ length: 6 }).map((_, index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button onClick={handleVerifyOTP} className="w-full">
              Verify
            </Button>
          </div>
        )}
        <p className="mt-4 sm:mt-6 text-center text-sm text-secondary">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-link hover:opacity-70 transition duration-200 ease-linear"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
