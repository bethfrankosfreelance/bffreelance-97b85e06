const items = [
  { price: "$125", desc: "One & done deliverables — 24hrs or your money back" },
  { price: "$150", desc: "Consulting deep dive" },
  { price: "$250", desc: "Branded documents package" },
  { price: "$450", desc: "Build-your-own 3 docs, systems or processes" },
  { price: "$750", desc: "Rebrand + docs + web presence" },
  { price: "$1,500", desc: "All-in package — 14 day turnaround, or your money back" },
  { price: "$1,500/mo", desc: "Monthly retainer" },
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
