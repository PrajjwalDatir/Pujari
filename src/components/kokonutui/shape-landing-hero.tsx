"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShapeLandingHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;

  className?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}

function Shape({ className, delay, initialX, initialY, rotate }: any) {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, rotate: rotate, opacity: 0 }}
      animate={{ 
        y: [initialY, initialY - 30, initialY + 20, initialY],
        rotate: [rotate, rotate + 15, rotate - 10, rotate],
        scale: [1, 1.1, 0.95, 1],
        opacity: [0.3, 0.6, 0.4, 0.3]
      }}
      transition={{
        duration: 15, // Slow, ambient movement
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.33, 0.66, 1] // Smooth keyframe distribution
      }}
      className={cn("absolute rounded-full blur-3xl -z-10", className)}
    />
  );
}
export default function ShapeLandingHero({
  title,
  subtitle,

  className,
  children,
  align = "center"
}: ShapeLandingHeroProps) {
  return (
    <section className={cn("relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20", className)}>
      <Shape className="w-64 h-64 bg-primary/20 top-1/4 left-1/4" delay={0} initialX={-100} initialY={0} rotate={10} />
      <Shape className="w-96 h-96 bg-orange-500/10 bottom-1/4 right-1/4" delay={1} initialX={100} initialY={0} rotate={-10} />
      <Shape className="w-48 h-48 bg-primary/10 top-1/2 right-1/3" delay={2} initialX={0} initialY={100} rotate={45} />

      <div className={cn(
        "container relative mx-auto px-4 z-10 space-y-8",
        align === "center" ? "text-center" : "text-left"
      )}>
          
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] mb-6">
          {title}
        </h1>
        
        <div className={cn(
          "text-lg md:text-xl text-muted-foreground leading-relaxed",
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl mr-auto"
        )}>
          {subtitle}
        </div>

        <div className="pt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
