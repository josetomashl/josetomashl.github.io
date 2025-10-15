type SocialType = {
  name: string;
  link: string;
};
export type LanguageType = {
  name: string;
  qualification: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native';
  year?: number;
  issuer?: string;
};

type MeType = {
  email: string;
  social: SocialType[];
  languages: LanguageType[];
};

export const ME: MeType = {
  email: 'josetomas.hlopez@gmail.com',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/josetomashl'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/josetomas-hernandezlopez/'
    }
  ],
  languages: [
    { name: 'English', qualification: 'B2', year: 2020, issuer: 'Cambridge' },
    { name: 'Spanish', qualification: 'Native' }
  ]
};
