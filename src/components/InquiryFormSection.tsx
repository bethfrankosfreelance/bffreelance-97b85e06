import { useState, FormEvent } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  business: z.string().trim().max(150).optional(),
  need: z.string().min(1, "Please choose an option"),
  next: z.string().min(1, "Please choose an option"),
  notes: z.string().max(1000).optional(),
});

const needOptions = [
  "A new website",
  "A website refresh",
  "Ongoing website updates or webmaster support",
  "Integrations and functionality",
  "Business strategy or launch support",
  "I'm not sure yet",
];

const nextOptions = [
  "Book a strategy call",
  "Request pricing",
  "Send me more information",
];

const InquiryFormSection = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast({
        title: "Please check the form",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const d = parsed.data;
    const subject = `Website inquiry from ${d.name}`;
    const body = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Business: ${d.business ?? ""}`,
      `Needs: ${d.need}`,
      `Preferred next step: ${d.next}`,
      d.notes ? `Notes: ${d.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:info@bethfrankos.org?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setSubmitting(false), 800);
  };

  const inputClass =
    "w-full bg-background ring-1 ring-border rounded-sm px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <section id="inquiry" className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
            Start the Conversation
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6 leading-tight">
            Tell us what you <span className="italic">need</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you are launching, growing, or refining your business, a few details are enough to get started. Share what you need help with, and the next best step will be sent your way.
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">Name</label>
              <input name="name" required maxLength={100} className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">Email</label>
              <input name="email" type="email" required maxLength={255} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">Business name</label>
            <input name="business" maxLength={150} className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">What do you need help with?</label>
            <select name="need" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select an option</option>
              {needOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">Preferred next step</label>
            <select name="next" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select an option</option>
              {nextOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-body tracking-[0.2em] uppercase text-taupe mb-2">Anything else? (optional)</label>
            <textarea name="notes" rows={4} maxLength={1000} className={inputClass} />
          </div>
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request Information"}
            </button>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              A reply will be sent with next steps, pricing guidance, or the best recommendation based on your needs.
            </p>
            <p className="mt-3 font-body text-xs text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
              Every business is different, so the best next step will depend on your goals, scope, and stage of growth. Replies are typically sent within one business day, and recommendations are tailored accordingly.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiryFormSection;
