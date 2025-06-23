import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VerifyOtpForm from "../../_components/verify-otp-form";

const VerifyPage = () => {
  return (
    <Card className="w-full max-w-md border-border shadow-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-semibold">Check your inbox</CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter the code we just emailed you to sign in.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <VerifyOtpForm />
      </CardContent>
    </Card>
  );
};
export default VerifyPage;
