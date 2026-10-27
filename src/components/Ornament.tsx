export default function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-gold/60" />
      <span className="block h-1.5 w-1.5 rotate-45 border border-gold" />
      <span className="h-px w-16 sm:w-24 bg-gold/60" />
    </div>
  );
}
