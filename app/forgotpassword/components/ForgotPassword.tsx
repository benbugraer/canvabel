"use client";

import {CSSProperties, useState} from "react";
import {useSignIn} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import {toast} from "@/components/ui/use-toast";
import {Toaster} from "@/components/ui/toaster";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otp, setOTP] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState<"email" | "otp" | "newPassword">("email");
    const {signIn, isLoaded} = useSignIn();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;

        setIsLoading(true);

        try {
            await signIn.create({
                strategy: "reset_password_email_code",
                identifier: email,
            });
            toast({
                title: "Email Sent",
                description:
                    "Password reset instructions have been sent to your email.",
                duration: 5000, // Toast will disappear after 5 seconds
            });
            setStep("otp");
        } catch (error) {
            toast({
                title: "Error",
                description: "An error occurred. Please try again.",
                variant: "destructive",
                duration: 5000,
            });
            console.error("Password reset error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = async () => {
        if (!isLoaded) return;

        setIsLoading(true);

        try {
            const result = await signIn.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code: otp,
            });

            if (result.status === "needs_new_password") {
                setStep("newPassword");
            } else {
                throw new Error("Unexpected verification result");
            }
        } catch (error) {
            toast({
                title: "OTP Verification Error",
                description: "OTP verification error. Please try again.",
                variant: "destructive",
                duration: 5000,
            });
            console.error("OTP verification error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!isLoaded) return;

        if (newPassword !== confirmPassword) {
            toast({
                title: "Error",
                description: "Passwords do not match.",
                variant: "destructive",
                duration: 5000,
            });
            return;
        }

        setIsLoading(true);

        try {
            const result = await signIn.resetPassword({
                password: newPassword,
            });

            if (result.status === "complete") {
                toast({
                    title: "Password Changed",
                    description:
                        "Your password has been successfully updated. Redirecting to the homepage.",
                    duration: 5000,
                });
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                throw new Error("Unexpected reset password result");
            }
        } catch (error) {
            toast({
                title: "Password Reset Error",
                description: "Password reset error. Please try again.",
                variant: "destructive",
                duration: 5000,
            });
            console.error("Password reset error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="flex items-center justify-center mx-auto min-h-screen animate-in overflow-hidden"
            style={{"--index": 0} as CSSProperties}
        >
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle
                        className="animate-in"
                        style={{"--index": 1} as CSSProperties}
                    >
                        Forgot Password
                    </CardTitle>
                    <CardDescription
                        className="animate-in"
                        style={{"--index": 2} as CSSProperties}
                    >
                        {step === "email" &&
                            "Enter your email address to receive password reset instructions."}
                        {step === "otp" &&
                            "Enter the verification code sent to your email."}
                        {step === "newPassword" && "Enter your new password."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {step === "email" && (
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label
                                        htmlFor="email"
                                        className="animate-in"
                                        style={{"--index": 3} as CSSProperties}
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="example@email.com"
                                        className="animate-in"
                                        style={{"--index": 4} as CSSProperties}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <Button
                                className="w-full mt-4 animate-in"
                                style={{"--index": 5} as CSSProperties}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send Password Reset"}
                            </Button>
                        </form>
                    )}

                    {step === "otp" && (
                        <div className="space-y-6">
                            <p
                                className="text-sm text-secondary mx-auto flex items-center justify-center animate-in"
                                style={{"--index": 0} as CSSProperties}
                            >
                                Please enter the verification code sent to your email.
                            </p>
                            <InputOTP value={otp} onChange={setOTP} maxLength={6}>
                                <div
                                    className="flex items-center justify-center mx-auto animate-in"
                                    style={{"--index": 1} as CSSProperties}
                                >
                                    <InputOTPGroup>
                                        {Array.from({length: 6}).map((_, index) => (
                                            <InputOTPSlot key={index} index={index}/>
                                        ))}
                                    </InputOTPGroup>
                                </div>
                            </InputOTP>
                            <Button
                                onClick={handleVerifyOTP}
                                className="w-full animate-in"
                                style={{"--index": 2} as CSSProperties}
                                disabled={isLoading}
                            >
                                {isLoading ? "Verifying..." : "Verify"}
                            </Button>
                        </div>
                    )}

                    {step === "newPassword" && (
                        <div className="space-y-4">
                            <div
                                className="flex flex-col space-y-1.5 animate-in"
                                style={{"--index": 0} as CSSProperties}
                            >
                                <Label
                                    htmlFor="newPassword"
                                    className="animate-in"
                                    style={{"--index": 1} as CSSProperties}
                                >
                                    New Password
                                </Label>
                                <Input
                                    id="newPassword"
                                    type="password"
                                    className="aniamte-in"
                                    style={{"--index": 2} as CSSProperties}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label
                                    htmlFor="confirmPassword"
                                    className="animate-in"
                                    style={{"--index": 3} as CSSProperties}
                                >
                                    Confirm Password
                                </Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    className="animate-in"
                                    style={{"--index": 4} as CSSProperties}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button
                                onClick={handleResetPassword}
                                style={{"--index": 5} as CSSProperties}
                                className="w-full animate-in"
                                disabled={isLoading}
                            >
                                {isLoading ? "Changing Password..." : "Change Password"}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
            <Toaster/>
        </div>
    );
}
