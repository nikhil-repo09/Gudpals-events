'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Check, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  Globe
} from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0D120A] text-[#FFF8E7] pt-16 pb-12 border-t border-[#6B8E23]/20 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#2E7D32]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP NEWSLETTER SECTION */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#162214] via-[#1F2C1B] to-[#12180F] border border-[#6B8E23]/30 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl shadow-xl">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6B8E23]/20 text-[#E6B325] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GudPals Weekly Digest</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF8E7]">
              Get Secret Invites & Discount Passes First.
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              No spam. Just curated weekend plans, comedy lineups, and private tech meetups delivered every Thursday.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="px-6 py-3.5 rounded-2xl bg-[#2E7D32]/20 border border-[#2E7D32]/50 text-[#6B8E23] font-bold text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-[#2E7D32]" />
                <span>You’re subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#1A2316] border border-[#6B8E23]/30 text-xs text-[#FFF8E7] placeholder-gray-400 focus:outline-none focus:border-[#F28C28]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-bold text-xs shadow-md shadow-[#2E7D32]/30 flex items-center gap-2 hover:from-[#246528] hover:to-[#57741c] transition-all shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MAIN FOOTER LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#6B8E23]/20 text-xs">
          
          {/* BRAND COLUMN */}
          <div className="col-span-2 space-y-4">
            <Logo size="lg" showTagline />
            <p className="text-gray-300 max-w-sm leading-relaxed">
              GudPals is India’s premier discovery platform dedicated to senior citizens — featuring curated heritage tours, classical music concerts, nostalgic storytelling, social games, and active fun retreats.
            </p>
            
            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2E7D32] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2E7D32] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2E7D32] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1A2316] border border-[#6B8E23]/30 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#2E7D32] transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 1: EXPERIENCES */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#E6B325] uppercase tracking-wider text-[11px]">Categories</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Morning Walks & Chai Circles</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Classical Music & Humor Shows</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Heritage Tours & Hill Retreats</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Chair Yoga & Pottery Fun</a></li>
            </ul>
          </div>

          {/* COLUMN 2: CITIES */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#E6B325] uppercase tracking-wider text-[11px]">Top Cities</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Mumbai Experiences</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Delhi NCR Events</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Bangalore Meetups</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Kolkata Culture</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Rishikesh Escapes</a></li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY & LEGAL */}
          <div className="space-y-3">
            <h4 className="font-bold text-[#E6B325] uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">About GudPals</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Careers (We’re Hiring!)</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Help Center & FAQ</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Host an Event</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#F28C28] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BANNER */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} GudPals Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A2316] border border-[#6B8E23]/30 text-gray-300 hover:text-[#FFF8E7] hover:border-[#F28C28] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#2E7D32]" />
              <span>English (IN)</span>
            </button>
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#F28C28] fill-current" />
              <span>for experience lovers.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}



