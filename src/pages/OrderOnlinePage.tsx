import React, { useState } from 'react';
import { menuCategories, menuItems, MenuItem, MenuCategoryKey } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Flame, Clock, Truck, Store, Sparkles, Plus } from 'lucide-react';

interface OrderOnlinePageProps {
  onOpenDishCustomizer: (dish: MenuItem) => void;
}

export const OrderOnlinePage: React.FC<OrderOnlinePageProps> = ({ onOpenDishCustomizer }) => {
  const { orderType, setOrderType, setIsCartOpen, totalItemCount, grandTotal } = useCart();
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>('rice');

  const categoryItems = menuItems.filter((i) => i.category === activeCategory);

  return (
    <div className="space-y-10 pb-24">
      {/* Header Banner */}
      <section className="bg-[#4A121B] text-[#FFF7E8] py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#DFC183] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Naija Pot Direct Kitchen</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Order Authentic Naija Food
          </h1>
          <p className="text-xs sm:text-sm text-[#FFF7E8]/85 max-w-xl mx-auto">
            Hot and fresh from our iron pots and charcoal grill straight to your dining table.
          </p>
        </div>
      </section>

      {/* Mode Switcher: Collection vs Delivery */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 rounded-xl border border-[#6D1F2B]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6D1F2B]">
              Order Method:
            </span>
            <div className="grid grid-cols-2 gap-2 bg-[#F3E8D6] p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setOrderType('collection')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  orderType === 'collection'
                    ? 'bg-[#6D1F2B] text-[#FFF7E8] shadow-xs'
                    : 'text-[#211A19]/80 hover:text-[#211A19]'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Collection (25 mins)</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'bg-[#6D1F2B] text-[#FFF7E8] shadow-xs'
                    : 'text-[#211A19]/80 hover:text-[#211A19]'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Delivery (45 mins)</span>
              </button>
            </div>
          </div>

          {/* Quick Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C6A15B] hover:bg-[#DFC183] text-[#211A19] font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Basket ({totalItemCount})</span>
            {totalItemCount > 0 && <span>· £{grandTotal.toFixed(2)}</span>}
          </button>
        </div>
      </section>

      {/* Main Order Layout: Category Sidebar + Dish Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs / Sidebar */}
          <div className="lg:col-span-3 sticky top-24 space-y-1 bg-white p-3 rounded-xl border border-[#6D1F2B]/10 shadow-xs">
            <span className="block px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#6D1F2B]">
              Menu Categories
            </span>
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.key;
              const count = menuItems.filter((i) => i.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#6D1F2B] text-[#FFF7E8] shadow-xs'
                      : 'text-[#211A19]/80 hover:bg-[#F3E8D6]'
                  }`}
                >
                  <span className="truncate">{cat.label}</span>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-[#C6A15B]' : 'text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dishes in Selected Category */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between border-b border-[#6D1F2B]/15 pb-3">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#6D1F2B]">
                  {menuCategories.find((c) => c.key === activeCategory)?.label}
                </h2>
                <p className="text-xs text-[#211A19]/70">
                  {menuCategories.find((c) => c.key === activeCategory)?.tagline}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryItems.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white p-4 rounded-xl border border-[#6D1F2B]/10 shadow-xs hover:shadow-md transition-all flex gap-4"
                >
                  {/* Thumbnail */}
                  {dish.image && (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-24 h-24 rounded-lg object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif font-bold text-sm text-[#211A19] leading-snug">
                          {dish.name}
                        </h4>
                        <span className="font-serif font-bold text-sm text-[#6D1F2B] tabular-nums shrink-0">
                          £{dish.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#211A19]/70 line-clamp-2 mt-1">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] text-[#211A19]/50">
                        {dish.dietary[0]}
                      </span>
                      <button
                        onClick={() => onOpenDishCustomizer(dish)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#6D1F2B] hover:bg-[#4A121B] text-[#FFF7E8] text-xs font-semibold rounded-md transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
