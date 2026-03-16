import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Store, Building, TrendingUp, CalendarDays, FileText } from "lucide-react";

const stats = [
  { icon: Store, label: "Nature of Business", value: "Retailer" },
  { icon: Building, label: "Legal Status", value: "Proprietorship" },
  { icon: TrendingUp, label: "Annual Turnover", value: "40 L – 1.5 Cr" },
  { icon: CalendarDays, label: "GST Registration", value: "01-07-2017" },
  { icon: FileText, label: "GST Number", value: "28ABKPM0482D1ZN" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">About Us</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Who We Are
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
              Akshay Medicals And General Stores provides you the best range of industrial chemicals, 
              vitamin powder, acetone solvent, organic capsules, dental instruments &amp; ECG machine 
              with effective &amp; timely delivery.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 12px 30px -8px hsl(175 84% 32% / 0.15)" }}
              className="group flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-colors"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-body text-xs text-muted-foreground">{stat.label}</span>
              <span className="mt-1 font-display text-sm font-bold text-foreground">{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
