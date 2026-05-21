// Hero background image:
// Place your photo at /public/images/hero/ (e.g. hero-bg.jpg)
// and update the backgroundImage path below.
// Works without a photo — typography is the primary visual.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between bg-[#0d0d0d] overflow-hidden"
    >
      {/* Photo overlay — set opacity to 0 if no image yet */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')",
          opacity: 0.18,
        }}
        aria-hidden="true"
      />

      {/* Gradient: bottom darkens more so text stays readable */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent"
        aria-hidden="true"
      />

      {/* Top meta */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 pt-20 sm:pt-24">
        <span className="text-[#404040] text-[10px] tracking-[0.28em] uppercase">
          Est. 2023
        </span>
        <span className="text-[#404040] text-[10px] tracking-[0.28em] uppercase">
          Tokyo · Japan
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 py-8">

        {/* Eyebrow */}
        <p className="text-[#707070] text-[10px] sm:text-xs tracking-[0.32em] uppercase mb-5 sm:mb-7">
          Tokyo Social Basketball Team
        </p>

        {/* NEIGHBORHOOD — always 1 line */}
        <h1
          className="font-impact text-white uppercase leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(32px, 10.5vw, 148px)" }}
        >
          NEIGHBORHOOD
        </h1>

        {/* Main copy */}
        <div className="flex items-center gap-3 mt-5 sm:mt-6 mb-2">
          <div className="w-8 sm:w-10 h-[2px] bg-[#b03030] flex-shrink-0" />
          <p
            className="font-impact text-[#a0a0a0] uppercase leading-tight"
            style={{ fontSize: "clamp(15px, 2.6vw, 34px)" }}
          >
            Built for players who still compete.
          </p>
        </div>

        {/* Japanese subtitle */}
        <p className="text-[#555] text-xs sm:text-sm mt-2 mb-8 sm:mb-10 pl-[44px] sm:pl-[54px]">
          まだ本気で戦いたい選手のためのチーム。
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/neighborhood.basketballcrew/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#b03030] text-white text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-[#c94444] transition-colors duration-200 min-h-[44px]"
          >
            Join Us
          </a>
          <a
            href="#practice"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#444] text-[#a0a0a0] text-[11px] tracking-[0.22em] uppercase font-semibold hover:border-white hover:text-white transition-colors duration-200 min-h-[44px]"
          >
            View Practice
          </a>
          <a
            href="#members"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#444] text-[#a0a0a0] text-[11px] tracking-[0.22em] uppercase font-semibold hover:border-white hover:text-white transition-colors duration-200 min-h-[44px]"
          >
            View Team
          </a>
        </div>
      </div>

      {/* Bottom stat bar */}
      <div className="relative z-10 border-t border-[#1e1e1e] px-4 sm:px-8 py-4 sm:py-5">
        <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-2">
          {[
            { label: "Founded", value: "2023" },
            { label: "Base", value: "Tokyo" },
            { label: "Tokyo League", value: "Div. 2" },
            { label: "Practices / Month", value: "5–6" },
          ].map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <span className="font-impact text-white text-sm sm:text-base uppercase leading-none">
                {item.value}
              </span>
              <span className="text-[#4a4a4a] text-[9px] sm:text-[10px] tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
