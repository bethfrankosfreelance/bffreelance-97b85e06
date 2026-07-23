import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kinds of businesses do you work with?",
    a: "I work with small businesses, contractors, service providers, and mission-driven teams that need stronger systems, better operational clarity, and support managing growth.",
  },
  {
    q: "What happens during the 15-minute strategy call?",
    a: "We talk through your current challenges, where the biggest bottlenecks may be, and whether one of my services is the right fit for your business.",
  },
  {
    q: "Do you offer one-time projects or ongoing support?",
    a: "Both. Some clients need a focused audit or sprint, while others benefit from ongoing support as they improve operations and navigate growth.",
  },
  {
    q: "How do I know which service is right for me?",
    a: "The best starting point is a strategy call. From there, I can recommend the engagement that best matches your current needs, priorities, and pace of implementation.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            Common <span className="italic">questions</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="font-display text-left text-lg text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
