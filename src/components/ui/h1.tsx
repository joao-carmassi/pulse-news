import { ClassValue } from 'clsx';

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground ${className}`}
    >
      {children}
    </h1>
  );
}
