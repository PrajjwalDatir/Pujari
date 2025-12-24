"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "low" | "medium" | "high";
}

export default function BeamsBackground({
  className,
  children,
  intensity = "medium",
}: BeamsBackgroundProps) {
  const intensities = {
    low: 0.3,
    medium: 0.5,
    high: 0.8,
  };

  const opacity = intensities[intensity];

  return (
    <div className={cn("relative w-full overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-[120px] animate-pulse" />
          
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M-100 100 L1100 1100"
              stroke="url(#beam-grad)"
              strokeWidth="2"
              animate={{
                d: ["M-100 100 L1100 1100", "M1100 -100 L-100 1100"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.path
              d="M0 0 L1000 1000"
              stroke="url(#beam-grad)"
              strokeWidth="1"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
