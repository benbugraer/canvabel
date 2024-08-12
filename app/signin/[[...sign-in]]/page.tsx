"use client";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { isLoaded, signIn, setActive } = useSignIn();

  if (!isLoaded) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (signIn) {
        const { createdSessionId } = await signIn.create({
          identifier: credentials.email,
          password: credentials.password,
        });
        if (createdSessionId) setActive({ session: createdSessionId });
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
    }
  }

  return (
    <div className="relative flex flex-col mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background px-4 py-12 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 mt-24 md:shadow-xl h-full">
      <h2 className="text-center text-3xl font-bold uppercase mb-8 sm:mb-10 md:mb-12">
        Sign in to your account
      </h2>
      <div className="w-full max-w-md space-y-6 rounded-lg bg-primary p-6 sm:p-8 md:p-10 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {["email", "password"].map((field) => (
            <div key={field}>
              <h1 className="text-sm mb-1 ml-1 text-tertiary">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </h1>
              <Input
                type={field}
                name={field}
                placeholder={`Enter your ${field}`}
                value={credentials[field as keyof typeof credentials]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-link hover:opacity-70 transition duration-200 ease-linear"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
