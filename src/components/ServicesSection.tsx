import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  name: string;
  short: string;
  included: string[];
  best: string;
  cta: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    name: "Operations Audit",
    short:
      "A focused review of your business operations to identify friction points, missed opportunities, and the biggest barriers to efficient growth.",
    included: [
      "Review of current workflows and bottlenecks",
      "Assessment of communication, follow-up, and organization gaps",
      "Prioritized recommendations",
      "Clear next-step action plan",
    ],
    best: "Business owners who know something is not working efficiently but need clarity on what to fix first.",
    cta: "Start with an Audit",
  },
  {
    name: "Systems and Workflow Sprint",
    short:
      "Hands-on support to improve the structure behind your business so work moves more smoothly and the business relies less on constant intervention.",
    included: [
      "Workflow cleanup and simplification",
      "Process organization",
      "Operational structure recommendations",
      "Implementation support for key improvements",
    ],
    best: "Businesses that need more than advice and want active help putting stronger systems in place.",
    cta: "Ask About a Sprint",
    featured: true,
  },
  {
    name: "Ongoing Strategic Support",
    short:
      "Continued advisory and operational support for businesses that want a trusted partner to help maintain momentum, solve problems, and strengthen execution over time.",
    included: [
      "Ongoing strategy and decision support",
      "Accountability around priorities",
      "Operational troubleshooting",
      "Input on growth-related changes and challenges",
    ],
    best: "Owners who want experienced support as they grow, refine operations, and make better business decisions.",
    cta: "Discuss Ongoing Support",
  },
];

const ServiceCard = ({ s }: { s: Service }) => (
  <div
    className={`flex flex-col p-8 md:p-10 rounded-sm transition-shadow duration-300 ${
      s.featured
        ? "bg-primary text-primary-foreground shadow-lg ring-1 ring-primary/20"
        : "bg-card ring-1 ring-border"
    }`}
  >
    <h3 className="text-2xl font-display font-medium mb-4">{s.name}</h3>
    <p
      className={`text-sm font-body mb-6 leading-relaxed ${
        s.featured ? "text-primary-foreground/80" : "text-muted-foreground"
      }`}
    >
      {s.short}
    </p>
    <p
      className={`text-xs font-body tracking-[0.2em] uppercase mb-3 ${
        s.featured ? "text-primary-foreground/60" : "text-taupe"
      }`}
    >
      What's Included
    </p>
    <ul className="space-y-3 mb-6 flex-1">
      {s.included.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm font-body">
          <Check
            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
              s.featured ? "text-primary-foreground/70" : "text-accent"
            }`}
          />
          <span className={s.featured ? "text-primary-foreground/90" : "text-foreground/80"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
    <p
      className={`text-xs font-body tracking-[0.2em] uppercase mb-2 ${
        s.featured ? "text-primary-foreground/60" : "text-taupe"
      }`}
    >
      Best For
    </p>
    <p
      className={`text-sm font-body mb-8 leading-relaxed ${
        s.featured ? "text-primary-foreground/85" : "text-foreground/75"
      }`}
    >
      {s.best}
    </p>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLScbXZRCufQdGBA1cxb3vYpKw0mb56yFdb-6u1QwReb8RZwT2w/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block text-center px-6 py-3 rounded-sm font-body text-sm tracking-widest uppercase transition-opacity hover:opacity-90 ${
        s.featured
          ? "bg-primary-foreground text-primary"
          : "bg-primary text-primary-foreground"
      }`}
    >
      {s.cta}
    </a>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Support that meets you <span className="italic">where you are</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            The right support depends on where the business is now, what is breaking down, and how quickly you need to create order. These engagements are designed to help you diagnose the problem, improve the system, and move forward with more confidence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.name} s={s} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/websites#packages"
            className="inline-block px-8 py-3.5 border border-primary/30 text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/5 transition-colors"
          >
            View Website Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
