const bullets = [
  "Important tasks live in too many places.",
  "Processes depend on memory instead of systems.",
  "Client follow-up is inconsistent — and costing you deals.",
  "Internal communication is unclear or delayed.",
  "You are still the bottleneck for too many decisions.",
  "Growth is creating more stress instead of more stability.",
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
            If any of this sounds familiar, <span className="italic">it is time to move</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Most businesses do not have a growth problem first. They have an operations problem — and every week it goes unfixed, it gets more expensive.
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
          Left alone, these issues compound. Fixed early, they unlock the growth already sitting in front of you.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
