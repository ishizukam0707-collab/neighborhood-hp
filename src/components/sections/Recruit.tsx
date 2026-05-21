const targets = [
  {
    id: "01",
    en: "You played in college.\nYou're not ready to stop.",
    ja: "大学まで本気でやってきた。社会人になっても続けたい。",
    body: "You gave four years to the game in college. The skills are still there. The drive is still there. You just need a team that takes it as seriously as you do — not a pickup run, not a social club.",
  },
  {
    id: "02",
    en: "New to Tokyo.\nLooking for your game back.",
    ja: "転勤などで東京に来て、競技できる環境を探している。",
    body: "Relocated for work and lost your basketball community. You need teammates, league games, and a consistent schedule. NEIGHBORHOOD is built by players who started over in this city.",
  },
  {
    id: "03",
    en: "You don't show up\nto enjoy. You show up to win.",
    ja: "エンジョイではなく、勝つことを前提に活動したい。",
    body: "You track the score. You care about the outcome. You want to play against real competition and improve every week. If basketball is still a core part of who you are, we are on the same page.",
  },
];

export default function Recruit() {
  return (
    <section id="recruit" className="bg-[#0d0d0d] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-[#2a2a2a] pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-white uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              JOIN US
            </h2>
            <p className="text-[#555] text-xs sm:text-sm pb-1">練習参加・チーム加入について</p>
          </div>
        </div>

        {/* Sub-headline */}
        <div className="mb-12 sm:mb-14">
          <p
            className="font-impact text-[#a0a0a0] uppercase leading-tight"
            style={{ fontSize: "clamp(18px, 2.8vw, 36px)" }}
          >
            We are looking for players<br className="hidden sm:block" />
            who compete, not just participate.
          </p>
          <p className="text-[#555] text-xs sm:text-sm mt-2">
            楽しむだけでなく、勝ちにこだわれる選手を求めています。
          </p>
        </div>

        {/* Target list */}
        <div className="flex flex-col divide-y divide-[#1e1e1e] mb-14 sm:mb-16">
          {targets.map((item) => (
            <div
              key={item.id}
              className="py-8 sm:py-10 grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-4 sm:gap-8"
            >
              {/* Number */}
              <p className="font-impact text-[#2a2a2a] text-4xl sm:text-5xl leading-none pt-0.5">
                {item.id}
              </p>
              {/* Content */}
              <div>
                <h3
                  className="font-impact text-white uppercase leading-tight whitespace-pre-line"
                  style={{ fontSize: "clamp(20px, 2.8vw, 34px)" }}
                >
                  {item.en}
                </h3>
                <p className="text-[#606060] text-xs sm:text-sm mt-1.5">{item.ja}</p>
                <p className="text-[#6b6b6b] text-sm leading-relaxed mt-3 max-w-2xl">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-[#141414] border border-[#2a2a2a] p-6 sm:p-8 mb-10 sm:mb-12">
          <p className="text-[#606060] text-[10px] tracking-[0.25em] uppercase mb-5">
            We expect / チームに期待すること
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              { en: "Competitive basketball background (varsity preferred)", ja: "競技バスケ経験（大学体育会歴優遇）" },
              { en: "Commitment to regular practices", ja: "定期的な練習への参加" },
              { en: "Respect for teammates and the game", ja: "チームメイトとゲームへのリスペクト" },
              { en: "Drive to improve and to win", ja: "成長への意欲と勝利へのこだわり" },
            ].map((req) => (
              <li key={req.en} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 bg-[#606060] flex-shrink-0" />
                <div>
                  <p className="text-[#a0a0a0] text-sm leading-snug">{req.en}</p>
                  <p className="text-[#505050] text-[11px] mt-0.5">{req.ja}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA block */}
        <div className="border-t border-[#2a2a2a] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="font-impact text-white uppercase leading-tight"
              style={{ fontSize: "clamp(20px, 2.8vw, 36px)" }}
            >
              If this is you — reach out.
            </p>
            <p className="text-[#606060] text-xs sm:text-sm mt-2">
              練習参加・問い合わせはInstagram DMまで。
            </p>
            <p className="text-[#505050] text-xs mt-0.5">
              DM us on Instagram with your basketball background.
            </p>
          </div>
          <a
            href="https://www.instagram.com/neighborhood.est2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-4 bg-[#b03030] text-white text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold hover:bg-[#c94444] transition-colors duration-200 min-h-[52px] w-full sm:w-auto"
          >
            DM on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
