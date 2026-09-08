type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/doorchamp-logo.png"
        alt="DoorChamp Garage Services"
        style={{
          height: "48px",
          width: "auto",
          filter: variant === "light" ? "brightness(0) invert(1)" : "none",
        }}
      />
    </span>
  );
}
