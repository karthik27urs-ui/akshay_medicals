import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero-storefront.jpg";
import { MapPin, ChevronDown, Phone } from "lucide-react";
import { useRef } from "react";
import brandLogo from "@/assets/brand-logo.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-foreground">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img
          src={heroImg}
          alt="Akshaya Medicals & General Stores storefront in Sirsi"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/60 to-foreground/90" />
      </motion.div>

      {/* Brand logo - top left with glow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6"
      >
        {/* Glowing border wrapper */}
        <div
          className="rounded-full p-px"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08), rgba(255,255,255,0.28))",
            boxShadow: "0 0 6px rgba(255,255,255,0.14), 0 0 14px rgba(255,255,255,0.04)",
          }}
        >
          {/* Mobile */}
          <div className="h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full sm:hidden">
            <img src={brandLogo} alt="Akshaya Medicals logo" className="h-full w-full object-cover" />
          </div>
          {/* Desktop */}
          <div className="hidden h-[6rem] w-[6rem] overflow-hidden rounded-full sm:block">
            <img src={brandLogo} alt="Akshaya Medicals logo" className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-end px-6 pb-20 pt-10 text-center"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2 backdrop-blur-md"
        >
          <span className="font-body text-xs font-medium tracking-wide text-secondary">Since 1989</span>
          <span className="h-3 w-px bg-primary-foreground/20" />
          <span className="font-body text-xs font-medium tracking-wide text-primary-foreground/90">Pharmacy with Aim</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-primary-foreground sm:text-4xl md:text-5xl"
        >
          Akshaya Medicals
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-secondary"
          >
            &amp; General Stores
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 font-body text-sm text-primary-foreground/60"
        >
          By <span className="font-semibold text-primary-foreground">Preetipal Malgi</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-2 inline-flex items-center gap-1.5 text-primary-foreground/45"
        >
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-body text-xs">Church Rd, Opp. Government Hospital, Sirsi 581401</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="tel:+917947108627"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 active:scale-[0.97]"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 font-display text-xs font-bold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown className="h-7 w-7 text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
