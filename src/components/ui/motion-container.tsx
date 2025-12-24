"use client";

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimationVariant = "simple-fade" | "smooth-rise" | "stagger-cards" | "soft-blur" | "parallax-scroll";

interface MotionContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  viewportMargin?: string; // e.g. "-100px" to trigger earlier/later
}

export default function MotionContainer({
  children,
  className,
  variant = "simple-fade",
  delay = 0,
  viewportMargin = "-50px"
}: MotionContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax Logic (only used if variant is parallax-scroll)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Smooth out the scroll value for parallax
  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.4, 1, 0.4]);

  const variants: Record<string, Variants> = {
    "simple-fade": {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut", delay } 
      }
    },
    "smooth-rise": {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay }
      }
    },
    "soft-blur": {
      hidden: { opacity: 0, filter: "blur(12px)", scale: 0.98 },
      visible: { 
        opacity: 1, 
        filter: "blur(0px)", 
        scale: 1,
        transition: { duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay }
      }
    },
    "stagger-cards": {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay
        }
      }
    }
  };

  // Special handling for parallax since it's scroll-driven, not trigger-driven
  if (variant === "parallax-scroll") {
    return (
      <motion.div 
        ref={ref}
        className={cn("will-change-transform", className)}
        style={{ y: smoothY, opacity }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
