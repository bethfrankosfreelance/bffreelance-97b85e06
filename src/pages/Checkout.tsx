import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import SEO from "@/components/SEO";

const PRODUCTS: Record<string, { name: string; price: string; description: string }> = {
  website_starter_onetime: {
    name: "Starter Site",
    price: "$1,170",
    description: "Up to 3 pages, mobile-friendly, launch support.",
  },
  website_growth_v2_onetime: {
    name: "Growth Site",
    price: "$2,350",
    description: "Up to 5 pages, custom design, SEO structure, launch support.",
  },
  managed_webmaster_monthly: {
    name: "Managed Webmaster",
    price: "$625/month",
    description: "Ongoing updates, backups, and maintenance for your website.",
  },
  service_foundations_onetime: {
    name: "Foundations",
    price: "$1,950",
    description: "Business setup and structural foundations.",
  },
  service_operations_onetime: {
    name: "Operations",
    price: "$3,120",
    description: "Streamline operations for a cleaner, more scalable business.",
  },
  service_retainer_monthly: {
    name: "Ongoing Retainer",
    price: "$2,000/month + weekly execution",
    description: "Partner with me on your business — every week.",
  },
};

export default function Checkout() {
  const { priceId = "" } = useParams();
  const product = PRODUCTS[priceId];

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-display font-medium mb-4">Product not found</h1>
          <p className="text-muted-foreground mb-8 font-body text-sm">The item you're trying to purchase isn't available.</p>
          <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm tracking-widest uppercase">
            Return home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`Checkout — ${product.name}`}
        description={`Purchase ${product.name} from Beth Frankos Freelance.`}
        path={`/checkout/${priceId}`}
      />
      <PaymentTestModeBanner />
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-sm font-body tracking-[0.35em] uppercase text-taupe mb-4">Order Summary</p>
          <h1 className="text-3xl md:text-4xl font-display font-medium mb-3">{product.name}</h1>
          <p className="text-2xl font-display font-semibold text-gold-dark mb-4">{product.price}</p>
          <p className="font-body text-muted-foreground leading-relaxed">{product.description}</p>
        </div>
        <div>
          <StripeEmbeddedCheckout priceId={priceId} />
        </div>
      </div>
    </main>
  );
}
