const testimonials = [
  {
    quote: "Beth is so efficient, I can't believe how much she was able to help our team get done in just a few weeks.",
    name: "Julius Miller",
    title: "Contractor",
  },
  {
    quote: "When I initially contacted Beth my team was on edge and our processes were a mess. She helped us get back on track quickly and with no judgment. I highly recommend working with her.",
    name: "Margot Smith",
    title: "CPA",
  },
  {
    quote: "Beth got my non-profit 501c3 status in less than 2 weeks. I was shocked we got it that fast, but she made everything simple and easy.",
    name: "Renequa Jones",
    title: "Non-Profit Leader",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-playfair text-3xl md:text-4xl text-foreground text-center mb-16">
          What Clients Say
        </h2>
        <div className="space-y-12 md:space-y-16">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center max-w-2xl mx-auto">
              <p className="font-dm text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="w-10 h-px bg-accent mx-auto mb-4" />
              <p className="font-playfair text-foreground font-semibold">
                {t.name}
              </p>
              <p className="font-dm text-sm text-muted-foreground">
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
