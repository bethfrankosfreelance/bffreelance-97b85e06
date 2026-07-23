const WhyMeSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
          Why Clients Hire Me
        </p>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-10 leading-tight">
          Direct, thoughtful, and <span className="italic">grounded in real business.</span>
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          You do not always need a large agency or a complicated consulting engagement to improve how a business runs. Often, you need practical insight, a sharper operating lens, and someone who can see where things are getting stuck and help you fix them.
        </p>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          My approach is direct, thoughtful, and grounded in real-world business building. I focus on helping clients create more clarity, stronger systems, and better execution so they can spend less time managing unnecessary friction and more time moving the business forward.
        </p>
      </div>
    </section>
  );
};

export default WhyMeSection;
