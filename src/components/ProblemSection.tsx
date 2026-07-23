const bullets = [
  "Important tasks live in too many places.",
  "Processes depend on memory instead of systems.",
  "Client follow-up is inconsistent.",
  "Internal communication is unclear or delayed.",
  "The owner is still the main point of control for too many decisions.",
  "Growth creates more stress instead of more stability.",
];

const ProblemSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            The Real Bottleneck
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            What gets in <span className="italic">the way of growth</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Most businesses do not have a growth problem first. They have an operations problem that shows up in growth.
          </p>
        </div>
        <ul className="space-y-4 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-4 border-l-2 border-accent pl-5 py-1">
              <span className="font-body text-base text-foreground/85 leading-relaxed">
                {b}
              </span>
            </li>
          ))}
        </ul>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center italic">
          When these issues compound, the business becomes harder to run, harder to scale, and more expensive in time and energy than it needs to be.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
