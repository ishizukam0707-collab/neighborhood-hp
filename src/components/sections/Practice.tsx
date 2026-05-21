import { practiceSessions, practiceInfo } from "@/data/practice";

export default function Practice() {
  return (
    <section id="practice" className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-[#0d0d0d] uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              PRACTICE
            </h2>
            <p className="text-[#9a9a9a] text-xs sm:text-sm pb-1">練習スケジュール</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: schedule cards */}
          <div className="flex flex-col gap-4">
            {practiceSessions.map((session) => (
              <div
                key={session.id}
                className="border border-gray-200 bg-[#f9f9f9] p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-impact text-[#0d0d0d] uppercase leading-none text-2xl sm:text-3xl">
                      {session.day}
                    </p>
                    {session.time && (
                      <p className="text-[#0d0d0d] text-xl sm:text-2xl font-semibold mt-1.5 tabular-nums">
                        {session.time}
                      </p>
                    )}
                  </div>
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#0d0d0d] flex-shrink-0" />
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-[#6b6b6b]">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-xs tracking-widest uppercase">{session.location}</p>
                  {session.note && (
                    <span className="text-gray-400 text-xs">— {session.note}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Games card */}
            <div className="border border-gray-200 bg-[#f9f9f9] p-6 sm:p-7">
              <p className="text-[#a0a0a0] text-[10px] tracking-[0.25em] uppercase mb-2">
                Official &amp; Practice Games
              </p>
              <p className="text-[#0d0d0d] text-sm sm:text-base leading-relaxed font-medium">
                週末・祝日を中心に公式戦・練習試合を実施
              </p>
              <p className="text-[#808080] text-xs sm:text-sm mt-1 leading-relaxed">
                Scheduled on weekends and holidays based on league entry status.
              </p>
            </div>
          </div>

          {/* Right: summary */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[#a0a0a0] text-[10px] tracking-[0.25em] uppercase mb-4">
                Frequency
              </p>
              <p
                className="font-impact text-[#0d0d0d] uppercase leading-tight"
                style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
              >
                5–6 sessions<br />per month
              </p>
              <p className="text-[#9a9a9a] text-xs sm:text-sm mt-2">月5〜6回の定期練習</p>
              <div className="mt-6 w-12 h-[2px] bg-[#b03030]" />
            </div>

            <ul className="space-y-3">
              {[
                { en: "Gym secured — no scramble for venue", ja: "体育館確保済み" },
                { en: "Consistent schedule, serious members", ja: "継続的なスケジュール" },
                { en: "Multiple leagues for competitive play", ja: "複数リーグ参戦" },
                { en: "Practice games against other teams", ja: "練習試合も定期実施" },
              ].map((point) => (
                <li key={point.en} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 bg-[#0d0d0d] flex-shrink-0" />
                  <div>
                    <p className="text-[#333] text-sm leading-relaxed">{point.en}</p>
                    <p className="text-[#b0b0b0] text-xs">{point.ja}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/neighborhood.est2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-[#0d0d0d] text-white text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-[#b03030] transition-colors duration-200 min-h-[48px]"
              >
                練習に参加する — DM on Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
