"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionItem({ children, className }: MotionItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div variants={itemVariants} className={cn("", className)}>
      {children}
    </motion.div>
  );
}
