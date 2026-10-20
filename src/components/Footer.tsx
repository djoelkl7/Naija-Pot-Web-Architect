import React from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../data/siteConfig';
import { PageId } from './Header';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A121B] text-[#FFF7E8] border-t-2 border-[#C6A15B]/40">
      {/* Upper Footer: Brand, Hours, Contact, Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Identity & Cultural Statement */}
          <div className="space-y-5">
            <BrandLogo variant="light" size="lg" />
            <p className="text-sm text-[#FFF7E8]/80 leading-relaxed max-w-sm">
              Authentic Nigerian dining and charcoal grill experience inspired by Lagos bukka culinary heritage. Fire, flavour, and heartfelt Naija hospitality.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-2">
                Certified Halal & Daily Fresh
              </span>
              <p className="text-xs text-[#FFF7E8]/70">
                All poultry and meats are 100% Halal certified and prepared with authentic West African ingredients.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6D1F2B] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] hover:text-[#FFF7E8] hover:border-[#C6A15B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6D1F2B] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] hover:text-[#FFF7E8] hover:border-[#C6A15B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6D1F2B] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] hover:text-[#FFF7E8] hover:border-[#C6A15B] transition-colors"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A15B] mb-5">
              Explore Our House
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Our Story & Bukka Roots
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('menu'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Full Restaurant Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Food & Dining Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('reservations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Reserve a Table
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Order Takeaway Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-[#FFF7E8]/80 hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A15B] mb-5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              Opening Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#FFF7E8]/85">
              <div className="flex justify-between py-1 border-b border-[#FFF7E8]/10">
                <span className="font-medium">Monday</span>
                <span className="text-[#C6A15B] italic">Closed (Kitchen Rest)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FFF7E8]/10">
                <span className="font-medium">Tue – Thu</span>
                <span>12:00 – 15:30 · 17:00 – 22:30</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FFF7E8]/10">
                <span className="font-medium">Friday</span>
                <span>12:00 – 15:30 · 17:00 – 23:30</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FFF7E8]/10">
                <span className="font-medium">Saturday</span>
                <span>12:30 – 23:30</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Sunday</span>
                <span>13:00 – 21:30</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-[#FFF7E8]/60">
              Kitchen closes 45 minutes prior to closing time.
            </p>
          </div>

          {/* Col 4: Location & Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A15B] mb-5">
              Find Us
            </h4>
            <div className="space-y-3 text-xs text-[#FFF7E8]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#FFF7E8]">{siteConfig.legalName}</p>
                  <p>{siteConfig.contact.addressLine1}</p>
                  <p>{siteConfig.contact.city}, {siteConfig.contact.postcode}</p>
                  <a
                    href={siteConfig.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#C6A15B] hover:underline mt-1 font-medium"
                  >
                    Get Directions <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#C6A15B]">
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#C6A15B]">
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { onNavigate('reservations'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="w-full py-2.5 px-4 bg-[#6D1F2B] hover:bg-[#8A2838] border border-[#C6A15B] text-[#FFF7E8] font-semibold text-center rounded-md transition-colors cursor-pointer text-xs"
                >
                  Reserve Your Table
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Allergen & Dietary Notice */}
        <div className="mt-12 pt-8 border-t border-[#FFF7E8]/10 text-xs text-[#FFF7E8]/60 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-[#C6A15B]">Allergen Advisory:</strong> {siteConfig.policies.dietaryStatement}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 pt-6 border-t border-[#FFF7E8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF7E8]/60">
          <div>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Registered in England & Wales</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
