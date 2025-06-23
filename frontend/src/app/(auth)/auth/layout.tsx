import Logo from "@/components/common/logo";
import Link from "next/link";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none"
      ></div>

      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <Logo className="h-8 w-auto" />

        <div className="w-full z-10">{children}</div>

        <div className="text-xs text-muted-foreground text-center space-x-4 z-10">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <span>&middot;</span>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
