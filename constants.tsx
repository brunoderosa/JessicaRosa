import { Service } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ortopedica',
    title: 'Fisioterapia Ortopédica',
    description: 'Cuidar do sistema musculoesquelético, ajudando a recuperar movimentos e aliviar dores.',
    fullDescription: 'A fisioterapia ortopédica é uma especialidade voltada para cuidar do sistema musculoesquelético, ajudando pacientes a recuperar movimentos, aliviar dores e retomar qualidade de vida. Atuação voltada para o tratamento de dores de origem ortopédica.',
    image: 'https://i.postimg.cc/8CKCJjS1/fisioterapia-ortopedica.jpg',
    benefits: ['Tratamento de dores ortopédicas', 'Recuperação de movimentos', 'Melhora da qualidade de vida']
  },
  {
    id: 'geriatria',
    title: 'Fisioterapia em Geriatria',
    description: 'Cuidado focado na saúde do idoso, promovendo autonomia e prevenção de quedas.',
    fullDescription: 'A fisioterapia geriátrica é voltada para o cuidado da saúde de pessoas idosas, promovendo autonomia, prevenção de quedas e alívio de dores. Por meio de exercícios específicos, técnicas de fortalecimento e reeducação postural, ajuda a manter a mobilidade, preservar a independência e melhorar a qualidade de vida.',
    image: 'https://i.postimg.cc/qvc0ng2S/fisiogeri.jpg',
    benefits: ['Prevenção de quedas', 'Manutenção da autonomia', 'Fortalecimento muscular']
  },
  {
    id: 'pilates',
    title: 'Mat Pilates Domiciliar',
    description: 'Método original no solo focado em força, flexibilidade e consciência corporal.',
    fullDescription: 'O Mat Pilates é a forma original do método Pilates, realizada no solo com auxílio de um tapete, e tem como objetivo melhorar força, flexibilidade e consciência corporal. Ideal para quem busca condicionamento físico, prevenção de lesões e melhora da postura.',
    image: 'https://i.postimg.cc/pd62V4fK/matpila.png',
    benefits: ['Melhora da postura', 'Condicionamento físico', 'Prevenção de lesões']
  },
  {
    id: 'drenagem',
    title: 'Terapias Manuais – Drenagem Linfática',
    description: 'Técnica manual para eliminação de toxinas e redução de inchaços.',
    fullDescription: 'A drama linfática é uma técnica manual que estimula o sistema linfático, ajudando na eliminação de toxinas, redução de inchaços e melhora da circulação. Além de promover sensação de leveza, contribui para a recuperação pós-operatória e favorece a saúde da pele.',
    image: 'https://i.postimg.cc/7Ldkr74H/dre.png',
    benefits: ['Recuperação pós-operatória', 'Combate à retenção de líquidos', 'Melhora da circulação']
  },
  {
    id: 'massagem',
    title: 'Massagem Relaxante',
    description: 'Cuidado para corpo e mente, aliviando tensões e devolvendo energia.',
    fullDescription: 'A massagem relaxante é o cuidado que seu corpo e mente deservem. Alivia tensões, reduz o estresse e devolve energia para o seu dia. Ideal para quem busca um momento de reconexão e bem-estar profundo.',
    image: 'https://i.postimg.cc/pdGDWWcW/massa.jpg',
    benefits: ['Alívio de tensões musculares', 'Redução do estresse', 'Renovação de energias']
  }
];

export const STATS = [
  { label: 'Pacientes Satisfeitos', value: '450+' },
  { label: 'Sessões Realizadas', value: '3500+' },
  { label: 'Anos de Experiência', value: '6+' },
];

export const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    text: "O atendimento domiciliar da Jessica mudou minha rotina. Com a fisioterapia geriátrica, meu avô recuperou a confiança para caminhar e está muito mais independente.",
    role: "Neta de Paciente"
  },
  {
    name: "Ricardo Oliveira",
    text: "As sessões de Pilates em casa são excelentes. Jessica é extremamente técnica e atenta aos detalhes. Minhas dores nas costas desapareceram.",
    role: "Aluno de Pilates"
  },
  {
    name: "Ana Paula Costa",
    text: "Fiz drenagem no meu pós-operatório e foi essencial. O cuidado e o toque suave da Jessica aceleraram muito minha recuperação.",
    role: "Paciente de Pós-operatório"
  }
];

export const CONTACT_INFO = {
  phone: '5511992501384', 
  email: 'fisiojessicarosa@outlook.com',
  instagram: '@fisiojessicarosa',
  location: 'São Paulo Capital (Atendimento Domiciliar)',
  cta: 'Agendar uma avaliação',
  googleMapsReviewUrl: 'https://www.google.com/maps/search/Jessica+Rosa+Fisioterapia+e+Pilates'
};