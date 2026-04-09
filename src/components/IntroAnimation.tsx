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
            "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Soft breathing ambient light behind logo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo group */}
      <motion.a
        href="/"
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0.5, opacity: 0, filter: "blur(16px)" }}
        animate={
          phase === "enter" || phase === "hold"
            ? { scale: 1, opacity: 1, filter: "blur(0px)" }
            : { scale: 0.15, opacity: 0, filter: "blur(8px)", y: -280, x: -400 }
        }
        transition={{
          duration: phase === "enter" ? 0.8 : phase === "exit" ? 1.1 : 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Single glowing ring - tightly around logo */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            border: "2px solid rgba(255,255,255,0.25)",
          }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.03)",
              "0 0 30px rgba(255,255,255,0.25), 0 0 70px rgba(255,255,255,0.1), inset 0 0 25px rgba(255,255,255,0.06)",
              "0 0 15px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.05), inset 0 0 15px rgba(255,255,255,0.03)",
            ],
            borderColor: [
              "rgba(255,255,255,0.2)",
              "rgba(255,255,255,0.45)",
              "rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating accent arc */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 310,
            height: 310,
            border: "1.5px solid transparent",
            borderTopColor: "rgba(255,255,255,0.4)",
            borderRightColor: "rgba(255,255,255,0.15)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo image - 80% opacity, perfectly circular */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: 280,
            height: 280,
            boxShadow: "0 0 50px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.08)",
          }}
        >
          <img
            src={brandLogo}
            alt="Akshaya Medicals logo"
            className="h-full w-full object-cover"
            style={{ opacity: 0.8 }}
          />
        </div>
      </motion.a>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          initial={{ opacity: 0 }}
          animate={
            phase === "hold"
              ? {
                  opacity: [0, 0.6, 0],
                  y: [0, -30 - Math.random() * 40],
                  x: [0, (Math.random() - 0.5) * 30],
                }
              : { opacity: 0 }
          }
          transition={{
            duration: 2 + Math.random() * 2,
            delay: 0.3 + i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Tagline */}
      <motion.p
        className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs font-medium tracking-[0.35em] text-primary-foreground/50 sm:text-sm"
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

      {/* "Since 1989" */}
      <motion.span
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-body text-[10px] tracking-[0.2em] text-primary-foreground/30"
        initial={{ opacity: 0 }}
        animate={phase === "hold" ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: phase === "hold" ? 0.5 : 0 }}
      >
        SINCE 1989
      </motion.span>
    </motion.div>
  );
};

export default IntroAnimation;
