import logo from '../assets/logos/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14">
      <img src={logo} alt="Wedding Logo" className="h-12 w-auto mx-auto mb-6 opacity-90" />
      <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
        <span className="h-px w-12 bg-gold/60" />
        <span className="block h-1.5 w-1.5 rotate-45 border border-gold" />
        <span className="h-px w-12 bg-gold/60" />
      </div>
      <p className="text-center text-[0.7rem] uppercase tracking-[0.35em] text-white/70">
        Indiana & Foti · 2026
      </p>
    </footer>
  );
}
