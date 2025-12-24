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
  ArrowRight
} from "lucide-react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Link from "next/link";
import { motion } from "framer-motion";
import BeamsBackground from "@/components/kokonutui/beams-background";
import ShapeLandingHero from "@/components/kokonutui/shape-landing-hero";
import LiquidGlassCard from "@/components/kokonutui/liquid-glass-card";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

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
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 overflow-x-hidden">
      <BeamsBackground className="flex-1">
        <main className="flex-1">
          {/* Astrology Hero */}
          <ShapeLandingHero
            badge="Navigating the Stars since the Vedic Era"
            title={<>Master your <span className="text-primary italic">Karma</span>.<br />Follow your <span className="text-primary italic">Dharma</span>.</>}
            subtitle="Jyotish is the 'Eye of the Veda.' Connect with legacy-holding Vedic Astrologers to illuminate your path through precise cosmic calculations."
          >
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
          </ShapeLandingHero>

          {/* Detailed Services Grid */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <SectionHeading 
                badge="Precision Jyotish"
                title="Specialized Consultations"
                subtitle="Precision-based insights for life's most critical decisions."
              />

              <div className="grid md:grid-cols-2 gap-8">
                {astrologyServices.map((service, i) => (
                  <LiquidGlassCard key={i} className="p-0 overflow-hidden">
                    <div className="grid sm:grid-cols-5 h-full">
                      <div className="sm:col-span-2 bg-primary/5 p-10 flex flex-col justify-center items-center text-center space-y-6">
                        <div className="p-5 rounded-3xl bg-white/10 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-center">{service.title}</h3>
                        <Badge variant="secondary" className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-primary mx-auto">Vedic Standard</Badge>
                      </div>
                      <div className="sm:col-span-3 p-10 space-y-8 flex flex-col">
                        <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                          {service.desc}
                        </p>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-muted-foreground/80">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="default" 
                          className="w-full h-12 shadow-lg shadow-primary/20 group/btn"
                          onClick={() => handleConsult(service.title)}
                        >
                          Book This Session
                          <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </LiquidGlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section className="py-20 bg-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                  <SectionHeading 
                    badge="Science of Spirit"
                    title={<>Ancient Math.<br />Modern Clarity.</>}
                    subtitle="We don't practice generic horoscopes. Our experts use Parashari and Jaimini systems to calculate planetary placements to the exact degree."
                    align="left"
                    className="mb-12"
                  />
                  <div className="space-y-8">
                    {[
                      { 
                        title: "Time-Sensitive", 
                        desc: "Calculations based on the exact second of birth and geographical coordinates.",
                        icon: <Icon icon="ph:clock-afternoon-duotone" className="w-6 h-6" />
                      },
                      { 
                        title: "Remedial-Led", 
                        desc: "We don't just predict; we provide actionable solutions through Vedic rituals.",
                        icon: <Icon icon="ph:plant-duotone" className="w-6 h-6" />
                      },
                      { 
                        title: "Verified Lineage", 
                        desc: "Consult only with Acharyas from recognized Gurukuls and traditions.",
                        icon: <Icon icon="ph:scroll-duotone" className="w-6 h-6" />
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                        <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-xl tracking-tight">{item.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <div className="aspect-square w-full max-w-md rounded-full border-4 border-dashed border-primary/20 animate-[spin_60s_linear_infinite] absolute inset-0" />
                  <div className="aspect-square w-full max-w-md rounded-[3rem] bg-background/40 backdrop-blur-xl border border-white/10 flex items-center justify-center relative z-10 overflow-hidden shadow-2xl">
                    <Compass size={180} strokeWidth={1} className="text-primary/10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <CTASection 
            title="Uncertain about your path?"
            subtitle="Let the light of Jyotish guide you. Join thousands of seekers who have found clarity and success through our Vedic consultations."
            buttonText="Start your Journey"
            onClick={() => handleConsult("Emergency Consultation")}
          />
        </main>
      </BeamsBackground>

      <Footer />
    </div>
  );
}
