"use client";

import { CSSProperties, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "newPassword">("email");
  const { signIn, isLoaded } = useSignIn();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setSuccessMessage(
        "Şifre sıfırlama talimatları e-posta adresinize gönderildi."
      );
      setStep("otp");
    } catch (error) {
      setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      console.error("Şifre sıfırlama hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!isLoaded) return;

    setIsLoading(true);
    setErrorMessage("");

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
      setErrorMessage("OTP doğrulama hatası. Lütfen tekrar deneyin.");
      console.error("OTP doğrulama hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!isLoaded) return;

    if (newPassword !== confirmPassword) {
      setErrorMessage("Şifreler eşleşmiyor.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const result = await signIn.resetPassword({
        password: newPassword,
      });

      if (result.status === "complete") {
        setSuccessMessage("Şifreniz başarıyla değiştirildi.");
        toast({
          title: "Şifre Değiştirildi",
          description:
            "Şifreniz başarıyla güncellendi. Anasayfaya yönlendiriliyorsunuz.",
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        throw new Error("Unexpected reset password result");
      }
    } catch (error) {
      setErrorMessage("Şifre sıfırlama hatası. Lütfen tekrar deneyin.");
      console.error("Şifre sıfırlama hatası:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen animate-in"
      style={{ "--index": 0 } as CSSProperties}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle
            className="animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            Forgot Password
          </CardTitle>
          <CardDescription>
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
                  <Label htmlFor="email">E-posta</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                className="w-full mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Gönderiliyor..." : "Şifre Sıfırlama Gönder"}
              </Button>
            </form>
          )}

          {step === "otp" && (
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
              <Button
                onClick={handleVerifyOTP}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Doğrulanıyor..." : "Doğrula"}
              </Button>
            </div>
          )}

          {step === "newPassword" && (
            <div className="space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="newPassword">Yeni Şifre</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Şifreyi Onayla</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                onClick={handleResetPassword}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Şifre Değiştiriliyor..." : "Şifreyi Değiştir"}
              </Button>
            </div>
          )}
        </CardContent>
        {errorMessage && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        {successMessage && (
          <Alert className="mt-4">
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  );
}
