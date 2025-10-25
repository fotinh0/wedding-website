import Marquee from 'react-fast-marquee';
import travelCollage from '../assets/travelCollage.png';
import type { Language } from '../types';
import travelTranslations from '../translations/travel';

export default function TravelPage({ language }: { language: Language }) {
  const t = travelTranslations[language.code];

  const introText = () => {
    if (language.code === 'es')
      return (
        <p className="text-lg font-light sm:w-3xl mx-auto">
          ¡Estamos muy emocionados de darte la bienvenida a{' '}
          <span className="font-bold">Dhërmi, Albania</span> para nuestra boda!
          Para ayudarte a planificar tu viaje, hemos reunido algunos detalles a
          continuación. Continuaremos actualizando esta página y enviando
          mensajes de texto a medida que se finalice la información, para que
          siempre tengas los últimos detalles.
        </p>
      );

    if (language.code === 'sq')
      return (
        <p className="text-lg font-light sm:w-3xl mx-auto">
          Jemi shumë të lumtur t’ju mirëpresim në{' '}
          <span className="font-bold">Dhërmi, Albania</span> për dasmën tonë!
          Për t’ju ndihmuar me planifikimin e udhëtimit, kemi përgatitur disa
          detaje më poshtë. Do ta përditësojmë këtë faqe dhe do të dërgojmë
          mesazhe ndërsa informacionet përfundojnë, në mënyrë që të jeni
          gjithmonë në dijeni.
        </p>
      );

    return (
      <p className="text-lg font-light sm:w-3xl mx-auto">
        We’re so excited to welcome you to{' '}
        <span className="font-bold">Dhërmi, Albania</span> for our wedding! To
        help make your travel planning easier, we’ve gathered a few details
        below. We’ll continue to update this page and send text messages as
        information is finalized so you’ll always have the latest details.
      </p>
    );
  };

  const accommodationsText = () => {
    if (language.code === 'es')
      return (
        <p>
          Si planeas hospedarte en <span className="font-bold">Zoe Hora</span>,
          pronto compartiremos más detalles sobre cómo acceder a nuestras
          tarifas especiales con descuento para invitados — ¡mantente atento!
          También hay varios hoteles y villas encantadores cerca de Dhërmi y en
          las ciudades costeras vecinas.
        </p>
      );

    if (language.code === 'sq')
      return (
        <p>
          Nëse planifikoni të qëndroni në{' '}
          <span className="font-bold">Zoe Hora</span>, së shpejti do të ndajmë
          më shumë detaje për mënyrën e përfitimit të çmimeve tona të veçanta
          për mysafirët tanë — ndaj qëndroni në pritje! Ka gjithashtu shumë
          hotele dhe vila të bukura në Dhërmi dhe qytetet bregdetare përreth..
        </p>
      );

    return (
      <p>
        If you’re planning to stay at{' '}
        <span className="font-bold">Zoe Hora</span>, we’ll be sharing more
        details soon about how to access our special discounted rates as our
        guests — so stay tuned! There are also several lovely hotels and villas
        nearby in Dhërmi and neighboring coastal towns.
      </p>
    );
  };

  const currencyTip = () => {
    if (language.code === 'es')
      return (
        <li>
          <span className="font-bold">Moneda:</span> Lek albanés (ALL) o Euro
        </li>
      );
    if (language.code === 'sq')
      return (
        <li>
          <span className="font-bold">Monedha:</span> Lek Shqiptar (ALL) ose
          Euro
        </li>
      );
    return (
      <li>
        <span className="font-bold">Currency:</span> Albanian Lek (ALL) or Euro
      </li>
    );
  };

  const weatherTip = () => {
    if (language.code === 'es')
      return (
        <li>
          <span className="font-bold">Clima:</span> Espera días cálidos y
          soleados en Dhërmi durante el verano
        </li>
      );
    if (language.code === 'sq')
      return (
        <li>
          <span className="font-bold">Moti:</span> Prisni ditë të ngrohta e me
          diell në Dhërmi gjatë verës
        </li>
      );
    return (
      <li>
        <span className="font-bold">Weather:</span> Expect warm, sunny days in
        Dhërmi during the summer
      </li>
    );
  };

  const DrivingTip = () => {
    if (language.code === 'es')
      return (
        <li>
          <span className="font-bold">Conducción:</span> Las carreteras a lo
          largo de la costa son pintorescas pero con curvas — planea tiempo
          adicional para viajar
        </li>
      );
    if (language.code === 'sq')
      return (
        <li>
          <span className="font-bold">Drejtimi:</span> Rrugët përgjatë bregdetit
          janë të bukura, por me kthesa — planifikoni kohë shtesë për udhëtim
        </li>
      );
    return (
      <li>
        <span className="font-bold">Driving:</span> Roads along the coast are
        scenic but winding — plan extra time for travel
      </li>
    );
  };

  const LanguageTip = () => {
    if (language.code === 'es')
      return (
        <li>
          <span className="font-bold">Idioma:</span> El inglés se habla
          comúnmente en las zonas turísticas
        </li>
      );
    if (language.code === 'sq')
      return (
        <li>
          <span className="font-bold">Gjuha:</span> Anglishtja flitet zakonisht
          në zonat turistike
        </li>
      );
    return (
      <li>
        <span className="font-bold">Language:</span> English is commonly spoken
        in tourist areas
      </li>
    );
  };

  return (
    <div className="mx-auto pt-4 sm:pt-0">
      <video
        className="max-h-[80vh] mx-auto"
        controls
        loop
        preload="auto"
        autoPlay
      >
        <source
          src={
            'https://palevioletred-guanaco-529765.hostingersite.com/wp-content/uploads/2025/03/zoe-hora-home-transcode.mp4'
          }
          type="video/mp4"
        />
      </video>

      <div className="text-center mt-12 sm:mt-24 mb-12 mx-4 border-gray-200">
        <p className="text-[40px] sm:text-6xl mb-12">{t.title}</p>
        {introText()}
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.accommodationsTitle}</h3>
          <div className="sm:w-3xl mx-auto px-4">{accommodationsText()}</div>
        </div>
        <div className="flex flex-col justify-center text-center">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-2xl sm:text-3xl mb-6">{t.gettingThereTitle}</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <p>{t.gettingThereText}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center bg-zinc-50 py-12 px-6">
          <h3 className="text-2xl sm:text-3xl mb-6">{t.exploringTitle}</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <p>{t.exploringText}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          {/* <h2 className="text-5xl">Hotel Accommodations</h2> */}
          <h3 className="text-2xl sm:text-3xl mb-6">{t.tipsTitle}</h3>
          <div className="sm:w-3xl mx-auto px-4">
            <ul>
              {currencyTip()}
              {weatherTip()}
              {DrivingTip()}
              {LanguageTip()}
            </ul>
          </div>
        </div>
      </div>

      {/* Collage section */}
      <Marquee speed={50}>
        {[travelCollage, travelCollage, travelCollage].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`wedding-${i}`}
            className="h-[50vh] w-auto object-cover my-24"
          />
        ))}
      </Marquee>
    </div>
  );
}
