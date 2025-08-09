import { cn } from "@/lib/utils";

interface SandiesLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  imageUrl?: string;
  alt?: string;
  className?: string;
}

export const SandiesLogo = ({
  size = "md",
  imageUrl = "/lovable-uploads/d2fc01de-aeb1-4ba2-95d2-e1ee5823b228.png", // Sandie's Astoria logo
  alt = "Sandie's Astoria Event Centre Logo",
  className,
}: SandiesLogoProps) => {
  const sizeStyles = {
    sm: "h-16 w-auto",
    md: "h-32 w-auto",
    lg: "h-48 w-auto",
    xl: "h-64 w-auto",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        size === "sm" ? "py-1" : "py-4",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={cn(
          "object-contain transition-all duration-300 hover:scale-105",
          sizeStyles[size]
        )}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.nextElementSibling?.classList.remove("hidden");
        }}
      />

      {/* Fallback text logo (hidden by default) */}
      <div className="hidden flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
          SANDIES
        </h1>
        <span className="text-xs md:text-sm text-foreground/80 font-medium tracking-[0.2em] uppercase">
          Event Center
        </span>
      </div>
    </div>
  );
};
