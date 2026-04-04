const AboutSection = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10">
          You run your jobs.
          <br />
          <span className="italic">I'll handle the process.</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          When you work with me, we'll get your operations under control, scale, streamline & expand impact. That means more time for the work you love, stronger client relationships, and the confidence to take on bigger opportunities without drowning in paperwork.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
