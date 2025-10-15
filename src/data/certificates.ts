export type CertificationType = {
  name: string;
  year: number;
  link: string;
  imagePath: string;
};

export const CERTIFICATIONS: CertificationType[] = [
  {
    name: 'Google IT Support Professional Certificate',
    year: 2023,
    link: 'https://www.credly.com/badges/7f6f2f5e-6d3a-4e1c-9a8b-4d1b1c3f4e5f/public_url',
    imagePath: '/images/certificates/google-it-support.webp'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    year: 2024,
    link: 'https://www.credly.com/badges/12345678-abcd-efgh-ijkl-9876543210ab/public_url',
    imagePath: '/images/certificates/aws-cloud-practitioner.webp'
  },
  {
    name: 'AWS Certified Cloud Practitioner 2',
    year: 2024,
    link: 'https://www.credly.com/badges/12345678-abcd-efgh-ijkl-9876543210a1/public_url',
    imagePath: '/images/certificates/aws-cloud-practitioner.webp'
  },
  {
    name: 'AWS Certified Cloud Practitioner 3',
    year: 2024,
    link: 'https://www.credly.com/badges/12345678-abcd-efgh-ijkl-9876543210ac/public_url',
    imagePath: '/images/certificates/aws-cloud-practitioner.webp'
  }
];
