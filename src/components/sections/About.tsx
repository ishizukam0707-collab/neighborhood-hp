export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-5 sm:pb-7 mb-12 sm:mb-16">
          <h2
            className="font-impact text-[#0d0d0d] uppercase leading-none"
            style={{ fontSize: "clamp(44px, 9vw, 118px)" }}
          >
            ABOUT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left: main statement */}
          <div>
            <p
              className="font-impact text-[#0d0d0d] uppercase leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3.8vw, 50px)" }}
            >
              We take the game<br />seriously.
            </p>
            <p className="text-[#9a9a9a] text-xs sm:text-sm mt-3 leading-relaxed">
              本気で競技に向き合う、東京の社会人バスケットボールチーム。
            </p>

            <div className="mt-7 w-12 h-[3px] bg-[#0d0d0d]" />

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Competitive", "Adult League", "Tokyo", "Various Backgrounds"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-widest uppercase border border-gray-300 text-gray-500 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-200">
              <div>
                <p className="font-impact text-[#0d0d0d] text-3xl sm:text-4xl leading-none">2023</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-1.5">Founded</p>
              </div>
              <div>
                <p className="font-impact text-[#0d0d0d] text-3xl sm:text-4xl leading-none">DIV.2</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-1.5">Tokyo League</p>
              </div>
              <div>
                <p className="font-impact text-[#0d0d0d] text-3xl sm:text-4xl leading-none">TOKYO</p>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-1.5">Base</p>
              </div>
            </div>
          </div>

          {/* Right: body */}
          <div className="space-y-5 text-[#333] text-sm sm:text-base leading-relaxed">
            <p>
              NEIGHBORHOOD is a competitive basketball team based in Tokyo,
              built for players who are serious about the sport.
              We are not a social club. We are a team.
            </p>
            <p>
              Our members come from a variety of basketball backgrounds —
              company teams, university programs, recreational leagues, and more.
              Work and family come first — but when we step on the court,
              we are here to compete.
            </p>
            <p>
              We train consistently, play in multiple leagues, and push each
              other to keep improving. If you are looking for an environment
              that matches your competitive drive, this is it.
            </p>

            {/* Japanese paragraph */}
            <p className="text-[#a0a0a0] text-xs sm:text-sm leading-relaxed pt-2 border-t border-gray-100">
              仕事や家庭と両立しながらも、真剣に競技に取り組む社会人バスケットボールチームです。
              社会人実業団・大学体育会・サークルなど様々なバックグラウンドを持つ選手たちで構成されており、
              単なるエンジョイチームではなく勝ちにこだわった活動をしています。
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#recruit"
                className="inline-flex items-center gap-2 text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-semibold border-b border-[#0d0d0d] pb-0.5 hover:text-[#b03030] hover:border-[#b03030] transition-colors duration-200"
              >
                <span>Join the team</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
