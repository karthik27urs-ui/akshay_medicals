import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import generalImg from "@/assets/general-store.jpg";
import { ShoppingBag, Home, Sparkles } from "lucide-react";

const items = [
  { icon: ShoppingBag, label: "Daily Groceries" },
  { icon: Home, label: "Household Essentials" },
  { icon: Sparkles, label: "Personal Care" },
];

const GeneralStoreSection = () => {
  return (
    <section className="section-warm py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-secondary" />
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-secondary">General Store</span>
          </div>
        </ScrollReveal>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal direction="left" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl md:order-1"
            >
              <img
                src={generalImg}
                alt="General store shelves with everyday essentials"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/5" />
            </motion.div>
          </ScrollReveal>

          <div className="md:order-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                More Than
                <span className="block text-secondary">A Medical Store</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                While you pick up your prescriptions, why not grab your daily essentials too? From groceries and
                household supplies to personal care items — Akshaya is your one-stop neighborhood store, saving
                you time and extra trips.
              </p>
            </ScrollReveal>

            <div className="mt-10 flex flex-wrap gap-4">
              {items.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 24px -8px hsl(38 92% 50% / 0.2)" }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-3 shadow-sm"
                  >
                    <item.icon className="h-5 w-5 text-secondary" />
                    <span className="font-display text-sm font-semibold text-foreground">{item.label}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralStoreSection;
