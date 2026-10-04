import { ListingItem } from '@/types';

const EVENTS_URL =
  'https://raw.githubusercontent.com/nikhil-repo09/Gudpals-events/main/data/events.json';

export async function getDynamicEvents(): Promise<ListingItem[]> {
  try {
    const response = await fetch(EVENTS_URL, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data.events) ? data.events : [];
  } catch (error) {
    console.error('Failed to load dynamic events:', error);
    return [];
  }
}