"use client";

import { 
  Users, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  HandCoins, 
  MapPin,
  Flame,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Link from "next/link";
import BeamsBackground from "@/components/kokonutui/beams-background";
import ShapeLandingHero from "@/components/kokonutui/shape-landing-hero";
import LiquidGlassCard from "@/components/kokonutui/liquid-glass-card";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const liveRequests = [
  { ritual: "Ganesh Puja", location: "Mumbai, MH", time: "2 hours ago", status: "Open" },
  { ritual: "Satyanarayan Katha", location: "Bangalore, KA", time: "5 hours ago", status: "Matching" },
  { ritual: "Griha Pravesh", location: "Pune, MH", time: "1 day ago", status: "Open" },
  { ritual: "Rudrabhishek", location: "Varanasi, UP", time: "just now", status: "Urgent" },
];

export default function PujarisClient() {
  const handleAction = () => {
    toast.success("Registration opening soon!", {
      description: "We'll notify you as soon as the verification portal is live.",
    });
  };

  const handleInterest = (ritual: string) => {
    toast.info(`Interest registered for ${ritual}`, {
      description: "Complete your profile to start matching with devotees.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 overflow-x-hidden">
      <BeamsBackground className="flex-1">
        <main className="flex-1">
          {/* Hero Section */}
          <ShapeLandingHero
            badge="Architecting the Future of Traditions"
            title={<>Expand your <span className="text-primary italic">Kshetra</span>.</>}
            subtitle="The modern platform for Vedic experts. Manage your schedule, receive digital dakshina, and reach a global community of seekers."
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group"
                onClick={handleAction}
              >
                Register as a Ritual Expert
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 h-14 border-primary/20 hover:bg-primary/5"
                onClick={() => toast("Demo video coming soon!")}
              >
                View Demo
              </Button>
            </div>
          </ShapeLandingHero>

          {/* Live Demand Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4 text-left">
                  <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">Live Pulse</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ritual Demand Network</h2>
                  <p className="text-xl text-muted-foreground">Devotees near you are looking for verified experts right now.</p>
                </div>
                <div className="flex items-center gap-3 text-lg font-medium text-primary bg-primary/5 px-6 py-3 rounded-full border border-primary/10">
                  <span className="flex h-3 w-3 rounded-full bg-primary animate-pulse" />
                  124 active requests
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {liveRequests.map((request, i) => (
                  <LiquidGlassCard key={i} className="p-1">
                    <div className="flex justify-between items-start mb-6">
                      <Badge variant={request.status === 'Urgent' ? 'destructive' : 'secondary'} className="text-[10px] uppercase tracking-widest font-bold">
                        {request.status}
                      </Badge>
                      <span className="text-[10px] font-bold text-muted-foreground/60 uppercase">{request.time}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{request.ritual}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-8">
                      <MapPin size={16} className="text-primary/70" />
                      <span className="text-sm font-medium">{request.location}</span>
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/10 group/item"
                      onClick={() => handleInterest(request.ritual)}
                    >
                      Express Interest
                      <ArrowRight size={14} className="ml-2 group-hover/item:translate-x-1 transition-transform" />
                    </Button>
                  </LiquidGlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-20 bg-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
              <SectionHeading 
                badge="Pro Acharya Benefits"
                title="Focus on the Sacred."
                subtitle="We handle the logistics and technology, empowering your spiritual practice."
              />
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
                    title: "Verified Credentials",
                    desc: "Be recognised as a certified Vedic expert. Build trust through your lineage and education."
                  },
                  {
                    icon: <HandCoins size={40} strokeWidth={1.5} />,
                    title: "Transparent Dakshina",
                    desc: "Direct-to-bank payments. No hidden commissions or awkward negotiations with devotees."
                  },
                  {
                    icon: <Calendar size={40} strokeWidth={1.5} />,
                    title: "Intelligent Scheduling",
                    desc: "Manage your Thithis and Nakshatras with a digital calendar designed for priests."
                  }
                ].map((benefit, i) => (
                  <LiquidGlassCard key={i}>
                    <div className="p-5 rounded-3xl bg-primary/10 text-primary w-fit mb-8">
                      {benefit.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{benefit.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </LiquidGlassCard>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <CTASection 
            title="Ready to digitise your Dharma?"
            subtitle="Join 500+ verified Acharyas who have transformed their spiritual practice with Pujari."
            buttonText="Apply for Verification"
            onClick={handleAction}
          />
        </main>
      </BeamsBackground>

      <Footer />
    </div>
  );
}
