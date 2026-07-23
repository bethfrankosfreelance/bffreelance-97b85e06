import { Link, useSearchParams } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";

export default function CheckoutReturn() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <main>
      <SEO title="Thank you — Beth Frankos Freelance" description="Your payment was received." path="/checkout/return" />
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 bg-secondary/40">
        <div className="max-w-xl text-center">
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-6">Payment received</p>
          <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground mb-6">
            Thank you — <span className="italic">let's get to work.</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            {sessionId
              ? "Your payment was successful. A receipt has been emailed to you, and I'll be in touch shortly to get started."
              : "We couldn't find your session details, but if you completed checkout you'll receive a receipt by email."}
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Return home
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
