// SEO Metadata Helpers
import { firm } from '@/content/hcla';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const SITE_NAME = firm.name;
const DEFAULT_DESCRIPTION = 'Premier legal services in Pakistan with expertise in corporate law, litigation, intellectual property, and regulatory compliance.';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return `${SITE_NAME} | Premier Legal Services`;
  return `${pageTitle} | ${SITE_NAME}`;
}

export function generateMetaTags(meta: PageMeta) {
  return {
    title: generatePageTitle(meta.title),
    description: meta.description || DEFAULT_DESCRIPTION,
    keywords: meta.keywords?.join(', ') || 'law firm, legal services, Pakistan, corporate law, litigation',
    ogImage: meta.ogImage || DEFAULT_OG_IMAGE,
    canonical: meta.canonical,
  };
}

export const defaultMeta: PageMeta = {
  title: '',
  description: DEFAULT_DESCRIPTION,
  keywords: ['law firm', 'legal services', 'Pakistan', 'corporate law', 'litigation', 'HCLA'],
};

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: '',
    description: 'Hameed Chohan Law Associates - Premier legal services in Pakistan with decades of experience in corporate law, litigation, and specialized practice areas.',
    keywords: ['law firm Pakistan', 'corporate lawyers Lahore', 'litigation Pakistan', 'legal services'],
  },
  about: {
    title: 'About Us',
    description: `Learn about HCLA's history, values, and commitment to excellence in legal services since ${firm.established}.`,
    keywords: ['about HCLA', 'law firm history', 'legal expertise Pakistan'],
  },
  practiceAreas: {
    title: 'Practice Areas',
    description: 'Comprehensive legal services across corporate law, litigation, intellectual property, banking, and regulatory compliance.',
    keywords: ['practice areas', 'legal services', 'corporate law', 'litigation', 'IP law'],
  },
  team: {
    title: 'Our Team',
    description: 'Meet our experienced team of lawyers and professionals dedicated to providing exceptional legal services.',
    keywords: ['lawyers Pakistan', 'legal team', 'attorneys Lahore'],
  },
  insights: {
    title: 'Insights & Updates',
    description: 'Stay informed with our latest legal insights, firm news, and Pakistan legal updates.',
    keywords: ['legal insights', 'Pakistan law updates', 'legal news'],
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with HCLA for a consultation. Located in Lahore with services across Pakistan.',
    keywords: ['contact law firm', 'legal consultation', 'lawyers Lahore'],
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'HCLA\'s privacy policy and data protection practices.',
  },
  terms: {
    title: 'Terms of Service',
    description: 'Terms of service for HCLA website and legal services.',
  },
  disclaimer: {
    title: 'Legal Disclaimer',
    description: 'Legal disclaimers and limitations for HCLA website content.',
  },
};
