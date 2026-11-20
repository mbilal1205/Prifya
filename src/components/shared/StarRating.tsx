/**
 * StarRating — pure display component.
 * - Server-safe (no hooks)
 * - role="img" + aria-label → screen readers announce "4.8 out of 5 stars"
 * - Reusable across home, PDP, review cards
 */
export function StarRating({
  value,
  size = 14,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  const rounded = Math.round(value);

  return (
    <div
      className={`flex items-center gap-0.5 ${className ?? ""}`}
      role="img"
      aria-label={`${value.toFixed(1)} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i <= rounded ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          className="text-brand-amber"
          aria-hidden="true"
        >
          <path d="M12 2.5l2.9 5.88 6.49.94-4.69 4.57 1.1 6.46L12 17.3l-5.8 3.05 1.1-6.46-4.69-4.57 6.49-.94L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}