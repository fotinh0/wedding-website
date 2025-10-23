import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What should I wear?',
      answer:
        'The dress code is semi-formal/cocktail attire. Think dressy sundresses, suits, or cocktail dresses. The ceremony will be outdoors on grass, so we recommend avoiding stiletto heels or choosing wedges instead.',
    },
    {
      question: 'Can I bring a plus one?',
      answer:
        'Due to venue capacity, we can only accommodate guests formally invited on your invitation. If you received a plus one, it will be indicated on your invitation.',
    },
    {
      question: 'Are children welcome?',
      answer:
        'We love your little ones, but we have decided to make our wedding an adults-only celebration. We hope this gives parents a chance to enjoy a night out!',
    },
    {
      question: 'What time should I arrive?',
      answer:
        'We recommend arriving by 3:00 PM. This will give you time to find parking, locate your seat, and settle in before the ceremony begins at 3:30 PM sharp.',
    },
    {
      question: 'Will the ceremony be indoors or outdoors?',
      answer:
        'The ceremony will take place outdoors in the beautiful Garden Courtyard. The cocktail hour and reception will be held in a mix of outdoor and indoor spaces. In case of inclement weather, we have a beautiful indoor backup plan.',
    },
    {
      question: 'Is there parking available?',
      answer:
        'Yes! Free parking is available on-site, and we will have valet service at the main entrance for your convenience.',
    },
    {
      question: 'What about dietary restrictions?',
      answer:
        'We want everyone to enjoy the meal! Please let us know about any dietary restrictions or allergies when you RSVP, and we will work with our caterer to accommodate your needs.',
    },
    {
      question: 'Will there be an open bar?',
      answer:
        'Yes! We will have a full open bar throughout the cocktail hour and reception with beer, wine, and signature cocktails.',
    },
    {
      question: 'Can I take photos during the ceremony?',
      answer:
        'We kindly ask that you put away your phones and cameras during the ceremony and let our professional photographer capture the moments. We want you to be fully present! Feel free to take as many photos as you like during the reception.',
    },
    {
      question: 'When is the RSVP deadline?',
      answer:
        'Please RSVP by May 1, 2026. This helps us finalize our headcount with the venue and caterer.',
    },
    {
      question: 'What is your wedding hashtag?',
      answer:
        'Our wedding hashtag is #SarahAndMichael2026. Feel free to use it when sharing photos on social media!',
    },
    {
      question: 'Do you have a gift registry?',
      answer:
        'Your presence at our wedding is the greatest gift of all! However, if you wish to honor us with a gift, we have registries at [Registry Name]. We also welcome contributions to our honeymoon fund.',
    },
    {
      question: 'Will transportation be provided?',
      answer:
        'We will not be providing group transportation, but rideshare services like Uber and Lyft are readily available in the area. Please plan accordingly if you intend to enjoy the open bar.',
    },
    {
      question: 'What if I need to change my RSVP?',
      answer:
        'We understand that plans can change. Please contact us as soon as possible at wedding@sarahandmichael.com if you need to update your RSVP.',
    },
    {
      question: 'Is there a hotel room block?',
      answer:
        'Yes! We have secured special rates at several nearby hotels. Please visit our Travel page for more information and booking details.',
    },
    {
      question: 'What will the weather be like?',
      answer:
        'In June, Riverside typically has beautiful sunny weather with temperatures around 85°F (29°C). We recommend bringing sunglasses and sunscreen for the outdoor ceremony.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-20 border-b border-gray-200 pb-12">
        <div className="w-px h-16 bg-black mx-auto mb-8"></div>
        <HelpCircle
          className="w-12 h-12 text-black mx-auto mb-8"
          strokeWidth={1}
        />
        <h1 className="text-6xl md:text-7xl font-serif font-light text-black mb-6 tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 font-light tracking-wide">
          Everything you need to know about our special day
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 overflow-hidden transition-all hover:border-black"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
            >
              <span className="text-lg font-serif font-light text-black pr-4 tracking-wide">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-8 pb-6 text-gray-600 leading-relaxed font-light">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-black text-white p-12 text-center">
        <h2 className="text-3xl font-serif font-light mb-6 tracking-wide">
          Still Have Questions?
        </h2>
        <p className="text-gray-300 mb-8 font-light">
          If you have any other questions or concerns, please don't hesitate to
          reach out to us directly.
        </p>
        <a
          href="mailto:wedding@sarahandmichael.com"
          className="inline-block bg-white text-black px-10 py-4 text-sm font-light tracking-widest uppercase transition-all transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
