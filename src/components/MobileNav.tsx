"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Rituals", href: "/#rituals" },
  { label: "Astrology", href: "/#astrology" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
            Pujari
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <div className="border-t border-border pt-4 mt-4">
            <SheetClose asChild>
              <Link href="/pujaris" onClick={() => setOpen(false)} prefetch={false}>
                <Button className="w-full" variant="default">
                  For Pujaris
                </Button>
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
