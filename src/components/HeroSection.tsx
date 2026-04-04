import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-32">
        <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-8 animate-fade-in-up">
          Welcome
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Launch. Grow.
          <br />
          <span className="italic text-gold-dark">Thrive.</span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }} />
        <p className="font-display text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Beth Frankos Freelance LLC
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          I'm here to help contractors, nonprofits, and small business owners stop bleeding time, money, & good clients—and focus instead on revenue and impact.
        </p>
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
          <a
            href="https://calendly.com/bethfrankosfreelance/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
