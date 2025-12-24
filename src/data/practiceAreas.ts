// Practice Areas Data
export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: 'corporate' | 'litigation' | 'regulatory' | 'specialized';
  services: string[];
  typicalMatters: string[];
  faqs: { question: string; answer: string }[];
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription: 'Comprehensive corporate legal services for businesses of all sizes.',
    description: 'Our corporate practice provides end-to-end legal support for businesses, from formation through complex transactions. We advise on corporate governance, compliance, and strategic business decisions.',
    icon: 'Building2',
    category: 'corporate',
    services: [
      'Company Formation & Registration',
      'Corporate Governance',
      'Mergers & Acquisitions',
      'Joint Ventures',
      'Shareholder Agreements',
      'Corporate Restructuring',
    ],
    typicalMatters: [
      'Advised on PKR 500M acquisition in manufacturing sector',
      'Structured joint venture for multinational entry into Pakistan market',
      'Corporate restructuring for family-owned conglomerate',
    ],
    faqs: [
      {
        question: 'What is the process for company registration in Pakistan?',
        answer: 'Company registration involves name reservation, document preparation, filing with SECP, and obtaining necessary certificates. The process typically takes 2-3 weeks.',
      },
      {
        question: 'Do you handle cross-border transactions?',
        answer: 'Yes, we regularly advise on cross-border M&A, joint ventures, and foreign investment matters.',
      },
    ],
  },
  {
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    shortDescription: 'Strategic representation in courts and alternative dispute forums.',
    description: 'Our litigation team represents clients before all levels of Pakistani courts, tribunals, and arbitration panels. We combine aggressive advocacy with practical business sense.',
    icon: 'Scale',
    category: 'litigation',
    services: [
      'Civil & Commercial Litigation',
      'Constitutional Petitions',
      'Arbitration & Mediation',
      'Banking & Financial Disputes',
      'Property & Real Estate Disputes',
      'Employment Disputes',
    ],
    typicalMatters: [
      'Successfully defended major bank in PKR 1B loan recovery case',
      'Constitutional petition challenging regulatory overreach',
      'International arbitration under ICC Rules',
    ],
    faqs: [
      {
        question: 'How long do commercial cases typically take?',
        answer: 'Timeline varies by court and complexity. High Court cases may take 2-4 years, while arbitration can be completed in 12-18 months.',
      },
      {
        question: 'Do you handle arbitration matters?',
        answer: 'Yes, we represent clients in domestic and international arbitration under various institutional rules.',
      },
    ],
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription: 'Protection and enforcement of intellectual property rights.',
    description: 'We help clients protect their most valuable intangible assets through registration, licensing, and enforcement of intellectual property rights across Pakistan.',
    icon: 'Lightbulb',
    category: 'specialized',
    services: [
      'Trademark Registration & Prosecution',
      'Patent Applications',
      'Copyright Protection',
      'IP Licensing Agreements',
      'IP Enforcement & Litigation',
      'Trade Secret Protection',
    ],
    typicalMatters: [
      'Trademark portfolio management for multinational FMCG company',
      'Patent prosecution for pharmaceutical innovations',
      'IP enforcement against counterfeiters',
    ],
    faqs: [
      {
        question: 'How long does trademark registration take?',
        answer: 'Trademark registration in Pakistan typically takes 12-18 months if unopposed.',
      },
      {
        question: 'Can you help with international IP protection?',
        answer: 'Yes, we coordinate with our international network for multi-jurisdictional IP protection.',
      },
    ],
  },
  {
    slug: 'banking-finance',
    title: 'Banking & Finance',
    shortDescription: 'Legal support for financial institutions and transactions.',
    description: 'Our banking and finance practice advises lenders, borrowers, and financial institutions on all aspects of banking law, structured finance, and regulatory compliance.',
    icon: 'Landmark',
    category: 'corporate',
    services: [
      'Project Finance',
      'Syndicated Lending',
      'Islamic Finance',
      'Security Documentation',
      'Regulatory Compliance',
      'Debt Restructuring',
    ],
    typicalMatters: [
      'Advised on USD 200M project financing for power sector',
      'Structured Islamic finance facility for real estate development',
      'Regulatory advice for fintech startup',
    ],
    faqs: [
      {
        question: 'Do you advise on Islamic finance structures?',
        answer: 'Yes, we have extensive experience in Shariah-compliant financing structures including Murabaha, Ijara, and Sukuk.',
      },
      {
        question: 'Can you help with State Bank regulatory matters?',
        answer: 'We regularly advise on SBP regulations, licensing, and compliance matters.',
      },
    ],
  },
  {
    slug: 'real-estate-construction',
    title: 'Real Estate & Construction',
    shortDescription: 'Legal services for property transactions and development projects.',
    description: 'We provide comprehensive legal support for real estate transactions, development projects, and construction contracts, helping clients navigate complex property laws.',
    icon: 'Home',
    category: 'corporate',
    services: [
      'Property Acquisition & Due Diligence',
      'Development Agreements',
      'Construction Contracts',
      'Leasing & Licensing',
      'Property Disputes',
      'REIT Structuring',
    ],
    typicalMatters: [
      'Due diligence for major mixed-use development',
      'Construction contracts for infrastructure project',
      'Property dispute resolution for commercial complex',
    ],
    faqs: [
      {
        question: 'What due diligence is required for property purchase?',
        answer: 'We conduct title verification, encumbrance checks, regulatory compliance review, and physical inspection coordination.',
      },
      {
        question: 'Do you handle both residential and commercial matters?',
        answer: 'Yes, we advise on all types of real estate transactions and disputes.',
      },
    ],
  },
  {
    slug: 'regulatory-compliance',
    title: 'Regulatory & Compliance',
    shortDescription: 'Navigate complex regulatory requirements with confidence.',
    description: 'Our regulatory practice helps businesses understand and comply with the evolving landscape of Pakistani regulations, from sector-specific rules to general corporate compliance.',
    icon: 'Shield',
    category: 'regulatory',
    services: [
      'Regulatory Advisory',
      'License Applications',
      'Compliance Audits',
      'Anti-Money Laundering',
      'Data Protection',
      'Environmental Compliance',
    ],
    typicalMatters: [
      'Regulatory approval for telecom license',
      'AML/CFT compliance program implementation',
      'Environmental clearance for industrial project',
    ],
    faqs: [
      {
        question: 'Which regulatory bodies do you deal with?',
        answer: 'We regularly engage with SECP, SBP, PTA, NEPRA, OGRA, and various provincial authorities.',
      },
      {
        question: 'Can you help with ongoing compliance monitoring?',
        answer: 'Yes, we offer retainer arrangements for continuous compliance support and monitoring.',
      },
    ],
  },
];

export const practiceAreaCategories = [
  { value: 'all', label: 'All Areas' },
  { value: 'corporate', label: 'Corporate & Commercial' },
  { value: 'litigation', label: 'Litigation' },
  { value: 'regulatory', label: 'Regulatory' },
  { value: 'specialized', label: 'Specialized' },
] as const;
