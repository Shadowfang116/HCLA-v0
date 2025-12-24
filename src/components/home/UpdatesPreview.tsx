import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { GsapReveal, GsapStagger } from '@/components/animations';
import { fetchLatestFeedItems, formatFeedDate, type FeedItem } from '@/lib/rss';

export function UpdatesPreview() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestFeedItems(5)
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section variant="pattern">
      <GsapReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-caption mb-4">Stay Informed</p>
            <h2>Pakistan Updates</h2>
          </div>
          <Link
            to="/insights"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
          >
            View All Updates
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </GsapReveal>

      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-20 bg-muted animate-pulse rounded" />
          ))}
        </div>
      ) : (
        <GsapStagger className="space-y-4">
          {items.map((item) => (
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
                  <h4 className="text-base font-medium group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.source}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </GsapStagger>
      )}
    </Section>
  );
}
