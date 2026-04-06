import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/brand-logo.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"hold" | "move" | "done">("hold");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("move"), 2500);
    return () => clearTimeout(holdTimer);
  }, []);

  const handleMoveComplete = () => {
    if (phase === "move") {
      setPhase("done");
      onComplete();
    }
  };

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      {(
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-foreground"
          animate={phase === "move" ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: phase === "move" ? 0.4 : 0 }}
        >
          <motion.img
            src={brandLogo}
            alt="Akshaya Medicals logo"
            className="rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase === "hold"
                ? { opacity: 0.8, scale: 1 }
                : {
                    opacity: 1,
                    scale: 0.3,
                    x: -(window.innerWidth / 2 - 44),
                    y: -(window.innerHeight / 2 - 44),
                  }
            }
            transition={{
              duration: phase === "hold" ? 0.8 : 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            onAnimationComplete={handleMoveComplete}
            style={{ width: 160, height: 160 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
