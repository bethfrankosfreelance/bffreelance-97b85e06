import { Link } from "react-router-dom";

const MidPageCtaSection = () => {
  return (
    <section className="py-20 md:py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6 leading-tight">
          Not ready to <span className="italic">book a call?</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          Start by reviewing the website options, what is included, and how the process works. A clearer next step makes it easier to move forward with confidence.
        </p>
        <Link
          to="/websites#packages"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Explore Website Packages
        </Link>
      </div>
    </section>
  );
};

export default MidPageCtaSection;
