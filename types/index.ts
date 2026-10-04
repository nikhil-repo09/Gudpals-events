export type CategoryType = 'all' | 'meetups' | 'events' | 'travel' | 'activities' | 'health' | 'stores';

export type LocationCity = 'Mumbai' | 'Delhi NCR' | 'Bangalore' | 'Kolkata';

export interface ListingItem {
  id: string;
  title: string;
  description: string;
  category: Exclude<CategoryType, 'all'>;
  subcategory?: string;
  location: LocationCity;
  area: string;
  rating: number;
  reviewCount: number;
  price: number; // 0 if free
  priceUnit?: string; // e.g. "/ person", "/ night", "/ session"
  isFree?: boolean;
  image: string;
  gallery?: string[];
  tags: string[];
  isTrending?: boolean;
  isPopular?: boolean;
  isRecommended?: boolean;
  isRecentlyAdded?: boolean;
  isTopRated?: boolean;
  isNearby?: boolean;
  
  // Category specific filter fields
  dateCategory?: 'Today' | 'Tomorrow' | 'Weekend' | 'Upcoming';
  dateDisplay?: string;
  indoorOutdoor?: 'Indoor' | 'Outdoor';
  language?: string;
  eventGenre?: 'Music' | 'Comedy' | 'Workshops' | 'Festivals' | 'Conferences' | 'Sports';
  travelType?: 'Solo' | 'Family' | 'Couple' | 'Adventure' | 'Beach' | 'Hill Station';
  budgetTier?: 'Budget' | 'Mid-range' | 'Luxury';
  duration?: string;
  activityType?: 'Indoor' | 'Outdoor' | 'Kids' | 'Adventure' | 'Water Sports' | 'Fitness' | 'Art' | 'Weekend';
  hasOffers?: boolean;
  
  // Organizer details
  organizer?: {
    name: string;
    avatar: string;
    verified: boolean;
  };

  // Dynamic n8n event fields
  isDynamicEvent?: boolean;
  eventDate?: string;        // YYYY-MM-DD
  eventTime?: string;        // HH:MM or display time
  eventEndDate?: string;
  eventEndTime?: string;
  sourceUrl?: string;
  interestHook?: string;

  // Controls which visual layout is used
  eventLayout?: 'A' | 'B' | 'C' | 'D';
}

export interface CategoryFilters {
  // Meetups
  meetupsDate?: string;
  meetupsPricing?: 'All' | 'Free' | 'Paid';
  meetupsEnvironment?: 'All' | 'Indoor' | 'Outdoor';
  meetupsLanguage?: string;

  // Events
  eventsGenre?: string;
  eventsPricing?: 'All' | 'Free' | 'Paid';

  // Travel
  travelType?: string;
  travelBudget?: string;

  // Activities
  activityType?: string;

  // Common
  sortBy?: 'popularity' | 'rating' | 'priceLowToHigh' | 'priceHighToLow';
  searchQuery?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[];
}
