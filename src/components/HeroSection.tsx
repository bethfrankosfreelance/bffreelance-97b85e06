import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-32">
        <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6 animate-fade-in-up">
          Welcome
        </p>
        <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={headshot}
            alt="Beth Frankos"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg ring-4 ring-background"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          When growth gets messy,
          <br />
          <span className="italic text-gold-dark">fix the systems behind it.</span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }} />
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Streamline operations, cut the bottlenecks, and build the structure your business needs to scale — without adding more chaos to your week.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Link
            to="/book"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a 15-Minute Strategy Call
          </Link>
          <Link
            to="/websites#packages"
            className="inline-block px-8 py-3.5 border border-primary/30 text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/5 transition-colors"
          >
            See Website Packages
          </Link>
        </div>
        <p className="font-body text-sm text-muted-foreground/80 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Need a stronger website but not ready to book a call yet? Review the options, see what is included, and choose the level of support that fits your business best.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
