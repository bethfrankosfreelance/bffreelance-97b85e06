import { useEffect, useState } from "react";
import { z } from "zod";
import FooterSection from "@/components/FooterSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const CALENDLY_URL = "https://calendly.com/bethfrankosfreelance/15min";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30)
    .regex(/^[0-9+()\-.\s]+$/, "Only digits and phone characters"),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  needs: z.string().trim().min(10, "Tell me a bit more (10+ characters)").max(1000),
  goals: z.string().trim().min(10, "Tell me a bit more (10+ characters)").max(1000),
  investment: z.string().min(1, "Please choose an investment level"),
  timeline: z.string().min(1, "Please choose a timeline"),
});

type FormValues = z.infer<typeof schema>;

const initial: FormValues = {
  name: "",
  email: "",
  phone: "",
  business: "",
  needs: "",
  goals: "",
  investment: "",
  timeline: "",
};

const investmentOptions = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP (within 2 weeks)",
  "This month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const Book = () => {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [qualified, setQualified] = useState(false);

  useEffect(() => {
    if (!qualified) return;
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, [qualified]);

  const set = <K extends keyof FormValues>(k: K, v: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Partial<Record<keyof FormValues, string>> = {};
      (Object.keys(flat) as (keyof FormValues)[]).forEach((k) => {
        const m = flat[k]?.[0];
        if (m) next[k] = m;
      });
      setErrors(next);
      toast({ title: "Please fix the highlighted fields", variant: "destructive" });
      return;
    }
    setErrors({});
    setQualified(true);
    setTimeout(() => {
      document.getElementById("calendar")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const calendlyUrl = (() => {
    const params = new URLSearchParams({
      name: values.name,
      email: values.email,
      a1: values.phone,
      a2: `Business: ${values.business || "—"} | Investment: ${values.investment} | Timeline: ${values.timeline}`,
      a3: `Needs: ${values.needs}`,
      a4: `Goals: ${values.goals}`,
    });
    return `${CALENDLY_URL}?${params.toString()}`;
  })();

  return (
    <main>
      <section className="relative pt-28 pb-16 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-primary-foreground/60 mb-6">
            Book a Strategy Call
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-primary-foreground leading-tight mb-6">
            A few quick questions, then{" "}
            <span className="italic">pick a time.</span>
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="font-body text-base text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            This short form helps me arrive prepared so our call is focused on you. Once submitted, the calendar unlocks below.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-24 px-6 bg-secondary/40">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="bg-card ring-1 ring-border rounded-sm p-8 md:p-10 space-y-6"
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  autoComplete="email"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="business">Business / organization</Label>
                <Input
                  id="business"
                  value={values.business}
                  onChange={(e) => set("business", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="needs">What do you need help with? *</Label>
              <Textarea
                id="needs"
                rows={4}
                value={values.needs}
                onChange={(e) => set("needs", e.target.value)}
                placeholder="Briefly describe the challenge or project."
              />
              {errors.needs && <p className="text-xs text-destructive">{errors.needs}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">What does success look like? *</Label>
              <Textarea
                id="goals"
                rows={4}
                value={values.goals}
                onChange={(e) => set("goals", e.target.value)}
                placeholder="Your goals or the outcome you want from working together."
              />
              {errors.goals && <p className="text-xs text-destructive">{errors.goals}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="investment">Investment level *</Label>
                <select
                  id="investment"
                  value={values.investment}
                  onChange={(e) => set("investment", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select…</option>
                  {investmentOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.investment && <p className="text-xs text-destructive">{errors.investment}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline *</Label>
                <select
                  id="timeline"
                  value={values.timeline}
                  onChange={(e) => set("timeline", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select…</option>
                  {timelineOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.timeline && <p className="text-xs text-destructive">{errors.timeline}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              {qualified ? "Update & Refresh Calendar" : "Continue to Calendar"}
            </button>
          </form>
        </div>
      </section>

      {/* Calendar */}
      <section id="calendar" className="py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">
              Pick a Time
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground">
              {qualified ? (
                <>Choose a time that <span className="italic">works for you.</span></>
              ) : (
                <>Complete the form to <span className="italic">unlock the calendar.</span></>
              )}
            </h2>
          </div>

          {qualified ? (
            <div
              key={calendlyUrl}
              className="calendly-inline-widget rounded-sm ring-1 ring-border bg-card"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "720px" }}
            />
          ) : (
            <div className="rounded-sm ring-1 ring-dashed ring-border bg-secondary/40 h-[360px] flex items-center justify-center px-6 text-center">
              <p className="font-body text-muted-foreground max-w-md">
                Once you submit the form above, an embedded calendar will appear here with your details pre-filled.
              </p>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default Book;
