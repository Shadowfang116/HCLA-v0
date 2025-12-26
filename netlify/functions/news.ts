interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
}

interface NewsResponse {
  items: NewsItem[];
}

interface NetlifyEvent {
  httpMethod: string;
  path: string;
  queryStringParameters?: Record<string, string>;
  headers?: Record<string, string>;
  body?: string;
}

interface NetlifyContext {
  [key: string]: unknown;
}

interface NetlifyResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}

// Static news items (local data only - no external API calls)
const STATIC_NEWS_ITEMS: NewsItem[] = [
  { 
    title: 'Supreme Court of Pakistan issues landmark ruling on corporate governance', 
    link: '#' 
  },
  { 
    title: 'SECP updates regulatory framework for financial institutions', 
    link: '#' 
  },
  { 
    title: 'Constitutional amendments under review in National Assembly', 
    link: '#' 
  },
  { 
    title: 'Banking sector reforms continue with new compliance requirements', 
    link: '#' 
  },
  { 
    title: 'High Court delivers judgment on property rights case', 
    link: '#' 
  },
  { 
    title: 'Corporate law updates: New SECP guidelines for company registration', 
    link: '#' 
  },
  { 
    title: 'Litigation trends: Commercial dispute resolution in focus', 
    link: '#' 
  },
  { 
    title: 'Legal framework: Updates to banking and finance regulations', 
    link: '#' 
  },
];

export const handler = async (event: NetlifyEvent, context: NetlifyContext): Promise<NetlifyResponse> => {
  // Handle OPTIONS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Return static news items (always succeeds)
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Cache-Control': 'public, max-age=300',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ items: STATIC_NEWS_ITEMS } as NewsResponse),
  };
};

