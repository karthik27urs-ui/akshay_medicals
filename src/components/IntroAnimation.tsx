import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/brand-logo.png";
import heroImg from "@/assets/hero-storefront.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"hold" | "move">("hold");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("move"), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      animate={phase === "move" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: phase === "move" ? 0.6 : 0 }}
      onAnimationComplete={() => phase === "move" && onComplete()}
    >
      {/* Background storefront image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Centered logo that shrinks to top-left */}
      <motion.a
        href="/"
        className="absolute left-1/2 top-1/2 block"
        initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 0 }}
        animate={
          phase === "hold"
            ? { x: "-50%", y: "-50%", scale: 1, opacity: 0.8 }
            : { x: "0%", y: "0%", scale: 0.4, opacity: 1, left: 24, top: 24 }
        }
        transition={{
          duration: phase === "hold" ? 0.7 : 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <img
          src={brandLogo}
          alt="Akshaya Medicals logo"
          className="h-40 w-40 rounded-full drop-shadow-2xl sm:h-48 sm:w-48"
        />
      </motion.a>
    </motion.div>
  );
};

export default IntroAnimation;
