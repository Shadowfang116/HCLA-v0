export type LawCategory = 'Corporate' | 'Banking' | 'Litigation' | 'Property' | 'Labor' | 'Tax';

export interface Law {
  id: string;
  title: string;
  year: number;
  category: LawCategory;
  sourceUrl: string;
}

export const lawLibrary: Law[] = [
  {
    id: 'companies-act-2017',
    title: 'Companies Act, 2017',
    year: 2017,
    category: 'Corporate',
    sourceUrl: 'https://www.secp.gov.pk/document/companies-act-2017/',
  },
  {
    id: 'code-of-civil-procedure-1908',
    title: 'Code of Civil Procedure, 1908',
    year: 1908,
    category: 'Litigation',
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1f4oUY2FqaJw1f4o',
  },
  {
    id: 'constitution-1973',
    title: 'Constitution of the Islamic Republic of Pakistan, 1973',
    year: 1973,
    category: 'Corporate',
    sourceUrl: 'https://www.na.gov.pk/uploads/documents/1333523681_951.pdf',
  },
  {
    id: 'financial-institutions-recovery-2001',
    title: 'Financial Institutions (Recovery of Finances) Ordinance, 2001',
    year: 2001,
    category: 'Banking',
    sourceUrl: 'https://www.sbp.org.pk/ecodocs/ordinances/FinancialInstitutionsRecoveryOrdinance2001.pdf',
  },
  {
    id: 'financial-institutions-secured-2016',
    title: 'Financial Institutions (Secured Transactions) Act, 2016',
    year: 2016,
    category: 'Banking',
    sourceUrl: 'https://www.sbp.org.pk/ecodocs/acts/FinancialInstitutionsSecuredTransactionsAct2016.pdf',
  },
  {
    id: 'contract-act-1872',
    title: 'Contract Act, 1872',
    year: 1872,
    category: 'Corporate',
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1f4oUY2FqaJw1f4o',
  },
  {
    id: 'specific-relief-act-1877',
    title: 'Specific Relief Act, 1877',
    year: 1877,
    category: 'Litigation',
    sourceUrl: 'https://pakistancode.gov.pk/english/UY2FqaJw1f4oUY2FqaJw1f4o',
  },
  {
    id: 'punjab-land-revenue-act-1967',
    title: 'Punjab Land Revenue Act, 1967',
    year: 1967,
    category: 'Property',
    sourceUrl: 'https://punjablaws.gov.pk/laws/1.html',
  },
];

export const lawCategories: LawCategory[] = ['Corporate', 'Banking', 'Litigation', 'Property', 'Labor', 'Tax'];

