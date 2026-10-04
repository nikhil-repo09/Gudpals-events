'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  Star, 
  MapPin, 
  Clock, 
  Share2, 
  Heart, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles, 
  Ticket, 
  Check,
  Navigation
} from 'lucide-react';
import { ListingItem } from '@/types';
import { formatCurrency } from '@/utils/formatters';

interface ItemDetailModalProps {
  item: ListingItem | null;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  const [ticketCount, setTicketCount] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const totalPrice = item.price * ticketCount;

  const handleBookNow = () => {
    setBookingConfirmed(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF8E7] dark:bg-[#12180F] rounded-3xl border border-[#6B8E23]/30 shadow-2xl overflow-y-auto z-10 flex flex-col my-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO GALLERY HEADER */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* TOP BADGES */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#2E7D32] text-white text-xs font-bold shadow-md uppercase tracking-wider">
              {item.category}
            </span>
            {item.isTrending && (
              <span className="px-3.5 py-1 rounded-full bg-[#F28C28] text-white text-xs font-bold flex items-center gap-1 shadow-md">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Trending</span>
              </span>
            )}
          </div>

          {/* BOTTOM OVERLAY INFO */}
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#E6B325] text-[#2B2B2B] text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{item.rating}</span>
                <span className="text-[11px] font-normal text-[#2B2B2B]/80">({item.reviewCount} reviews)</span>
              </div>
              {item.dateDisplay && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-medium text-gray-200">
                  <Clock className="w-3.5 h-3.5 text-[#E6B325]" />
                  <span>{item.dateDisplay}</span>
                </div>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {item.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#F28C28] shrink-0" />
              <span>{item.area}, {item.location}</span>
            </div>
          </div>
        </div>

        {/* MODAL CONTENT GRID */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: Details & Highlights */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Organizer Card */}
            {item.organizer && (
              <div className="p-4 rounded-2xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2E7D32]">
                    <Image
                      src={item.organizer.avatar}
                      alt={item.organizer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm text-[#2B2B2B] dark:text-[#FFF8E7]">
                        {item.organizer.name}
                      </span>
                      {item.organizer.verified && (
                        <ShieldCheck className="w-4 h-4 text-[#2E7D32] fill-[#2E7D32]/20" />
                      )}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Verified Host & Organizer</span>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-full border border-[#2E7D32]/40 text-[#2E7D32] dark:text-[#6B8E23] text-xs font-semibold hover:bg-[#2E7D32]/10">
                  Follow
                </button>
              </div>
            )}

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#2B2B2B] dark:text-[#FFF8E7] uppercase tracking-wider">
                About this experience
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Join us for an unforgettable experience designed with premium standards, verified hosts, and curated GudPals safety guidelines. 
              </p>
            </div>

            {/* Highlights / Tags */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#2B2B2B] dark:text-[#FFF8E7] uppercase tracking-wider">
                Highlights & Features
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                {item.tags.map((tag) => (
                  <div 
                    key={tag}
                    className="p-2.5 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] flex items-center gap-2 border border-[#6B8E23]/25"
                  >
                    <CheckCircle className="w-4 h-4 text-[#2E7D32] shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Preview */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#2B2B2B] dark:text-[#FFF8E7] uppercase tracking-wider flex items-center justify-between">
                <span>Venue Location</span>
                <span className="text-xs font-normal text-[#2E7D32] dark:text-[#6B8E23] flex items-center gap-1 cursor-pointer hover:underline">
                  <Navigation className="w-3.5 h-3.5 text-[#F28C28]" />
                  Get Directions
                </span>
              </h3>
              <div className="relative h-44 rounded-2xl overflow-hidden bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-center text-center p-4">
                <div className="space-y-2 z-10">
                  <MapPin className="w-8 h-8 text-[#2E7D32] dark:text-[#6B8E23] mx-auto animate-bounce" />
                  <div className="font-bold text-sm text-[#2B2B2B] dark:text-[#FFF8E7]">{item.area}, {item.location}</div>
                  <div className="text-xs text-gray-500">Interactive Map Preview Placeholder</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Booking Card */}
          <div className="space-y-6">
            <div className="sticky top-6 p-6 rounded-3xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/30 space-y-6 shadow-xl">
              
              {bookingConfirmed ? (
                <div className="text-center py-6 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#2E7D32]/20 text-[#2E7D32] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">Booking Confirmed!</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Your pass for <span className="font-semibold text-[#2E7D32] dark:text-[#6B8E23]">{item.title}</span> has been sent to your email.
                  </p>
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      onClose();
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-bold text-xs shadow-md shadow-[#2E7D32]/30"
                  >
                    View My Pass
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-[#6B8E23]/30">
                    <div>
                      <div className="text-xs font-semibold text-[#6B8E23] uppercase">Price Pass</div>
                      <div className="text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
                        {formatCurrency(item.price)}
                        {item.priceUnit && <span className="text-xs font-normal text-gray-500">{item.priceUnit}</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleShare}
                        className="p-2.5 rounded-full bg-[#FFF8E7] dark:bg-[#12180F] border border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:text-[#F28C28]"
                        title="Share"
                      >
                        {copied ? <Check className="w-4 h-4 text-[#2E7D32]" /> : <Share2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`p-2.5 rounded-full border transition-colors ${
                          isFavorite ? 'bg-[#F28C28] text-white border-[#F28C28]' : 'bg-[#FFF8E7] dark:bg-[#12180F] border-[#6B8E23]/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Quantity Counter */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#6B8E23] uppercase tracking-wider block">
                      Select Passes / Quantity
                    </label>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FFF8E7] dark:bg-[#12180F] border border-[#6B8E23]/30">
                      <span className="text-xs font-medium text-[#2B2B2B] dark:text-[#FFF8E7] pl-2">Passes</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                          className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] font-bold hover:bg-[#2E7D32]/20"
                        >
                          -
                        </button>
                        <span className="font-extrabold text-sm text-[#2B2B2B] dark:text-[#FFF8E7] w-4 text-center">
                          {ticketCount}
                        </span>
                        <button
                          onClick={() => setTicketCount(ticketCount + 1)}
                          className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] font-bold hover:bg-[#2E7D32]/20"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price Calculation */}
                  <div className="p-3 rounded-xl bg-[#FFF8E7] dark:bg-[#12180F] border border-[#6B8E23]/30 space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between">
                      <span>Pass ({ticketCount}x)</span>
                      <span>{formatCurrency(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GudPals Convenience Fee</span>
                      <span className="text-[#2E7D32] font-medium">₹0 FREE</span>
                    </div>
                    <div className="pt-2 border-t border-[#6B8E23]/30 flex justify-between font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7] text-sm">
                      <span>Total Payable</span>
                      <span className="text-[#2E7D32] dark:text-[#E6B325]">{formatCurrency(totalPrice)}</span>
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <button
                    onClick={handleBookNow}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-extrabold text-sm shadow-md shadow-[#2E7D32]/30 flex items-center justify-center gap-2 hover:from-[#246528] hover:to-[#57741c] transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Ticket className="w-4 h-4 text-[#E6B325]" />
                    <span>{item.price === 0 ? 'Reserve Free Spot' : 'Proceed to Checkout'}</span>
                  </button>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}


