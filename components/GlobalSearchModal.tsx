'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { ListingItem } from '@/types';
import { MOCK_ITEMS } from '@/services/mockData';
import { formatCurrency } from '@/utils/formatters';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: ListingItem) => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
  onSelectItem,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter items matching title, description, category, tags, or location
  const filteredResults = query.trim()
    ? MOCK_ITEMS.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.subcategory?.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-[#FFF8E7] dark:bg-[#12180F] rounded-3xl border border-[#6B8E23]/30 shadow-2xl overflow-hidden z-10">
        
        {/* SEARCH INPUT BAR */}
        <div className="p-4 sm:p-5 border-b border-[#6B8E23]/30 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#F28C28] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search across Meetups, Events, Travel, Activities, Health & Stores..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-[#2B2B2B] dark:text-[#FFF8E7] placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-[#2B2B2B] dark:hover:text-[#FFF8E7]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-full bg-[#1A2316] text-xs font-semibold text-[#FFF8E7] border border-[#6B8E23]/30 hover:border-[#F28C28]"
          >
            Esc
          </button>
        </div>

        {/* RESULTS LIST / SUGGESTIONS */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {!query.trim() ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-[#F28C28] animate-pulse-subtle" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#2B2B2B] dark:text-[#FFF8E7]">Type to Search GudPals</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Try searching for &quot;Standup&quot;, &quot;Code & Coffee&quot;, &quot;Trek&quot;, &quot;Yoga&quot;, or &quot;Grocery&quot;
                </p>
              </div>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-xs font-medium">
              No experiences found for &quot;{query}&quot;. Try adjusting your search term.
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B8E23] px-2 pb-1">
                Matches ({filteredResults.length})
              </div>
              {filteredResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-[#FFF8E7] dark:bg-[#1A2316] hover:bg-[#2E7D32]/10 border border-[#6B8E23]/20 flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#2B2B2B] dark:text-[#FFF8E7] group-hover:text-[#F28C28]">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#2E7D32]/15 text-[#2E7D32] dark:text-[#6B8E23] uppercase">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#2E7D32]" />
                          {item.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#E6B325] font-semibold">
                          <Star className="w-3 h-3 fill-current" />
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-extrabold text-xs text-[#2B2B2B] dark:text-[#FFF8E7]">
                      {formatCurrency(item.price)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BOTTOM SEARCH FOOTER */}
        <div className="p-3 bg-[#1A2316]/50 border-t border-[#6B8E23]/30 text-center text-xs text-gray-400">
          Showing real-time live results across all 6 categories
        </div>

      </div>
    </div>
  );
}



