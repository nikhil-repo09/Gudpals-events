'use client';

import React from 'react';
import Link from 'next/link';
import { 
  X, 
  MapPin, 
  Home
} from 'lucide-react';
import { CategoryType, LocationCity } from '@/types';
import { CITIES } from '@/services/mockData';
import { MAIN_NAV_CATEGORIES } from './Header';
import { cn } from '@/utils/formatters';
import { Logo } from '@/components/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: CategoryType;
  setActiveCategory: (cat: CategoryType) => void;
  selectedCity: LocationCity;
  setSelectedCity: (city: LocationCity) => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenSearch: () => void;
}

export default function MobileNav({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
  selectedCity,
  setSelectedCity,
  onOpenAuth,
}: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/70 backdrop-blur-md animate-fade-in md:hidden">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-xs bg-[#FFF8E7] dark:bg-[#12180F] h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl z-10 border-r border-[#6B8E23]/30">
        
        <div className="space-y-6">
          
          {/* HEADER */}
          <div className="flex items-center justify-between pb-4 border-b border-[#6B8E23]/30">
            <Link href="/" onClick={() => { setActiveCategory('all'); onClose(); }}>
              <Logo size="md" />
            </Link>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-[#2B2B2B] dark:hover:text-[#FFF8E7]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* LOCATION SELECTOR */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6B8E23] block">
              Your Active City
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CITIES.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={cn(
                    "px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all",
                    selectedCity === city
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] text-[#2B2B2B] dark:text-[#FFF8E7] border-[#6B8E23]/30"
                  )}
                >
                  <span>{city}</span>
                  <MapPin className="w-3 h-3 shrink-0 text-[#F28C28]" />
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORIES LIST */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#6B8E23] block">
              Explore Categories
            </label>
            <div className="space-y-1">
              {MAIN_NAV_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.type;
                return (
                  <Link
                    key={cat.type}
                    href={cat.path}
                    onClick={() => {
                      setActiveCategory(cat.type);
                      onClose();
                    }}
                    className={cn(
                      "w-full px-4 py-3 rounded-2xl text-xs font-bold flex items-center gap-3 transition-colors text-left",
                      isActive
                        ? "bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/20"
                        : "text-[#2B2B2B] dark:text-[#FFF8E7] hover:bg-[#6B8E23]/10"
                    )}
                  >
                    <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-[#2E7D32] dark:text-[#6B8E23]")} />
                    <span>{cat.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>

        {/* FOOTER AUTH BUTTONS */}
        <div className="pt-4 border-t border-[#6B8E23]/30 space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenAuth('login');
            }}
            className="w-full py-3 rounded-xl border border-[#6B8E23]/30 text-xs font-bold text-[#2B2B2B] dark:text-[#FFF8E7]"
          >
            Log In
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAuth('signup');
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white text-xs font-bold shadow-md shadow-[#2E7D32]/30"
          >
            Sign Up Free
          </button>
        </div>

      </div>
    </div>
  );
}



