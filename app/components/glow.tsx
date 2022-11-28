export default function Glow({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`border-2 border-sky-400 glow ${className}`}>
      <div className="glow-inner">
        {children}
      </div>
    </div>
  )
}