import { Link } from "react-router-dom";

const FinalCtaSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-6 leading-tight">
          Ready for a website that
          <br />
          <span className="italic text-gold-dark">works harder for your business?</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          If your current site is outdated, unclear, or not supporting the way your business operates, now is the time to improve it. A stronger website can help you look more credible, support your day-to-day needs, and capture more of the opportunities already finding you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a 15-Minute Strategy Call
          </Link>
          <a
            href="#inquiry"
            className="inline-block px-10 py-4 border border-primary/30 text-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-primary/5 transition-colors"
          >
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
