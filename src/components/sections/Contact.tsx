const INSTAGRAM_URL = "https://www.instagram.com/neighborhood.basketballcrew/";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-impact text-[#0d0d0d] uppercase leading-none"
              style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
            >
              CONTACT
            </h2>
            <p className="text-[#9a9a9a] text-xs sm:text-sm pb-1">お問い合わせ</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p
              className="font-impact text-[#0d0d0d] uppercase leading-tight"
              style={{ fontSize: "clamp(22px, 3.2vw, 42px)" }}
            >
              Questions, trials,<br />or just curious?
            </p>
            <p className="text-[#9a9a9a] text-xs sm:text-sm mt-2">
              見学・体験・ご質問はお気軽にどうぞ。
            </p>

            <div className="mt-7 w-12 h-[2px] bg-[#b03030]" />

            <p className="mt-7 text-[#4a4a4a] text-sm sm:text-base leading-relaxed max-w-md">
              All inquiries are handled through Instagram Direct Message.
              Please include the following in your message:
            </p>

            <ul className="mt-4 space-y-2">
              {[
                { en: "Basketball background", ja: "バスケ歴" },
                { en: "Position", ja: "ポジション" },
                { en: "Height", ja: "身長" },
                { en: "Availability for Sunday practices", ja: "日曜練習への参加可否" },
                { en: "What you are looking for", ja: "参加・加入の目的" },
              ].map((item) => (
                <li key={item.en} className="flex items-start gap-2.5">
                  <span className="mt-[7px] w-1.5 h-1.5 bg-[#b03030] flex-shrink-0" />
                  <div>
                    <span className="text-[#333] text-sm">{item.en}</span>
                    <span className="text-[#b0b0b0] text-xs ml-2">{item.ja}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-[#a0a0a0] text-xs leading-relaxed mt-4 max-w-md">
              上記の内容を添えてInstagram DMよりご連絡ください。
            </p>
          </div>

          {/* Right: Instagram card */}
          <div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 hover:border-[#0d0d0d] transition-all duration-300 p-7 sm:p-10"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-5 h-5 text-[#0d0d0d]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-[#808080] text-xs tracking-widest uppercase">Instagram</span>
              </div>

              <p className="font-impact text-[#0d0d0d] text-xl sm:text-2xl lg:text-3xl group-hover:text-[#b03030] transition-colors duration-300 leading-tight">
                @neighborhood.basketballcrew
              </p>
              <p className="text-[#a0a0a0] text-sm mt-2">
                DM open — we respond to all serious inquiries
              </p>
              <p className="text-[#c0c0c0] text-xs mt-1">
                真剣に参加を検討している方のDMにはすべて返信します。
              </p>

              <div className="mt-7 inline-flex items-center gap-2 bg-[#0d0d0d] group-hover:bg-[#b03030] text-white px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-semibold transition-colors duration-300 min-h-[44px]">
                <span>Send a DM</span>
                <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
