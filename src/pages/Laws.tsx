import { useState, useMemo } from 'react';
import { Section } from '@/components/ui/Section';
import PageHero from '@/components/ui/PageHero';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { lawLibrary, lawCategories, type LawCategory } from '@/content/lawLibrary';
import { cn } from '@/lib/utils';

const Laws = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LawCategory | 'All'>('All');

  const filteredLaws = useMemo(() => {
    return lawLibrary.filter((law) => {
      const matchesSearch = law.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || law.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <PageHero
        overline="Legal Resources"
        title="Laws & Legal Framework"
        description="Reference library of Pakistani laws, statutes, and regulations."
      />

      {/* Filters */}
      <Section variant="muted" className="py-8">
        <div className="space-y-6">
          {/* Search */}
          <div className="max-w-md">
            <Input
              type="text"
              placeholder="Search laws by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              aria-label="Search laws"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
                className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                selectedCategory === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              )}
            >
              All
            </button>
            {lawCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:text-foreground border border-border'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Law Library */}
      <Section variant="default">
        {filteredLaws.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No laws found matching your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLaws.map((law) => (
              <div
                key={law.id}
                className="p-6 bg-card border border-border flex flex-col"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-foreground flex-1 editorial-link">
                      {law.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{law.year}</span>
                    <span className="px-2 py-1 bg-muted text-muted-foreground">
                      {law.category}
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={law.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Law
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
};

export default Laws;

