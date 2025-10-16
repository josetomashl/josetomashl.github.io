type ExperienceType = {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  employer: { name: string; link?: string; email?: string };
  skills: string[];
};

export const EXPERIENCES: ExperienceType[] = [
  {
    title: 'Frontend Software Engineer',
    description:
      'Led the architecture design and development of both client-facing and employees web applications built with React, Redux, and TypeScript. Focused on performance optimization, clean code, and best practices to ensure a scalable, maintainable, and high-quality codebase.\n\nAdditional development of enterprise side-apps using Next.js with SSR, and a React Native app with same capabilities as the web-app.',
    startDate: '2024/03',
    endDate: '2025/09',
    location: 'Murcia, España - (Hybrid)',
    employer: {
      name: 'Fiscoo Particulares SL',
      link: 'https://www.fiscoo.es/',
      email: 'info@fiscoo.es'
    },
    skills: [
      'Node.js.',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'React.js',
      'Redux',
      'React Native',
      'Git',
      'GitHub Actions',
      'Entorno Agile',
      'Jest',
      'Vite.js',
      'TailwindCSS',
      'Vitest',
      'React Testing Library'
    ]
  },
  {
    title: 'FullStack Software Engineer',
    description:
      'FullStack developer creating and maintaining large web applications as well as code generators to automate repetitive code creation and provide a faster way to develop robust and secure backend applications.',
    startDate: '2023/03',
    endDate: '2024/03',
    location: 'Murcia, España - (Hybrid)',
    employer: {
      name: 'Capgemini',
      link: 'https://www.capgemini.com/',
      email: 'rrhh.european.industrial.center.es@capgemini.com'
    },
    skills: [
      'Node.js.',
      'JavaScript',
      'TypeScript',
      'Express.js',
      'NestJS',
      'TypeORM',
      'Desarrollo de API',
      'ECMAScript',
      'MySQL',
      'Git',
      'GitLab',
      'GitHub',
      'Entorno Agile',
      'Angular',
      'Java',
      'Spring Boot'
    ]
  },
  {
    title: 'Software Developer',
    description:
      'Desarrollo front-end utilizando React.js, redux y react-router.\nDesarrollo back-end con NodeJS (Express.js), Typescript y MySQL.\nTécnicas de integración continua con Git y GitHub.\nFamiliarización con la metodología Scrum.',
    startDate: '2022/07',
    endDate: '2022/09',
    location: 'Cartagena, Murcia, España - (On-site)',
    employer: {
      name: 'Centro de Estudios NOVA SL'
    },
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'SQL',
      'TypeScript',
      'React.js',
      'Node.js',
      'MySQL',
      'Git',
      'GitHub',
      'Scrum',
      'WordPress',
      'Express.js'
    ]
  }
];
