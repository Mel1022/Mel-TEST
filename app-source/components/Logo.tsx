type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/DCLogo.png"
        alt="DoorChamp Garage Services"
        style={{ height: "64px", width: "auto" }}
      />
    </span>
  );
}
