import { motion } from "framer-motion";
import heroImg from "@/assets/hero-storefront.jpg";
import { MapPin, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Akshaya Medicals & General Stores storefront in Sirsi"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm"
          >
            <Heart className="h-4 w-4 text-secondary" fill="currentColor" />
            <span className="font-body text-sm text-primary-foreground/90">Serving Sirsi Since Day One</span>
          </motion.div>

          <h1 className="font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            Akshaya Medicals
            <span className="block text-secondary">&amp; General Stores</span>
          </h1>

          <p className="mt-4 font-body text-lg text-primary-foreground/80">
            By <span className="font-semibold text-primary-foreground">Preetipal Malgi</span>
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm">Church Rd, Opp. Government Hospital, Sirsi 581401</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-primary-foreground/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
