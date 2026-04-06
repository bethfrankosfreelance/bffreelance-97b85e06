import { Instagram, Mail, Calendar, Facebook, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.jpg";

const links = [
  { icon: Instagram, href: "https://www.instagram.com/beth.frankos?igsh=MXR4bHh6a3BhYzk4bw==", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1AgkuwNfDa/", label: "Facebook" },
  { icon: Calendar, href: "https://calendly.com/bethfrankosfreelance/15min", label: "Book a Call" },
  { icon: Mail, href: "mailto:info@bethfrankos.org", label: "Email" },
  { icon: FileText, href: "https://docs.google.com/forms/d/e/1FAIpQLScbXZRCufQdGBA1cxb3vYpKw0mb56yFdb-6u1QwReb8RZwT2w/viewform?usp=header", label: "Inquiry Form" },
];

const FooterSection = () => {
  return (
    <footer className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <img src={logoFooter} alt="Beth Frankos Freelance LLC" className="w-36 mx-auto mb-10 rounded-[25%]" />
        <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
          Let's work together.
        </h2>
        <p className="font-body text-primary-foreground/70 mb-10 text-sm max-w-md mx-auto">
          Ready to get your operations under control? Book a free 15-minute call or send me a message.
        </p>
        <div className="mb-14">
          <Link
            to="/payments"
            className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Pay Now
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 mb-14">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-xs text-primary-foreground/50 tracking-wide">
            © {new Date().getFullYear()} Beth Frankos Freelance LLC. All rights reserved.
          </p>
          <a
            href="https://bffreelance-about.carrd.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-body text-xs text-primary-foreground/50 underline underline-offset-4 hover:text-primary-foreground/80 transition-colors"
          >
            Learn more about Beth
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
