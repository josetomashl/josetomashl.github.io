type SocialType = {
  icon: string;
  name: string;
  link: string;
};
type LanguageType = {
  name: string;
  qualification: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
};

type MeType = {
  name: string;
  surname: string;
  email: string;
  avatar: string;
  phone: string;
  tel: string;
  title: string;
  social: SocialType[];
  languages: LanguageType[];
  location: { country: string; region: string; telCode: string };
};

const ME: MeType = {
  name: "José Tomás",
  surname: "Hernández López",
  email: "josetomas.hlopez@gmail.com",
  phone: "(+34) 601 28 60 00",
  tel: "601286000",
  title: "Software Engineer",
  avatar: "/images/avatar.svg",
  social: [
    {
      name: "GitHub",
      icon: "/icons/github.svg",
      link: "https://github.com/josetomashl",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/josetomas-hernandezlopez/",
    },
  ],
  languages: [
    { name: "English", qualification: "B2" },
    { name: "Spanish", qualification: "Native" },
  ],
  location: {
    country: "Spain",
    region: "Murcia",
    telCode: "+34",
  },
};

export default ME;
