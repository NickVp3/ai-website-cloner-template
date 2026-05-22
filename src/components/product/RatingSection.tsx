"use client";

import { useState } from "react";
import { StarRatingInput, StarRatingDisplay } from "@/components/shared/StarRating";
import type { Rating } from "@/types";

interface RatingFormProps {
  ratings: Rating[];
  avgScore: number;
}

export function RatingSection({ ratings: initialRatings, avgScore: initialAvg }: RatingFormProps) {
  const [ratings, setRatings] = useState<Rating[]>(initialRatings);
  const [score, setScore] = useState(0);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const avg =
    ratings.length > 0
      ? Math.round((ratings.reduce((a, r) => a + r.score, 0) / ratings.length) * 10) / 10
      : initialAvg;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (score === 0) { setError("Selecciona una calificación."); return; }
    if (!author.trim()) { setError("Escribe tu nombre."); return; }
    if (!comment.trim()) { setError("Escribe un comentario."); return; }

    const newRating: Rating = {
      userId: crypto.randomUUID(),
      score,
      author: author.trim(),
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setRatings((prev) => [newRating, ...prev]);
    setSubmitted(true);
    setScore(0);
    setAuthor("");
    setComment("");
    setError("");
  }

  // Distribution
  const distribution = [5, 4, 3, 2, 1].map((s) => ({
    star: s,
    count: ratings.filter((r) => r.score === s).length,
  }));

  return (
    <section className="mt-16">
      <h2 className="font-heading text-3xl tracking-wide text-[var(--text)] mb-8">
        Calificaciones y Reseñas
      </h2>

      {/* Summary */}
      <div className="flex flex-col sm:flex-row gap-8 pb-8 border-b border-[var(--gold)]/10 mb-8">
        <div className="flex flex-col items-center justify-center gap-1 min-w-[120px]">
          <span className="font-heading text-6xl text-[var(--gold)] leading-none">{avg || "-"}</span>
          <StarRatingDisplay score={avg} size="lg" />
          <span className="text-xs text-[var(--text-muted)]">{ratings.length} reseña{ratings.length !== 1 ? "s" : ""}</span>
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-center">
          {distribution.map(({ star, count }) => {
            const pct = ratings.length > 0 ? Math.round((count / ratings.length) * 100) : 0;
            return (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span className="text-[var(--text-muted)] w-8 text-right">{star}</span>
                <div className="flex-1 h-1.5 bg-[var(--dark-5)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--gold)] rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[var(--text-muted)] w-8">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews list */}
      {ratings.length > 0 && (
        <div className="flex flex-col gap-6 mb-10">
          {ratings.map((r) => (
            <div key={r.userId} className="border-b border-[var(--gold)]/8 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-bold flex items-center justify-center">
                  {r.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{r.author}</p>
                  <p className="text-xs text-[var(--text-muted)]">{r.date}</p>
                </div>
                <div className="ml-auto">
                  <StarRatingDisplay score={r.score} />
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* Form */}
      <div className="bg-white border border-[var(--gold)]/15 rounded-xl p-6 shadow-sm">
        <h3 className="font-heading text-xl tracking-wide text-[var(--text)] mb-5">
          {submitted ? "¡Gracias por tu reseña!" : "Deja tu calificación"}
        </h3>

        {submitted && (
          <p className="text-sm text-[var(--gold)] mb-4">Tu resena fue agregada exitosamente.</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-2 block">
              Tu calificación *
            </label>
            <StarRatingInput value={score} onChange={setScore} />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-2 block">
              Tu nombre *
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Ej: Carlos M."
              className="w-full bg-white border border-[var(--gold)]/20 rounded-md px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--gold)]/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-2 block">
              Comentario *
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Cuéntanos tu experiencia con el producto..."
              rows={3}
              className="w-full bg-white border border-[var(--gold)]/20 rounded-md px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--gold)]/50 transition-colors resize-none"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            className="btn-primary self-start"
          >
            Publicar reseña
          </button>
        </form>
      </div>
    </section>
  );
}
