'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Ticket, Compass, Zap, X, ArrowRight, Search, 
  Sun, Coffee, BookOpen, Sprout, Music, Camera, Gamepad2, 
  Sparkles, Heart, Gift, Film, Utensils, Palette, Stethoscope, 
  PartyPopper, Calendar, Tag, Crown, Clock, MapPin, Trees, 
  Landmark, Waves, Mountain, Eye, Globe, Plane, 
  HeartPulse, Mic, Footprints, Activity, Trophy, Smartphone, 
  Languages, Scissors, CheckCircle2, ChevronRight, LayoutGrid
} from 'lucide-react';
import { CategoryType } from '@/types';
import { cn } from '@/utils/formatters';

export interface SubCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
  description?: string;
}

export interface MainCategoryGroup {
  id: Exclude<CategoryType, 'all'>;
  title: string;
  emoji: string;
  badge: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
  subcategories: SubCategory[];
}

export const ALL_CATEGORIES_DATA: MainCategoryGroup[] = [
  {
    id: 'meetups',
    title: 'Meetups',
    emoji: '🤝',
    badge: '12 Popular Circles',
    description: 'Connect with like-minded seniors for morning walks, tea discussions, books, games, and warm socializing.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    icon: Users,
    accentColor: '#2E7D32',
    accentBg: 'bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23]',
    subcategories: [
      { name: 'Morning Walk Club', icon: Sun, tag: 'Most Popular', description: 'Fresh morning park walks & fitness' },
      { name: 'Coffee Meetups', icon: Coffee, tag: 'Social', description: 'Relaxed cafe gatherings & conversations' },
      { name: 'Tea & Conversations', icon: Coffee, tag: 'Daily', description: 'Afternoon chai & nostalgia storytelling' },
      { name: 'Book Club', icon: BookOpen, tag: 'Literary', description: 'Classic books, memoirs & poetry circles' },
      { name: 'Gardening Club', icon: Sprout, tag: 'Outdoor', description: 'Lawn care, plant swap & terrace gardening' },
      { name: 'Music Circle', icon: Music, tag: 'Cultural', description: 'Classic ghazals, bhajans & karaoke' },
      { name: 'Dance Meetups', icon: PartyPopper, tag: 'Fun', description: 'Gentle ballroom, folk & retro dance' },
      { name: 'Photography Walks', icon: Camera, tag: 'Creative', description: 'Nature walks & photowalk excursions' },
      { name: 'Chess & Carrom Club', icon: Gamepad2, tag: 'Games', description: 'Indoor board games & friendly matches' },
      { name: 'Spiritual Meetups', icon: Sparkles, tag: 'Peaceful', description: 'Satsang, chanting & meditation groups' },
      { name: 'Volunteer Meetups', icon: Heart, tag: 'Giving Back', description: 'Teaching kids & community charity work' },
      { name: 'Birthday Gatherings', icon: Gift, tag: 'Celebration', description: 'Monthly senior birthday celebrations' }
    ]
  },
  {
    id: 'events',
    title: 'Events',
    emoji: '📅',
    badge: '12 Cultural Shows',
    description: 'Discover classical music concerts, theatrical plays, movie screenings, art exhibitions, and health camps.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    icon: Ticket,
    accentColor: '#F28C28',
    accentBg: 'bg-[#F28C28]/10 text-[#F28C28]',
    subcategories: [
      { name: 'Community Events', icon: Users, tag: 'Local', description: 'Neighborhood senior gatherings & forums' },
      { name: 'Cultural Festivals', icon: Sparkles, tag: 'Festive', description: 'Traditional festival celebrations' },
      { name: 'Music Nights', icon: Music, tag: 'Live', description: 'Classical, semi-classical & instrumental' },
      { name: 'Movie Screenings', icon: Film, tag: 'Retro Classics', description: 'Nostalgic cinema & old golden era films' },
      { name: 'Food Festivals', icon: Utensils, tag: 'Culinary', description: 'Traditional food & tasting popups' },
      { name: 'Art Exhibitions', icon: Palette, tag: 'Artistic', description: 'Gallery walks & handicraft expos' },
      { name: 'Health Camps', icon: Stethoscope, tag: 'Free Checkup', description: 'Wellness talks & senior health screening' },
      { name: 'Charity Events', icon: Heart, tag: 'Cause', description: 'Fundraisers & NGO support drives' },
      { name: 'Celebration Events', icon: PartyPopper, tag: 'Joyful', description: 'Anniversary & festive celebrations' },
      { name: 'Weekend Events', icon: Calendar, tag: 'Weekend', description: 'Special Saturday & Sunday programs' },
      { name: 'Free Events', icon: Tag, tag: 'Free Entry', description: 'No cost community gatherings' },
      { name: 'Premium Events', icon: Crown, tag: 'VIP Seats', description: 'Curated premium theater & gala shows' }
    ]
  },
  {
    id: 'travel',
    title: 'Tours & Travel',
    emoji: '✈️',
    badge: '12 Senior Escapes',
    description: 'Senior-friendly trips with comfortable transport, medical support, wheel-chair accessibility, and guided tours.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    icon: Compass,
    accentColor: '#E6B325',
    accentBg: 'bg-[#E6B325]/15 text-[#B58700] dark:text-[#E6B325]',
    subcategories: [
      { name: 'One-Day Trips', icon: Clock, tag: 'Day Escapes', description: 'Quick day trips near your city' },
      { name: 'Weekend Getaways', icon: MapPin, tag: '2-3 Days', description: 'Relaxing resort staycations & retreats' },
      { name: 'Nature Tours', icon: Trees, tag: 'Scenic', description: 'Botanical gardens & lake sanctuaries' },
      { name: 'Heritage Tours', icon: Landmark, tag: 'History', description: 'Historical palaces, forts & museums' },
      { name: 'Temple Tours', icon: Sparkles, tag: 'Spiritual', description: 'Pavitra yatra & temple darshan tours' },
      { name: 'Beach Trips', icon: Waves, tag: 'Relaxing', description: 'Sunset beach strolls & seaside resorts' },
      { name: 'Hill Station Tours', icon: Mountain, tag: 'Cool Breeze', description: 'Shimla, Ooty, Mahabaleshwar trips' },
      { name: 'Wildlife Tours', icon: Eye, tag: 'Safari', description: 'Gentle jungle safaris & bird reserves' },
      { name: 'Group Vacations', icon: Users, tag: 'Social', description: 'Travel together with fellow seniors' },
      { name: 'Cultural Tours', icon: Globe, tag: 'Heritage', description: 'Folk art, craft villages & traditions' },
      { name: 'Adventure Trips', icon: Compass, tag: 'Easy Trek', description: 'Gentle nature walks & lake boating' },
      { name: 'International Tours', icon: Plane, tag: 'Global', description: 'Assisted overseas group travel' }
    ]
  },
  {
    id: 'activities',
    title: 'Activities',
    emoji: '🎨',
    badge: '18 Fun Workshops',
    description: 'Engaging physical, creative, and mental activities designed specifically for active senior living.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    icon: Zap,
    accentColor: '#6B8E23',
    accentBg: 'bg-[#6B8E23]/15 text-[#2E7D32] dark:text-[#6B8E23]',
    subcategories: [
      { name: 'Yoga', icon: HeartPulse, tag: 'Wellness', description: 'Gentle chair yoga & stretching' },
      { name: 'Meditation', icon: Sun, tag: 'Mindfulness', description: 'Pranayama & deep relaxation' },
      { name: 'Gardening', icon: Sprout, tag: 'Green Thumb', description: 'Potted plants, bonsai & herbs' },
      { name: 'Painting', icon: Palette, tag: 'Creative', description: 'Watercolor, acrylic & canvas art' },
      { name: 'Pottery', icon: Sparkles, tag: 'Crafts', description: 'Clay modeling & ceramic spinning' },
      { name: 'Cooking Classes', icon: Utensils, tag: 'Healthy', description: 'Oil-free cooking & baking fun' },
      { name: 'Singing', icon: Mic, tag: 'Vocal', description: 'Classical riyaz & retro antakshari' },
      { name: 'Dancing', icon: PartyPopper, tag: 'Rhythm', description: 'Easy steps for balance & joy' },
      { name: 'Photography', icon: Camera, tag: 'Hobby', description: 'Smartphone photo tips & framing' },
      { name: 'Walking Groups', icon: Footprints, tag: 'Daily Fitness', description: 'Neighborhood morning walking pals' },
      { name: 'Bird Watching', icon: Eye, tag: 'Nature', description: 'Identify local birds with experts' },
      { name: 'Reading Club', icon: BookOpen, tag: 'Mental Gym', description: 'Group reading & discussions' },
      { name: 'Fitness Sessions', icon: Activity, tag: 'Light Cardio', description: 'Joint flexibility & light exercise' },
      { name: 'Indoor Games', icon: Gamepad2, tag: 'Fun & Brain', description: 'Scrabble, Carrom, Sudoku & Cards' },
      { name: 'Outdoor Games', icon: Trophy, tag: 'Lawn Sports', description: 'Mini golf, croquet & badminton' },
      { name: 'Digital Learning', icon: Smartphone, tag: 'Tech Savvy', description: 'Learn Smartphone, WhatsApp & UPI' },
      { name: 'Language Learning', icon: Languages, tag: 'New Skill', description: 'Learn basic Spanish, French, Sanskrit' },
      { name: 'DIY Craft Workshops', icon: Scissors, tag: 'Hands-on', description: 'Origami, knitting & home decor' }
    ]
  }
];

