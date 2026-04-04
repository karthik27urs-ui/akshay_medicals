import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock } from "lucide-react";
import storeLogo from "@/assets/store-logo.png";

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
              We'd love to welcome you to Akshaya Medicals &amp; General Stores.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-xl space-y-4">
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-5"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">Address</h3>
                <p className="mt-1 font-body text-sm text-primary-foreground/70">
                  Church Rd, Opposite Government Hospital,<br />
                  Sirsi, Karnataka 581401
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-5"
            >
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground">Open Hours</h3>
                <p className="mt-1 font-body text-sm text-primary-foreground/70">
                  Mon – Sat: 8:30 AM – 9:30 PM<br />
                  Sunday: 8:30 AM – 1:00 PM
                </p>
              </div>
            </motion.div>

            <motion.a
              href="tel:+917947108627"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-display text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
            >
              <Phone className="h-5 w-5" />
              Tap to Call
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-20 border-t border-primary-foreground/10 pt-8 text-center">
            <img src={storeLogo} alt="Akshaya Medicals Logo" className="mx-auto mb-3 h-12 w-12 rounded-xl object-cover opacity-60" />
            <p className="font-body text-xs text-primary-foreground/50 font-medium">Since 1989 · Pharmacy with Aim</p>
            <p className="mt-1 font-body text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Akshaya Medicals &amp; General Stores · Owned by Preetipal Malgi · Sirsi, Karnataka
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTAFooter;
