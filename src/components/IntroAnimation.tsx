import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/brand-logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"hold" | "move">("hold");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("move"), 2500);
    return () => clearTimeout(holdTimer);
  }, []);

  const handleMoveComplete = () => {
    if (phase === "move") {
      onComplete();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground"
      animate={phase === "move" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: phase === "move" ? 0.5 : 0 }}
      onAnimationComplete={phase === "move" ? handleMoveComplete : undefined}
    >
      <motion.img
        src={brandLogo}
        alt="Akshaya Medicals logo"
        className="rounded-full drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          phase === "hold"
            ? { opacity: 0.8, scale: 1 }
            : {
                opacity: 1,
                scale: 0.3,
                x: -(window.innerWidth / 2 - 50),
                y: -(window.innerHeight / 2 - 50),
              }
        }
        transition={{
          duration: phase === "hold" ? 0.8 : 0.7,
          ease: [0.4, 0, 0.2, 1],
        }}
        style={{ width: 160, height: 160 }}
      />
    </motion.div>
  );
};

export default IntroAnimation;
