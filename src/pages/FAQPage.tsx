import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openStates, setOpenStates] = useState({});

  const faqs: FAQItem[] = [
    {
      question: 'What should I wear?',
      answer:
        'We’ll be sharing more details on attire soon but guests can expect a formal dress code. A style guide with example looks will also be added to this site to help you plan — stay tuned!',
    },
    {
      question: 'When will invitations be sent?',
      answer:
        'Formal invitations will be sent out in early 2026, with all the details you’ll need to join us for our special day.',
    },
    {
      question: 'When should I RSVP?',
      answer:
        'RSVP instructions will be included with your invitation. For now, please save the date and start getting excited — we can’t wait to celebrate with you!',
    },
    {
      question: 'Can I bring a guest?',
      answer:
        'Your invitation will indicate if you have a plus-one. If you’re unsure, please don’t hesitate to reach out — we’ll be happy to confirm for you.',
    },
    {
      question: 'How should I book my hotel room?',
      answer:
        'We’ll be sharing more details soon about our discounted rates at Zoe Hora, along with nearby hotel recommendations. Once finalized, we’ll update this page and send a text with booking information. Guests staying at Zoe Hora will need to contact the hotel directly to secure their reservation, and we’ll let you know once our group rate is available.',
    },
    {
      question: 'Are children invited?',
      answer:
        'While we love your little ones, our wedding will be an adults-only celebration. We hope you can enjoy this getaway and celebration with us!',
    },
    // {
    //   question: 'Is there parking available?',
    //   answer:
    //     'Yes! Free parking is available on-site, and we will have valet service at the main entrance for your convenience.',
    // // },
    // {
    //   question: 'Can I take photos during the ceremony?',
    //   answer:
    //     'We kindly ask that you put away your phones and cameras during the ceremony and let our professional photographer capture the moments. We want you to be fully present! Feel free to take as many photos as you like during the reception.',
    // },
    {
      question: 'Do you have a registry?',
      answer:
        'We won’t have a traditional registry, but your love and presence mean the world to us. For those who wish to contribute, we welcome gifts toward our honeymoon fund as we begin this next chapter together.',
    },
  ];

  const toggleAccordion = (index: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center sm:mt-24 mb-12 sm:mb-20">
        <p className="text-[40px] sm:text-7xl font-light mb-12">
          Frequently Asked Questions
        </p>
        <p className="text-lg sm:text-xl text-gray-600 font-light tracking-wide">
          Everything you need to know about our special day
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 cursor-pointer">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-5 flex items-center justify-between text-left"
            >
              <span className="text-base md:text-lg font-light text-black tracking-wide pr-4 cursor-pointer">
                {faq.question}
              </span>
              <span className="text-2xl text-black font-light shrink-0">
                {openStates[index] ? '−' : '+'}
              </span>
            </button>

            {openStates[index] && (
              <div className="pb-6 sm:pr-8 text-sm md:text-base text-gray-600 font-light leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 bg-zinc-50 p-12 text-center mb-20">
        <p className="text-3xl font-light mb-6 tracking-wide">
          Still Have Questions?
        </p>
        <p className="mb-8 font-light">
          If you have any other questions or concerns, please don't hesitate to
          reach out to us directly.
        </p>
        <a
          href="mailto:indiana.foti@gmail.com"
          className="inline-block bg-black text-white px-10 py-4 text-sm font-light tracking-widest uppercase transition-all transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
