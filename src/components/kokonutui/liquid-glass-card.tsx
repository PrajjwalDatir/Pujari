"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

export default function LiquidGlassCard({
  className,
  children,
  gradient = true,
}: LiquidGlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative rounded-3xl border border-primary/40 bg-white/5 p-1 transition-colors hover:border-primary",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-100 transition-opacity rounded-3xl" />
      )}
      
      <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-background/40 backdrop-blur-xl p-8">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {children}
      </div>
      
      {/* Liquid Glow Effect */}
      <div className="absolute -inset-px rounded-3xl opacity-100 transition-opacity duration-500 blur-sm bg-gradient-to-br from-primary/20 via-transparent to-orange-500/10 pointer-events-none" />
    </motion.div>
  );
}
