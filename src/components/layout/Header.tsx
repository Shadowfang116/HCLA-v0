import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/team', label: 'Team' },
  { href: '/laws', label: 'Laws' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldBlend = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    // Check initial scroll position
    setIsScrolled(window.scrollY > 8);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Recalculate scroll when route changes
    setIsScrolled(window.scrollY > 8);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        shouldBlend
          ? 'bg-transparent py-6'
          : isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-4'
          : 'bg-background/95 backdrop-blur-md py-4'
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Hameed Chohan Law Associates - Home"
          >
            <div className={cn(
              'w-10 h-10 flex items-center justify-center',
              shouldBlend ? 'bg-white/20 border border-white/30' : 'bg-primary'
            )}>
              <span className={cn(
                'font-bold text-lg',
                shouldBlend ? 'text-white' : 'text-primary-foreground'
              )}>H</span>
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                'text-sm font-semibold tracking-tight',
                shouldBlend ? 'text-white' : 'text-foreground'
              )}>
                Hameed Chohan
              </span>
              <span className={cn(
                'block text-xs uppercase tracking-widest',
                shouldBlend ? 'text-white/80' : 'text-muted-foreground'
              )}>
                Law Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 editorial-link',
                  shouldBlend
                    ? location.pathname === item.href
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                    : location.pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className={shouldBlend ? 'bg-white/10 border border-white/40 text-white hover:bg-white/15 hover:border-white/60' : ''}
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={cn('h-6 w-6', shouldBlend ? 'text-white' : 'text-foreground')} />
            ) : (
              <Menu className={cn('h-6 w-6', shouldBlend ? 'text-white' : 'text-foreground')} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          )}
        >
          <div className={cn(
            'flex flex-col gap-4 pb-6',
            shouldBlend ? 'bg-[#0f1f3a]/95 backdrop-blur-md rounded-lg p-4' : ''
          )}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-base font-medium py-2 transition-colors editorial-link',
                  shouldBlend
                    ? location.pathname === item.href
                      ? 'text-white'
                      : 'text-white/80'
                    : location.pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              variant="hero" 
              size="lg" 
              className={cn(
                'mt-4',
                shouldBlend ? 'bg-white/10 border border-white/40 text-white hover:bg-white/15 hover:border-white/60' : ''
              )}
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
