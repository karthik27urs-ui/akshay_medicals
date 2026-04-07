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
        initial={{ x: "-50%", y: "-50%", scale: 0.8, opacity: 0 }}
        animate={
          phase === "hold"
            ? { x: "-50%", y: "-50%", scale: 1, opacity: 0.85, rotate: [0, 2, -2, 0] }
            : { x: "0%", y: "0%", scale: 0.35, opacity: 1, left: 24, top: 24 }
        }
        transition={{
          duration: phase === "hold" ? 1 : 0.8,
          ease: [0.4, 0, 0.2, 1],
          rotate: { duration: 1.5, repeat: 1, ease: "easeInOut" },
        }}
      >
        <motion.img
          src={brandLogo}
          alt="Akshaya Medicals logo"
          className="h-56 w-56 rounded-full border-2 border-white/30 sm:h-64 sm:w-64"
          animate={
            phase === "hold"
              ? { boxShadow: ["0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.1)", "0 0 50px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2)", "0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.1)"] }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </motion.div>
  );
};

export default IntroAnimation;
