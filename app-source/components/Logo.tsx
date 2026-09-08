type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const src = variant === "light"
    ? "/images/doorchamp-logo-transparent.png"
    : "/images/doorchamp-logo.png";

  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt="DoorChamp Garage Services"
        style={{ height: "64px", width: "auto" }}
      />
    </span>
  );
}
