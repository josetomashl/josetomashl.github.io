export type CertificationType = {
  name: string;
  year: number;
  link?: string;
  imagePath: string;
  relevance: 'high' | 'medium' | 'low';
};

export const CERTIFICATIONS: CertificationType[] = [
  {
    name: 'Programming with JavaScript',
    year: 2023,
    link: 'https://coursera.org/verify/UWKY2G93SKUZ',
    imagePath: '/images/certifications/coursera-javascript.webp',
    relevance: 'medium'
  },
  {
    name: 'React Basics',
    year: 2023,
    link: 'https://coursera.org/verify/URS93CBL2EKE',
    imagePath: '/images/certifications/coursera-react-basics.webp',
    relevance: 'medium'
  },
  {
    name: 'Git for Developers using Github',
    year: 2023,
    link: 'https://coursera.org/verify/ARRSKDMDBT4Z',
    imagePath: '/images/certifications/coursera-git-github.webp',
    relevance: 'low'
  },
  {
    name: 'Version Control',
    year: 2023,
    link: 'https://coursera.org/verify/QM9YRSS4MTWN',
    imagePath: '/images/certifications/coursera-version-control.webp',
    relevance: 'low'
  },
  {
    name: 'Introduction to Generative AI',
    year: 2023,
    link: 'https://coursera.org/verify/35QKTYS9GHNA',
    imagePath: '/images/certifications/coursera-genai.webp',
    relevance: 'low'
  },
  {
    name: 'Introduction to Databases for Back-End Development',
    year: 2023,
    link: 'https://coursera.org/verify/N4W46GLTE6XT',
    imagePath: '/images/certifications/coursera-db-intro.webp',
    relevance: 'low'
  },
  {
    name: 'TypeScript for Professionals - 2023 Edition',
    year: 2023,
    link: 'https://ude.my/UC-e6aaac40-1f0a-4dba-ab0f-9f288c0c8699',
    imagePath: '/images/certifications/udemy-typescript.webp',
    relevance: 'high'
  },
  {
    name: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
    year: 2023,
    link: 'https://ude.my/UC-5e44f01a-1f76-450f-a83f-510a966b38f2',
    imagePath: '/images/certifications/udemy-nestjs.webp',
    relevance: 'high'
  },
  {
    name: 'Unit Testing for Typescript & NodeJs Developers with Jest',
    year: 2023,
    link: 'https://ude.my/UC-6df9483c-0f0f-4ed5-9f75-a7396e02b59b',
    imagePath: '/images/certifications/udemy-jest.webp',
    relevance: 'high'
  },
  {
    name: 'Developing Back-End Apps with Node.js and Express',
    year: 2023,
    link: 'https://coursera.org/verify/XX352FXA4QK2',
    imagePath: '/images/certifications/coursera-expressjs.webp',
    relevance: 'high'
  },
  {
    name: 'React Native',
    year: 2023,
    link: 'https://coursera.org/verify/8J3RCWFJ4TE5',
    imagePath: '/images/certifications/coursera-react-native.webp',
    relevance: 'high'
  },
  {
    name: 'Java Intermediate',
    year: 2023,
    link: undefined,
    imagePath: '/images/certifications/sololearn-java.webp',
    relevance: 'medium'
  },
  {
    name: 'Angular',
    year: 2023,
    link: undefined,
    imagePath: '/images/certifications/sololearn-angular.webp',
    relevance: 'medium'
  }
];
