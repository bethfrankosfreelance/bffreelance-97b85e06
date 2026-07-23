const bullets = [
  "Faster follow-through on the work that matters",
  "Clear ownership so nothing falls through the cracks",
  "Hours reclaimed every week from avoidable friction",
  "A sharper, more consistent client experience",
  "Room to grow without adding more chaos",
  "Confident, faster day-to-day decisions",
];

const ResultsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Results You Can Feel
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            What tighter operations <span className="italic">unlock</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Strong operations do more than make the business feel organized. They create the conditions for faster growth, better margins, and less owner burnout.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {bullets.map((b) => (
            <div
              key={b}
              className="bg-card ring-1 ring-border rounded-sm px-6 py-5 font-body text-foreground/85"
            >
              {b}
            </div>
          ))}
        </div>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed text-center italic max-w-2xl mx-auto">
          Fix the operating structure and the business gets easier to run, faster to grow, and more profitable to own.
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
