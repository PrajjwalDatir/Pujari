"use client";

import { 
  Sparkles, 
  Moon, 
  Sun, 
  Compass, 
  Star, 
  History,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Link from "next/link";
import { motion } from "framer-motion";

const astrologyServices = [
  {
    title: "Kundali Matching",
    slug: "gun-milan",
    icon: <Sparkles className="text-primary" size={32} />,
    desc: "Vedic compatibility analysis for matrimonial harmony. We analyze 36 Gunas to ensure a balanced and prosperous union.",
    benefits: ["Nadi & Bhakoot Dosh check", "Manglik Analysis", "Detailed Compatibility Report"]
  },
  {
    title: "Birth Chart Analysis",
    slug: "janam-patrika",
    icon: <Moon className="text-primary" size={32} />,
    desc: "A comprehensive roadmap of your soul's journey. Understand your career, health, finances, and karmic purpose.",
    benefits: ["Life Purpose Insights", "Transit Analysis", "Personalized Remedies"]
  },
  {
    title: "Muhurat Selection",
    slug: "timing",
    icon: <Sun className="text-primary" size={32} />,
    desc: "Align your major life events with auspicious cosmic timings. From business launches to weddings and housewarmings.",
    benefits: ["Choghadiya Analysis", "Tithi & Nakshatra", "Success Probability"]
  },
  {
    title: "Remedial Measures",
    slug: "shanti",
    icon: <ShieldCheck className="text-primary" size={32} />,
    desc: "Neutralize negative planetary influences through Gemstone therapy, Mantras, and specific Graha Shanti rituals.",
    benefits: ["Dosh Nivaran", "Gemstone Consultation", "Customized Ritual Plan"]
  }
];

export default function AstrologyClient() {
  const handleConsult = (service: string) => {
    toast.success(`Booking request for ${service} initiated!`, {
      description: "Our senior Acharyas will review your details and contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <main className="flex-1 pt-16">
        {/* Astrology Hero */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          {/* Animated Stars background would go here */}
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary py-1 px-4 text-sm">
                Navigating the Stars since the Vedic Era
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Master your <span className="text-primary">Karma</span>.<br />
                Follow your <span className="text-primary">Dharma</span>.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Jyotish is the &quot;Eye of the Veda.&quot; Connect with legacy-holding Vedic Astrologers to illuminate your path through precise cosmic calculations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group"
                  onClick={() => handleConsult("Premium Consultation")}
                >
                  Book Expert Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/#rituals">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 h-14 border-primary/20 hover:bg-primary/5 w-full"
                  >
                    Explore Remedies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-24 bg-muted/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Specialized Consultations</h2>
              <p className="text-muted-foreground">Precision-based insights for life&apos;s most critical decisions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {astrologyServices.map((service, i) => (
                <Card key={i} className="bg-background/50 border-primary/10 hover:border-primary/30 transition-all group overflow-hidden">
                  <div className="grid sm:grid-cols-5 h-full">
                    <div className="sm:col-span-2 bg-primary/5 p-8 flex flex-col justify-center items-center text-center space-y-4">
                      {service.icon}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <Badge variant="secondary" className="px-2 py-0 text-[10px] uppercase">Vedic Standard</Badge>
                    </div>
                    <div className="sm:col-span-3 p-8 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className="text-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary font-semibold hover:no-underline group/link"
                        onClick={() => handleConsult(service.title)}
                      >
                        Book This Session
                        <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ancient Math meets Modern Clarity.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don&apos;t practice &quot;generic&quot; horoscopes. Our experts use Parashari and Jaimini systems to calculate planetary placements to the exact degree. Every consultation is:
              </p>
              <div className="space-y-6">
                {[
                  { title: "Time-Sensitive", desc: "Calculations based on the exact second of birth and geographical coordinates." },
                  { title: "Remedial-Led", desc: "We don't just predict; we provide actionable solutions through Vedic rituals." },
                  { title: "Verified Lineage", desc: "Consult only with Acharyas from recognized Gurukuls and traditions." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border-4 border-dashed border-primary/20 animate-[spin_60s_linear_infinite] absolute inset-0" />
              <div className="aspect-square rounded-3xl bg-primary/5 flex items-center justify-center relative z-10 overflow-hidden">
                {/* Spiritual geometric pattern would go here */}
                <Compass size={120} className="text-primary/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-24 container mx-auto px-4">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">Uncertain about your path?</h2>
              <p className="text-lg text-primary-foreground/80 font-medium">
                Let the light of Jyotish guide you. Join thousands of seekers who have found clarity and success through our Vedic consultations.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-10 h-14 font-semibold hover:scale-105 transition-transform"
                onClick={() => handleConsult("Emergency Consultation")}
              >
                Start your Journey
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Pujari</h1>
              <p className="text-sm text-muted-foreground">
                Illuminating paths with Vedic Wisdom.
              </p>
            </div>
            
            {[
              { title: "Platform", links: ["Services", "Pujaris", "About"] },
              { title: "Legal", links: ["Terms", "Privacy", "Cookies"] },
              { title: "Social", links: ["Twitter", "Instagram", "LinkedIn"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Pujari. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
