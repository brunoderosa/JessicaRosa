
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  benefits?: string[];
}

export enum RoutePath {
  Home = '/',
  About = '/sobre',
  Services = '/servicos',
  Contact = '/contato'
}
