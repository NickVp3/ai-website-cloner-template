"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingDisplayProps {
  score: number;
  count?: number;
  size?: "sm" | "md" | "lg";
}

export function StarRatingDisplay({ score, count, size = "sm" }: StarRatingDisplayProps) {
  const sizes = { sm: 14, md: 16, lg: 20 };

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={sizes[size]}
            className={cn(
              "transition-colors",
              star <= Math.round(score)
                ? "fill-[var(--gold)] text-[var(--gold)]"
                : "text-[var(--text-muted)]/40",
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-[var(--text-muted)]">({count})</span>
      )}
    </div>
  );
}

interface StarRatingInputProps {
  value: number;
  onChange: (score: number) => void;
}

export function StarRatingInput({ value, onChange }: StarRatingInputProps) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-colors leading-none"
          aria-label={`${star} estrellas`}
        >
          <Star
            size={24}
            className={cn(
              (hovered || value) >= star
                ? "fill-[var(--gold)] text-[var(--gold)]"
                : "text-[var(--text-muted)]/30",
            )}
          />
        </button>
      ))}
    </div>
  );
}
