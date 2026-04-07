import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/brand-logo.png";
import heroImg from "@/assets/hero-storefront.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"hold" | "move" | "done">("hold");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("move"), 2800);
    return () => clearTimeout(holdTimer);
  }, []);

  useEffect(() => {
    if (phase === "move") {
      const doneTimer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
      return () => clearTimeout(doneTimer);
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      animate={phase === "move" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: phase === "move" ? 0.4 : 0 }}
    >
      {/* Background storefront image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Centered logo with glowing ring */}
      <motion.a
        href="/"
        className="absolute left-1/2 top-1/2 block"
        initial={{ x: "-50%", y: "-50%", scale: 0.7, opacity: 0 }}
        animate={
          phase === "hold"
            ? { x: "-50%", y: "-50%", scale: 1, opacity: 1 }
            : { x: "-50%", y: "-50%", scale: 0.3, opacity: 0 }
        }
        transition={{
          duration: phase === "hold" ? 0.9 : 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Outer glowing ring */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={
            phase === "hold"
              ? {
                  rotate: [0, 360],
                }
              : {}
          }
          transition={{
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "calc(100% + 24px)",
              height: "calc(100% + 24px)",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
            animate={
              phase === "hold"
                ? {
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.05)",
                      "0 0 40px rgba(255,255,255,0.35), 0 0 80px rgba(255,255,255,0.15), inset 0 0 30px rgba(255,255,255,0.1)",
                      "0 0 20px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.05)",
                    ],
                    borderColor: [
                      "rgba(255,255,255,0.2)",
                      "rgba(255,255,255,0.5)",
                      "rgba(255,255,255,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Second outer ring for depth */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "calc(100% + 40px)",
              height: "calc(100% + 40px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            animate={
              phase === "hold"
                ? {
                    boxShadow: [
                      "0 0 30px rgba(255,255,255,0.05)",
                      "0 0 60px rgba(255,255,255,0.12)",
                      "0 0 30px rgba(255,255,255,0.05)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Logo image */}
          <img
            src={brandLogo}
            alt="Akshaya Medicals logo"
            className="relative z-10 h-52 w-52 rounded-full object-cover sm:h-60 sm:w-60"
          />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default IntroAnimation;