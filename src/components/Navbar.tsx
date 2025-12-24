"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Rituals", href: "/#rituals" },
  { label: "Astrology", href: "/#astrology" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            Pujari
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/pujaris" prefetch={false}>
            <Button 
              variant={pathname === "/pujaris" ? "default" : "ghost"}
              className={cn(
                "hidden md:inline-flex",
                pathname !== "/pujaris" && "text-primary hover:text-primary/90 hover:bg-primary/10"
              )}
            >
              For Pujaris
            </Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
