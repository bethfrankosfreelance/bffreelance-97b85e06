const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
          About Beth
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
          A business builder focused on
          <br />
          <span className="italic">stronger execution.</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          Beth Frankos is a business builder and consultant with a background shaped by years of navigating business growth, operational problem-solving, and complex working environments. Her experience includes building across different contexts and helping organizations create more structure, consistency, and forward momentum.
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          She works best with clients who want practical support, honest insight, and a clearer path from scattered effort to stronger execution.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
