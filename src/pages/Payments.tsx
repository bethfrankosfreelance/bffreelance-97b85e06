import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import PayPalButton from "@/components/PayPalButton";
import bethHeadshot from "@/assets/beth-headshot.jpg";

const Payments = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="py-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-md w-full text-center">
          <img src={bethHeadshot} alt="Beth Frankos" className="w-32 h-32 rounded-full object-cover mx-auto mb-8" />
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-4 text-foreground">
            Make a Payment
          </h1>
          <p className="font-body text-muted-foreground text-sm mb-10 max-w-sm mx-auto">
            Use the button below to securely submit your payment through PayPal.
          </p>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <PayPalButton />
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Beth Frankos Freelance LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Payments;
