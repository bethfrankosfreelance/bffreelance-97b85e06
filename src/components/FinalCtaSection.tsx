import { Link } from "react-router-dom";

const FinalCtaSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground mb-6 leading-tight">
          Ready to stop losing time to
          <br />
          <span className="italic text-gold-dark">a business that fights back?</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          Book a 15-minute strategy call. Walk away with a clear read on what is slowing the business down and the first move to fix it — fast.
        </p>
        <Link
          to="/book"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Book Your 15-Minute Strategy Call
        </Link>
        <p className="mt-6 font-body text-sm text-muted-foreground">
          Straight answers. Prioritized next steps. No fluff.
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
