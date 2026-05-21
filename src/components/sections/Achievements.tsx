import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#f4f4f4] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-300 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-[#0d0d0d] uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              RESULTS
            </h2>
            <p className="text-[#9a9a9a] text-xs sm:text-sm pb-1">実績</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 flex flex-col gap-5 border border-gray-200"
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
                <p className="text-[#808080] text-[11px] tracking-widest uppercase mt-0.5">
                  {item.division}
                </p>
              </div>

              {/* Result */}
              <p
                className="font-impact text-[#0d0d0d] uppercase leading-none"
                style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
              >
                {item.result}
              </p>

              {/* Detail */}
              <p className="text-[#6b6b6b] text-sm leading-relaxed border-t border-gray-100 pt-5">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
