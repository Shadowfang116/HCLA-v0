import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { fetchFeedItems, formatFeedDate, type FeedItem } from '@/lib/rss';
import { ExternalLink, FileText, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';

const insightsPosts = [
  {
    id: '1',
    title: 'Understanding the New SECP Corporate Governance Framework',
    excerpt: 'An analysis of the recently introduced corporate governance requirements and their implications for listed companies.',
    date: new Date('2024-12-15'),
    author: 'Sarah Ahmad',
    category: 'Corporate',
  },
  {
    id: '2',
    title: 'Key Considerations for Cross-Border M&A in Pakistan',
    excerpt: 'Essential factors to consider when structuring mergers and acquisitions involving foreign investors.',
    date: new Date('2024-12-01'),
    author: 'Ali Hassan',
    category: 'M&A',
  },
  {
    id: '3',
    title: 'Intellectual Property Protection Strategies for Tech Startups',
    excerpt: 'How emerging technology companies can protect their innovations in Pakistan\'s evolving IP landscape.',
    date: new Date('2024-11-20'),
    author: 'Sarah Ahmad',
    category: 'IP',
  },
];

const Insights = () => {
  const [activeTab, setActiveTab] = useState<'insights' | 'updates'>('insights');
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedItems()
      .then(setFeedItems)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container-wide">
          <GsapReveal>
            <p className="text-caption mb-4">Knowledge</p>
            <h1 className="max-w-3xl mb-6">Insights & Updates</h1>
            <div className="w-24 h-0.5 bg-accent mb-8" />
            <p className="text-subhead max-w-2xl">
              Stay informed with our legal analysis, firm news, and curated 
              updates on Pakistan's legal and business landscape.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Tabs */}
      <Section variant="muted" className="py-8">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('insights')}
            className={cn(
              'flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors',
              activeTab === 'insights'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:text-foreground border border-border'
            )}
          >
            <FileText className="h-4 w-4" />
            Firm Insights
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={cn(
              'flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors',
              activeTab === 'updates'
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-muted-foreground hover:text-foreground border border-border'
            )}
          >
            <Newspaper className="h-4 w-4" />
            Pakistan Updates
          </button>
        </div>
      </Section>

      {/* Content */}
      <Section variant="default">
        {activeTab === 'insights' ? (
          <GsapStagger className="space-y-8" key="insights">
            {insightsPosts.map((post) => (
              <article
                key={post.id}
                className="group block p-8 bg-card border border-border hover:border-accent hover:shadow-card transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Tag variant="outline" size="sm">{post.category}</Tag>
                    <span className="text-sm text-muted-foreground">
                      {formatFeedDate(post.date)}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    By {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </article>
            ))}
          </GsapStagger>
        ) : (
          <>
            {loading ? (
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-24 bg-muted animate-pulse rounded" />
                ))}
              </div>
            ) : (
              <GsapStagger className="space-y-4" key="updates">
                {feedItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-card border border-border hover:border-accent hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Tag variant={item.category} size="sm">
                            {item.category}
                          </Tag>
                          <span className="text-xs text-muted-foreground">
                            {formatFeedDate(item.publishedAt)}
                          </span>
                        </div>
                        <h4 className="text-base font-medium group-hover:text-accent transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Source: {item.source}
                        </p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </a>
                ))}
              </GsapStagger>
            )}
          </>
        )}
      </Section>
    </Layout>
  );
};

export default Insights;
