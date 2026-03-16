import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { FlaskConical, Pill, Droplets, Leaf, Stethoscope, HeartPulse, Scissors, Cross } from "lucide-react";

const products = [
  { icon: FlaskConical, name: "Industrial Chemicals", items: ["Vitamin B1 Powder", "Acrylic Acid"] },
  { icon: Pill, name: "Vitamin Powder", items: ["Vitamin B2 Powder"] },
  { icon: Droplets, name: "Acetone Solvent", items: ["Acetone Solvent"] },
  { icon: Leaf, name: "Organic Capsules", items: ["Organic Vitamin"] },
  { icon: Stethoscope, name: "Dental Instruments", items: ["Dental Instruments"] },
  { icon: HeartPulse, name: "ECG Machine", items: ["ECG Machine"] },
  { icon: Scissors, name: "Surgical Instruments", items: ["Surgical Instruments"] },
  { icon: Cross, name: "Adhesive Bandage", items: ["Adhesive Bandages"] },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ProductsSection = () => {
  return (
    <section className="section-warm py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-secondary">Our Range</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Products &amp; Services
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-muted-foreground">
              A comprehensive range of healthcare, pharmaceutical, and general products.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -12px hsl(38 92% 50% / 0.15)",
                transition: { duration: 0.3 },
              }}
              className="group flex cursor-default flex-col items-center rounded-2xl border border-border bg-background p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 transition-all group-hover:bg-secondary/20 group-hover:scale-110">
                <product.icon className="h-8 w-8 text-secondary transition-transform group-hover:scale-105" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">{product.name}</h3>
              <div className="mt-2 space-y-0.5">
                {product.items.map((item) => (
                  <p key={item} className="font-body text-xs text-muted-foreground">{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
