export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  benefits?: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  instagram: string;
  location: string;
  cta: string;
  googleMapsReviewUrl: string;
}

export enum RoutePath {
  Home = '/',
  About = '/about',  // Inglês ou '/sobre' consistente?
  Services = '/services',
  Contact = '/contact',
}
