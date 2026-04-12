import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import heroImg from "@/assets/hero-storefront.jpg";
import GlowingLogo from "./GlowingLogo";

interface IntroAnimationProps {
  onComplete: () => void;
}

const rayAngles = [0, 60, 120, 180, 240, 300];

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const isHolding = phase === "hold";
  const isExiting = phase === "exit";

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 3500);
    const t3 = setTimeout(onComplete, 4600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // Pre-compute particle positions to avoid re-renders
  const particles = useMemo(() => 
    Array.from({ length: 14 }, (_, i) => ({
      size: 2 + Math.random() * 4,
      left: 16 + Math.random() * 68,
      top: 18 + Math.random() * 64,
      dy: -45 - Math.random() * 70,
      dx: (Math.random() - 0.5) * 60,
      dur: 2.6 + Math.random() * 2.1,
      delay: 0.15 + i * 0.16,
    })), []
  );

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Background */}
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 intro-vignette" />

      {/* Breathing ambient glow */}
      <motion.div
        className="absolute rounded-full intro-aura"
        style={{ width: 780, height: 780 }}
        animate={{ scale: [1, 1.24, 1], opacity: [0.38, 0.9, 0.38] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary warm glow */}
      <motion.div
        className="absolute rounded-full intro-secondary-aura"
        style={{ width: 540, height: 540 }}
        animate={{ scale: [1.08, 0.92, 1.08], opacity: [0.25, 0.62, 0.25] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      <motion.div
        className="absolute rounded-full intro-orbit-ring blur-[2px]"
        style={{ width: 420, height: 420 }}
        animate={{ rotate: 360, scale: [1, 1.03, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo group */}
      <motion.a
        href="/"
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0.45, opacity: 0, filter: "blur(18px)" }}
        animate={
          isExiting
            ? { scale: 0.24, opacity: 0.84, filter: "blur(0px)", y: -300, x: -430 }
            : { scale: 1, opacity: 1, filter: "blur(0px)", y: 0, x: 0 }
        }
        transition={{
          duration: phase === "enter" ? 0.95 : isExiting ? 1.05 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Outer pulsing glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 346,
            height: 346,
            border: "1.5px solid hsl(var(--logo-halo-white) / 0.18)",
          }}
          animate={{
            boxShadow: [
              "0 0 18px hsl(var(--logo-halo-white) / 0.08), 0 0 58px hsl(var(--logo-halo-blue) / 0.05)",
              "0 0 38px hsl(var(--logo-halo-white) / 0.18), 0 0 92px hsl(var(--logo-halo-blue) / 0.1)",
              "0 0 18px hsl(var(--logo-halo-white) / 0.08), 0 0 58px hsl(var(--logo-halo-blue) / 0.05)",
            ],
            borderColor: [
              "hsl(var(--logo-halo-white) / 0.18)",
              "hsl(var(--logo-halo-white) / 0.36)",
              "hsl(var(--logo-halo-white) / 0.18)",
            ],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner tight glow ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 326,
            height: 326,
            border: "1px solid hsl(var(--logo-halo-white) / 0.12)",
          }}
          animate={{
            borderColor: [
              "hsl(var(--logo-halo-white) / 0.1)",
              "hsl(var(--logo-halo-blue) / 0.26)",
              "hsl(var(--logo-halo-white) / 0.1)",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />

        {/* Rotating accent arc 1 */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 360,
            height: 360,
            border: "1.5px solid transparent",
            borderTopColor: "hsl(var(--logo-halo-white) / 0.42)",
            borderRightColor: "hsl(var(--logo-halo-blue) / 0.18)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Rotating accent arc 2 (counter) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 374,
            height: 374,
            border: "1px solid transparent",
            borderBottomColor: "hsl(var(--logo-halo-white) / 0.24)",
            borderLeftColor: "hsl(var(--logo-halo-blue) / 0.12)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Shimmer sweep across logo */}
        <motion.div
          className="absolute overflow-hidden rounded-full"
          style={{ width: 308, height: 308 }}
        >
          <motion.div
            className="absolute inset-0 intro-shimmer"
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9, repeatDelay: 1.2 }}
          />
        </motion.div>

        {/* Logo image */}
        <motion.div
          animate={
            isExiting
              ? { scale: 1.02, rotate: 0 }
              : { scale: [1, 1.025, 1], rotate: [0, 1.2, 0, -1.2, 0] }
          }
          transition={{ duration: 4.6, repeat: isExiting ? 0 : Infinity, ease: "easeInOut" }}
        >
          <GlowingLogo variant="intro" />
        </motion.div>
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
              ? "hsl(var(--secondary) / 0.38)"
              : "hsl(var(--logo-halo-white) / 0.34)",
            boxShadow: i % 3 === 0
              ? "0 0 12px hsl(var(--secondary) / 0.24)"
              : "0 0 10px hsl(var(--logo-halo-white) / 0.2)",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            isHolding
              ? { opacity: [0, 0.9, 0], scale: [0.7, 1.05, 0.8], y: [0, p.dy], x: [0, p.dx] }
              : { opacity: 0, scale: 0.7 }
          }
          transition={{ duration: p.dur, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      {/* Light rays */}
      {isHolding && (
        <>
          {rayAngles.map((deg) => (
            <motion.div
              key={deg}
              className="absolute intro-ray"
              style={{
                width: 1,
                height: 190,
                transformOrigin: "bottom center",
                rotate: `${deg}deg`,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 0.7, 0], scaleY: [0, 1, 0.55] }}
              transition={{ duration: 2.1, delay: 0.45, ease: "easeOut" }}
            />
          ))}
        </>
      )}

      {/* Tagline */}
      <motion.p
        className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-xs font-medium tracking-[0.35em] text-primary-foreground/60 sm:text-sm"
        initial={{ opacity: 0, y: 15 }}
        animate={
          isHolding
            ? { opacity: 1, y: 0 }
            : isExiting
              ? { opacity: 0, y: -10 }
              : { opacity: 0, y: 15 }
        }
        transition={{ duration: 0.7, ease: "easeOut", delay: isHolding ? 0.2 : 0 }}
      >
        PHARMACY WITH AIM
      </motion.p>

      {/* Since 1989 */}
      <motion.span
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-body text-[10px] tracking-[0.2em] text-primary-foreground/35"
        initial={{ opacity: 0 }}
        animate={isHolding ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: isHolding ? 0.5 : 0 }}
      >
        SINCE 1989
      </motion.span>
    </motion.div>
  );
};

export default IntroAnimation;
