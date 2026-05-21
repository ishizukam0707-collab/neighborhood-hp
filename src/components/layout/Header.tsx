"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "RESULTS", href: "#achievements" },
  { label: "PRACTICE", href: "#practice" },
  { label: "MEMBERS", href: "#members" },
  { label: "ACTIVITY", href: "#activity" },
  { label: "JOIN US", href: "#recruit", accent: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d]/96 backdrop-blur-sm border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="font-impact text-white text-lg sm:text-xl uppercase tracking-wide"
        >
          NEIGHBORHOOD
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-[11px] tracking-[0.18em] font-medium transition-colors duration-200 ${
                link.accent
                  ? "text-[#b03030] hover:text-[#cc4444]"
                  : "text-[#a0a0a0] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] bg-white transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-white transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-[#2a2a2a] px-5 py-7 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm tracking-[0.18em] font-medium uppercase ${
                link.accent ? "text-[#b03030]" : "text-[#a0a0a0]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
