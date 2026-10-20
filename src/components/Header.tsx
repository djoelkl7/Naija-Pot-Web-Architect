import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

export type PageId = 'home' | 'story' | 'menu' | 'gallery' | 'reservations' | 'order' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemCount, setIsCartOpen } = useCart();

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'order', label: 'Order Online' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF7E8]/95 backdrop-blur-md border-b border-[#6D1F2B]/10 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single Brand Logo Element */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer shrink-0"
          >
            <BrandLogo size="md" variant="burgundy" />
          </div>

          {/* Zone 2: Navigation Links (single-line, clean text with subtle underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#211A19]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#6D1F2B] font-semibold'
                      : 'text-[#211A19]/80 hover:text-[#6D1F2B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6D1F2B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (Shopping Bag + Table Booking CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-[#6D1F2B] hover:text-[#4A121B] hover:bg-[#F3E8D6]/80 rounded-full transition-colors cursor-pointer"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#6D1F2B] text-[#FFF7E8] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FFF7E8]">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Primary Action: Book a Table CTA */}
            <button
              onClick={() => handleNavClick('reservations')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#6D1F2B] hover:bg-[#4A121B] text-[#FFF7E8] text-sm font-semibold rounded-lg shadow-sm border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C6A15B]" />
              <span>Book a Table</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#6D1F2B] hover:bg-[#F3E8D6] rounded-md transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF7E8] border-b border-[#6D1F2B]/15 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg font-medium py-2 border-b border-[#6D1F2B]/10 flex items-center justify-between cursor-pointer ${
                    isActive ? 'text-[#6D1F2B] font-bold' : 'text-[#211A19] hover:text-[#6D1F2B]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#C6A15B]">● Current</span>}
                </button>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('reservations')}
                className="w-full py-3 bg-[#6D1F2B] text-[#FFF7E8] text-center font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#C6A15B]" />
                Book a Table
              </button>
              <button
                onClick={() => handleNavClick('order')}
                className="w-full py-3 bg-[#C6A15B] text-[#211A19] text-center font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Takeaway
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
