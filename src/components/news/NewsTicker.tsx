/**
 * NewsTicker Component
 * 
 * Dev Instructions:
 * - For live-updating news in dev, use: npx netlify dev --port 8080
 * - If using npm run dev (Vite only), function won't exist; ticker will show fallback
 */

import { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
}

interface NewsResponse {
  items: NewsItem[];
}

const CACHE_KEY = 'hcla_news_ticker';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

const FALLBACK_HEADLINES: NewsItem[] = [
  { title: 'Supreme Court of Pakistan issues landmark ruling on corporate governance', link: '#' },
  { title: 'SECP updates regulatory framework for financial institutions', link: '#' },
  { title: 'Constitutional amendments under review in National Assembly', link: '#' },
  { title: 'Banking sector reforms continue with new compliance requirements', link: '#' },
  { title: 'High Court delivers judgment on property rights case', link: '#' },
];

// Detect if we're running under Netlify dev (function available)
// In plain Vite dev, we skip the fetch to avoid 404 spam
function isNetlifyDev(): boolean {
  // Check if we're likely in Netlify dev environment
  // Netlify dev typically runs on port 8888 or 8080 with specific headers
  if (typeof window === 'undefined') return false;
  
  // Simple heuristic: if we're on localhost with common Netlify dev ports
  const hostname = window.location.hostname;
  const port = window.location.port;
  return hostname === 'localhost' && (port === '8888' || port === '8080');
}

async function fetchNews(): Promise<NewsItem[]> {
  // Helper to get cached data
  const getCachedData = (): NewsItem[] | null => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION && Array.isArray(data) && data.length > 0) {
          return data;
        }
      } catch (e) {
        // Invalid cache
      }
    }
    return null;
  };

  try {
    // Check cache first
    const cachedData = getCachedData();
    if (cachedData) {
      return cachedData;
    }

    // Only attempt Netlify function fetch if we're likely in Netlify dev
    // This prevents 404 spam in plain Vite dev mode
    if (isNetlifyDev()) {
      const functionUrl = '/.netlify/functions/news';
      
      try {
        const response = await fetch(functionUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        // Handle 404 gracefully (function doesn't exist)
        if (response.status === 404) {
          // Fall through to cache/fallback
        } else if (response.ok) {
          const data: NewsResponse = await response.json();
          const items = data.items || [];

          if (items.length > 0) {
            // Cache the results
            try {
              localStorage.setItem(CACHE_KEY, JSON.stringify({
                data: items,
                timestamp: Date.now(),
              }));
            } catch (e) {
              // localStorage might be full or unavailable
            }
            return items;
          }
        }
      } catch (networkError) {
        // Network error - fall through to cache/fallback
        // Don't log to console to avoid spam
      }
    }

    // Fallback: use cache or static headlines
    const cachedData2 = getCachedData();
    if (cachedData2) {
      return cachedData2;
    }
    return FALLBACK_HEADLINES;
  } catch (error) {
    // Silently fall back to cached or default headlines
    const cachedData3 = getCachedData();
    if (cachedData3) {
      return cachedData3;
    }
    return FALLBACK_HEADLINES;
  }
}

export function NewsTicker() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>(FALLBACK_HEADLINES);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    fetchNews().then(setNewsItems);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedItems = [...newsItems, ...newsItems];

  return (
    <>
      <style>{`
        @keyframes newsTickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .news-ticker-scroll {
          animation: newsTickerScroll 70s linear infinite;
        }
        .news-ticker-paused {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .news-ticker-scroll {
            animation: none !important;
          }
        }
      `}</style>
      <div
        className="relative h-12 bg-muted border-b border-border overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {prefersReducedMotion ? (
          // Static wrapped list for reduced motion
          <div className="flex flex-wrap items-center gap-4 px-4 h-full">
            {newsItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        ) : (
          // Scrolling ticker
          <div
            ref={containerRef}
            className={`flex items-center gap-8 whitespace-nowrap h-full news-ticker-scroll ${isPaused ? 'news-ticker-paused' : ''}`}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="flex items-center gap-8 flex-shrink-0">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={0}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => {
                    // Small delay to allow focus to move to another link
                    setTimeout(() => {
                      if (!document.activeElement?.closest('.news-ticker-scroll')) {
                        setIsPaused(false);
                      }
                    }, 100);
                  }}
                >
                  {item.title}
                </a>
                <span className="text-muted-foreground/30">•</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

