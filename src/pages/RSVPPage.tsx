import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietaryRestrictions: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attending: 'yes',
        dietaryRestrictions: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-16 border-b border-gray-200 pb-12">
        <div className="w-px h-16 bg-black mx-auto mb-8"></div>
        <h1 className="text-6xl md:text-7xl font-serif font-light text-black mb-6 tracking-wide">
          RSVP
        </h1>
        <p className="text-xl text-gray-600 font-light tracking-wide">
          Please respond by May 1, 2026
        </p>
      </div>

      {submitted ? (
        <div className="bg-white border border-gray-200 p-16 text-center">
          <div className="w-20 h-20 bg-black text-white flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl font-serif font-light text-black mb-6 tracking-wide">
            Thank You!
          </h2>
          <p className="text-lg text-gray-600 font-light">
            We've received your RSVP and can't wait to celebrate with you!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-200 p-10"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all font-light bg-white"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all font-light bg-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="attending"
                className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
              >
                Will you be attending? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all font-light bg-white"
              >
                <option value="yes">Joyfully accepts</option>
                <option value="no">Regretfully declines</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
                  >
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all font-light bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="dietaryRestrictions"
                    className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
                  >
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all font-light bg-white"
                    placeholder="Vegetarian, gluten-free, etc."
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-light text-gray-700 mb-2 tracking-wider uppercase"
              >
                Message to the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:border-black outline-none transition-all resize-none font-light bg-white"
                placeholder="We'd love to hear from you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-4 font-light transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
            >
              <Send className="w-5 h-5" strokeWidth={1.5} />
              Submit RSVP
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
