const cards = [
  {
    title: "Small business owners",
    body: "You have momentum but too much still runs through you. You need cleaner systems, stronger follow-through, and a business that stops depending on you for every decision.",
  },
  {
    title: "Contractors and service providers",
    body: "Projects are moving, but scheduling, communication, and client coordination are leaking time and money. You need the back-end tightened before it costs another job.",
  },
  {
    title: "Mission-driven teams and nonprofits",
    body: "Your team is doing more with less. You need clearer workflows and stronger execution so the mission moves forward without burning people out.",
  },
];

const WhoForSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Who This Is For
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Built for owners who need <span className="italic">results now</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            If your business is growing faster than your systems can hold, this is where the fix starts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-card p-8 rounded-sm ring-1 ring-border">
              <h3 className="font-display text-xl font-medium text-foreground mb-4">
                {c.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;
