'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Compass, 
  Calendar, 
  Plane, 
  Activity, 
  HeartPulse, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CategoryType, LocationCity } from '@/types';
import { CATEGORY_DESCRIPTIONS, MOCK_ITEMS } from '@/services/mockData';
import { cn } from '@/utils/formatters';

interface CategoryCardsProps {
  activeCategory: CategoryType;
  setActiveCategory: (cat: CategoryType) => void;
  selectedCity: LocationCity;
  onOpenMegaMenu?: () => void;
}

export const CATEGORIES_DATA: {
  id: Exclude<CategoryType, 'all'>;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  badge: string;
  rating: number;
}[] = [
  {
    id: 'meetups',
    title: 'Meetups & Socials',
    subtitle: CATEGORY_DESCRIPTIONS.meetups,
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: 'Morning Walks & Chai Circles',
    rating: 4.9,
  },
  {
    id: 'events',
    title: 'Events & Shows',
    subtitle: CATEGORY_DESCRIPTIONS.events,
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    badge: 'Classical Music & Humor',
    rating: 4.9,
  },
  {
    id: 'travel',
    title: 'Tours & Escapes',
    subtitle: CATEGORY_DESCRIPTIONS.travel,
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    badge: 'Heritage Tours & Retreats',
    rating: 4.9,
  },
  {
    id: 'activities',
    title: 'Fun Activities',
    subtitle: CATEGORY_DESCRIPTIONS.activities,
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    badge: 'Chair Yoga & Pottery Fun',
    rating: 4.8,
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    subtitle: CATEGORY_DESCRIPTIONS.health,
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    badge: 'Free Checkups & Yoga Camps',
    rating: 4.9,
  },
];

export default function CategoryCards({
  activeCategory,
  setActiveCategory,
  selectedCity,
}: CategoryCardsProps) {

  // Helper to count items in city for category
  const getItemCount = (catId: Exclude<CategoryType, 'all'>) => {
    return MOCK_ITEMS.filter(
      (item) => item.category === catId && item.location === selectedCity
    ).length;
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#6B8E23] dark:text-[#E6B325] uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-[#F28C28]" />
            <span>Explore Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
            Handpicked Experiences in {selectedCity}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES_DATA.map((cat) => {
          const Icon = cat.icon;
          const count = getItemCount(cat.id);
          const isSelected = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl cursor-pointer border transition-all duration-300 bg-[#FFF8E7] dark:bg-[#1A2316] shadow-md hover:shadow-xl earth-card-hover",
                isSelected
                  ? "border-[#2E7D32] ring-2 ring-[#2E7D32]/50 shadow-lg shadow-[#2E7D32]/20"
                  : "border-[#6B8E23]/25 dark:border-[#6B8E23]/30 hover:border-[#6B8E23]/60"
              )}
            >
              {/* Category Image Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                    <Icon className="w-3.5 h-3.5 text-[#E6B325]" />
                    <span>{cat.badge}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6B325] text-[#2B2B2B] text-[11px] font-bold shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{cat.rating}</span>
                  </div>
                </div>

                {/* Bottom Image Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight leading-tight group-hover:text-[#E6B325] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-200 font-medium">
                      {count} available in {selectedCity}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#F28C28] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-2">
                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Bottom Accent Highlight Bar */}
              <div className={cn(
                "h-1 w-full transition-colors",
                isSelected ? "bg-[#2E7D32]" : "bg-transparent group-hover:bg-[#6B8E23]/60"
              )} />
            </div>
          );
        })}
      </div>
    </section>
  );
}



