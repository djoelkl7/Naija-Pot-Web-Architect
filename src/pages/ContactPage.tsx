import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { PageId } from '../components/Header';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ChevronDown, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is all your food certified Halal?',
      a: 'Yes, 100% of our chicken, beef, goat meat, and lamb is Halal-certified and sourced fresh daily from verified UK purveyors.'
    },
    {
      q: 'Do I need a reservation or do you welcome walk-ins?',
      a: 'Walk-in guests are always welcome! However, for Friday dinner, Saturday all-day, and Sunday dining, advance table reservation is strongly recommended to guarantee your preferred seating time.'
    },
    {
      q: 'How spicy is authentic Nigerian food?',
      a: 'Nigerian cooking embraces warm, vibrant chili peppers (scotch bonnets / habaneros). We allow you to customise your heat level from Mild to Extra Naija Hot when ordering. Traditional soups have a natural warmth that is deeply flavourful rather than just sharp heat.'
    },
    {
      q: 'What is your allergy policy regarding peanuts/groundnuts?',
      a: 'Our traditional Suya spice rub (Yaji) contains roasted groundnuts (peanuts). While we take extreme care to prevent cross-contamination, we advise guests with severe peanut allergies to alert our team so we can prepare dishes using peanut-free utensils and prep surfaces.'
    },
    {
      q: 'Do you offer private dining and large celebrations?',
      a: 'Yes! We host birthday banquets, corporate dinners, and wedding anniversary parties for groups of up to 45 guests. Please email bookings@naijapotkitchen.co.uk or call us directly to discuss bespoke menus.'
    },
    {
      q: 'Can I order food for takeaway or collection?',
      a: 'Yes, you can order directly through our Order Online tab. We offer scheduled kitchen collection (ready in ~25 minutes) as well as local delivery within a 3.5-mile radius.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Header */}
      <section className="bg-[#4A121B] text-[#FFF7E8] py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#DFC183] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality & Location</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            Connect With Naija Pot
          </h1>
          <p className="text-sm sm:text-base text-[#FFF7E8]/85 max-w-xl mx-auto">
            We are located in the heart of London. Find directions, opening hours, or drop us a message.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Map + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Interactive Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#6D1F2B]/15 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#6D1F2B]">
                Restaurant Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#211A19]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#211A19] block">{siteConfig.legalName}</strong>
                    <span>{siteConfig.contact.addressLine1}</span><br />
                    <span>{siteConfig.contact.addressLine2}</span><br />
                    <span>{siteConfig.contact.city}, {siteConfig.contact.postcode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C6A15B] shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#6D1F2B] font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C6A15B] shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#6D1F2B] font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours Breakdown */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#6D1F2B] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C6A15B]" />
                  Weekly Service Hours
                </h4>
                <div className="space-y-2 text-xs text-[#211A19]/80">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between py-1 border-b border-slate-100">
                      <span className="font-medium">{h.day}</span>
                      {h.isClosed ? (
                        <span className="text-red-700 font-semibold italic">Closed (Kitchen Rest)</span>
                      ) : (
                        <span>{h.allDay || `${h.lunch} · ${h.dinner}`}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="bg-white p-4 rounded-2xl border border-[#6D1F2B]/15 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6D1F2B]">
                  Interactive Location Map
                </span>
                <a
                  href={siteConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#C6A15B] hover:text-[#6D1F2B] font-bold"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="Naija Pot Location Map"
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#6D1F2B]/15 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#6D1F2B]">
                Send Us an Enquiry
              </h3>
              <p className="text-xs text-[#211A19]/70 mt-1">
                Have a question about large party bookings, catering, or dietary requirements? Drop us a note.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#6D1F2B]">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-[#211A19]/75 max-w-sm mx-auto">
                  E se gan! Thank you for reaching out, {name}. Our hospitality team will respond to {email} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 bg-[#6D1F2B] text-[#FFF7E8] text-xs font-bold rounded-md hover:bg-[#4A121B] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-md flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#6D1F2B] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Adeleke"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#6D1F2B]/20 rounded-lg text-xs sm:text-sm focus:ring-1 focus:ring-[#6D1F2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6D1F2B] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#6D1F2B]/20 rounded-lg text-xs sm:text-sm focus:ring-1 focus:ring-[#6D1F2B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#6D1F2B] uppercase tracking-wider mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7123 456789"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#6D1F2B]/20 rounded-lg text-xs sm:text-sm focus:ring-1 focus:ring-[#6D1F2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#6D1F2B] uppercase tracking-wider mb-1">
                      Enquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#6D1F2B]/20 rounded-lg text-xs sm:text-sm focus:ring-1 focus:ring-[#6D1F2B]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Group Celebration / Private Dining">Group Celebration / Private Dining</option>
                      <option value="Dietary & Allergen Question">Dietary & Allergen Question</option>
                      <option value="Catering & Events">Catering & Events</option>
                      <option value="Feedback">Feedback on a Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#6D1F2B] uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our hospitality team assist you today?"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#6D1F2B]/20 rounded-lg text-xs sm:text-sm focus:ring-1 focus:ring-[#6D1F2B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#6D1F2B] hover:bg-[#4A121B] text-[#FFF7E8] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C6A15B]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6D1F2B]">
            Help & Information
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#211A19]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-[#6D1F2B]/15 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-[#211A19] hover:text-[#6D1F2B] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C6A15B] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#211A19]/80 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
