import brandLogo from "@/assets/brand-logo.png";
import { cn } from "@/lib/utils";

type GlowingLogoVariant = "header" | "intro";

interface GlowingLogoProps {
  alt?: string;
  className?: string;
  coreClassName?: string;
  imageClassName?: string;
  variant?: GlowingLogoVariant;
}

const variantStyles: Record<GlowingLogoVariant, { frame: string; shell: string; core: string; image: string }> = {
  header: {
    frame: "h-14 w-14 sm:h-16 sm:w-16",
    shell: "p-px",
    core: "p-[0.3rem]",
    image: "h-full w-full",
  },
  intro: {
    frame: "h-[11.5rem] w-[11.5rem] sm:h-[15rem] sm:w-[15rem]",
    shell: "p-[1.5px]",
    core: "p-4 sm:p-5",
    image: "h-full w-full",
  },
};

const GlowingLogo = ({
  alt = "Akshaya Medicals logo",
  className,
  coreClassName,
  imageClassName,
  variant = "header",
}: GlowingLogoProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={cn("logo-halo-shell", styles.frame, styles.shell, className)}>
      <span className="logo-halo-ring" aria-hidden="true" />

      <div className={cn("logo-halo-core", styles.core, coreClassName)}>
        <img src={brandLogo} alt={alt} className={cn("logo-halo-image", styles.image, imageClassName)} />
      </div>
    </div>
  );
};

export default GlowingLogo;