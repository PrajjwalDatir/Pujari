import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter">Pujari</h1>
            <p className="text-muted-foreground leading-relaxed">
              Connecting you with the Sacred.
              <br />
              The premier matching platform for authentic Vedic rituals.
            </p>
          </div>
          
          {[
            { title: "Platform", links: ["Services", "Pujaris", "Astrology", "About"] },
            { title: "Legal", links: ["Terms", "Privacy", "Cookies"] },
            { title: "Social", links: ["Twitter", "Instagram", "LinkedIn"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-6 text-lg tracking-tight">{col.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === "Pujaris" ? "/pujaris" : link === "Astrology" ? "/astrology" : "/#"} 
                      className="hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <div className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/5 pt-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pujari. All rights reserved. Architected for the Divine.</p>
        </div>
      </div>
    </footer>
  );
}
