import Image from "next/image";
import { members } from "@/data/members";

// CSS-only placeholder — 画像が未設定のとき表示されるシルエット
function MemberPlaceholder({ number }: { number: number }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-[#e2e2e2] to-[#cecece]">
      {/* Head */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#b8b8b8] mb-1" />
      {/* Shoulders */}
      <div className="w-16 sm:w-20 h-12 sm:h-14 rounded-t-[60%] bg-[#b8b8b8] mb-0" />
      {/* Jersey number */}
      <div className="absolute top-3 left-3 bg-[#0d0d0d]/60 px-1.5 py-0.5">
        <span className="font-impact text-white text-xs sm:text-sm leading-none">
          #{number}
        </span>
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section id="members" className="bg-[#f4f4f4] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-300 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-[#0d0d0d] uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              MEMBERS
            </h2>
            <p className="text-[#9a9a9a] text-xs sm:text-sm pb-1">
              メンバー — {members.length} players
            </p>
          </div>
        </div>

        {/* Grid: 2col(sm) / 3col(md) / 4col(lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {members.map((member) => {
            const hasImage = member.image.trim() !== "";
            return (
              <div key={member.id} className="group">

                {/* Photo area */}
                <div className="relative aspect-[3/4] overflow-hidden mb-2.5">
                  {hasImage ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500"
                      unoptimized
                    />
                  ) : (
                    <MemberPlaceholder number={member.number} />
                  )}

                  {/* Number badge (shown on top of real photo) */}
                  {hasImage && (
                    <div className="absolute top-2 left-2 bg-[#0d0d0d]/80 px-1.5 py-0.5">
                      <span className="font-impact text-white text-xs sm:text-sm leading-none">
                        #{member.number}
                      </span>
                    </div>
                  )}

                  {/* Role badge */}
                  {member.role && (
                    <div className="absolute top-2 right-2 bg-[#b03030] px-1.5 py-0.5">
                      <span className="text-white text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase">
                        {member.role}
                      </span>
                    </div>
                  )}

                  {/* Position badge */}
                  <div className="absolute bottom-2 right-2 bg-[#0d0d0d] px-1.5 py-0.5">
                    <span className="text-white text-[9px] sm:text-[10px] tracking-wider font-semibold">
                      {member.position}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <p className="text-[#0d0d0d] text-xs sm:text-sm font-semibold leading-tight truncate">
                  {member.name}
                </p>
                <p className="text-[#808080] text-[10px] sm:text-xs mt-0.5">
                  {member.height} cm
                </p>
                <p className="text-[#a0a0a0] text-[10px] sm:text-xs mt-0.5 truncate">
                  {member.university}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-[#c0c0c0] text-[11px] sm:text-xs mt-10 sm:mt-14 text-center tracking-wide">
          * Photos and profiles will be updated as they are confirmed.
        </p>
      </div>
    </section>
  );
}
