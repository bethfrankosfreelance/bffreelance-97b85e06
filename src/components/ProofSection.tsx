const cards = [
  {
    title: "Look more credible",
    body:
      "When your website reflects the quality of your business, potential clients are more likely to trust what you offer and take the next step.",
  },
  {
    title: "Work more efficiently",
    body:
      "A stronger website can support your operations with clearer information, better structure, and tools or integrations that reduce friction behind the scenes.",
  },
  {
    title: "Capture more opportunity",
    body:
      "When your online presence is clear, current, and easy to use, fewer opportunities are lost to confusion, poor mobile experience, or outdated information.",
  },
];

const workingBullets = [
  "Clear recommendations based on your business needs",
  "A website tailored to function as well as aesthetics",
  "Mobile-friendly design and easy user experience",
  "Flexible support after launch, whether you want to manage it or have it handled for you",
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
            What a stronger website should <span className="italic">do for your business</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            A good website should do more than look polished. It should support credibility, make information easier to find, work well on every device, and create a smoother path for potential clients to take action.
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
