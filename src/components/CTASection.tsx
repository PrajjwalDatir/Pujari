"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassCard from "@/components/kokonutui/liquid-glass-card";
import { cn } from "@/lib/utils";

import Link from "next/link";

interface CTASectionProps {
  title: string | React.ReactNode;
  subtitle: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  onClick,
  href,
  className
}: CTASectionProps) {
  return (
    <section className={cn("py-20 container mx-auto px-4 text-center", className)}>
      <LiquidGlassCard gradient={false} className="p-0 border-none bg-transparent">
        <div className="rounded-[3rem] bg-primary px-12 py-24 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-black/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">{title}</h2>
            <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
              {subtitle}
            </p>
            {href ? (
              <Link href={href} className="inline-block">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-xl px-12 h-16 font-bold hover:scale-105 transition-transform shadow-2xl"
                >
                  {buttonText}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            ) : (
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-xl px-12 h-16 font-bold hover:scale-105 transition-transform shadow-2xl"
                onClick={onClick}
              >
                {buttonText}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </LiquidGlassCard>
    </section>
  );
}
