import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
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

  // Pre-compute particle positions to avoid re-renders
  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      size: 2 + Math.random() * 4,
      left: 15 + Math.random() * 70,
      top: 15 + Math.random() * 70,
      dy: -40 - Math.random() * 60,
      dx: (Math.random() - 0.5) * 50,
      dur: 2.5 + Math.random() * 2,
      delay: 0.2 + i * 0.2,
    })), []
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Background */}
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Breathing ambient glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary warm glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(200,170,100,0.06) 0%, transparent 60%)",
        }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Logo group */}
      <motion.a
        href="/"
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0.4, opacity: 0, filter: "blur(20px)" }}
        animate={
          phase === "enter" || phase === "hold"
            ? { scale: 1, opacity: 1, filter: "blur(0px)" }
            : { scale: 0.12, opacity: 0, filter: "blur(10px)", y: -300, x: -420 }
        }
        transition={{
          duration: phase === "enter" ? 0.9 : phase === "exit" ? 1.1 : 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Outer pulsing glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 310,
            height: 310,
            border: "1.5px solid rgba(255,255,255,0.15)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.08), 0 0 60px rgba(255,255,255,0.03)",
              "0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.08)",
              "0 0 20px rgba(255,255,255,0.08), 0 0 60px rgba(255,255,255,0.03)",
            ],
            borderColor: [
              "rgba(255,255,255,0.15)",
              "rgba(255,255,255,0.4)",
              "rgba(255,255,255,0.15)",
            ],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner tight glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 290,
            height: 290,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          animate={{
            borderColor: [
              "rgba(255,255,255,0.08)",
              "rgba(255,255,255,0.25)",
              "rgba(255,255,255,0.08)",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Rotating accent arc 1 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 320,
            height: 320,
            border: "1.5px solid transparent",
            borderTopColor: "rgba(255,255,255,0.35)",
            borderRightColor: "rgba(255,255,255,0.1)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Rotating accent arc 2 (counter) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 330,
            height: 330,
            border: "1px solid transparent",
            borderBottomColor: "rgba(255,255,255,0.2)",
            borderLeftColor: "rgba(255,255,255,0.05)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Shimmer sweep across logo */}
        <motion.div
          className="absolute overflow-hidden rounded-full"
          style={{ width: 280, height: 280 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
            }}
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1, repeatDelay: 1.5 }}
          />
        </motion.div>

        {/* Logo image */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{
            width: 280,
            height: 280,
            boxShadow: "0 0 60px rgba(0,0,0,0.6), 0 0 25px rgba(255,255,255,0.1)",
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
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: i % 3 === 0
              ? "rgba(200,170,100,0.4)"
              : "rgba(255,255,255,0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={
            phase === "hold"
              ? { opacity: [0, 0.8, 0], y: [0, p.dy], x: [0, p.dx] }
              : { opacity: 0 }
          }
          transition={{ duration: p.dur, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      {/* Light rays */}
      {phase === "hold" && (
        <>
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <motion.div
              key={deg}
              className="absolute"
              style={{
                width: 1,
                height: 180,
                background: "linear-gradient(to top, rgba(255,255,255,0.08), transparent)",
                transformOrigin: "bottom center",
                rotate: `${deg}deg`,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 0.6, 0], scaleY: [0, 1, 0.5] }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
          ))}
        </>
      )}

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

      {/* Since 1989 */}
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
