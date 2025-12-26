// Team Members Data
export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  role: 'partner' | 'associate' | 'counsel' | 'admin';
  category: 'lawyers' | 'admin';
  image: string;
  shortBio: string;
  fullBio: string;
  practiceAreas: string[];
  education: { degree: string; institution: string; year: string }[];
  admissions: string[];
  languages: string[];
  email: string;
  phone?: string;
  linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'hameed-chohan',
    name: 'Abdul Hameed Chohan',
    title: 'Founder / Senior Advocate',
    role: 'partner',
    category: 'lawyers',
    image: '/team/abdul-hameed-chohan.jpg',
    shortBio: 'Advocate Supreme Court of Pakistan with more than 30 years of distinguished practice in banking and corporate litigation.',
    fullBio: 'Advocate Abdul Hameed Chohan is the founder of Hameed Chohan Law Associates and one of Pakistan\'s most experienced banking and corporate litigation specialists. With more than 30 years of distinguished practice, he has appeared before the Supreme Court, High Courts, Banking Courts, Insurance Tribunals, and regulatory forums nationwide. His career is defined by strategic advocacy, exceptional courtroom results, and a strong reputation for professional excellence.\n\nHe has represented some of Pakistan\'s largest Banks, Modarabas, Leasing Companies, real estate developers, industrial groups, and corporate entities in high-value recovery suits, commercial disputes, and financial litigation. His expertise extends beyond litigation to complex legal documentation, Islamic and conventional financing agreements, mortgages, guarantees, restructuring arrangements, and regulatory compliance for financial institutions and businesses.\n\nMany of his cases before the Supreme Court of Pakistan, Lahore High Court, Islamabad High Court, Peshawar High Court, and Sindh High Court have been published in recognised law journals, reflecting his contribution to Pakistan\'s legal jurisprudence. His reported judgments include citations in SCMR, PLD, CLD, P.Cr.L.J, CLC, MLD, and PLJ.\n\nHe has also conducted legal audits, issued expert legal opinions, and advised financial institutions on property acquisition, risk management, and regulatory matters.\n\nUnder his leadership, Hameed Chohan Law Associates has grown into a nationwide full-service legal practice with offices and associate networks in Lahore, Karachi, Islamabad, Multan, and Faisalabad. The firm represents a diverse portfolio of local and multinational businesses, public and private sector organisations, and major industry groups.\n\nAdvocate Chohan\'s career is marked by professionalism, integrity, and a results-oriented legal philosophy. His standing as a respected Supreme Court lawyer continues to define the strength, credibility, and success of the firm.',
    practiceAreas: ['Banking & Finance', 'Corporate Law', 'Litigation & Dispute Resolution', 'Commercial Litigation', 'Regulatory Compliance'],
    education: [],
    admissions: [
      'Supreme Court of Pakistan',
      'Lahore High Court',
      'Islamabad High Court',
      'Peshawar High Court',
      'Sindh High Court',
    ],
    languages: ['English', 'Urdu', 'Punjabi'],
    email: 'hameed.chohan@hcla.pk',
    phone: '',
    linkedIn: '',
  },
  {
    slug: 'sohail-khurshid',
    name: 'Ch. Sohail Khurshid',
    title: 'Advocate High Court',
    role: 'counsel',
    category: 'lawyers',
    image: '/team/sohail-khurshid.jpg',
    shortBio: 'Experienced Advocate of the High Court with over 17 years of professional practice in civil, banking, corporate, revenue, NAB, and banking offences matters.',
    fullBio: 'Ch. Sohail Khurshid is an experienced Advocate of the High Court with over 17 years of professional practice in civil, banking, corporate, revenue, NAB, and banking offences matters. He has appeared before various courts and tribunals across Pakistan, representing clients in complex litigation and providing legal advisory services on corporate and commercial matters.\n\nHe has extensive expertise in drafting legal documents, preparing financing and commercial agreements, and issuing legal opinions related to revenue records, housing societies, cooperative schemes, and real estate projects. His work also includes documentation for corporate transactions, financial instruments, and property matters.\n\nSeveral of his cases have been reported in reputable law journals, reflecting his contribution to legal jurisprudence. His reported judgments include citations in CLD, PLD, and Lahore High Court judgments.\n\nCh. Sohail Khurshid is an active member of the Lahore High Court Bar Association and District Bar Association Jhelum. He is known for professional diligence, strong litigation skills, and a results-driven approach to client matters.',
    practiceAreas: ['Civil Law', 'Banking Law', 'Corporate Law', 'Revenue Law', 'NAB Matters', 'Real Estate Law'],
    education: [],
    admissions: [
      'Lahore High Court',
      'Lahore High Court Bar Association',
      'District Bar Association Jhelum',
    ],
    languages: ['English', 'Urdu', 'Punjabi'],
    email: 'sohail.khurshid@hcla.pk',
  },
  {
    slug: 'arooba-hameed',
    name: 'Arooba Hameed',
    title: 'Associate Advocate',
    role: 'associate',
    category: 'lawyers',
    image: '/team/arooba-hameed.jpg',
    shortBio: 'Dedicated associate advocate supporting complex legal matters and client representation.',
    fullBio: 'Arooba Hameed is an associate advocate at HCLA, providing support on a wide range of legal matters. She assists with research, document preparation, and client representation across various practice areas. Her commitment to excellence and attention to detail make her a valuable member of the team.',
    practiceAreas: ['Corporate Law', 'Litigation & Dispute Resolution'],
    education: [
      { degree: 'LL.B.', institution: 'University of Punjab', year: '2018' },
    ],
    admissions: [
      'Lahore High Court',
      'Punjab Bar Council',
    ],
    languages: ['English', 'Urdu'],
    email: 'arooba.hameed@hcla.pk',
  },
  {
    slug: 'muhammad-riffat-pasha',
    name: 'Muhammad Riffat Pasha',
    title: 'Advocate',
    role: 'associate',
    category: 'lawyers',
    image: '/team/muhammad-riffat-pasha.jpeg',
    shortBio: 'Dedicated advocate providing legal representation and support across various practice areas.',
    fullBio: 'Muhammad Riffat Pasha is an advocate at HCLA, providing legal representation and support to clients. He works on a diverse range of matters including civil litigation, commercial disputes, and regulatory compliance. His commitment to client service and legal excellence contributes to the firm\'s strong reputation.',
    practiceAreas: ['Litigation & Dispute Resolution', 'Corporate Law'],
    education: [
      { degree: 'LL.B.', institution: 'University of Punjab', year: '2015' },
    ],
    admissions: [
      'Lahore High Court',
      'Punjab Bar Council',
    ],
    languages: ['English', 'Urdu'],
    email: 'riffat.pasha@hcla.pk',
  },
  {
    slug: 'malik-ibrar-fayyaz',
    name: 'Malik Ibrar Fayyaz',
    title: 'Advocate High Court',
    role: 'counsel',
    category: 'lawyers',
    image: '/team/malik-ibrar-fayyaz.jpg',
    shortBio: 'TODO: Confirm designation. Profile document indicates administrative/stenography role. Please reconcile with title "Advocate High Court".',
    fullBio: 'Malik Ibrar Fayyaz brings seven years of professional experience in stenography, office administration, and legal documentation. He is skilled in managing day-to-day office operations, preparing official correspondence, maintaining organized records, and supporting legal teams with accuracy and efficiency.\n\nKnown for his attention to detail and strong command over administrative procedures, he plays a key role in ensuring smooth office workflow, document handling, filing systems, and coordination between departments. His professional conduct, reliability, and commitment to timely execution make him an integral part of the Firm\'s administrative structure.\n\nTODO: Profile document indicates administrative role, but roster lists as "Advocate High Court". Please confirm correct designation and update bio accordingly.',
    practiceAreas: [],
    education: [],
    admissions: [],
    languages: [],
    email: 'ibrar.fayyaz@hcla.pk',
  },
  {
    slug: 'muhammad-nawaz',
    name: 'Muhammad Nawaz',
    title: 'Senior Clerk',
    role: 'admin',
    category: 'admin',
    image: '/team/muhammad-nawaz.jpeg',
    shortBio: 'Senior Clerk with 30 years of professional experience in handling court matters, office administration, and legal documentation.',
    fullBio: 'Muhammad Nawaz has 30 years of professional experience in handling court matters, office administration, and legal documentation. He is skilled in managing day-to-day litigation office operations, preparing official court correspondence, maintaining organized records, and supporting legal teams with accuracy and efficiency.\n\nKnown for his attention to detail and strong command over court procedures, he plays a vital role in ensuring smooth court workflow, file handling, filing systems, and coordination with court administrative offices. His professional conduct, reliability, and commitment to timely execution make him an integral part of the Firm\'s administrative structure.',
    practiceAreas: [],
    education: [],
    admissions: [],
    languages: ['English', 'Urdu', 'Punjabi'],
    email: 'muhammad.nawaz@hcla.pk',
    phone: '',
  },
  {
    slug: 'ameen-ur-rehman',
    name: 'Ameen-ur-Rehman',
    title: 'Advocate High Court',
    role: 'counsel',
    category: 'lawyers',
    image: '/team/ameen-ur-rehman.jpg',
    shortBio: '',
    fullBio: '',
    practiceAreas: ['Corporate Law', 'Litigation & Dispute Resolution'],
    education: [],
    admissions: [],
    languages: [],
    email: '',
  },
];

export const teamCategories = [
  { value: 'all', label: 'All Team' },
  { value: 'lawyers', label: 'Lawyers' },
  { value: 'admin', label: 'Administration' },
] as const;
