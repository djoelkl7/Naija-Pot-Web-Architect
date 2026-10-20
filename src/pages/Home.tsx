import React, { useState } from 'react';
import { PageId } from '../components/Header';
import { menuItems, MenuItem } from '../data/menuData';
import { siteConfig } from '../data/siteConfig';
import { 
  Flame, 
  UtensilsCrossed, 
  Users, 
  HeartHandshake, 
  ArrowRight, 
  Calendar, 
  ShoppingBag, 
  Instagram, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onOpenDishCustomizer: (dish: MenuItem) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenDishCustomizer }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Curated Signature Dishes to feature on homepage
  const signatureDishes = menuItems.filter(
    (item) => item.isPopular && ['rice-1', 'grill-1', 'soup-1', 'starter-2', 'platter-1', 'starter-4'].includes(item.id)
  );

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError('Please provide a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#4A121B] text-[#FFF7E8] overflow-hidden">
        {/* Hero Background Image with Burgundy Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_naija_feast_1792356256861.jpg"
            alt="Authentic Nigerian feast spread with party jollof, beef suya, plantains, and egusi soup"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A121B]/95 via-[#6D1F2B]/85 to-[#4A121B]/75" />
          {/* Subtle geometric pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#DFC183] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lagos Bukka Tradition · Modern Elegance</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFF7E8] leading-[1.1] max-w-4xl mx-auto text-balance">
            THE TRUE TASTE <br />
            <span className="italic text-[#C6A15B]">OF NAIJA.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#FFF7E8]/90 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            From the smoky flavour of our charcoal grill to the deep richness of our traditional slow-simmered soups, discover Nigerian cuisine made with passion, served with pride, and shared with love.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-4 bg-[#C6A15B] hover:bg-[#DFC183] text-[#211A19] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Explore Our Menu</span>
            </button>

            <button
              onClick={() => onNavigate('reservations')}
              className="w-full sm:w-auto px-8 py-4 bg-[#6D1F2B] hover:bg-[#8A2838] border-2 border-[#C6A15B] text-[#FFF7E8] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 text-[#C6A15B]" />
              <span>Book Your Table</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-[#FFF7E8]/80 border-t border-[#FFF7E8]/15 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span>100% Halal Meats</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Flame className="w-4 h-4 text-[#C6A15B]" />
              <span>Lumpwood Charcoal Grill</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>Authentic West African Spices</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Users className="w-4 h-4 text-[#C6A15B]" />
              <span>Warm Bukka Hospitality</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION (EDITORIAL 2-COLUMN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#6D1F2B] font-bold">
              Our Culinary Heritage
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#211A19] leading-tight text-balance">
              More Than Food. <br />
              <span className="italic text-[#6D1F2B]">It’s Naija Culture.</span>
            </h2>
            <p className="text-base text-[#211A19]/80 leading-relaxed">
              At <strong>NAIJA POT</strong>, we celebrate the indelible soul of Nigerian dining — from the energetic, sun-soaked street bukka joints of Lagos Island to the quiet comfort of family kitchens across Nigeria.
            </p>
            <p className="text-base text-[#211A19]/80 leading-relaxed">
              We never cut corners. Our party jollof carries that authentic, smoky firewood aroma. Our suya skewers are dusted with real northern yaji groundnut spice, charred hot over red embers. And our soups are slowly simmered with genuine dried crayfish, fermented locust beans (iru), and prime cuts of meat.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6D1F2B] hover:text-[#4A121B] underline underline-offset-8 transition-colors cursor-pointer group"
              >
                <span>Discover the Story of Naija Pot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C6A15B]/30 group">
              <img
                src="/src/assets/images/food_egusi_soup_yam_1792356257944.jpg"
                alt="Traditional Nigerian Egusi Soup with Pounded Yam"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C6A15B]">
                  Signature Dish
                </span>
                <h4 className="font-serif text-xl font-bold">Rich Egusi Soup & Silky Pounded Yam</h4>
                <p className="text-xs text-white/80">Slow-braised with stockfish, beef, and bitterleaf greens.</p>
              </div>
            </div>
            {/* Decorative Gold Badge */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-[#6D1F2B] text-[#FFF7E8] border-2 border-[#C6A15B] p-4 rounded-xl shadow-xl text-center">
              <span className="block font-serif text-2xl font-bold text-[#C6A15B]">100%</span>
              <span className="text-[10px] uppercase font-bold tracking-wider">Authentic Recipes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES SHOWCASE */}
      <section className="bg-[#F3E8D6]/60 py-20 border-y border-[#6D1F2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6D1F2B]">
                Curated Flavours
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211A19]">
                Signature Naija Delicacies
              </h2>
              <p className="text-sm text-[#211A19]/75 max-w-xl">
                Every dish is prepared to order using authentic seasonings, generous protein portions, and our signature slow-smoking technique.
              </p>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6D1F2B] text-[#FFF7E8] hover:bg-[#4A121B] rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer shrink-0"
            >
              <span>Discover Full Menu</span>
              <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>

          {/* Dish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-[#6D1F2B]/10 transition-all flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 bg-[#6D1F2B]/10 overflow-hidden">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#4A121B] text-[#C6A15B]">
                      <UtensilsCrossed className="w-10 h-10 opacity-50" />
                    </div>
                  )}
                  {/* Dietary Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-[#FFF7E8] text-[10px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {dish.dietary[0] || 'Chef Pick'}
                  </div>
                  {/* Native Name */}
                  {dish.nativeName && (
                    <div className="absolute bottom-3 left-3 bg-[#6D1F2B]/90 backdrop-blur-xs text-[#C6A15B] text-[11px] font-bold px-2.5 py-0.5 rounded">
                      {dish.nativeName}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg font-bold text-[#211A19] leading-snug group-hover:text-[#6D1F2B] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-base font-bold text-[#6D1F2B] tabular-nums shrink-0">
                        £{dish.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-[#211A19]/75 leading-relaxed line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  {/* Actions & Meta */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-[#211A19]/60">
                      Heat: {dish.spiceLevel === 0 ? 'Mild' : '🌶️'.repeat(dish.spiceLevel)}
                    </span>
                    <button
                      onClick={() => onOpenDishCustomizer(dish)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#6D1F2B] hover:bg-[#4A121B] text-[#FFF7E8] text-xs font-semibold rounded-md transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NAIJA POT? (4 VISUAL FEATURE BLOCKS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6D1F2B]">
            The Naija Pot Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211A19]">
            Why Dine With Us?
          </h2>
          <p className="text-sm text-[#211A19]/75">
            Rooted in authentic Nigerian culinary traditions and uncompromising ingredient standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Block 1 */}
          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#6D1F2B] text-[#C6A15B] flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#6D1F2B]">
              Authentic Naija Flavours
            </h3>
            <p className="text-xs text-[#211A19]/75 leading-relaxed">
              True to traditional recipes. We source our iru, crayfish, scent leaves, and northern yaji spices directly from verified purveyors.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#6D1F2B] text-[#C6A15B] flex items-center justify-center">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#6D1F2B]">
              Freshly Prepared Daily
            </h3>
            <p className="text-xs text-[#211A19]/75 leading-relaxed">
              Every swallow is pounded fresh, every suya skewer flame-charred to order, and every batch of party jollof slow-smoked that day.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#6D1F2B] text-[#C6A15B] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#6D1F2B]">
              Made for Sharing
            </h3>
            <p className="text-xs text-[#211A19]/75 leading-relaxed">
              Nigerian food is communal. Our generous bukka platters and sharing bowls bring families, friends, and colleagues together.
            </p>
          </div>

          {/* Block 4 */}
          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-lg bg-[#6D1F2B] text-[#C6A15B] flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#6D1F2B]">
              Warm Hospitality
            </h3>
            <p className="text-xs text-[#211A19]/75 leading-relaxed">
              From our vibrant Afrobeat sounds to attentive, gracious service, step into an atmosphere where every guest is welcomed like family.
            </p>
          </div>
        </div>
      </section>

      {/* 5. RESTAURANT ATMOSPHERE (WIDE PHOTOGRAPHY SECTION) */}
      <section className="relative py-24 bg-[#4A121B] text-[#FFF7E8] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/restaurant_ambiance_dining_1792356259531.jpg"
            alt="Warm interior of Naija Pot restaurant and grill"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A121B] via-[#4A121B]/80 to-[#4A121B]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6A15B]">
            Dining Atmosphere
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FFF7E8]">
            Lagos Spirit Meets Contemporary Elegance
          </h2>
          <p className="text-sm sm:text-base text-[#FFF7E8]/85 max-w-2xl mx-auto leading-relaxed">
            Whether an intimate dinner for two, a lively birthday feast with our mega platters, or a corporate dinner, NAIJA POT offers an unforgettable setting draped in rich burgundy, brushed gold, and ambient warmth.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('reservations')}
              className="px-8 py-3.5 bg-[#C6A15B] hover:bg-[#DFC183] text-[#211A19] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
            >
              Reserve a Table
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="px-8 py-3.5 bg-transparent hover:bg-white/10 border border-[#FFF7E8]/40 text-[#FFF7E8] font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
            >
              View Restaurant Gallery
            </button>
          </div>
        </div>
      </section>

      {/* 6. GENUINE CUSTOMER EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6D1F2B]">
            Guest Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211A19]">
            The Naija Pot Experience
          </h2>
          <p className="text-sm text-[#211A19]/75">
            Real feedback from diners who cherish bold authentic West African flavours and heartfelt hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs flex flex-col justify-between space-y-6">
            <p className="text-sm text-[#211A19]/85 italic leading-relaxed">
              "Finding genuine party jollof with that unmistakable firewood smokiness in London has always been tough until Naija Pot opened. The beef suya was tender with just the right kick of yaji spice."
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-serif font-bold text-sm text-[#6D1F2B]">Tunde & Folake Balogun</p>
              <p className="text-xs text-[#211A19]/60">Dinner Guests · London</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs flex flex-col justify-between space-y-6">
            <p className="text-sm text-[#211A19]/85 italic leading-relaxed">
              "The Egusi soup with pounded yam is outstanding. You can tell they use genuine stockfish and bitterleaf without cutting corners. The Chapman cocktail brought back so many childhood memories."
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-serif font-bold text-sm text-[#6D1F2B]">Chidinma Okafor</p>
              <p className="text-xs text-[#211A19]/60">Regular Patron · Hackney</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-[#6D1F2B]/10 shadow-xs flex flex-col justify-between space-y-6">
            <p className="text-sm text-[#211A19]/85 italic leading-relaxed">
              "Hosted my 30th birthday dinner here with 14 friends. The Lagos Bukka Sharing Platter fed everyone generously. Service was warm, prompt, and the atmosphere felt like home."
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-serif font-bold text-sm text-[#6D1F2B]">David Alabi</p>
              <p className="text-xs text-[#211A19]/60">Group Celebration · Spitalfields</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM & SOCIAL GALLERY */}
      <section className="bg-[#F3E8D6]/60 py-20 border-y border-[#6D1F2B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6D1F2B]">
                Follow Along
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#211A19]">
                A Taste of Naija, Every Day
              </h2>
            </div>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6D1F2B] hover:text-[#4A121B] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C6A15B]" />
              <span>@naijapotkitchen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Gallery Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="/src/assets/images/food_beef_suya_grill_1792356257070.jpg"
                alt="Beef suya on grill"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6 text-[#C6A15B]" />
              </div>
            </div>

            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="/src/assets/images/food_jollof_party_platter_1792356258654.jpg"
                alt="Party jollof rice"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6 text-[#C6A15B]" />
              </div>
            </div>

            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="/src/assets/images/restaurant_ambiance_dining_1792356259531.jpg"
                alt="Restaurant dining room"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6 text-[#C6A15B]" />
              </div>
            </div>

            <div className="aspect-square rounded-lg overflow-hidden relative group">
              <img
                src="/src/assets/images/hero_naija_feast_1792356256861.jpg"
                alt="Grand feast spread"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-6 h-6 text-[#C6A15B]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#6D1F2B] text-[#FFF7E8] p-8 sm:p-12 rounded-2xl shadow-xl border border-[#C6A15B]/40 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-[#4A121B] text-[#C6A15B]">
            <Sparkles className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Stay Connected With Naija Pot
            </h2>
            <p className="text-xs sm:text-sm text-[#FFF7E8]/85 max-w-lg mx-auto leading-relaxed">
              Join our culinary circle for exclusive table releases, seasonal chef specials, Nigerian cultural feast nights, and festive menu previews.
            </p>
          </div>

          {newsletterSubmitted ? (
            <div className="p-4 bg-[#4A121B] border border-[#C6A15B] rounded-lg max-w-md mx-auto text-xs flex items-center justify-center gap-2 text-[#FFF7E8]">
              <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
              <span>E se gan! Thank you for subscribing. We will keep you updated.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-[#211A19] text-xs focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C6A15B] hover:bg-[#DFC183] text-[#211A19] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {newsletterError && (
                <p className="text-xs text-red-300 text-left">{newsletterError}</p>
              )}
              <p className="text-[11px] text-[#FFF7E8]/60">
                We respect your inbox. Unsubscribe at any time. No spam.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
