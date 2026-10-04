'use client';

import React, { useState } from 'react';
import { Filter, X, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { CategoryType, CategoryFilters } from '@/types';
import { cn } from '@/utils/formatters';

interface FilterBarProps {
  activeCategory: CategoryType;
  filters: CategoryFilters;
  setFilters: React.Dispatch<React.SetStateAction<CategoryFilters>>;
  onResetFilters: () => void;
}

export default function FilterBar({
  activeCategory,
  filters,
  setFilters,
  onResetFilters,
}: FilterBarProps) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Helper to toggle array/string filter value
  const updateFilter = (key: keyof CategoryFilters, value: string) => {
    setFilters((prev) => {
      const current = prev[key] as string | undefined;
      return {
        ...prev,
        [key]: current === value ? undefined : value,
      };
    });
  };

  // Count active filter pills
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="w-full bg-[#FFF8E7]/90 dark:bg-[#12180F]/90 backdrop-blur-md border-y border-[#6B8E23]/20 dark:border-[#6B8E23]/30 py-4 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        
        {/* Desktop Chips Navigation */}
        <div className="flex items-center gap-2 flex-nowrap shrink-0 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          
          <div className="flex items-center gap-1.5 pr-3 border-r border-[#6B8E23]/30 dark:border-[#6B8E23]/40 text-xs font-bold text-[#6B8E23] dark:text-[#E6B325] uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Filters</span>
          </div>

          {/* --- MEETUPS FILTERS --- */}
          {(activeCategory === 'all' || activeCategory === 'meetups') && (
            <>
              {['Today', 'Tomorrow', 'Weekend'].map((dateOption) => (
                <button
                  key={dateOption}
                  onClick={() => updateFilter('meetupsDate', dateOption)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.meetupsDate === dateOption
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  📅 {dateOption}
                </button>
              ))}

              {['Free', 'Paid'].map((priceOpt) => (
                <button
                  key={priceOpt}
                  onClick={() => updateFilter('meetupsPricing', priceOpt)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.meetupsPricing === priceOpt
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  {priceOpt === 'Free' ? '🎁 Free' : '💳 Paid'}
                </button>
              ))}

              {['Indoor', 'Outdoor'].map((envOpt) => (
                <button
                  key={envOpt}
                  onClick={() => updateFilter('meetupsEnvironment', envOpt)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.meetupsEnvironment === envOpt
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  {envOpt === 'Indoor' ? '🏛️ Indoor' : '🌲 Outdoor'}
                </button>
              ))}
            </>
          )}

          {/* --- EVENTS FILTERS --- */}
          {(activeCategory === 'all' || activeCategory === 'events') && (
            <>
              {['Music', 'Comedy', 'Workshops', 'Festivals', 'Conferences'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => updateFilter('eventsGenre', genre)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.eventsGenre === genre
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  {genre}
                </button>
              ))}
            </>
          )}

          {/* --- TRAVEL FILTERS --- */}
          {(activeCategory === 'all' || activeCategory === 'travel') && (
            <>
              {['Adventure', 'Beach', 'Hill Station', 'Couple', 'Solo'].map((tType) => (
                <button
                  key={tType}
                  onClick={() => updateFilter('travelType', tType)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.travelType === tType
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  ✈️ {tType}
                </button>
              ))}
            </>
          )}

          {/* --- ACTIVITIES FILTERS --- */}
          {(activeCategory === 'all' || activeCategory === 'activities') && (
            <>
              {['Water Sports', 'Art', 'Fitness', 'Kids'].map((act) => (
                <button
                  key={act}
                  onClick={() => updateFilter('activityType', act)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap",
                    filters.activityType === act
                      ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md shadow-[#2E7D32]/20"
                      : "bg-[#FFF8E7] dark:bg-[#1A2316] border-[#6B8E23]/30 dark:border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] hover:text-[#F28C28]"
                  )}
                >
                  🎨 {act}
                </button>
              ))}
            </>
          )}

        </div>

        {/* Action Controls Right (Reset & Mobile Drawer Trigger) */}
        <div className="flex items-center gap-2 shrink-0">
          {activeFilterCount > 0 && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/15 text-[#2E7D32] dark:text-[#E6B325] hover:bg-[#6B8E23]/25 text-xs font-semibold transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset ({activeFilterCount})</span>
            </button>
          )}

          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28] text-xs font-semibold shadow-sm transition-all md:hidden"
          >
            <Filter className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>More Filters</span>
          </button>
        </div>

      </div>

      {/* MOBILE FULL-SCREEN FILTER DRAWER */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in md:hidden">
          <div className="relative w-full max-w-xs bg-[#FFF8E7] dark:bg-[#12180F] h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl border-l border-[#6B8E23]/30">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#6B8E23]/30">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#2E7D32]" />
                  <h3 className="font-bold text-sm text-[#2B2B2B] dark:text-[#FFF8E7]">Filter Experiences</h3>
                </div>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-[#2B2B2B] dark:hover:text-[#FFF8E7]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="py-6 space-y-6">
                
                {/* Sort Option */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#6B8E23] block mb-2">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy || 'popularity'}
                    onChange={(e) => updateFilter('sortBy', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-xs font-semibold text-[#2B2B2B] dark:text-[#FFF8E7]"
                  >
                    <option value="popularity">🔥 Popularity</option>
                    <option value="rating">⭐ Highest Rated</option>
                    <option value="priceLowToHigh">💵 Price: Low to High</option>
                    <option value="priceHighToLow">💎 Price: High to Low</option>
                  </select>
                </div>

                {/* Subcategory options */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#6B8E23] block mb-2">
                    Quick Categories
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Music', 'Comedy', 'Adventure', 'Art'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          if (['Music', 'Comedy'].includes(tag)) updateFilter('eventsGenre', tag);
                          else if (tag === 'Adventure') updateFilter('travelType', tag);
                          else if (tag === 'Art') updateFilter('activityType', tag);
                          setIsMobileDrawerOpen(false);
                        }}
                        className="p-2 rounded-xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 text-left font-medium text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#F28C28]"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-[#6B8E23]/30 space-y-2">
              <button
                onClick={() => {
                  onResetFilters();
                  setIsMobileDrawerOpen(false);
                }}
                className="w-full py-2.5 rounded-xl border border-[#6B8E23]/30 text-xs font-semibold text-[#2B2B2B] dark:text-[#FFF8E7]"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-[#2E7D32] text-white text-xs font-bold shadow-md shadow-[#2E7D32]/30"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}



