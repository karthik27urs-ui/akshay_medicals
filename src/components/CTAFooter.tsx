import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";

const CTAFooter = () => {
  return (
    <section className="bg-foreground py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              Come Visit Us
            </h2>
            <p className="mt-4 font-body text-lg text-primary-foreground/70">
              We'd love to welcome you to Akshaya Medicals & General Stores.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-xl space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">Address</h3>
                <p className="mt-1 font-body text-sm text-primary-foreground/70">
                  Church Rd, Opposite Government Hospital,<br />
                  Sirsi, Karnataka 581401
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">Open Hours</h3>
                <p className="mt-1 font-body text-sm text-primary-foreground/70">
                  Monday – Sunday · Morning to Night
                </p>
              </div>
            </div>

            {/* Call button */}
            <a
              href="tel:+919999999999"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 font-display text-base font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              Tap to Call
            </a>
          </div>
        </ScrollReveal>

        {/* Footer credit */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 border-t border-primary-foreground/10 pt-8 text-center">
            <p className="font-body text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Akshaya Medicals & General Stores · Owned by Preetipal Malgi · Sirsi, Karnataka
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFooter;
