export default function Glow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-sky-400 glow border-2 ${className}`}>
      <div className="glow-inner">{children}</div>
    </div>
  );
}
