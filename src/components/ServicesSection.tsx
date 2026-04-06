import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceTier {
  title: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

const tiers: ServiceTier[] = [
  {
    title: "Business Setup",
    price: "$900",
    tagline: "Just getting started? I'll get you legal, organized & ready to take on jobs.",
    features: [
      "LLC/Non-profit",
      "Licensing/insurance setup",
      "Scheduling & quoting tools",
      "Pricing system to stop undercharging",
    ],
  },
  {
    title: "Operations & Strategy",
    price: "$1,500",
    tagline: "Ready to grow, but disorganization is standing in the way?",
    features: [
      "Calendar + crew scheduler setup",
      "Subcontractor onboarding system",
      "Material & supply tracking tools",
      "CRM for customer + lead management",
      "Processes automation",
      "Proposal + estimating templates",
      "Branding refresh that wins trust",
      "Hiring help (job ads, interviews)",
      "Profit-first financial planning",
    ],
    featured: true,
  },
  {
    title: "Retainer",
    price: "$1,500 + $500/wk",
    tagline: "All of the above, plus ongoing support.",
    features: [
      "Weekly support calls & updates",
      "Real-time advice & custom checklists",
      "Done-for-you systems",
      "3+ weeks personalized support & implementation",
    ],
  },
  {
    title: "Nonprofits & Grant Writing",
    price: "$1,500+",
    tagline: "You've got vision and heart—I'll help you secure funding and build systems.",
    features: [
      "501(c)(3) setup or compliance review",
      "Grant strategy + prospect list",
      "Compelling LOI or full proposal",
      "Budgeting + outcomes templates",
      "Donor management & fundraising systems",
      "Board development & policy templates",
      "Custom reporting for grant compliance",
    ],
  },
];

const ServiceCard = ({ tier }: { tier: ServiceTier }) => (
  <div
    className={`flex flex-col p-8 md:p-10 rounded-sm transition-shadow duration-300 ${
      tier.featured
        ? "bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/20"
        : "bg-card ring-1 ring-border"
    }`}
  >
    <p className={`text-sm tracking-[0.25em] uppercase font-body mb-2 ${tier.featured ? "text-primary-foreground/70" : "text-taupe"}`}>
      Tier
    </p>
    <h3 className="text-2xl font-display font-medium mb-1">{tier.title}</h3>
    <p className={`text-3xl font-display font-semibold mb-4 ${tier.featured ? "text-primary-foreground" : "text-gold-dark"}`}>
      {tier.price}
    </p>
    <p className={`text-sm font-body mb-8 leading-relaxed ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
      {tier.tagline}
    </p>
    <ul className="space-y-3 flex-1">
      {tier.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm font-body">
          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-primary-foreground/70" : "text-accent"}`} />
          <span className={tier.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-28 md:py-36 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Packages tailored to <span className="italic">your stage</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <ServiceCard key={tier.title} tier={tier} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/websites#packages"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            View Website Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
