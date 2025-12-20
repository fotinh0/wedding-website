import happiness from "../assets/happiness.png";
import happinessMobile from "../assets/happinessMini.png";
import scheduleTranslations from "../translations/schedule";
import type { Language } from "../types";

export default function SchedulePage({ language }: { language: Language }) {
  const t = scheduleTranslations[language.code];

  const ceremonyText = () => {
    if (language.code === "es")
      return (
        <p className=" leading-relaxed">
          La ceremonia tendrá lugar en{" "}
          <span className="font-bold">Zoe Hora</span> en Dhërmi, Albania.
        </p>
      );

    if (language.code === "sq")
      return (
        <p className=" leading-relaxed">
          Ceremonia do të zhvillohet në{" "}
          <span className="font-bold">Zoe Hora</span> në Dhërmi, Albania.
        </p>
      );

    return (
      <p className="leading-relaxed">
        The ceremony will take place at{" "}
        <span className="font-bold">Zoe Hora</span> in Dhërmi, Albania.
      </p>
    );
  };

  const welcomeEventText = () => {
    if (language.code === "es") {
      return (
        <div className="flex flex-col gap-4">
          <p className="text-md leading-relaxed">
            Para dar inicio al fin de semana, organizaremos un encuentro de
            bienvenida en Kantina & Ferma Dukat, una bodega y granja familiar
            ubicada en Vlorë, aproximadamente a 30 minutos de Zoe Hora.
          </p>

          <p className="text-md leading-relaxed">
            Durante un viaje reciente a Albania, uno de los momentos más
            inolvidables para nosotros fue compartir nuestra primera cena
            rodeados de montañas, naturaleza y comida increíble. Nos hace mucha
            ilusión recrear esa sensación y compartir con ustedes una
            experiencia verdaderamente auténtica albanesa.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-md leading-relaxed mb-2">
                La velada incluirá:
              </p>
              <ul className="list-disc ml-8">
                <li className="mb-2">
                  Degustaciones de vinos blancos, rosados y tintos elaborados
                  localmente
                </li>
                <li className="mb-2">
                  Platos tradicionales albaneses preparados en el lugar con
                  ingredientes frescos y de temporada
                </li>
                <li>
                  Un ambiente acogedor y cuidadosamente curado, diseñado para
                  que los invitados conecten y disfruten de la compañía mutua
                </li>
              </ul>
            </div>

            <p>
              Este encuentro tiene como objetivo reunir a todos antes del día de
              la boda, creando conexiones y momentos compartidos para que la
              celebración se sienta cálida, cercana y llena de energía desde el
              primer momento.
            </p>
            <p>
              El código de vestimenta será smart casual y se espera que el
              evento tenga una duración aproximada de 2–3 horas. Los detalles
              del horario se compartirán más cerca de la fecha.
            </p>
          </div>
        </div>
      );
    }
    if (language.code === "sq") {
      return (
        <div className="flex flex-col gap-4">
          <p className="text-md leading-relaxed">
            Për të nisur fundjavën, do të organizojmë një event mirëseardhjeje
            në Kantina & Ferma Dukat, një kantinë vere dhe fermë familjare e
            vendosur në Vlorë, rreth 30 minuta larg nga Zoe Hora.
          </p>

          <p className="text-md leading-relaxed">
            Gjatë një udhëtimi të fundit në Shqipëri, një nga momentet më të
            paharrueshme për ne ishte ndarja e darkës sonë të parë, të rrethuar
            nga malet, natyra dhe ushqimi i jashtëzakonshëm. Jemi shumë të
            lumtur ta rikrijojmë atë ndjesi dhe të ndajmë me ju një përvojë
            vërtet autentike shqiptare.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-md leading-relaxed mb-2">
                Mbrëmja do të përfshijë:
              </p>
              <ul className="list-disc ml-8">
                <li className="mb-2">
                  Degustim verërash të bardha, rosé dhe të kuqe të prodhuara
                  lokalisht
                </li>
                <li className="mb-2">
                  Gatime tradicionale shqiptare, të përgatitura në vend me
                  përbërës të freskët dhe sezonalë
                </li>
                <li>
                  Një ambient mikpritës dhe të kuruar me kujdes, i krijuar për
                  të lidhur të ftuarit dhe për të shijuar shoqërinë e
                  njëri-tjetrit
                </li>
              </ul>
            </div>

            <p>
              Ky event synon të mbledhë të gjithë përpara ditës së dasmës — duke
              krijuar lidhje dhe momente të përbashkëta, në mënyrë që festimi të
              ndihet i ngrohtë, familjar dhe plot energji që në fillim.
            </p>
            <p>
              Kodi i veshjes do të jetë smart casual, dhe eventi pritet të
              zgjasë rreth 2–3 orë, me detaje të tjera të orarit që do të ndahen
              më afër datës.
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-4">
        <p className="text-md leading-relaxed">
          To kick off the weekend, we’ll be hosting a welcome gathering at
          Kantina & Ferma Dukat, a family-run winery and farm located in Vlorë,
          approximately 30 minutes from Zoe Hora.
        </p>

        <p className="text-md leading-relaxed">
          During a recent trip to Albania, one of the most unforgettable moments
          for us was sharing our first dinner surrounded by mountains, nature,
          and incredible food. We’re excited to recreate that feeling and share
          a truly authentic Albanian experience with you.
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-md leading-relaxed mb-2">
              The evening will include:
            </p>
            <ul className="list-disc ml-8">
              <li className="mb-2">
                Tastings of locally crafted white, rosé, and red wines
              </li>
              <li className="mb-2">
                Traditional Albanian dishes prepared in-house with fresh,
                seasonal ingredients
              </li>
              <li>
                An inviting, thoughtfully, curated setting designed for guests
                to connect and enjoy one another's company
              </li>
            </ul>
          </div>

          <p>
            This gathering is intended to bring everyone together ahead of the
            wedding day — creating connections and shared moments so the
            celebration feels warm, familiar, and full of energy from the very
            start.
          </p>
          <p>
            The event will be smart casual and is expected to last approximately
            2–3 hours, with timing details to be shared closer to the date.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto">
      <img
        src={happinessMobile}
        alt="schedule-collage"
        className="max-h-[35vh] mx-auto sm:hidden"
      />
      <img
        src={happiness}
        alt="schedule-collage"
        className="hidden sm:block h-fit sm:max-h-[60vh] mx-auto"
      />
      <div className="max-w-5xl mx-auto text-center px-4 my-16 sm:my-24">
        <div className="flex flex-col justify-center">
          <p className="text-[40px] sm:text-6xl mb-8 italic">{t.title}</p>
          <p className="tracking-wide font-light">{t.intro}</p>
        </div>
      </div>

      <div></div>

      <div className="sm:py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto py-8">
          <div className="relative flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex justify-end text-center flex-col">
              <h3 className="text-3xl italic">{t.welcomeEventDate}</h3>
              <p className="text-center text-lg">{t.welcomeEventTitle}</p>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l">
              {welcomeEventText()}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto py-8">
          <div className="relative flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/5 p-8 flex justify-end text-center flex-col">
              <h3 className="text-3xl italic">{t.weddingDayDate}</h3>
              <p className="text-center text-lg">{t.weddingDayTitle}</p>
            </div>
            <div className="sm:w-3/5 pt-0 pb-8 px-8 sm:pb-10 sm:pt-8 text-center sm:text-left sm:border-l flex flex-col gap-8">
              <div>
                <p className="text-xl font-medium">{t.ceremonyTitle}</p>
                {ceremonyText()}
              </div>
              <div>
                <p className="text-xl font-medium">{t.receptionTitle}</p>
                <p className="leading-relaxed">{t.receptionText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
