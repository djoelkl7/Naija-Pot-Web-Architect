import React, { useState } from 'react';
import { galleryItems, galleryCategories } from '../data/galleryData';
import { ImageLightbox } from '../components/ImageLightbox';
import { Sparkles, Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = galleryItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <section className="bg-[#4A121B] text-[#FFF7E8] py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/40 text-[#DFC183] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Culinary Journal</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            The Naija Pot Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#FFF7E8]/85 max-w-xl mx-auto">
            Glimpse into the warmth of our dining room, the smoke rising from our charcoal grills, and our signature plates.
          </p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#6D1F2B] text-[#FFF7E8] shadow-sm'
                    : 'bg-white text-[#211A19]/80 border border-[#6D1F2B]/15 hover:border-[#6D1F2B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden bg-white border border-[#6D1F2B]/10 shadow-xs hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* View Zoom Trigger */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-xs text-[#FFF7E8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#C6A15B]" />
              </div>

              {/* Caption & Category */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C6A15B]">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-base font-bold leading-snug">{item.title}</h3>
                <p className="text-xs text-white/80 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        items={filteredGallery}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