interface AllCategoriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSubcategory: (subcatName: string, categoryId?: CategoryType) => void;
  activeCategory?: CategoryType;
}

export default function AllCategoriesMegaMenu({
  isOpen,
  onClose,
  onSelectSubcategory,
  activeCategory = 'all',
}: AllCategoriesMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<CategoryType>('all');
  const [filterSearch, setFilterSearch] = useState('');

  // Synchronize initial tab
  useEffect(() => {
    if (activeCategory !== 'all') {
      setActiveTab(activeCategory);
    }
  }, [activeCategory, isOpen]);

  // Lock scroll when open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter category groups based on tab
  const displayedCategories = ALL_CATEGORIES_DATA.filter((group) => {
    if (activeTab !== 'all' && group.id !== activeTab) return false;
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex flex-col justify-start">
        
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* MEGA MENU CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-7xl mx-auto my-4 sm:my-8 px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-[#FFF8E7] dark:bg-[#12180F] border border-[#6B8E23]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
            
            {/* MEGA MENU HEADER */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#1A2316] via-[#24331F] to-[#1A2316] text-[#FFF8E7] border-b border-[#6B8E23]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#6B8E23] flex items-center justify-center text-white shadow-lg shadow-[#2E7D32]/30">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E6B325]">Senior-Friendly Directory</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#F28C28]/20 text-[#F28C28] border border-[#F28C28]/30 text-[10px] font-bold">54+ Options</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">Explore All GudPals Categories</h2>
                </div>
              </div>

              {/* SEARCH INSIDE CATEGORIES & CLOSE BUTTON */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-[#6B8E23] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={filterSearch}
                    onChange={(e) => setFilterSearch(e.target.value)}
                    placeholder="Search subcategory (e.g. Yoga, Movie)..."
                    className="w-full pl-9 pr-3 py-2 rounded-full bg-[#12180F]/80 border border-[#6B8E23]/40 text-xs text-[#FFF8E7] placeholder-gray-400 focus:outline-none focus:border-[#E6B325]"
                  />
                  {filterSearch && (
                    <button
                      onClick={() => setFilterSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-[#FFF8E7]/10 hover:bg-[#FFF8E7]/20 text-[#FFF8E7] transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* CATEGORY SELECTOR TABS (SENIOR FRIENDLY LARGE PILLS) */}
            <div className="px-5 sm:px-8 py-3 bg-[#FFF8E7] dark:bg-[#1A2316] border-b border-[#6B8E23]/20 flex items-center gap-2 overflow-x-auto no-scrollbar">
              
              <button
                onClick={() => setActiveTab('all')}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2",
                  activeTab === 'all'
                    ? "bg-[#2E7D32] text-white shadow-md shadow-[#2E7D32]/30 scale-[1.02]"
                    : "bg-[#FFF8E7] dark:bg-[#12180F] border border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:bg-[#6B8E23]/10"
                )}
              >
                <Sparkles className="w-4 h-4 text-[#E6B325]" />
                <span>Show All (4 Main Categories)</span>
              </button>

              {ALL_CATEGORIES_DATA.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border",
                      isSelected
                        ? "bg-[#2E7D32] text-white border-[#2E7D32] shadow-md scale-[1.02]"
                        : "bg-[#FFF8E7] dark:bg-[#12180F] border-[#6B8E23]/30 text-[#2B2B2B] dark:text-[#FFF8E7] hover:border-[#6B8E23]"
                    )}
                  >
                    <span className="text-sm">{cat.emoji}</span>
                    <Icon className={cn("w-4 h-4", isSelected ? "text-white" : "text-[#2E7D32] dark:text-[#6B8E23]")} />
                    <span>{cat.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/10 dark:bg-white/10 opacity-80">
                      {cat.subcategories.length}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* MAIN CONTENT AREA: GRID OF CATEGORIES & SUBCATEGORIES */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-10 custom-scrollbar">
              
              {displayedCategories.map((group) => {

                // Filter subcategories if user typed in internal search
                const filteredSubcats = group.subcategories.filter((sub) =>
                  sub.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
                  (sub.tag && sub.tag.toLowerCase().includes(filterSearch.toLowerCase())) ||
                  (sub.description && sub.description.toLowerCase().includes(filterSearch.toLowerCase()))
                );

                if (filterSearch && filteredSubcats.length === 0) {
                  return null;
                }

                return (
                  <div key={group.id} className="space-y-5">
                    
                    {/* CATEGORY HEADER CARD */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1A2316] to-[#24331F] text-[#FFF8E7] p-5 sm:p-6 border border-[#6B8E23]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                      <div className="flex items-center gap-4 z-10">
                        {/* THUMBNAIL IMAGE */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#E6B325]/40 shrink-0 shadow-md">
                          <Image
                            src={group.image}
                            alt={group.title}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{group.emoji}</span>
                            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{group.title}</h3>
                            <span className="px-3 py-1 rounded-full bg-[#E6B325] text-[#2B2B2B] text-xs font-extrabold shadow-sm">
                              {group.badge}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-1">
                            {group.description}
                          </p>
                        </div>
                      </div>

                      {/* ACTION BUTTON TO VIEW MAIN CATEGORY */}
                      <button
                        onClick={() => {
                          onSelectSubcategory('', group.id);
                          onClose();
                        }}
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white text-xs font-extrabold shadow-md hover:from-[#246528] hover:to-[#57741c] flex items-center gap-2 transition-all self-end sm:self-auto shrink-0"
                      >
                        <span>Explore All {group.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* SUBCATEGORY ITEMS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {filteredSubcats.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <div
                            key={sub.name}
                            onClick={() => {
                              onSelectSubcategory(sub.name, group.id);
                              onClose();
                            }}
                            className="group relative p-4 rounded-2xl bg-[#FFF8E7] dark:bg-[#1A2316] border border-[#6B8E23]/20 hover:border-[#F28C28] dark:hover:border-[#E6B325] transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between"
                          >
                            <div className="flex items-start justify-between gap-2">
                              
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110 shadow-sm",
                                  group.accentBg
                                )}>
                                  <SubIcon className="w-5 h-5" />
                                </div>

                                <div>
                                  <h4 className="text-sm font-bold text-[#2B2B2B] dark:text-[#FFF8E7] group-hover:text-[#2E7D32] dark:group-hover:text-[#E6B325] transition-colors leading-tight">
                                    {sub.name}
                                  </h4>
                                  {sub.description && (
                                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                                      {sub.description}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                            </div>

                            {sub.tag && (
                              <div className="mt-3 flex items-center justify-between border-t border-[#6B8E23]/10 pt-2 text-[10px]">
                                <span className="px-2 py-0.5 rounded-md bg-[#6B8E23]/10 text-[#2E7D32] dark:text-[#E6B325] font-semibold">
                                  {sub.tag}
                                </span>
                                <span className="text-[10px] text-gray-400 group-hover:text-[#2E7D32] dark:group-hover:text-[#E6B325] font-bold">
                                  Select →
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })}

            </div>

            {/* MEGA MENU FOOTER ASSISTANCE */}
            <div className="p-4 bg-[#1A2316] text-gray-300 text-xs border-t border-[#6B8E23]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E6B325]" />
                <span>Need help choosing? Call GudPals Senior Helpline: <strong className="text-[#FFF8E7]">+91 1800-GUDPALS</strong></span>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-full bg-[#FFF8E7]/10 hover:bg-[#FFF8E7]/20 text-[#FFF8E7] text-xs font-bold transition-colors"
              >
                Close Menu
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
