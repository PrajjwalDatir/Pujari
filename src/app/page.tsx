import Link from "next/link";
import Image from "next/image";
import { Flame, Flower2, ScrollText, CheckCircle2, ArrowRight } from "lucide-react";
import SearchWidget from "@/components/SearchWidget";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BeamsBackground from "@/components/kokonutui/beams-background";
import LiquidGlassCard from "@/components/kokonutui/liquid-glass-card";
import ShapeLandingHero from "@/components/kokonutui/shape-landing-hero";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20 overflow-x-hidden">
      <BeamsBackground className="flex-1">
        <main className="flex-1">
          {/* Hero Section */}
          <ShapeLandingHero
            badge="Legacy of Vedic Wisdom"
            title={<>Connect with the <span className="text-primary italic">Sacred</span>.</>}
            subtitle="A bridge between ancient tradition and the modern seeker. Find and book verified Acharyas for authentic ceremonies, Sanskaras, and Homas."
            align="left"
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="hidden lg:flex flex-col gap-6 text-center lg:text-left">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold italic text-primary">Digitizing Tradition</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We bring the rigor of Vedic scriptures to your doorstep with a seamless digital experience. 
                    </p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden relative">
                          <Image src={`/avatar-${i}.png`} alt="Trusted User" fill className="object-cover" priority />
                        </div>
                      ))}
                    </div>
                    <p className="font-medium">Trusted by 10,000+ families</p>
                  </div>
                </div>
                <div className="relative" id="waitlist">
                  <SearchWidget />
                </div>
              </div>
            </div>
          </ShapeLandingHero>

          {/* Mission Strip */}
          <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 scale-110" />
            <div className="container relative mx-auto px-4 text-center">
              <blockquote className="text-3xl md:text-5xl font-light italic leading-relaxed max-w-5xl mx-auto">
                &ldquo;Faith becomes powerful when it meets <span className="text-primary font-medium">Reason</span> and <span className="text-primary font-medium text-glow">Access</span>.&rdquo;
              </blockquote>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-20 container mx-auto px-4 relative">
            <SectionHeading 
              badge="Divine Path"
              title="Services for Every Milestone"
              subtitle="Ancient wisdom of the Vedas, delivered with modern precision."
            />
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  id: "rituals",
                  icon: <Flame size={40} strokeWidth={1.5} />,
                  title: "Sacred Vedic Rituals",
                  sub: "Homas & Pujas",
                  desc: "Master-led ceremonies performed with strict adherence to Vedic scriptures for protection, prosperity, and peace.",
                  features: ["Verified Pandits", "Materials Provided", "Digital Updates"]
                },
                {
                  id: "sanskaras",
                  icon: <Flower2 size={40} strokeWidth={1.5} />,
                  title: "Holistic Sanskaras",
                  sub: "Life-cycle Rites",
                  desc: "Sanctifying life's journey from birth to initiation with traditional rites that harmonize the soul with universal rhythms.",
                  features: ["Lineage-based Experts", "Customizable", "Authentic Vidhi"]
                },
                {
                  id: "astrology",
                  icon: <ScrollText size={40} strokeWidth={1.5} />,
                  title: "Vedic Astrology",
                  sub: "Cosmic Insights",
                  desc: "Deep karmic analysis and precise remedial measures using time-tested Jyotish principles to navigate your path with clarity.",
                  features: ["Kundali Matching", "Muhurat Selection", "Remedial Shanti"],
                  href: "/astrology"
                }
              ].map((service, i) => (
                <LiquidGlassCard key={i} className="scroll-mt-24">
                  <div className="mb-8 p-5 rounded-3xl bg-primary/10 text-primary w-fit">
                    {service.icon}
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/60">{service.sub}</p>
                    <h3 className="text-3xl font-bold tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 flex-1">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-muted-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  {service.href ? (
                    <Link href={service.href} className="block mt-10">
                      <Button variant="default" className="w-full h-12 text-lg group/btn shadow-lg shadow-primary/20">
                        Explore Divine Wisdom
                        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" className="mt-10 w-full h-12 text-lg group/btn border-primary/20 hover:bg-primary/5">
                      Learn More
                      <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </LiquidGlassCard>
              ))}
            </div>
          </section>

          {/* Trust Section */}
          <section className="py-20 bg-primary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="container mx-auto px-4 relative z-10 space-y-24">
              <SectionHeading 
                title="Why the Wise Choose Pujari"
              />
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: "Verified Lineage", desc: "Every Pujari is screened for authentic education and conduct." },
                  { title: "Digital First", desc: "Seamless booking, video updates, and blessed prasad delivery." },
                  { title: "Complete Transparency", desc: "Fixed dakshina. No hidden costs. Complete clarity." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-background/50 backdrop-blur-md border border-white/10 space-y-4 text-left">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <CTASection 
            title="Experience the Divine."
            subtitle="Connect with verified Vedic experts for authentic rituals, sanskaras, and astrological guidance."
            buttonText="Join the Waitlist"
            className="pb-0"
            href="#waitlist"
          />
        </main>
      </BeamsBackground>

      <Footer />
    </div>
  );
}

