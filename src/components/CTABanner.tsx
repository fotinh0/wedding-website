import Marquee from "react-fast-marquee";

interface BannerProps {
  text: string;
  handleNavigation?: () => void;
}

function CTABanner({ text, handleNavigation }: BannerProps) {
  return (
    <div
      className="bg-stone border-y border-gold/30 py-3 flex"
      onClick={handleNavigation}
    >
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="text-center hover:cursor-pointer"
      >
        {[text, text, text, text].map((text, i) => (
          <p
            key={i}
            className="text-[0.8rem] font-medium uppercase tracking-[0.35em] cursor-pointer flex items-center"
          >
            {text}
            <span className="mx-16 inline-block h-1.5 w-1.5 rotate-45 border border-gold" />
          </p>
        ))}
      </Marquee>
    </div>
  );
}

export default CTABanner;
