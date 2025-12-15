interface LogoProps {
  className?: string;
  animate?: boolean;
}

export function Logo({ className, animate = false }: LogoProps) {
  return animate ? (
    <img className={className} src="/icon.png" alt="icon" />
  ) : (
    <img className={className} src="/logo.png" alt="logo" />
  );
}
