// RSS Feed Aggregator for Pakistan Legal Updates
export interface FeedItem {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt: Date;
  category: 'legal' | 'business' | 'regulatory' | 'general';
}

export interface FeedSource {
  name: string;
  url: string;
  category: FeedItem['category'];
}

// Placeholder feed sources - replace with actual RSS feed URLs
export const feedSources: FeedSource[] = [
  {
    name: 'Dawn News - Business',
    url: 'https://www.dawn.com/feeds/business',
    category: 'business',
  },
  {
    name: 'The News - Legal',
    url: 'https://www.thenews.com.pk/rss/legal',
    category: 'legal',
  },
  {
    name: 'SECP Updates',
    url: 'https://www.secp.gov.pk/rss',
    category: 'regulatory',
  },
  {
    name: 'Express Tribune - Business',
    url: 'https://tribune.com.pk/feed/business',
    category: 'business',
  },
];

// Simulated feed data for development
const mockFeedItems: FeedItem[] = [
  {
    id: '1',
    title: 'SECP Introduces New Corporate Governance Framework for Listed Companies',
    source: 'SECP Updates',
    url: 'https://www.secp.gov.pk/news/corporate-governance-2024',
    publishedAt: new Date('2024-12-20'),
    category: 'regulatory',
  },
  {
    id: '2',
    title: 'Supreme Court Ruling Sets Precedent for Commercial Contract Disputes',
    source: 'Dawn News - Business',
    url: 'https://www.dawn.com/news/supreme-court-ruling',
    publishedAt: new Date('2024-12-19'),
    category: 'legal',
  },
  {
    id: '3',
    title: 'Pakistan Stock Exchange Achieves Record Trading Volume',
    source: 'Express Tribune - Business',
    url: 'https://tribune.com.pk/story/psx-record',
    publishedAt: new Date('2024-12-18'),
    category: 'business',
  },
  {
    id: '4',
    title: 'SBP Announces New Guidelines for Digital Banking Licenses',
    source: 'The News - Legal',
    url: 'https://www.thenews.com.pk/sbp-digital-banking',
    publishedAt: new Date('2024-12-17'),
    category: 'regulatory',
  },
  {
    id: '5',
    title: 'Foreign Investment in Technology Sector Reaches New Heights',
    source: 'Dawn News - Business',
    url: 'https://www.dawn.com/news/foreign-investment-tech',
    publishedAt: new Date('2024-12-16'),
    category: 'business',
  },
  {
    id: '6',
    title: 'Lahore High Court Issues Landmark Intellectual Property Decision',
    source: 'The News - Legal',
    url: 'https://www.thenews.com.pk/lhc-ip-decision',
    publishedAt: new Date('2024-12-15'),
    category: 'legal',
  },
  {
    id: '7',
    title: 'Competition Commission Approves Major Merger in Telecom Sector',
    source: 'SECP Updates',
    url: 'https://www.secp.gov.pk/news/ccp-merger-approval',
    publishedAt: new Date('2024-12-14'),
    category: 'regulatory',
  },
  {
    id: '8',
    title: 'Pakistan Ranks Among Top Emerging Markets for 2025',
    source: 'Express Tribune - Business',
    url: 'https://tribune.com.pk/story/pakistan-emerging-markets',
    publishedAt: new Date('2024-12-13'),
    category: 'business',
  },
];

// Cache for feed items
let cachedItems: FeedItem[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

export async function fetchFeedItems(): Promise<FeedItem[]> {
  // Check cache
  if (cachedItems && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedItems;
  }

  try {
    // In production, this would fetch and parse actual RSS feeds
    // For now, return mock data with simulated delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    cachedItems = mockFeedItems;
    cacheTimestamp = Date.now();
    
    return cachedItems;
  } catch (error) {
    console.error('Error fetching feed items:', error);
    // Return cached items if available, otherwise empty array
    return cachedItems || [];
  }
}

export async function fetchFeedItemsByCategory(category?: FeedItem['category']): Promise<FeedItem[]> {
  const items = await fetchFeedItems();
  if (!category) return items;
  return items.filter(item => item.category === category);
}

export async function fetchLatestFeedItems(count: number = 5): Promise<FeedItem[]> {
  const items = await fetchFeedItems();
  return items
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, count);
}

export function formatFeedDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  });
}

export function getCategoryColor(category: FeedItem['category']): string {
  const colors: Record<FeedItem['category'], string> = {
    legal: 'bg-blue-100 text-blue-800',
    business: 'bg-green-100 text-green-800',
    regulatory: 'bg-amber-100 text-amber-800',
    general: 'bg-gray-100 text-gray-800',
  };
  return colors[category];
}
