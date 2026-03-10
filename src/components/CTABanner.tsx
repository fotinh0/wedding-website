import Marquee from "react-fast-marquee";

interface BannerProps {
  text: string;
  handleNavigation?: () => void;
}

function CTABanner({ text, handleNavigation }: BannerProps) {
  return (
    <div className="bg-zinc-50 py-2 flex" onClick={handleNavigation}>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        className="text-center hover:cursor-pointer"
      >
        {[text, text, text, text].map((text, i) => (
          <p
            key={i}
            className="text2xl font-semibold uppercase tracking-widest mr-50 cursor-pointer"
          >
            {text}
          </p>
        ))}
      </Marquee>
    </div>
  );
}

export default CTABanner;
