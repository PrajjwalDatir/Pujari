
import { cn } from "@/lib/utils";

interface SectionHeadingProps {

  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ 

  title, 
  subtitle, 
  className, 
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 space-y-6",
      align === "center" ? "text-center" : "text-left",
      className
    )}>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground leading-relaxed max-w-2xl",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
