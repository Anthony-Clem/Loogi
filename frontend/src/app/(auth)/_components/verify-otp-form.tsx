"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VerifyOtpForm = () => {
  const [code, setCode] = useState("");

  return (
    <form className="space-y-6">
      <div className="flex flex-col items-center gap-2">
        <InputOTP maxLength={6} className="gap-2" value={code} onChange={(value) => setCode(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-xs text-muted-foreground">Enter the 6-digit code sent to your email</p>
      </div>

      <Button type="submit" className="w-full">
        Verify Code
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Didn&apos;t receive the code?{" "}
        <button
          type="button"
          onClick={() => {
            /* add resend logic here */
          }}
          className="font-medium text-primary hover:underline"
        >
          Resend
        </button>
      </p>
    </form>
  );
};

export default VerifyOtpForm;
