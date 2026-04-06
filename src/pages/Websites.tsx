import { Check, Globe, Palette, Shield } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const tiers = [
  {
    title: "Starter Site",
    tagline: "For businesses that need a polished online presence fast.",
    icon: Globe,
    features: [
      "Up to 3 pages",
      "Mobile-friendly design",
      "Basic contact form",
      "Simple SEO setup",
      "Launch support",
    ],
    bestFor: "New businesses, solo operators, and businesses that just need to look credible online.",
  },
  {
    title: "Growth Site",
    tagline: "For businesses that want a more complete website with stronger branding.",
    icon: Palette,
    featured: true,
    features: [
      "Up to 5 pages",
      "Custom design",
      "Basic logo or brand refresh",
      "SEO-friendly structure",
      "AI-friendly handoff so you can make updates yourself",
      "Launch support",
    ],
    bestFor: "Growing businesses that want a better website and a stronger brand presence.",
  },
  {
    title: "Managed Webmaster Plan",
    tagline: "For businesses that want someone to handle the website for them.",
    icon: Shield,
    features: [
      "Website updates",
      "Content changes",
      "Plugin and security checks",
      "Backup support",
      "Monthly maintenance",
      "Ongoing webmaster support",
    ],
    bestFor: "Owners who do not want to manage the website themselves.",
  },
];

const Websites = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-32">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-primary-foreground/60 mb-6 animate-fade-in-up">
            Web Design Services
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Websites that look professional &amp;{" "}
            <span className="italic">bring in customers.</span>
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }} />
          <p className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            I build affordable websites for local businesses that want a strong online presence without the stress. You can manage your site yourself with AI tools if you want, or I can handle updates for you as your webmaster.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <a
              href="https://calendly.com/bethfrankosfreelance/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-accent text-accent-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            What I Do
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
            A better website is <span className="italic">within reach.</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            If your business needs a better website, I can help you launch a clean, modern site that is built to grow with you. I create websites that are easy to update, mobile-friendly, and designed to help your business look credible and get noticed.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-28 md:py-36 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
              Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
              Choose the right fit for <span className="italic">your business</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className={`flex flex-col p-8 md:p-10 rounded-sm transition-shadow duration-300 ${
                  tier.featured
                    ? "bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/20"
                    : "bg-card ring-1 ring-border"
                }`}
              >
                <tier.icon className={`w-8 h-8 mb-4 ${tier.featured ? "text-accent" : "text-gold-dark"}`} />
                <h3 className="text-2xl font-display font-medium mb-2">{tier.title}</h3>
                <p className={`text-sm font-body mb-6 leading-relaxed ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {tier.tagline}
                </p>
                <ul className="space-y-3 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-body">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-primary-foreground/70" : "text-accent"}`} />
                      <span className={tier.featured ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className={`text-xs font-body italic ${tier.featured ? "text-primary-foreground/60" : "text-taupe"}`}>
                  Best for: {tier.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Transparent pricing with <span className="italic">flexible support</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            Choose a one-time website build or ongoing monthly webmaster support depending on how hands-on you want to be.
          </p>
          <a
            href="https://calendly.com/bethfrankosfreelance/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-28 md:py-36 px-6 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
            Practical websites that <span className="italic">grow with you.</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            I help small businesses get websites that are practical, professional, and easy to maintain. My goal is to give you a site that works for your business now and can grow with you later, whether you want to manage it yourself or hand it off to me.
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default Websites;
