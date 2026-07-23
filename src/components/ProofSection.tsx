const cards = [
  {
    title: "Look more credible",
    body:
      "When your website reflects the quality of your business, visitors are more likely to trust what you offer and take the next step.",
  },
  {
    title: "Work more efficiently",
    body:
      "A stronger website can reduce friction with clearer structure, better organization, and the right tools or integrations behind the scenes.",
  },
  {
    title: "Capture more opportunity",
    body:
      "When your site is clear, current, and easy to use, fewer opportunities are lost to confusion, outdated information, or a poor mobile experience.",
  },
];

const workingBullets = [
  "Built to support businesses that want a stronger online presence",
  "Better functionality tailored to the way you work",
  "A website that can grow with you over time",
];

const ProofSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            The Case for a Stronger Site
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6 leading-tight">
            What a stronger website should <span className="italic">do</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            A good website should do more than look polished. It should help your business feel credible, make information easier to find, and support the way you work every day.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            What Working Together Looks Like
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-left">
            {workingBullets.map((b) => (
              <li
                key={b}
                className="bg-card ring-1 ring-border rounded-sm px-6 py-5 font-body text-foreground/85"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
