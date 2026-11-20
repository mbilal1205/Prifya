/**
 * LineReveal — per-line fade + slide + blur reveal.
 * - LCP-safe: text starts at opacity 0.01 (paints ~50ms), settles in 900ms
 * - Staggers each line by 120ms (cinematic cascade)
 * - No overflow:hidden → descenders safe (g, y, p, j)
 * - Respects prefers-reduced-motion via global CSS @media
 * - Server-friendly: can be rendered inside RSC with string children
 */
export function LineReveal({
  lines,
  as: Tag = "h1",
  className,
  baseDelay = 0,
}: {
  lines: readonly string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  baseDelay?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block animate-line-up"
          style={{ animationDelay: `${baseDelay + i * 120}ms` }}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}