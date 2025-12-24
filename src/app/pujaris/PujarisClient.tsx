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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary py-1 px-4 text-sm">
                Architecting the Future of Traditions
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Expand your <span className="text-primary">Kshetra</span>.<br />
                Connect with Devotees.
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The modern platform for Vedic experts. Manage your schedule, receive digital dakshina, and reach a global community of seekers.
              </p>

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
            </div>
          </div>
        </section>

        {/* Live Demand Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Real-time Ritual Demand</h2>
                <p className="text-muted-foreground">Devotees near you are looking for verified experts right now.</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                124 active requests in your region
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveRequests.map((request, i) => (
                <Card key={i} className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all group">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={request.status === 'Urgent' ? 'destructive' : 'secondary'} className="text-[10px] uppercase tracking-wider">
                        {request.status}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{request.time}</span>
                    </div>
                    <CardTitle className="text-lg">{request.ritual}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {request.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="ghost" 
                      className="w-full text-xs group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={() => handleInterest(request.ritual)}
                    >
                      Express Interest
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Background element */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>

        {/* Benefits Grid */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Why transition to Pujari?</h2>
            <p className="text-muted-foreground">We handle the logistics, so you can focus on the sacred.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={32} className="text-primary" />,
                title: "Verified Credentials",
                desc: "Be recognised as a certified Vedic expert. Build trust through your lineage and education."
              },
              {
                icon: <HandCoins size={32} className="text-primary" />,
                title: "Transparent Dakshina",
                desc: "Direct-to-bank payments. No hidden commissions or awkward negotiations with devotees."
              },
              {
                icon: <Calendar size={32} className="text-primary" />,
                title: "Intelligent Scheduling",
                desc: "Manage your Thithis and Nakshatras with a digital calendar designed for priests."
              }
            ].map((benefit, i) => (
              <Card key={i} className="border-border/50 bg-white/5 hover:bg-white/[0.08] transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to digitise your Dharma?</h2>
                <p className="text-lg text-primary-foreground/80">
                  Join 500+ verified Acharyas who have transformed their spiritual practice with Pujari.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-lg px-10 h-14 font-semibold hover:scale-105 transition-transform"
                  onClick={handleAction}
                >
                  Apply Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Reusing Footer from index */}
      <footer className="border-t border-white/10 bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Pujari</h1>
              <p className="text-sm text-muted-foreground">
                The matching platform for rituals.
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
