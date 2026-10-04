'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Sparkles, TrendingUp, MapPin, ArrowRight } from 'lucide-react';
import { LocationCity, CategoryType } from '@/types';
import { TRENDING_SEARCHES } from '@/services/mockData';

interface HeroSectionProps {
  category?: CategoryType;
  selectedCity: LocationCity;
  onSearchQuery: (query: string) => void;
  setActiveCategory?: (cat: CategoryType) => void;
  onOpenSearch: () => void;
}

export interface CategoryHeroData {
  badge: string;
  headline: string;
  subheading: string;
  image: string;
  placeholderText: string;
}

export const HERO_CATEGORY_DATA: Record<CategoryType, CategoryHeroData> = {
  all: {
    badge: 'Curated Events, Tours & Enjoyment for Senior Citizens',
    headline: 'Connecting Senior Citizens with Events, Tours & Pure Enjoyment',
    subheading: 'Senior Heritage Tours, Classical Music Sunset Evenings, Laughter Circles, Scenic Hill Escapes, and Social Chai Meetups.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search senior tours, classical music, laughter circles, hill retreats, board games...',
  },
  meetups: {
    badge: 'Meetups & Socials',
    headline: 'Meet New Friends & Create Meaningful Connections',
    subheading: 'Join coffee meetups, walking clubs, book clubs, gardening groups, and community gatherings designed for active senior citizens.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search morning walks, chai circles, book clubs, scrabble, chess...',
  },
  events: {
    badge: 'Events & Shows',
    headline: 'Experience Culture, Music & Entertainment',
    subheading: 'Enjoy live performances, cultural festivals, movie nights, music concerts, and unforgettable community events.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search classical concerts, antakshari nights, comedy shows, theatre...',
  },
  travel: {
    badge: 'Tours & Escapes',
    headline: 'Travel Together. Discover New Places.',
    subheading: 'Explore carefully planned group tours, weekend getaways, heritage trips, nature retreats, and memorable travel experiences.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search hill station retreats, temple tours, heritage trips, beach escapes...',
  },
  activities: {
    badge: 'Fun Activities',
    headline: 'Stay Active. Learn. Enjoy Every Day.',
    subheading: 'Discover fun activities, hobbies, workshops, games, and creative experiences that make every day exciting.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search chair yoga, pottery workshops, digital literacy, photowalks...',
  },
  health: {
    badge: 'Health & Wellness',
    headline: 'Healthy Living Starts Here',
    subheading: 'Join yoga sessions, wellness workshops, meditation classes, nutrition programs, and healthy lifestyle activities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search free health checkups, senior yoga, physiotherapy, nutrition talks...',
  },
  stores: {
    badge: 'Stores',
    headline: 'Everything You Need, All in One Place',
    subheading: 'Explore wellness products, books, health essentials, organic foods, fitness accessories, and lifestyle products.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
    placeholderText: 'Search walking sticks, reading glasses, ayurvedic oils, wellness books...',
  },
};

export default function HeroSection({
  category = 'all',
  selectedCity,
  onSearchQuery,
  onOpenSearch,
}: HeroSectionProps) {
  const [inputVal, setInputVal] = useState('');

  const heroData = HERO_CATEGORY_DATA[category] || HERO_CATEGORY_DATA.all;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearchQuery(inputVal.trim());
    } else {
      onOpenSearch();
    }
  };

  return (
    <section className="relative min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0D120A] text-[#FFF8E7] pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Category Hero Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={heroData.image}
          alt={heroData.headline}
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.40] contrast-[1.1]"
          sizes="100vw"
        />
        {/* Dark Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D120A]/90 via-[#12180F]/70 to-[#0D120A]/95 backdrop-blur-[1px]" />
      </div>

      {/* Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#2E7D32]/30 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F28C28]/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      <div className="relative max-w-5xl mx-auto text-center z-10 space-y-7">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2316]/90 backdrop-blur-md border border-[#6B8E23]/50 text-xs font-semibold text-[#FFF8E7] shadow-xl shadow-[#2E7D32]/30 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#E6B325] fill-[#E6B325]" />
          <span>{heroData.badge} in <span className="text-[#E6B325] font-bold underline underline-offset-4 decoration-[#F28C28]">{selectedCity}</span></span>
        </div>

        {/* Dynamic Category Headline */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#FFF8E7] via-[#E6B325] to-[#F28C28] bg-clip-text text-transparent">
              {heroData.headline}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-gray-200 font-medium leading-relaxed drop-shadow-md">
            {heroData.subheading}
          </p>
        </div>

        {/* Hero Search Box */}
        <div className="max-w-3xl mx-auto pt-2">
          <form onSubmit={handleSubmit} className="relative group">
            <div className="relative flex items-center p-2 rounded-full bg-[#1A2316]/95 backdrop-blur-xl border border-[#6B8E23]/50 shadow-2xl focus-within:border-[#F28C28] focus-within:ring-2 focus-within:ring-[#F28C28]/40 transition-all">
              
              <div className="pl-5 pr-3 text-[#E6B325] items-center gap-2 border-r border-[#6B8E23]/30 hidden sm:flex shrink-0">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                <span className="text-xs font-semibold text-[#FFF8E7]">{selectedCity}</span>
              </div>

              <Search className="w-5 h-5 text-[#6B8E23] ml-4 sm:ml-3 shrink-0" />

              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={heroData.placeholderText}
                className="w-full bg-transparent px-3 py-3 text-sm sm:text-base text-[#FFF8E7] placeholder-gray-400 focus:outline-none"
              />

              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-bold text-sm shadow-md shadow-[#2E7D32]/30 flex items-center gap-2 hover:from-[#246528] hover:to-[#57741c] transition-all shrink-0 active:scale-95"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Trending Searches Pills */}
          <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-xs text-gray-300">
            <div className="flex items-center gap-1 text-[#E6B325] font-semibold mr-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Trending:</span>
            </div>
            {TRENDING_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setInputVal(term);
                  onSearchQuery(term);
                }}
                className="px-3.5 py-1.5 rounded-full bg-[#1A2316]/80 backdrop-blur-md border border-[#6B8E23]/40 hover:bg-[#6B8E23]/30 hover:border-[#F28C28] hover:text-[#FFF8E7] text-gray-200 transition-all font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
