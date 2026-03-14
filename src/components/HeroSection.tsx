import { motion } from "framer-motion";
import heroImg from "@/assets/hero-storefront.jpg";
import { MapPin, Heart, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-foreground">
      {/* Top half: Shop Image - crisp, no stretching */}
      <div className="relative w-full">
        <img
          src={heroImg}
          alt="Akshaya Medicals & General Stores storefront in Sirsi"
          className="w-full object-contain"
        />
        {/* Subtle bottom fade into dark */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />
      </div>

      {/* Bottom half: Content over dark background */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-20 pt-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2"
          >
            <Heart className="h-4 w-4 text-secondary" fill="currentColor" />
            <span className="font-body text-sm text-primary-foreground/80">Serving Sirsi Since Day One</span>
          </motion.div>

          <h1 className="font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            Akshaya Medicals
            <span className="block text-secondary">&amp; General Stores</span>
          </h1>

          <p className="mt-4 font-body text-lg text-primary-foreground/70">
            By <span className="font-semibold text-primary-foreground">Preetipal Malgi</span>
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-primary-foreground/50">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm">Church Rd, Opp. Government Hospital, Sirsi 581401</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-primary-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
