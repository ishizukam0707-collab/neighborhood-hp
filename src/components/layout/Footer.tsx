export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#2a2a2a] py-10 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-impact text-white text-base sm:text-lg uppercase tracking-wide">
          NEIGHBORHOOD
        </p>
        <p className="text-[#3a3a3a] text-[11px] tracking-widest uppercase">
          Tokyo Social Basketball Team — Est. 2023
        </p>
        <p className="text-[#3a3a3a] text-[11px]">
          © {new Date().getFullYear()} NEIGHBORHOOD
        </p>
      </div>
    </footer>
  );
}
