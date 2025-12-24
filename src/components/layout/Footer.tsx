import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  practice: [
    { href: '/practice-areas/corporate-law', label: 'Corporate Law' },
    { href: '/practice-areas/litigation-dispute-resolution', label: 'Litigation' },
    { href: '/practice-areas/intellectual-property', label: 'Intellectual Property' },
    { href: '/practice-areas/banking-finance', label: 'Banking & Finance' },
  ],
  firm: [
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">H</span>
                </div>
                <div>
                  <span className="text-sm font-semibold tracking-tight">
                    Hameed Chohan
                  </span>
                  <span className="block text-xs opacity-70 uppercase tracking-widest">
                    Law Associates
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Premier legal services in Pakistan since 1995. We combine deep expertise
              with practical solutions for complex legal challenges.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/hcla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              The Firm
            </h4>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@hcla.pk"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-start gap-3"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>info@hcla.pk</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+924212345678"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-start gap-3"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+92 42 1234 5678</span>
                </a>
              </li>
              <li>
                <div className="text-sm opacity-80 flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Legal District<br />
                    Gulberg III, Lahore<br />
                    Punjab, Pakistan
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-60">
              {currentYear} Hameed Chohan Law Associates. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
