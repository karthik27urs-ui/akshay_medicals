import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import brandLogo from "@/assets/brand-logo.png";
import heroImg from "@/assets/hero-storefront.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase("hold"), 1000);
    const exitTimer = setTimeout(() => setPhase("exit"), 3200);
    const doneTimer = setTimeout(() => onComplete(), 4200);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background storefront image */}
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark cinematic overlay */}
      <motion.div
        className="absolute inset-0 bg-foreground/60"
        animate={
          phase === "hold"
            ? { backgroundColor: "hsla(0,0%,0%,0.55)" }
            : { backgroundColor: "hsla(0,0%,0%,0.65)" }
        }
        transition={{ duration: 1.5 }}
      />

      {/* Ambient light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
        animate={
          phase !== "exit"
            ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }
            : { opacity: 0 }
        }
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo assembly */}
      <motion.a
        href="/"
        className="relative z-10 block"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={
          phase === "enter"
            ? { scale: 1, opacity: 1 }
            : phase === "hold"
              ? { scale: 1, opacity: 1 }
              : { scale: 0.25, opacity: 0, y: -200 }
        }
        transition={{
          duration: phase === "enter" ? 0.8 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Outer glow pulse ring 3 */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 60px)",
            height: "calc(100% + 60px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          animate={
            phase !== "exit"
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.6, 0.3],
                  boxShadow: [
                    "0 0 40px rgba(255,255,255,0.03)",
                    "0 0 80px rgba(255,255,255,0.08)",
                    "0 0 40px rgba(255,255,255,0.03)",
                  ],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Outer glow pulse ring 2 */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 36px)",
            height: "calc(100% + 36px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          animate={
            phase !== "exit"
              ? {
                  scale: [1, 1.04, 1],
                  opacity: [0.4, 0.8, 0.4],
                  boxShadow: [
                    "0 0 25px rgba(255,255,255,0.05)",
                    "0 0 50px rgba(255,255,255,0.12)",
                    "0 0 25px rgba(255,255,255,0.05)",
                  ],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Primary glowing ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 16px)",
            height: "calc(100% + 16px)",
            border: "2px solid rgba(255,255,255,0.25)",
          }}
          animate={
            phase !== "exit"
              ? {
                  boxShadow: [
                    "0 0 15px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.08), inset 0 0 15px rgba(255,255,255,0.05)",
                    "0 0 35px rgba(255,255,255,0.35), 0 0 70px rgba(255,255,255,0.15), inset 0 0 25px rgba(255,255,255,0.1)",
                    "0 0 15px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.08), inset 0 0 15px rgba(255,255,255,0.05)",
                  ],
                  borderColor: [
                    "rgba(255,255,255,0.2)",
                    "rgba(255,255,255,0.45)",
                    "rgba(255,255,255,0.2)",
                  ],
                }
              : { opacity: 0 }
          }
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spinning accent arc */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 16px)",
            height: "calc(100% + 16px)",
            border: "2px solid transparent",
            borderTopColor: "rgba(255,255,255,0.4)",
          }}
          animate={phase !== "exit" ? { rotate: 360 } : { opacity: 0 }}
          transition={{
            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
            opacity: { duration: 0.3 },
          }}
        />

        {/* Logo container - proper circle with overflow hidden */}
        <div
          className="relative h-52 w-52 overflow-hidden rounded-full sm:h-60 sm:w-60"
          style={{
            boxShadow: "0 0 30px rgba(0,0,0,0.3), inset 0 0 20px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={brandLogo}
            alt="Akshaya Medicals logo"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.a>

      {/* Tagline text */}
      <motion.p
        className="absolute bottom-20 left-1/2 -translate-x-1/2 font-display text-sm font-medium tracking-[0.3em] text-primary-foreground/50 sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={
          phase === "hold"
            ? { opacity: 1, y: 0 }
            : phase === "exit"
              ? { opacity: 0, y: -10 }
              : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        PHARMACY WITH AIM
      </motion.p>
    </motion.div>
  );
};

export default IntroAnimation;