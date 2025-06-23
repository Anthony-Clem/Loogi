import { cn } from "@/lib/utils";
import { LuRadar } from "react-icons/lu";

interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2 text-primary", className)}>
      <LuRadar className="size-6" />
      <span className="font-semibold text-xl tracking-widest">loogi</span>
    </div>
  );
};
export default Logo;
