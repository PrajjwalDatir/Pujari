import Link from "next/link";
import Image from "next/image";
import { Flame, Flower2, ScrollText, CheckCircle2, ArrowRight } from "lucide-react";
import SearchWidget from "@/components/SearchWidget";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/20">
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/20 via-background to-background dark:from-orange-900/20" />
          
          <div className="container relative mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Verified Vedic Network
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Connect with the <span className="text-primary">Sacred</span>.
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  The matching platform for rituals. Find and book verified Pujaris for authentic Vedic ceremonies, Sanskaras, and Homas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden relative">
                        <Image src="/avatar-1.png" alt="Trusted User" fill className="object-cover" priority />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden relative">
                        <Image src="/avatar-2.png" alt="Trusted User" fill className="object-cover" priority />
                      </div>
                      <div className="h-8 w-8 rounded-full border-2 border-background overflow-hidden relative">
                        <Image src="/avatar-3.png" alt="Trusted User" fill className="object-cover" priority />
                      </div>
                    </div>
                    <p>Trusted by 10,000+ families</p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <SearchWidget />
                
                {/* Decorative gradients */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Strip */}
        <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto">
              "Faith becomes powerful when it meets <span className="text-primary font-medium">Reason</span> and <span className="text-primary font-medium">Access</span>."
            </blockquote>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-32 container mx-auto px-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          
          <div className="text-center mb-20 space-y-6">
            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
              Sacred Ecosystem
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Divine Services for Every Milestone</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the ancient wisdom of the Vedas, digitized for the modern seeker. Our verified experts bring authenticity to every sacred moment.
            </p>
          </div>
          
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
              <Card key={i} id={service.id} className="group hover:border-primary/50 transition-all duration-500 border-border/50 bg-white/5 overflow-hidden scroll-mt-24 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-10 flex flex-col h-full relative z-10">
                  <div className="mb-8 p-5 rounded-2xl bg-primary/5 text-primary w-fit group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70">{service.sub}</p>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {service.desc}
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary/60" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  {service.href ? (
                    <Link href={service.href} className="mt-8">
                      <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-white transition-all">
                        Explore Divine Wisdom
                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="ghost" className="mt-8 w-full group/btn text-primary hover:bg-primary/10">
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Verified Monks", desc: "Every Pujari is screened for lineage, education, and conduct." },
                { title: "Digital First", desc: "Seamless booking, video updates, and blessed prasad delivery." },
                { title: "Transparent", desc: "Fixed dakshina. No hidden costs. Complete clarity." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                Connecting you with the Sacred.
                <br />
                The matching platform for rituals.
              </p>
            </div>
            
            {[
              { title: "Platform", links: ["Services", "Monks", "About"] },
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

