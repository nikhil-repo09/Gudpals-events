'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Header, { MAIN_NAV_CATEGORIES } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import ItemCard from '@/components/ItemCard';
import ItemDetailModal from '@/components/ItemDetailModal';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import AuthModal from '@/components/AuthModal';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { CategoryType, LocationCity, ListingItem, CategoryFilters } from '@/types';
import DynamicEventSection from '@/components/DynamicEventSection';
import { MOCK_ITEMS, CATEGORY_DESCRIPTIONS } from '@/services/mockData';
import { getDynamicEvents } from '@/services/dynamicEvents';
import { Sparkles, Flame, Compass, MapPin, ArrowLeft } from 'lucide-react';

interface GudPalsViewProps {
  forcedCategory?: CategoryType;
}

export default function GudPalsView({ forcedCategory }: GudPalsViewProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine active category based on path or forcedCategory prop
  const activeCategory: CategoryType = useMemo(() => {
    if (forcedCategory) return forcedCategory;
    if (pathname === '/meetups') return 'meetups';
    if (pathname === '/events') return 'events';
    if (pathname === '/tours') return 'travel';
    if (pathname === '/activities') return 'activities';
    if (pathname === '/health') return 'health';
    if (pathname === '/stores') return 'stores';
    return 'all';
  }, [pathname, forcedCategory]);

  const isHomePage = activeCategory === 'all';

  // Persistent City State
  const [selectedCity, setSelectedCity] = useState<LocationCity>('Mumbai');
  const [dynamicEvents, setDynamicEvents] = useState<ListingItem[]>([]);

  useEffect(() => {
    const savedCity = localStorage.getItem('gudpals_selected_city') as LocationCity | null;
    if (savedCity) {
      setSelectedCity(savedCity);
    }
  }, []);

  useEffect(() => {
  const loadDynamicEvents = async () => {
    const events = await getDynamicEvents();
    setDynamicEvents(events);
  };

  loadDynamicEvents();
  }, []);

  const handleSetSelectedCity = (city: LocationCity) => {
    setSelectedCity(city);
    localStorage.setItem('gudpals_selected_city', city);
  };

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<CategoryFilters>({});
  
  // Modals & Drawers
  const [selectedItem, setSelectedItem] = useState<ListingItem | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [authModalState, setAuthModalState] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login',
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Category selection handler (routes to appropriate page)
  const handleSelectCategory = (cat: CategoryType) => {
    if (cat === 'all') {
      router.push('/');
      return;
    }
    const catConfig = MAIN_NAV_CATEGORIES.find((c) => c.type === cat);
    if (catConfig) {
      router.push(catConfig.path);
    }
  };

  // Toggle favorite helper
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  // Filter items based on active city, category, search query, and chip filters
  const filteredItems = useMemo(() => {
    const allItems = [...dynamicEvents, ...MOCK_ITEMS];
    
    return allItems.filter((item) => {
    // City check
      if (item.location !== selectedCity) {
        return false;
      }

      // Hide dynamic events after the day following the event date
      if (item.isDynamicEvent && item.eventDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const expiryDate = new Date(`${item.eventDate}T00:00:00`);
        expiryDate.setDate(expiryDate.getDate() + 2);

        if (today >= expiryDate) {
          return false;
        }
      }

      // Category check
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchCategory = item.category.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchCategory && !matchDesc && !matchTags) return false;
      }

      // Filter: Meetups Date
      if (filters.meetupsDate && item.dateCategory !== filters.meetupsDate) {
        return false;
      }

      // Filter: Meetups Pricing
      if (filters.meetupsPricing) {
        if (filters.meetupsPricing === 'Free' && item.price !== 0) return false;
        if (filters.meetupsPricing === 'Paid' && item.price === 0) return false;
      }

      // Filter: Meetups Environment
      if (filters.meetupsEnvironment && item.indoorOutdoor !== filters.meetupsEnvironment) {
        return false;
      }

      // Filter: Events Genre
      if (filters.eventsGenre && item.eventGenre !== filters.eventsGenre) {
        return false;
      }

      // Filter: Travel Type
      if (filters.travelType && item.travelType !== filters.travelType) {
        return false;
      }

      // Filter: Activity Type
      if (filters.activityType && item.activityType !== filters.activityType) {
        return false;
      }

      return true;
    });
  }, [selectedCity, activeCategory, searchQuery, filters]);

  // Section collections
  const trendingItems = useMemo(() => filteredItems.filter((i) => i.isTrending), [filteredItems]);
  const popularItems = useMemo(() => filteredItems.filter((i) => i.isPopular), [filteredItems]);
  const nearbyItems = useMemo(() => filteredItems.filter((i) => i.isNearby), [filteredItems]);

  // Helper for category page headers
  const getCategoryHeader = () => {
    switch (activeCategory) {
      case 'meetups':
        return {
          title: `Meetups & Socials in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.meetups,
          badge: 'Meetups & Socials'
        };
      case 'events':
        return {
          title: `Events & Shows in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.events,
          badge: 'Events & Shows'
        };
      case 'travel':
        return {
          title: `Tours & Escapes in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.travel,
          badge: 'Tours & Escapes'
        };
      case 'activities':
        return {
          title: `Fun Activities in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.activities,
          badge: 'Fun Activities'
        };
      case 'health':
        return {
          title: `Health & Wellness in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.health,
          badge: 'Health & Wellness'
        };
      case 'stores':
        return {
          title: `Senior Stores & Essentials in ${selectedCity}`,
          desc: CATEGORY_DESCRIPTIONS.stores,
          badge: 'Stores'
        };
      default:
        return {
          title: `Experiences in ${selectedCity}`,
          desc: 'Curated senior experiences, outings, events, and essentials.',
          badge: 'Explore All'
        };
    }
  };

  const catHeader = getCategoryHeader();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#2B2B2B] dark:bg-[#12180F] dark:text-[#FFF8E7] selection:bg-[#2E7D32]">
      
      {/* STICKY HEADER */}
      <Header
        activeCategory={activeCategory}
        setActiveCategory={handleSelectCategory}
        selectedCity={selectedCity}
        setSelectedCity={handleSetSelectedCity}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenAuth={(mode) => setAuthModalState({ isOpen: true, mode })}
        onToggleMobileMenu={() => setIsMobileNavOpen(true)}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 space-y-10 pb-12">
        
        {/* DYNAMIC CATEGORY HERO SECTION */}
        <HeroSection
          category={activeCategory}
          selectedCity={selectedCity}
          onSearchQuery={(q) => setSearchQuery(q)}
          setActiveCategory={handleSelectCategory}
          onOpenSearch={() => setIsSearchModalOpen(true)}
        />

        {/* STICKY FILTER BAR */}
        <FilterBar
          activeCategory={activeCategory}
          filters={filters}
          setFilters={setFilters}
          onResetFilters={handleResetFilters}
        />

        {/* DYNAMIC UPCOMING EVENTS */}
        {dynamicEvents.length > 0 && (
           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <DynamicEventSection events={dynamicEvents} />
          </section>
        )}

        {/* ACTIVE SEARCH OR FILTER NOTICE */}
        {(searchQuery || Object.values(filters).some(Boolean)) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-[#2E7D32]/10 border border-[#6B8E23]/30 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2E7D32] dark:text-[#E6B325]">
              <Sparkles className="w-4 h-4 text-[#F28C28]" />
              <span>
                Showing filtered results {searchQuery && `for "${searchQuery}"`} ({filteredItems.length} found)
              </span>
            </div>
            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-[#F28C28] hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* HOME PAGE SECTIONS */}
        {isHomePage && (
          <>
            {/* SECTION 1: HANDPICKED EXPERIENCES */}
            {trendingItems.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#6B8E23] dark:text-[#E6B325] uppercase tracking-widest mb-1">
                      <Sparkles className="w-4 h-4 text-[#F28C28]" />
                      <span>Explore Categories</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
                      Handpicked Experiences in {selectedCity}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trendingItems.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 2: POPULAR THIS WEEK */}
            {popularItems.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#2E7D32]/20 text-[#2E7D32] dark:text-[#6B8E23] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#F28C28]" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">Popular This Week</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Highly rated workshops, shows, and outings</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularItems.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 3: ALL MATCHING GRID / RECOMMENDED */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#6B8E23]/20 dark:border-[#2E7D32]/30">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
                    All Recommended Experiences in {selectedCity}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Showing {filteredItems.length} curated options</p>
                </div>
              </div>

              {filteredItems.length === 0 ? (
                <div className="py-16 text-center space-y-4 bg-[#FFF8E7] dark:bg-[#1A2316] rounded-3xl border border-[#6B8E23]/30 p-8 shadow-md">
                  <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] flex items-center justify-center mx-auto">
                    <Compass className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] dark:text-[#FFF8E7]">No Experiences Match Your Criteria</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                    Try switching cities or resetting your filters to see more events, meetups, and stores.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-bold text-xs shadow-md shadow-[#2E7D32]/30"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* SECTION 4: NEARBY PLACES & RECENTLY ADDED */}
            {nearbyItems.length > 0 && (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#2E7D32]/20 text-[#2E7D32] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#F28C28]" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">Nearby Places & Hidden Gems</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Discover spots right around your neighborhood</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nearbyItems.map((item) => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      onSelect={setSelectedItem}
                      isFavorite={favorites.includes(item.id)}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* DEDICATED CATEGORY PAGE CONTENT */}
        {!isHomePage && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#6B8E23]/20">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B2B2B] dark:text-[#FFF8E7]">
                Available Options ({filteredItems.length})
              </h2>
            </div>

            {filteredItems.length === 0 ? (
              <div className="py-16 text-center space-y-4 bg-[#FFF8E7] dark:bg-[#1A2316] rounded-3xl border border-[#6B8E23]/30 p-8 shadow-md">
                <div className="w-16 h-16 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] dark:text-[#6B8E23] flex items-center justify-center mx-auto">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#2B2B2B] dark:text-[#FFF8E7]">No Experiences Found in {selectedCity}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                  We are constantly adding new experiences! Try changing your location or resetting filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#6B8E23] text-white font-bold text-xs shadow-md"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onSelect={setSelectedItem}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </div>
            )}
          </section>
        )}

      </main>

      {/* FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS & DRAWERS */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectItem={setSelectedItem}
      />

      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.mode}
        onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
      />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={handleSelectCategory}
        selectedCity={selectedCity}
        setSelectedCity={handleSetSelectedCity}
        onOpenAuth={(mode) => setAuthModalState({ isOpen: true, mode })}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

    </div>
  );
}
