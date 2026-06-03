import Image from "next/image";
import { achievements, featuredResult } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#0d0d0d] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-[#2a2a2a] pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-white uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              RESULTS
            </h2>
            <p className="text-[#505050] text-xs sm:text-sm pb-1">実績</p>
          </div>
        </div>

        {/* Featured Result */}
        <div className="bg-[#141414] border border-[#2a2a2a] mb-8 sm:mb-10">

          {/* Photos: landscape left + portrait right, natural aspect ratios */}

          {/* Desktop: side by side, same height */}
          <div className="hidden sm:flex h-[380px] lg:h-[460px]">
            <div className="flex-1 relative overflow-hidden bg-[#1e1e1e]">
              <Image
                src={featuredResult.images[0]}
                alt={`${featuredResult.tournamentJa} ${featuredResult.year}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* bracket: natural width derived from shared height */}
            <div className="flex-none h-full aspect-[595/842] relative overflow-hidden bg-white">
              <Image
                src={featuredResult.images[1]}
                alt={`${featuredResult.tournamentJa} ${featuredResult.year} トーナメント表`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="sm:hidden">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#1e1e1e]">
              <Image
                src={featuredResult.images[0]}
                alt={`${featuredResult.tournamentJa} ${featuredResult.year}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[595/842] overflow-hidden bg-white">
              <Image
                src={featuredResult.images[1]}
                alt={`${featuredResult.tournamentJa} ${featuredResult.year} トーナメント表`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-[#b03030] text-[10px] tracking-[0.28em] uppercase mb-5">
              Featured Result
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-8 mb-5">
              <div>
                <p className="text-[#555] text-[10px] tracking-[0.24em] uppercase mb-1.5">
                  {featuredResult.year} · {featuredResult.tournament}
                </p>
                <p className="text-white text-sm sm:text-base font-semibold leading-snug">
                  {featuredResult.tournamentJa}
                  <span className="text-[#505050] text-xs font-normal ml-2">
                    {featuredResult.representativeJa}
                  </span>
                </p>
              </div>
              <div className="shrink-0">
                <p
                  className="font-impact text-white uppercase leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
                >
                  {featuredResult.result}
                </p>
                <p className="text-[#555] text-xs mt-0.5">{featuredResult.resultJa}</p>
              </div>
            </div>

            <p className="text-[#909090] text-sm leading-relaxed mb-7">
              {featuredResult.body}
            </p>

            {/* Selected Players */}
            <div className="border-t border-[#2a2a2a] pt-6">
              <p className="text-[#505050] text-[10px] tracking-[0.28em] uppercase mb-4">
                Selected Players
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-10">
                {featuredResult.selectedPlayers.map((p) => (
                  <div key={p.name} className="flex items-baseline gap-3">
                    <span className="text-[#404040] text-[10px] tabular-nums w-9 shrink-0">
                      No.{p.number}
                    </span>
                    <span className="text-[#c0c0c0] text-xs sm:text-sm tracking-wide">
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regular achievement cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 flex flex-col gap-5"
            >
              {/* League + year */}
              <div>
                {item.year && (
                  <p className="text-[#a0a0a0] text-[10px] tracking-[0.22em] uppercase mb-1.5">
                    {item.year}
                  </p>
                )}
                <p className="text-[#0d0d0d] text-sm font-semibold tracking-wide leading-snug">
                  {item.league}
                </p>
                <p className="text-[#b0b0b0] text-[10px] mt-0.5">{item.leagueJa}</p>
                <p className="text-[#808080] text-[11px] tracking-widest uppercase mt-1">
                  {item.division}
                </p>
                <p className="text-[#b0b0b0] text-[10px] mt-0.5">{item.divisionJa}</p>
              </div>

              {/* Result */}
              <div>
                <p
                  className="font-impact text-[#0d0d0d] uppercase leading-none"
                  style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
                >
                  {item.result}
                </p>
                <p className="text-[#b0b0b0] text-xs mt-1">{item.resultJa}</p>
              </div>

              {/* Detail */}
              <div className="border-t border-gray-100 pt-5">
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.detail}</p>
                <p className="text-[#b0b0b0] text-xs leading-relaxed mt-2">{item.detailJa}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
