import Image from "next/image";
import { activities, type Activity } from "@/data/activities";

// ── GAME カード ────────────────────────────────────────────────
function GameCard({ item }: { item: Activity }) {
  const hasImage = item.image.trim() !== "";

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">

      {/* 画像エリア（画像がある場合のみ表示） */}
      {hasImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#0d0d0d]">
        <span className="text-white text-[10px] font-semibold tracking-[0.22em] uppercase">
          Game
        </span>
        <span className="text-[#808080] text-[10px] tracking-widest uppercase">
          {item.date}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-5 sm:py-6">
        <p className="text-[#b0b0b0] text-[10px] tracking-[0.22em] uppercase mb-3">
          {item.label}
        </p>

        {/* Score */}
        <p
          className="font-impact text-[#0d0d0d] uppercase leading-none"
          style={{ fontSize: "clamp(32px, 5.5vw, 64px)" }}
        >
          {item.title}
        </p>

        {/* Subtitle (対戦相手など) */}
        {item.subtitle && (
          <p className="text-[#808080] text-sm mt-1">{item.subtitle}</p>
        )}

        {/* Location */}
        {item.location && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <svg className="w-3 h-3 text-[#c0c0c0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-[#a0a0a0] text-[11px] tracking-widest uppercase">
              {item.location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── TRAINING / EVENT カード ────────────────────────────────────
function TrainingCard({ item }: { item: Activity }) {
  const hasImage = item.image.trim() !== "";

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">

      {/* 画像エリア（画像がある場合のみ表示） */}
      {hasImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-[#f0f0f0]">
        <span className="text-[#0d0d0d] text-[10px] font-semibold tracking-[0.22em] uppercase">
          {item.type === "EVENT" ? "Event" : "Training"}
        </span>
        <span className="text-[#808080] text-[10px] tracking-widest uppercase">
          {item.date}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-5 sm:py-6">
        <p className="text-[#b0b0b0] text-[10px] tracking-[0.22em] uppercase mb-3">
          {item.label}
        </p>

        {/* Title */}
        <p
          className="font-impact text-[#0d0d0d] uppercase leading-none"
          style={{ fontSize: "clamp(26px, 4vw, 50px)" }}
        >
          {item.title}
        </p>

        {/* Subtitle */}
        {item.subtitle && (
          <p className="text-[#808080] text-sm mt-1">{item.subtitle}</p>
        )}

        {/* Location */}
        {item.location && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <svg className="w-3 h-3 text-[#c0c0c0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-[#a0a0a0] text-[11px] tracking-widest uppercase">
              {item.location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── メインセクション ────────────────────────────────────────────
export default function Activity() {
  return (
    <section id="activity" className="bg-[#f4f4f4] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-300 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-[#0d0d0d] uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              ACTIVITY
            </h2>
            <a
              href="https://www.instagram.com/neighborhood.est2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a0a0a0] text-[11px] tracking-[0.2em] uppercase hover:text-[#0d0d0d] transition-colors duration-200 pb-1"
            >
              @neighborhood.est2023 →
            </a>
          </div>
        </div>

        {/* Feed */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {activities.map((item) =>
            item.type === "GAME" ? (
              <GameCard key={item.id} item={item} />
            ) : (
              <TrainingCard key={item.id} item={item} />
            )
          )}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/neighborhood.est2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-gray-300 bg-white px-6 py-3 text-[#333] text-[11px] tracking-[0.2em] uppercase hover:border-[#0d0d0d] hover:text-[#0d0d0d] transition-colors duration-200 min-h-[44px]"
          >
            <span>More on Instagram</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
