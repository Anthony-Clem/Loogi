import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub, FaGoogle } from "react-icons/fa";
import AuthForm from "../_components/auth-form";

const AuthPage = () => {
  return (
    <Card className="w-full max-w-md border-border shadow-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-3xl font-semibold">Sign in to Loogi</CardTitle>
        <CardDescription className="text-muted-foreground">
          Get started with real-time monitoring. Choose a sign-in method below.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
            <FaGithub className="h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
            <FaGoogle className="h-4 w-4" />
            Google
          </Button>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          OR
          <div className="h-px flex-1 bg-border" />
        </div>

        <AuthForm />
      </CardContent>
    </Card>
  );
};

export default AuthPage;
