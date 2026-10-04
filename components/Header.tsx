'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  User, 
  Menu, 
  Users,
  PartyPopper,
  Compass,
  Target,
  Heart,
  ShoppingBag,
  Sun,
  Moon
} from 'lucide-react';
import { CategoryType, LocationCity } from '@/types';
import { CITIES } from '@/services/mockData';
import { cn } from '@/utils/formatters';
import { Logo } from '@/components/Logo';

export interface NavCategoryConfig {
  type: CategoryType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

export const MAIN_NAV_CATEGORIES: NavCategoryConfig[] = [
  {
    type: 'meetups',
    label: 'Meetups & Socials',
    icon: Users,
    path: '/meetups',
  },
  {
    type: 'events',
    label: 'Events & Shows',
    icon: PartyPopper,
    path: '/events',
  },
  {
    type: 'travel',
    label: 'Tours & Escapes',
    icon: Compass,
    path: '/tours',
  },
  {
    type: 'activities',
    label: 'Fun Activities',
    icon: Target,
    path: '/activities',
  },
  {
    type: 'health',
    label: 'Health & Wellness',
    icon: Heart,
    path: '/health',
  },
  {
    type: 'stores',
    label: 'Stores',
    icon: ShoppingBag,
    path: '/stores',
  },
];

interface HeaderProps {
  activeCategory: CategoryType;
  setActiveCategory: (cat: CategoryType) => void;
  selectedCity: LocationCity;
  setSelectedCity: (city: LocationCity) => void;
  onOpenSearch: () => void;
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onToggleMobileMenu: () => void;
}

export default function Header({
  activeCategory,
  setActiveCategory,
  selectedCity,
  setSelectedCity,
  onOpenSearch,
  onOpenAuth,
  onToggleMobileMenu,
}: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Synchronize theme with localStorage & HTML document element across all page navigations
  useEffect(() => {
    const savedTheme = localStorage.getItem('gudpals_theme');
    if (savedTheme === 'dark' || document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('gudpals_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('gudpals_theme', 'light');
      }
      return nextMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300 border-b border-[#6B8E23]/25",
      isScrolled
        ? "bg-[#FFF8E7]/95 dark:bg-[#12180F]/95 backdrop-blur-md shadow-md py-1.5"
        : "bg-[#FFF8E7] dark:bg-[#12180F] py-2"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* TOP ROW: LOGO, CITY SELECTOR, GLOBAL SEARCH, AUTH */}
        <div className="flex items-center justify-between gap-3">
          
          {/* BRAND LOGO & CITY SELECTOR */}
          <div className="flex items-center gap-4">
            <Link href="/" onClick={() => setActiveCategory('all')} className="focus:outline-none">
              <Logo size="md" />
            </Link>

            {/* LOCATION CITY SELECTOR */}
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/40 text-sm font-bold text-[#2B2B2B] dark:text-[#FFF8E7] shadow-sm">
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value as LocationCity)}
                className="bg-transparent focus:outline-none cursor-pointer text-[#2B2B2B] dark:text-[#FFF8E7] text-sm font-bold"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city} className="bg-[#FFF8E7] dark:bg-[#12180F] text-[#2B2B2B] dark:text-[#FFF8E7]">
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* GLOBAL SEARCH TRIGGER BAR */}
          <div 
            onClick={onOpenSearch}
            className="flex-1 max-w-md hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 hover:border-[#F28C28] transition-all cursor-pointer group shadow-sm"
          >
            <Search className="w-4 h-4 text-[#6B8E23] group-hover:text-[#F28C28] transition-colors" />
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium flex-1 truncate">
              Search meetups, standup comedy, treks, health camps, stores...
            </span>
            <kbd className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#6B8E23]/10 dark:bg-[#12180F] text-[#6B8E23] border border-[#6B8E23]/30">
              ⌘K
            </kbd>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2.5">
            
            {/* Mobile Search Icon */}
            <button
              onClick={onOpenSearch}
              className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-[#6B8E23]/10"
            >
              <Search className="w-5 h-5 text-[#2E7D32]" />
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              className="p-2.5 rounded-full bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-gray-700 dark:text-gray-200 hover:text-[#E6B325] transition-colors shadow-sm"
              title="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#E6B325]" /> : <Moon className="w-4 h-4 text-[#6B8E23]" />}
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7] hover:text-[#2E7D32] transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-4.5 py-2 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:from-[#246528] hover:to-[#57741c] transition-all"
              >
                Sign Up
              </button>
            </div>

            {/* User Profile Avatar shortcut */}
            <button 
              onClick={() => onOpenAuth('login')}
              className="sm:hidden p-2 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#E6B325]"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={onToggleMobileMenu}
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-[#6B8E23]/10"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>

        </div>

        {/* BOTTOM ROW: CLEAN SIMPLE TOP NAVIGATION BAR (NO DROPDOWNS) */}
        <nav className="mt-2.5 pt-2 hidden md:flex items-center justify-between gap-1.5 sm:gap-2 border-t border-[#6B8E23]/20">
          {MAIN_NAV_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.type;

            return (
              <Link
                key={cat.type}
                href={cat.path}
                onClick={() => setActiveCategory(cat.type)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm sm:text-base font-extrabold whitespace-nowrap flex items-center gap-2.5 transition-all duration-250 ease-in-out group cursor-pointer border",
                  isActive
                    ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md scale-[1.02]"
                    : "bg-transparent border-transparent text-[#2B2B2B] dark:text-[#FFF8E7] hover:bg-[#2E7D32] hover:text-white hover:border-[#2E7D32]"
                )}
              >
                <Icon className={cn(
                  "w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-250 group-hover:scale-110 shrink-0",
                  isActive ? "text-white" : "text-[#2E7D32] dark:text-[#6B8E23] group-hover:text-white"
                )} />
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HORIZONTAL NAVIGATION SCROLL */}
        <nav className="mt-2.5 pt-2 md:hidden flex items-center justify-start overflow-x-auto no-scrollbar gap-2 border-t border-[#6B8E23]/20">
          {MAIN_NAV_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.type;
            return (
              <Link
                key={cat.type}
                href={cat.path}
                onClick={() => setActiveCategory(cat.type)}
                className={cn(
                  "px-3.5 py-2 rounded-full text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 border",
                  isActive
                    ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-sm scale-[1.02]"
                    : "bg-transparent border-transparent text-gray-700 dark:text-gray-200 hover:bg-[#6B8E23]/10"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-[#2E7D32]")} />
                <span>{cat.label}</span>
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
