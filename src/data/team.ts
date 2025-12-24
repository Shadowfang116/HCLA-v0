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
    name: 'Hameed Chohan',
    title: 'Founder & Managing Partner',
    role: 'partner',
    category: 'lawyers',
    image: '/placeholder.svg',
    shortBio: 'With over 30 years of experience, Mr. Chohan has established HCLA as one of Pakistan\'s leading law firms.',
    fullBio: 'Hameed Chohan founded HCLA in 1995 with a vision to provide world-class legal services in Pakistan. Over three decades, he has built a reputation for excellence in corporate law and dispute resolution. His practice spans complex commercial transactions, high-stakes litigation, and advisory work for multinational corporations.\n\nMr. Chohan has been recognized by leading legal directories and has received numerous accolades for his contributions to the legal profession. He regularly speaks at conferences and has authored several publications on Pakistani commercial law.',
    practiceAreas: ['Corporate Law', 'Litigation & Dispute Resolution', 'Banking & Finance'],
    education: [
      { degree: 'LL.M.', institution: 'Harvard Law School', year: '1992' },
      { degree: 'LL.B.', institution: 'University of Punjab', year: '1988' },
      { degree: 'B.A. (Hons)', institution: 'Government College Lahore', year: '1985' },
    ],
    admissions: [
      'Supreme Court of Pakistan',
      'Lahore High Court',
      'Punjab Bar Council',
    ],
    languages: ['English', 'Urdu', 'Punjabi'],
    email: 'hameed.chohan@hcla.pk',
    phone: '+92-42-1234567',
    linkedIn: 'https://linkedin.com/in/hameedchohan',
  },
  {
    slug: 'sarah-ahmad',
    name: 'Sarah Ahmad',
    title: 'Senior Partner',
    role: 'partner',
    category: 'lawyers',
    image: '/placeholder.svg',
    shortBio: 'Sarah leads our intellectual property and technology practice with expertise in IP protection and tech transactions.',
    fullBio: 'Sarah Ahmad joined HCLA in 2005 and became partner in 2012. She heads the firm\'s Intellectual Property and Technology practice, advising clients on IP portfolio management, technology licensing, and data protection compliance.\n\nSarah has particular expertise in trademark prosecution, IP enforcement, and technology transactions. She has represented leading technology companies, pharmaceutical manufacturers, and creative industries clients.',
    practiceAreas: ['Intellectual Property', 'Regulatory & Compliance', 'Corporate Law'],
    education: [
      { degree: 'LL.M. (IP Law)', institution: 'University of London', year: '2004' },
      { degree: 'LL.B.', institution: 'LUMS', year: '2002' },
    ],
    admissions: [
      'Lahore High Court',
      'Punjab Bar Council',
    ],
    languages: ['English', 'Urdu'],
    email: 'sarah.ahmad@hcla.pk',
    linkedIn: 'https://linkedin.com/in/sarahchohan',
  },
  {
    slug: 'ali-hassan',
    name: 'Ali Hassan',
    title: 'Partner',
    role: 'partner',
    category: 'lawyers',
    image: '/placeholder.svg',
    shortBio: 'Ali specializes in banking, finance, and project finance transactions across various sectors.',
    fullBio: 'Ali Hassan is a partner in HCLA\'s Banking and Finance practice. He advises banks, financial institutions, and corporate borrowers on a wide range of financing transactions, including project finance, Islamic finance, and debt restructuring.\n\nAli has extensive experience in power sector financing and has advised on several major infrastructure projects. He is recognized for his practical approach and deep understanding of regulatory requirements.',
    practiceAreas: ['Banking & Finance', 'Corporate Law', 'Real Estate & Construction'],
    education: [
      { degree: 'LL.M.', institution: 'Columbia Law School', year: '2008' },
      { degree: 'LL.B.', institution: 'University of Karachi', year: '2005' },
    ],
    admissions: [
      'Sindh High Court',
      'Sindh Bar Council',
    ],
    languages: ['English', 'Urdu', 'Sindhi'],
    email: 'ali.hassan@hcla.pk',
    linkedIn: 'https://linkedin.com/in/alihassan',
  },
  {
    slug: 'fatima-khan',
    name: 'Fatima Khan',
    title: 'Senior Associate',
    role: 'associate',
    category: 'lawyers',
    image: '/placeholder.svg',
    shortBio: 'Fatima focuses on commercial litigation and arbitration, with experience in complex dispute resolution.',
    fullBio: 'Fatima Khan is a senior associate in the Litigation and Dispute Resolution practice. She represents clients in commercial disputes before various courts and tribunals, with particular focus on contractual disputes, banking litigation, and arbitration.\n\nFatima has been involved in several high-profile cases and is known for her meticulous preparation and effective courtroom advocacy.',
    practiceAreas: ['Litigation & Dispute Resolution', 'Banking & Finance'],
    education: [
      { degree: 'LL.B.', institution: 'LUMS', year: '2015' },
      { degree: 'B.Sc. Economics', institution: 'LUMS', year: '2013' },
    ],
    admissions: [
      'Lahore High Court',
      'Punjab Bar Council',
    ],
    languages: ['English', 'Urdu'],
    email: 'fatima.khan@hcla.pk',
  },
  {
    slug: 'office-manager',
    name: 'Ayesha Malik',
    title: 'Office Manager',
    role: 'admin',
    category: 'admin',
    image: '/placeholder.svg',
    shortBio: 'Ayesha manages the firm\'s administrative operations and client services.',
    fullBio: 'Ayesha Malik has been with HCLA for over 15 years, managing the firm\'s administrative operations. She ensures smooth client service delivery and coordinates firm-wide activities.',
    practiceAreas: [],
    education: [
      { degree: 'MBA', institution: 'LUMS', year: '2008' },
    ],
    admissions: [],
    languages: ['English', 'Urdu'],
    email: 'ayesha.malik@hcla.pk',
    phone: '+92-42-1234568',
  },
];

export const teamCategories = [
  { value: 'all', label: 'All Team' },
  { value: 'lawyers', label: 'Lawyers' },
  { value: 'admin', label: 'Administration' },
] as const;
