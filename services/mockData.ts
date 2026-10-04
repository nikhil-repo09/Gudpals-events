import { ListingItem, LocationCity } from '@/types';

export const CITIES: LocationCity[] = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Kolkata'];

export const CATEGORY_DESCRIPTIONS = {
  meetups: 'Morning park walks, chai & conversation circles, book clubs, chess, and outdoor lawn socials.',
  events: 'Classical music sunset concerts, nostalgic storytelling, antakshari karaoke nights, and laughter clubs.',
  travel: 'Heritage temple tours, scenic hill station retreats, serene lakeside picnics, and nature excursions for seniors.',
  activities: 'Gentle chair yoga, clay sculpting, pottery workshops, photography walks, and digital literacy masterclasses.',
  health: 'Free health check-up camps, physiotherapy, nutrition workshops, mental wellness, and doctor consultation talks.',
  stores: 'Senior care products, pharmacy essentials, reading glasses, walking canes, fitness gear, and organic ayurvedic items.'
};

export const MOCK_ITEMS: ListingItem[] = [
  // --- MEETUPS ---
  {
    id: 'm1',
    title: 'Senior Citizens Morning Park Stroll & Chai Social',
    description: 'Easy-paced morning park walk designed for senior citizens, followed by hot chai, morning laughter, and warm outdoor conversations.',
    category: 'meetups',
    subcategory: 'Morning Walks',
    location: 'Bangalore',
    area: 'Cubbon Park',
    rating: 4.9,
    reviewCount: 142,
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Senior Walk', 'Morning Chai', 'Cubbon Park', 'Free'],
    isTrending: true,
    isPopular: true,
    isRecommended: true,
    dateCategory: 'Weekend',
    dateDisplay: 'Sat, 8:00 AM',
    indoorOutdoor: 'Outdoor',
    language: 'English & Kannada',
    organizer: {
      name: 'Bangalore Senior Citizens Forum',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'm2',
    title: 'Chai, Classic Scrabble & Chess Social',
    description: 'Cozy, seating-friendly indoor afternoon for senior citizens to play Scrabble, Carrom, Chess, and enjoy warm filter coffee.',
    category: 'meetups',
    subcategory: 'Social & Games',
    location: 'Mumbai',
    area: 'Bandra West',
    rating: 4.9,
    reviewCount: 98,
    price: 150,
    priceUnit: '/ person',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tags: ['Senior Social', 'Scrabble & Chess', 'Chai & Snacks'],
    isPopular: true,
    isNearby: true,
    dateCategory: 'Weekend',
    dateDisplay: 'Sun, 4:00 PM',
    indoorOutdoor: 'Indoor',
    language: 'Hindi & English',
    organizer: {
      name: 'Bandra Senior Citizens Club',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'm3',
    title: 'Senior Botanical Photowalk – Lodhi Gardens',
    description: 'Relaxed morning walk in Lodhi Gardens capturing flowers, birds, and historic monuments with fellow senior photo enthusiasts.',
    category: 'meetups',
    subcategory: 'Nature & Photography',
    location: 'Delhi NCR',
    area: 'Lodhi Gardens',
    rating: 4.8,
    reviewCount: 84,
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    tags: ['Senior Photowalk', 'Lodhi Gardens', 'Gentle Walk'],
    isRecentlyAdded: true,
    dateCategory: 'Weekend',
    dateDisplay: 'Sun, 7:30 AM',
    indoorOutdoor: 'Outdoor',
    language: 'Hindi & English',
    organizer: {
      name: 'Delhi Senior Lens Guild',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'm3b',
    title: 'Morning Walk Club – Nehru Park',
    description: 'Fresh morning stroll and chai circle for active senior citizens at Nehru Park with paved walking paths and shade trees.',
    category: 'meetups',
    subcategory: 'Morning Walks',
    location: 'Delhi NCR',
    area: 'Nehru Park, Chanakyapuri',
    rating: 4.9,
    reviewCount: 110,
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tags: ['Morning Walk Club', 'Nehru Park', 'Senior Walk', 'Chai Circle'],
    isTrending: true,
    isPopular: true,
    dateCategory: 'Today',
    dateDisplay: 'Today, 7:00 AM',
    indoorOutdoor: 'Outdoor',
    language: 'Hindi & English',
    organizer: {
      name: 'Delhi Senior Walkers Club',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'm4',
    title: 'Golden Age Book Circle & Heritage Tea Room',
    description: 'Monthly book circle for senior citizens discussing classic literature, history, and memoirs with comfortable armchair seating.',
    category: 'meetups',
    subcategory: 'Literature & Culture',
    location: 'Kolkata',
    area: 'Park Street',
    rating: 4.9,
    reviewCount: 65,
    price: 100,
    priceUnit: '/ person',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    tags: ['Book Club', 'Senior Literature', 'Tea Room', 'Park Street'],
    isTopRated: true,
    dateCategory: 'Today',
    dateDisplay: 'Today, 5:00 PM',
    indoorOutdoor: 'Indoor',
    language: 'English & Bengali',
    organizer: {
      name: 'Kolkata Senior Readers Circle',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },

  // --- EVENTS ---
  {
    id: 'e1',
    title: 'Classical Sitar & Flute Sunset Concert',
    description: 'Soothing Indian classical sitar & flute performance held in a senior-accessible auditorium with cushioned seating.',
    category: 'events',
    subcategory: 'Classical Music',
    location: 'Mumbai',
    area: 'NCPA, Nariman Point',
    rating: 4.9,
    reviewCount: 1250,
    price: 499,
    priceUnit: ' onwards',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    tags: ['Classical Sitar', 'Senior Accessible', 'Music', 'NCPA'],
    isTrending: true,
    isPopular: true,
    isRecommended: true,
    eventGenre: 'Music',
    dateCategory: 'Weekend',
    dateDisplay: 'Sat, 5:00 PM',
    organizer: {
      name: 'Harmony Senior Cultural Arts',
      avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'e2',
    title: 'Nostalgic Storytelling & Senior Laughter Circle',
    description: 'Warm evening of lighthearted anecdotes, classic humor, and golden oldies musical nostalgia tailored for elderly audience.',
    category: 'events',
    subcategory: 'Storytelling & Humor',
    location: 'Bangalore',
    area: 'Indiranagar Club',
    rating: 4.8,
    reviewCount: 620,
    price: 299,
    priceUnit: '/ seat',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tags: ['Laughter Therapy', 'Senior Stories', 'Golden Oldies'],
    isPopular: true,
    isTopRated: true,
    eventGenre: 'Workshops',
    dateCategory: 'Tomorrow',
    dateDisplay: 'Tomorrow, 5:30 PM',
    organizer: {
      name: 'Golden Joy Club',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'e3',
    title: 'Senior Antakshari & Retro Bollywood Karaoke Night',
    description: 'Fun musical evening for seniors singing 70s and 80s classic Bollywood retro songs, accompanied by live harmonium.',
    category: 'events',
    subcategory: 'Retro Music & Antakshari',
    location: 'Delhi NCR',
    area: 'India Habitat Centre',
    rating: 4.9,
    reviewCount: 310,
    price: 199,
    priceUnit: '/ entry',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    tags: ['Retro Antakshari', 'Senior Karaoke', 'Bollywood Oldies'],
    isRecommended: true,
    eventGenre: 'Music',
    dateCategory: 'Upcoming',
    dateDisplay: 'Aug 12, 6:00 PM',
    organizer: {
      name: 'Retro Senior Melodies Club',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'e4',
    title: 'Soulful Baul & Heritage Folk Melodies',
    description: 'Relaxed acoustic folk performance with comfortable cushioned armchairs, tea service, and priority wheelchair support.',
    category: 'events',
    subcategory: 'Folk Music',
    location: 'Kolkata',
    area: 'Rabindra Sadan',
    rating: 4.9,
    reviewCount: 450,
    price: 150,
    priceUnit: '/ seat',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    tags: ['Folk Music', 'Heritage', 'Senior Comfort'],
    isRecentlyAdded: true,
    eventGenre: 'Music',
    dateCategory: 'Weekend',
    dateDisplay: 'Sat, 4:30 PM',
    organizer: {
      name: 'Bengal Senior Culture Trust',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },

  // --- TRAVEL & TOURS ---
  {
    id: 't1',
    title: 'Gentle Countryside Senior Heritage Tour & Nature Walk',
    description: 'Flat, paved scenic walking trail surrounded by green hills, designed specifically for senior citizens with ample rest benches.',
    category: 'travel',
    subcategory: 'Heritage Tour',
    location: 'Mumbai',
    area: 'Karjat Countryside',
    rating: 4.9,
    reviewCount: 380,
    price: 850,
    priceUnit: '/ person',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    tags: ['Senior Heritage Tour', 'Gentle Trail', 'Nature Walk'],
    isTrending: true,
    isPopular: true,
    travelType: 'Solo',
    budgetTier: 'Mid-range',
    duration: '1 Day Trip',
    organizer: {
      name: 'Green Footsteps Seniors',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 't2',
    title: 'Coorg Senior Heritage Coffee Estate Tour & Retreat',
    description: 'Peaceful ground-floor bungalow stay featuring plantation walking paths, scenic gardens, and fresh home-cooked organic meals.',
    category: 'travel',
    subcategory: 'Estate Stay Tour',
    location: 'Bangalore',
    area: 'Coorg, Karnataka',
    rating: 4.9,
    reviewCount: 290,
    price: 3200,
    priceUnit: '/ night',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['Heritage Tour', 'Senior Retreat', 'Quiet', 'Coorg'],
    isRecommended: true,
    isTopRated: true,
    travelType: 'Family',
    budgetTier: 'Luxury',
    duration: '3 Days / 2 Nights',
    organizer: {
      name: 'Coorg Senior Stays',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 't3',
    title: 'Rishikesh Ganges Serenity & Temple Heritage Tour',
    description: 'Peaceful Ganges-side retreat offering gentle morning breathing, evening Ganga aarti, and dedicated senior assistance.',
    category: 'travel',
    subcategory: 'Temple Tour',
    location: 'Delhi NCR',
    area: 'Rishikesh, Uttarakhand',
    rating: 4.8,
    reviewCount: 510,
    price: 2499,
    priceUnit: '/ person',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    tags: ['Rishikesh', 'Temple Tour', 'Ganges Aarti', 'Serenity'],
    isPopular: true,
    travelType: 'Solo',
    budgetTier: 'Mid-range',
    duration: '3 Days / 2 Nights',
    organizer: {
      name: 'Sacred Ganges Wellness',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },

  // --- ACTIVITIES ---
  {
    id: 'a1',
    title: 'Gentle Senior Chair Yoga & Pranayama Workshop',
    description: 'Low-impact stretching and deep relaxation techniques specially designed to relieve joint stiffness and improve mobility.',
    category: 'activities',
    subcategory: 'Senior Yoga',
    location: 'Mumbai',
    area: 'Juhu Beach Center',
    rating: 4.9,
    reviewCount: 215,
    price: 350,
    priceUnit: '/ session',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    tags: ['Chair Yoga', 'Senior Mobility', 'Breathing', 'Juhu'],
    isTrending: true,
    isNearby: true,
    activityType: 'Fitness',
    indoorOutdoor: 'Indoor',
    organizer: {
      name: 'Juhu Senior Yoga Studio',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'a2',
    title: 'Senior Clay Sculpting & Handmade Pottery Fun',
    description: 'Relaxing wheel and hand-sculpting clay class for senior citizens to craft custom ceramic tea cups and flower vases.',
    category: 'activities',
    subcategory: 'Creative Art',
    location: 'Bangalore',
    area: 'HSR Layout',
    rating: 4.9,
    reviewCount: 180,
    price: 750,
    priceUnit: '/ workshop',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    tags: ['Pottery', 'Clay Craft', 'Senior Friendly', 'Art'],
    isRecommended: true,
    isTopRated: true,
    activityType: 'Art',
    indoorOutdoor: 'Indoor',
    organizer: {
      name: 'Clay Crafts Senior Studio',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'a3',
    title: 'Senior Smartphone & Digital Literacy Masterclass',
    description: 'Patient, step-by-step guidance showing senior citizens how to easily use WhatsApp, online banking, cab booking, and video calls.',
    category: 'activities',
    subcategory: 'Digital Literacy',
    location: 'Delhi NCR',
    area: 'Gurugram Cyber Hub',
    rating: 4.9,
    reviewCount: 430,
    price: 299,
    priceUnit: '/ workshop',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tags: ['Digital Literacy', 'Smartphone Class', 'Senior Tech'],
    isPopular: true,
    activityType: 'Fitness',
    indoorOutdoor: 'Indoor',
    organizer: {
      name: 'Senior Tech Literacy Academy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },

  // --- HEALTH & WELLNESS ---
  {
    id: 'h1',
    title: 'Free Senior Health Screening & BP Checkup Camp',
    description: 'Comprehensive health screening camp for senior citizens including ECG, blood pressure, sugar test, and doctor consultation.',
    category: 'health',
    subcategory: 'Health Checkup',
    location: 'Mumbai',
    area: 'Dadar Community Hall',
    rating: 4.9,
    reviewCount: 340,
    price: 0,
    isFree: true,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    tags: ['Free Health Camp', 'BP & Sugar Check', 'Doctor Consultation'],
    isTrending: true,
    isPopular: true,
    organizer: {
      name: 'Mumbai Senior Wellness Foundation',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 'h2',
    title: 'Senior Joint Mobility & Physiotherapy Workshop',
    description: 'Specialized group session led by certified senior physiotherapists focusing on knee pain relief, posture, and back mobility.',
    category: 'health',
    subcategory: 'Physiotherapy',
    location: 'Delhi NCR',
    area: 'South Ext. Medical Hub',
    rating: 4.8,
    reviewCount: 210,
    price: 250,
    priceUnit: '/ session',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Physiotherapy', 'Knee Mobility', 'Senior Care'],
    isRecommended: true,
    organizer: {
      name: 'PhysioCare Senior Guild',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },

  // --- STORES ---
  {
    id: 's1',
    title: 'GudPals Senior Care & Mobility Essentials Store',
    description: 'Curated store offering ergonomic walking sticks, anti-skid bathroom mats, orthopedic pillows, and lightweight reading glasses.',
    category: 'stores',
    subcategory: 'Mobility & Wellness',
    location: 'Mumbai',
    area: 'Bandra Senior Center Store',
    rating: 4.9,
    reviewCount: 520,
    price: 499,
    priceUnit: ' onwards',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    tags: ['Walking Canes', 'Reading Glasses', 'Orthopedic Essentials'],
    isTrending: true,
    isPopular: true,
    organizer: {
      name: 'GudPals Official Store',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  },
  {
    id: 's2',
    title: 'Ayurvedic Wellness & Organic Herbal Products Store',
    description: '100% natural herbal teas, joint pain oils, chyawanprash, and organic immune booster supplements for active senior living.',
    category: 'stores',
    subcategory: 'Ayurvedic Essentials',
    location: 'Bangalore',
    area: 'Jayanagar Wellness Store',
    rating: 4.9,
    reviewCount: 380,
    price: 299,
    priceUnit: ' onwards',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    tags: ['Ayurvedic Oil', 'Organic Tea', 'Immunity Boosters'],
    isRecommended: true,
    organizer: {
      name: 'Nandi Herbal Organics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true
    }
  }
];

export const TRENDING_SEARCHES = [
  'Senior Heritage Tour',
  'Laughter Circle',
  'Classical Music Sunset',
  'Retro Karaoke Night',
  'Chai & Scrabble',
  'Coorg Retreat Tour',
  'Chair Yoga'
];
