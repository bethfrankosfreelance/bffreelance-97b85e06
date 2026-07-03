const items = [
  { price: "$240", desc: "One & done deliverables — 24hrs or your money back" },
  { price: "$290", desc: "Consulting deep dive" },
  { price: "$470", desc: "Branded documents package" },
  { price: "$850", desc: "Build-your-own 3 docs, systems or processes" },
  { price: "$1,410", desc: "Rebrand + docs + web presence" },
  { price: "$2,810", desc: "All-in package — 14 day turnaround, or your money back" },
  { price: "$2,810/mo", desc: "Monthly retainer" },
];

const AlaCarteSection = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Flexible Options
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
            À la Carte & <span className="italic">Custom Packages</span>
          </h2>
        </div>
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.price + item.desc}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-2"
            >
              <span className="font-display text-xl font-semibold text-gold-dark">
                {item.price}
              </span>
              <span className="font-body text-muted-foreground text-sm sm:text-right max-w-md">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlaCarteSection;
