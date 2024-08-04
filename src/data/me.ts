type Social = {
  icon: string;
  name: string;
  link: string;
};
type Language = {
  name: string;
  qualification: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Native";
};

export type Me = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  title: string;
  social: Social[];
  languages: Language[];
  location: { country: string; region: string };
};

export default {
  name: "José Tomás",
  surname: "Hernández López",
  email: "josetomas.hlopez@gmail.com",
  phone: "+34 601 28 60 00",
  title: "Software Engineer",
  social: [
    {
      name: "GitHub",
      icon: "",
      link: "",
    },
    {
      name: "LinkedIn",
      icon: "",
      link: "",
    },
    {
      name: "GitHub",
      icon: "",
      link: "",
    },
  ],
  languages: [
    { name: "English", qualification: "B2" },
    { name: "Spanish", qualification: "Native" },
  ],
  location: {
    country: "Spain",
    region: "Murcia",
  },
} as Me;
