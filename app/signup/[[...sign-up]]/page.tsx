"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CSSProperties } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [error, setError] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();

  if (!isLoaded) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { email, password, confirmPassword, acceptTerms } = formData;

    // if (!acceptTerms) {
    //   alert("Please accept the terms and privacy policy");
    //   return;
    // }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      if (signUp) {
        await signUp.create({ emailAddress: email, password });
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        setActive({ session: signUp.createdSessionId });
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
    }
  }

  return (
    <div
      className="relative flex flex-col mx-auto items-center justify-center overflow-hidden rounded-lg border border-secondary bg-primary px-4 py-12 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 mt-24 w-sm h-full animate-in"
      style={{ "--index": 1 } as CSSProperties}
    >
      <div className="w-full max-w-md space-y-8">
        <h2
          className="mt-6 text-center text-3xl font-bold uppercase animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          Create an account
        </h2>
        <div
          className="bg-tertiary p-8 rounded-lg shadow-md animate-in"
          style={{ "--index": 3 } as CSSProperties}
        >
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
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-secondary">
            Already have an account?{" "}
            <a
              href="/signin"
              className="font-medium text-link hover:opacity-70 transition duration-200 ease-linear"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
