import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-2">
      <img src={logo} alt="Wedding Logo" className="h-10 w-auto mx-auto mb-2" />
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <p className="text-xs">© 2025 Foti & Indiana</p>
      </div>
    </footer>
  );
}
