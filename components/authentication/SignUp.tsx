"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const { toast } = useToast();

  if (!isLoaded) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { email, password, confirmPassword, acceptTerms } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match.",
      });
      return;
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "You must accept the terms and conditions.",
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
      setError(err.errors[0].message);
      toast({
        variant: "destructive",
        title: "Sign Up Error",
        description: err.errors[0].message,
      });
    }
  }

  async function handleVerifyOTP() {
    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({
        code: otp,
      });
      if (completeSignUp?.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
        toast({
          variant: "destructive",
          title: "Verification Failed",
          description: "The verification code is incorrect. Please try again.",
        });
      }
      if (completeSignUp?.status === "complete") {
        if (setActive) {
          await setActive({ session: completeSignUp.createdSessionId });
        }
        router.push("/signin");
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
      setError(err.errors[0].message);
      toast({
        variant: "destructive",
        title: "Verification Error",
        description: err.errors[0].message,
      });
    }
  }

  return (
    <>
      <div
        className="relative flex flex-col mx-auto items-center justify-center overflow-hidden rounded-lg border border-secondary bg-secondary px-4 py-12 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 mt-24 w-sm h-full animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        <div className="w-full max-w-md space-y-8">
          <h2
            className="mt-6 text-center text-3xl font-bold uppercase animate-in"
            style={{ "--index": 2 } as CSSProperties}
          >
            {showOTP ? "Verify Email" : "Create an account"}
          </h2>
          <div
            className="bg-tertiary p-8 rounded-lg shadow-md animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            {!showOTP ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-primary"
                    >
                      Password
                    </label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-primary"
                    >
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                  Create account
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <p className="text-sm text-secondary mx-auto flex items-center justify-center">
                  Please enter the verification code sent to your email.
                </p>
                <InputOTP value={otp} onChange={setOTP} maxLength={6}>
                  <div className="flex items-center justify-center mx-auto">
                    <InputOTPGroup>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} />
                      ))}
                    </InputOTPGroup>
                  </div>
                </InputOTP>
                <Button onClick={handleVerifyOTP} className="w-full">
                  Verify
                </Button>
              </div>
            )}
            <p className="mt-4 text-center text-sm text-secondary">
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
      </div>
    </>
  );
}
