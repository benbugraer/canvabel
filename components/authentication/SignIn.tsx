"use client";

import { CSSProperties, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function SignIn() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const { toast } = useToast();

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
        if (createdSessionId) {
          setActive({ session: createdSessionId });
          toast({
            title: "Login Successful",
            description: "You have successfully logged in.",
            variant: "default",
          });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.error("Error:", err.errors[0].message);
      toast({
        title: "Login Failed",
        description: err.errors[0].message || "An error occurred during login.",
        variant: "destructive",
      });
    }
  }

  return (
    <div
      className="relative flex flex-col mx-auto items-center justify-center overflow-hidden rounded-lg border border-primary bg-secondary px-4 py-12 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 mt-24 w-sm h-full animate-in"
      style={{ "--index": 1 } as CSSProperties}
    >
      <h2
        className="text-center text-3xl font-bold uppercase mb-8 sm:mb-10 md:mb-12 animate-in"
        style={{ "--index": 2 } as CSSProperties}
      >
        Sign in to your account
      </h2>
      <div
        className="w-full max-w-md space-y-6 rounded-lg bg-tertiary p-6 sm:p-8 md:p-10 shadow-md animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {["email", "password"].map((field) => (
            <div key={field}>
              <h1 className="text-sm mb-1 ml-1 text-primary">
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
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Sign in
          </Button>
        </form>
        <p className="mt-4 sm:mt-6 text-center text-sm text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-link hover:opacity-70 transition duration-200 ease-linear"
          >
            Sign up
          </Link>
        </p>
        <Link
          href="/forgotpassword"
          className="text-sm text-tertiary text-center flex justify-center items-center hover:text-black transition ease-linear dark:hover:text-white"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
