'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Star, 
  MapPin, 
  Heart, 
  Share2, 
  ArrowUpRight, 
  Check,
  Clock,
  Sparkles
} from 'lucide-react';
import { ListingItem } from '@/types';
import { formatCurrency, cn } from '@/utils/formatters';

interface ItemCardProps {
  item: ListingItem;
  onSelect: (item: ListingItem) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export default function ItemCard({
  item,
  onSelect,
  isFavorite = false,
  onToggleFavorite,
}: ItemCardProps) {
  const [copiedShare, setCopiedShare] = useState(false);
  const [favState, setFavState] = useState(isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavState(!favState);
    if (onToggleFavorite) {
      onToggleFavorite(item.id);
    }
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/25 dark:border-[#6B8E23]/30 shadow-md hover:shadow-xl transition-all duration-300 earth-card-hover cursor-pointer"
    >
      {/* CARD IMAGE CONTAINER */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* TOP ACTION BADGES */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          
          {/* Subcategory / Status Pill */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide">
            {item.isTrending && <Sparkles className="w-3 h-3 text-[#E6B325] fill-[#E6B325]" />}
            <span>{item.subcategory || item.category.toUpperCase()}</span>
          </div>

          {/* Action Buttons: Favorite & Share */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShareClick}
              className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#F28C28] hover:text-white transition-colors"
              title="Share experience"
            >
              {copiedShare ? (
                <Check className="w-3.5 h-3.5 text-[#2E7D32]" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={handleFavoriteClick}
              className={cn(
                "w-8 h-8 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform active:scale-75",
                favState
                  ? "bg-[#F28C28] text-white border-[#F28C28] shadow-lg"
                  : "bg-black/50 text-white hover:bg-[#F28C28] hover:text-white"
              )}
              title="Favorite"
            >
              <Heart className={cn("w-3.5 h-3.5", favState && "fill-current")} />
            </button>
          </div>

        </div>

        {/* BOTTOM OVERLAY INFO (Rating & Date) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6B325] text-[#2B2B2B] text-xs font-bold shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{item.rating}</span>
            <span className="text-[10px] font-normal text-[#2B2B2B]/80">({item.reviewCount})</span>
          </div>

          {item.dateDisplay && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-gray-200">
              <Clock className="w-3 h-3 text-[#E6B325]" />
              <span>{item.dateDisplay}</span>
            </div>
          )}
        </div>
      </div>

      {/* CARD CONTENT BODY */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="font-extrabold text-base sm:text-lg text-[#2B2B2B] dark:text-[#FFF8E7] line-clamp-1 group-hover:text-[#F28C28] transition-colors">
            {item.title}
          </h3>

          {/* Location Area */}
          <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#2E7D32] dark:text-[#6B8E23] shrink-0" />
            <span className="truncate">{item.area}, {item.location}</span>
          </div>

          {/* Description Snippet */}
          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#6B8E23]/15 text-[#2E7D32] dark:text-[#E6B325] border border-[#6B8E23]/20"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* FOOTER: Price & CTA Button */}
        <div className="pt-3 border-t border-[#6B8E23]/20 dark:border-[#6B8E23]/30 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B8E23] dark:text-[#E6B325]">
              {item.price === 0 ? 'Entry' : 'Starting From'}
            </div>
            <div className="text-base font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7] flex items-baseline gap-1">
              <span className={item.price === 0 ? "text-[#2E7D32] dark:text-[#E6B325]" : "text-[#2E7D32] dark:text-[#E6B325]"}>
                {formatCurrency(item.price)}
              </span>
              {item.priceUnit && (
                <span className="text-[11px] font-normal text-gray-500 dark:text-gray-400">{item.priceUnit}</span>
              )}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white text-xs font-bold flex items-center gap-1.5 hover:from-[#246528] hover:to-[#57741c] transition-all shadow-md shadow-[#2E7D32]/20"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}



