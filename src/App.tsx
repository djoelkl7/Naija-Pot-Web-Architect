/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header, PageId } from './components/Header';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishCustomizerModal } from './components/DishCustomizerModal';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { OrderOnlinePage } from './pages/OrderOnlinePage';
import { ContactPage } from './pages/ContactPage';
import { MenuItem } from './data/menuData';
import { Calendar, ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    // Check initial hash
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = ['home', 'story', 'menu', 'gallery', 'reservations', 'order', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [customizingDish, setCustomizingDish] = useState<MenuItem | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync hash with browser history
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'story', 'menu', 'gallery', 'reservations', 'order', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FFF7E8] text-[#211A19]">
        {/* Optional dismissible Announcement Bar */}
        <AnnouncementBar onNavigateToBooking={() => navigateTo('reservations')} />

        {/* 3-Zone Top Bar Contract Navigation */}
        <Header currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Content Area */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <Home
              onNavigate={navigateTo}
              onOpenDishCustomizer={(dish) => setCustomizingDish(dish)}
            />
          )}

          {currentPage === 'story' && (
            <Story onNavigate={navigateTo} />
          )}

          {currentPage === 'menu' && (
            <MenuPage
              onOpenDishCustomizer={(dish) => setCustomizingDish(dish)}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage />
          )}

          {currentPage === 'reservations' && (
            <ReservationsPage />
          )}

          {currentPage === 'order' && (
            <OrderOnlinePage
              onOpenDishCustomizer={(dish) => setCustomizingDish(dish)}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage onNavigate={navigateTo} />
          )}
        </main>

        {/* Comprehensive Brand Footer */}
        <Footer onNavigate={navigateTo} />

        {/* Slide-out Cart Drawer with Takeaway Ordering */}
        <CartDrawer />

        {/* Dish Customizer Modal */}
        <DishCustomizerModal
          dish={customizingDish}
          onClose={() => setCustomizingDish(null)}
        />

        {/* Floating Quick Action for Mobile (Within 15% Mobile Sticky Cap) */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30 flex gap-2">
          <button
            onClick={() => navigateTo('reservations')}
            className="flex-1 py-3 px-4 bg-[#6D1F2B] text-[#FFF7E8] text-xs font-bold rounded-lg shadow-xl flex items-center justify-center gap-1.5 border border-[#C6A15B]/40 active:scale-95 transition-transform"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Book Table</span>
          </button>
          <button
            onClick={() => navigateTo('order')}
            className="flex-1 py-3 px-4 bg-[#C6A15B] text-[#211A19] text-xs font-bold rounded-lg shadow-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order Food</span>
          </button>
        </div>

        {/* Back to top button (Desktop) */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="hidden sm:flex fixed bottom-6 right-6 z-30 p-3 bg-[#6D1F2B] hover:bg-[#4A121B] text-[#FFF7E8] rounded-full shadow-lg border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all cursor-pointer items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#C6A15B]" />
          </button>
        )}
      </div>
    </CartProvider>
  );
}
