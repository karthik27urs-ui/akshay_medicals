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
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 3500);
    const t3 = setTimeout(onComplete, 4600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Background */}
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />

      {/* Cinematic dark overlay with vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Soft breathing ambient light behind logo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo group */}
      <motion.a
        href="/"
        className="relative z-10 block"
        initial={{ scale: 0.6, opacity: 0, filter: "blur(12px)" }}
        animate={
          phase === "enter"
            ? { scale: 1, opacity: 0.8, filter: "blur(0px)" }
            : phase === "hold"
              ? { scale: 1, opacity: 0.8, filter: "blur(0px)" }
              : { scale: 0.2, opacity: 0, filter: "blur(8px)", y: -250 }
        }
        transition={{
          duration: phase === "enter" ? 0.8 : phase === "exit" ? 1 : 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Rotating halo ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 28px)",
            height: "calc(100% + 28px)",
            border: "1.5px solid transparent",
            borderTopColor: "rgba(255,255,255,0.35)",
            borderRightColor: "rgba(255,255,255,0.12)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Static glow ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "calc(100% + 20px)",
            height: "calc(100% + 20px)",
            border: "1.5px solid rgba(255,255,255,0.18)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.03)",
              "0 0 45px rgba(255,255,255,0.2), inset 0 0 30px rgba(255,255,255,0.06)",
              "0 0 20px rgba(255,255,255,0.08), inset 0 0 20px rgba(255,255,255,0.03)",
            ],
            borderColor: [
              "rgba(255,255,255,0.15)",
              "rgba(255,255,255,0.35)",
              "rgba(255,255,255,0.15)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo – larger, 80% transparent */}
        <div
          className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
        >
          <img
            src={brandLogo}
            alt="Akshaya Medicals logo"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.a>

      {/* Tagline */}
      <motion.p
        className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs font-medium tracking-[0.35em] text-primary-foreground/40 sm:text-sm"
        initial={{ opacity: 0, y: 15 }}
        animate={
          phase === "hold"
            ? { opacity: 1, y: 0 }
            : phase === "exit"
              ? { opacity: 0, y: -10 }
              : { opacity: 0, y: 15 }
        }
        transition={{ duration: 0.7, ease: "easeOut", delay: phase === "hold" ? 0.2 : 0 }}
      >
        PHARMACY WITH AIM
      </motion.p>

      {/* "Since 1989" subtle badge */}
      <motion.span
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-body text-[10px] tracking-[0.2em] text-primary-foreground/25"
        initial={{ opacity: 0 }}
        animate={
          phase === "hold" ? { opacity: 1 } : { opacity: 0 }
        }
        transition={{ duration: 0.5, delay: phase === "hold" ? 0.5 : 0 }}
      >
        SINCE 1989
      </motion.span>
    </motion.div>
  );
};

export default IntroAnimation;