"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShapeLandingHeroProps {
  title: React.ReactNode;
  subtitle: string;
  badge: string;
  className?: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}

function Shape({ className, delay, initialX, initialY, rotate }: any) {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, rotate: rotate, opacity: 0 }}
      animate={{ 
        y: [initialY, initialY + 20, initialY],
        opacity: [0, 0.5, 0.2]
      }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay },
        opacity: { duration: 2, delay: delay }
      }}
      className={cn("absolute rounded-full blur-3xl -z-10", className)}
    />
  );
}

export default function ShapeLandingHero({
  title,
  subtitle,
  badge,
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary py-1 px-4 text-sm mb-6 backdrop-blur-md">
            {badge}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            {title}
          </h1>
          
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground leading-relaxed",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl mr-auto"
          )}>
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
