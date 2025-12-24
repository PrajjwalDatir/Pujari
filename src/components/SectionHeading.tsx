import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ 
  badge, 
  title, 
  subtitle, 
  className, 
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-20 space-y-6",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      {badge && (
        <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary py-1 px-4 font-medium tracking-wide">
          {badge}
        </Badge>
      )}
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-xl text-muted-foreground leading-relaxed max-w-2xl",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
