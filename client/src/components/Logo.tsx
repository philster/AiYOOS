interface LogoProps {
  className?: string;
  animate?: boolean;
}

export function Logo({ className, animate = false }: LogoProps) {
  return animate ? (
    <>
      <img
        className={`${className} block dark:hidden`}
        src="/icon.gif"
        alt="icon"
      />
      <img
        className={`${className} hidden dark:block`}
        src="/icon-dark.gif"
        alt="icon"
      />
    </>
  ) : (
    <>
      <img
        className={`${className} block dark:hidden`}
        src="/logo.png"
        alt="logo"
      />
      <img
        className={`${className} hidden dark:block`}
        src="/logo-dark.png"
        alt="logo"
      />
    </>
  );
}
