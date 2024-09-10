"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ImSpinner } from "react-icons/im";

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
}) => (
  <Clerk.Loading>
    {(loading) => (
      <Button disabled={isLoading}>
        {loading ? <ImSpinner className="size-4 animate-spin" /> : children}
      </Button>
    )}
  </Clerk.Loading>
);

const SignInCard: React.FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, description, children }) => (
  <Card className="w-full sm:w-96">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-y-4">{children}</CardContent>
  </Card>
);

export default function SignInPage() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center my-auto mt-44 lg:mt-52">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <SignInCard
                  title={
                    <>
                      Sign in to <span className="font-black">CanvasBEL</span>
                    </>
                  }
                  description="Welcome back! Please sign in to continue"
                >
                  <Clerk.Field name="identifier" className="space-y-2">
                    <Clerk.Label asChild>
                      <Label>Email address</Label>
                    </Clerk.Label>
                    <Clerk.Input type="email" required asChild>
                      <Input />
                    </Clerk.Input>
                    <Clerk.FieldError className="block text-sm text-destructive" />
                  </Clerk.Field>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action submit asChild>
                        <LoadingButton isLoading={isGlobalLoading}>
                          Continue
                        </LoadingButton>
                      </SignIn.Action>
                      <Button variant="link" size="sm" asChild>
                        <Link href="/signup">
                          Don&apos;t have an account? Sign up
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </SignInCard>
              </SignIn.Step>

              <SignIn.Step name="choose-strategy">
                <SignInCard
                  title="Use another method"
                  description="Facing issues? You can use any of these methods to sign in."
                >
                  <SignIn.SupportedStrategy name="email_code" asChild>
                    <Button
                      type="button"
                      variant="link"
                      disabled={isGlobalLoading}
                    >
                      Email code
                    </Button>
                  </SignIn.SupportedStrategy>
                  <SignIn.SupportedStrategy name="password" asChild>
                    <Button
                      type="button"
                      variant="link"
                      disabled={isGlobalLoading}
                    >
                      Password
                    </Button>
                  </SignIn.SupportedStrategy>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <SignIn.Action navigate="previous" asChild>
                        <LoadingButton isLoading={isGlobalLoading}>
                          Go back
                        </LoadingButton>
                      </SignIn.Action>
                    </div>
                  </CardFooter>
                </SignInCard>
              </SignIn.Step>

              <SignIn.Step name="verifications">
                <SignIn.Strategy name="password">
                  <SignInCard
                    title="Check your email"
                    description="Enter the verification code sent to your email"
                  >
                    <Clerk.Field name="password" className="space-y-2">
                      <Clerk.Label asChild>
                        <Label>Password</Label>
                      </Clerk.Label>
                      <Clerk.Input type="password" asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className="block text-sm text-destructive" />
                    </Clerk.Field>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action submit asChild>
                          <LoadingButton isLoading={isGlobalLoading}>
                            Continue
                          </LoadingButton>
                        </SignIn.Action>
                        <SignIn.Action navigate="choose-strategy" asChild>
                          <Button type="button" size="sm" variant="link">
                            Use another method
                          </Button>
                        </SignIn.Action>
                        <SignIn.Action navigate="forgot-password" asChild>
                          <Button type="button" size="sm" variant="link">
                            <Link href="/forgotpassword">Forgot password?</Link>
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </SignInCard>
                </SignIn.Strategy>

                <SignIn.Strategy name="email_code">
                  <SignInCard
                    title="Check your email"
                    description="Enter the verification code sent to your email"
                  >
                    <Clerk.Field name="code">
                      <Clerk.Label className="sr-only">
                        Email verification code
                      </Clerk.Label>
                      <div className="grid gap-y-2 items-center justify-center">
                        <div className="flex justify-center text-center">
                          <Clerk.Input
                            type="otp"
                            className="flex justify-center has-[:disabled]:opacity-50"
                            autoSubmit
                            render={({ value, status }) => {
                              return (
                                <div
                                  data-status={status}
                                  className={cn(
                                    "relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-xl first:border-l last:rounded-r-xl",
                                    {
                                      "z-10 ring-2 ring-black dark:ring-white ring-offset-background":
                                        status === "cursor" ||
                                        status === "selected",
                                    }
                                  )}
                                >
                                  {value}
                                  {status === "cursor" && (
                                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                      <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                    </div>
                                  )}
                                </div>
                              );
                            }}
                          />
                        </div>
                        <Clerk.FieldError className="block text-sm text-destructive text-center" />
                        <SignIn.Action
                          asChild
                          resend
                          className="text-muted-foreground"
                          fallback={({ resendableAfter }) => (
                            <Button variant="link" size="sm" disabled>
                              Didn&apos;t receive a code? Resend (
                              <span className="tabular-nums">
                                {resendableAfter}
                              </span>
                              )
                            </Button>
                          )}
                        >
                          <Button variant="link" size="sm">
                            Didn&apos;t receive a code? Resend
                          </Button>
                        </SignIn.Action>
                      </div>
                    </Clerk.Field>
                    <CardFooter>
                      <div className="grid w-full gap-y-4">
                        <SignIn.Action submit asChild>
                          <LoadingButton isLoading={isGlobalLoading}>
                            Continue
                          </LoadingButton>
                        </SignIn.Action>
                        <SignIn.Action navigate="choose-strategy" asChild>
                          <Button size="sm" variant="link">
                            Use another method
                          </Button>
                        </SignIn.Action>
                      </div>
                    </CardFooter>
                  </SignInCard>
                </SignIn.Strategy>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
