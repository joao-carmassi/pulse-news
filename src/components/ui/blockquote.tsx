import { ClassValue } from 'clsx';

export function Blockquote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) {
  return (
    <blockquote
      className={`className="mt-6 border-l-2 pl-6 italic" ${className}`}
    >
      {children}
    </blockquote>
  );
}
