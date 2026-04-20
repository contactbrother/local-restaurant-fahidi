export function DishPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-warm overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 80"
        className="h-12 w-12 text-gold-deep/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="40" cy="40" r="28" />
        <circle cx="40" cy="40" r="20" strokeDasharray="2 3" />
        <path d="M28 40 Q40 30 52 40 Q40 50 28 40 Z" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0_/_0.4),transparent_60%)]" />
    </div>
  );
}
