import serviceIcon1 from '../../assets/image/agencyDigital/services/7.png';
import serviceIcon2 from '../../assets/image/agencyDigital/services/8.png';
import serviceIcon3 from '../../assets/image/agencyDigital/services/9.png';
import serviceIcon4 from '../../assets/image/agencyDigital/services/10.png';
import serviceIcon5 from '../../assets/image/agencyDigital/services/11.png';
import serviceIcon6 from '../../assets/image/agencyDigital/services/12.png';
import support1 from '../../assets/image/agencyDigital/services/8.png';
import support2 from '../../assets/image/agencyDigital/services/10.png';
import news1 from '../../assets/image/agencyDigital/news/1.png';
import news2 from '../../assets/image/agencyDigital/news/2.png';
import news3 from '../../assets/image/agencyDigital/news/3.png';
import news4 from '../../assets/image/agencyDigital/news/4.png';

import Nantouar from '../../assets/image/agencyDigital/nantouar.jpg';
import Trevou from '../../assets/image/agencyDigital/trevou.jpg';
import Lerhun from '../../assets/image/agencyDigital/lerhun.jpg';

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
import chat from 'common/src/assets/image/appModern/chat.svg';
import group from 'common/src/assets/image/appModern/group.svg';
import github from 'common/src/assets/image/appModern/github.svg';
import footerLogo from 'common/src/assets/image/AgencyDigital/logo.png';

export const footer = {
  widgets: [
    {
      id: 1,
      icon: chat,
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 2,
      icon: group,
      title: 'Join in Chat Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
    {
      id: 3,
      icon: github,
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore.',
    },
  ],
  logo: footerLogo,
  menu: [
    {
      id: 1,
      text: 'Home',
      link: '#',
    },
    {
      id: 2,
      text: 'Adversite',
      link: '#',
    },
    {
      id: 3,
      text: 'Supports',
      link: '#',
    },
    {
      id: 4,
      text: 'Marketing',
      link: '#',
    },
    {
      id: 5,
      text: 'Contact',
      link: '#',
    },
  ],
};


export const FAQ_DATA = [
  {
    expend: true,
    title: 'Quel est notre choix d\'hebergement de site web?',
    description:
      '1and1 ou IONOS est notre partenaire privilégié. Nous pouvons sélectionner un prestaire de votre choix. ',
  },
  {
    title: 'Comment se déroule une prise de vue drone chez le client?',
    description:
      'C\'est simple. 4 étapes sont nécessaires. Premier contact pour défnir vos objectifs. En général cela se passe par téléphone ou via la plateforme DISCORD pour partager des documents. Ensuite, je vous propose un DEVIS et des propositions de vol en fonction des autorisations à demander. Le jour de la prise de vue photo ou vidéo, je me déplace avec le bureau mobile pour valider les rushs. Enfin, la livraison est réalisée sous forme électronique dans un délai à définir.',
  },
  {
    title: 'Quel sont les différent types de site web proposé?',
    description:
      '3 choix sont possibles. Le plus rapide si on vous propose une solution standard à partir d\'une technologie WordPress. La personalisation sera faite par une sélection de modèles.',
  },
  {
    title: 'Quels sont les différents délais?',
    description:
      'Ils sont variables en fonction de la prestation. Les délais sont discuté lors de la première rencontre. La proposition de devis indique les différentes phases du projets. Ils dépendent de la compléxité de la demande.',
  },
  {
    title: 'Comment se déroule une formation photo?',
    description:
      'La session se déroule en 3 parties. 1h en télé-formation pour découvrir votre appareil et les bases de la composition. 1h de pratique ou je vous accompagne sur un site près de chez-vous. 1h pour faire le bilan de votre travail et commencer le traitement de vos images.',
  },
    
    
];


export const REALISATIONS = [
  {
    titre: 'Zone de mouillages',
    description:
      'Offrir la meilleure visibilité de votre offre avec une image drone. Une analyse de l\image va permettre l\'évalusation des zones à risques.',
    commune: 'Louannec',
    localisation: 'Plage de Nantouar',
    image: `${Nantouar}`,
  },
  {
    titre: 'Stationnement',
    description:
      'Situer dans l\'environnment les prochains travaux d\'aménagement d\'une nouvelle zone de stationnement.',
    commune: 'Trévou-Tréguignec',
    localisation: 'Port le Goff',
    image: `${Trevou}`,
  },
  {
    titre: 'Quartier',
    description:
      'La vue aérienne  permet une meilleur projection du bien dans son environnement. A moins de 150m d\'altitude, le drone capture une imahe en haute résolution.',
    commune: 'Trélévern',
    localisation: 'Le Rhun',
    image: `${Lerhun}`,
  },
];



export const data = {
  navItems: [
    {
      label: 'accueil',
      path: '#accueil',
      offset: '70',
    },
    {
      label: 'services',
      path: '#services',
      offset: '70',
    },
    {
      label: 'ambition',
      path: '#ambition',
      offset: '70',
    },
    {
      label: 'réalisations',
      path: '#realisations',
      offset: '70',
    },
    {
      label: 'formations',
      path: '#teleassistance',
      offset: '70',
    },
  ],
  
  services: [
    {
      id: 7,
      icon: serviceIcon1,
      title: 'Développement WEB',
      desc:
        'Application réalisées avec les standards du marché PHP/MySQL ou REACT JS NATIVE.',
      link: '#Contact',
    },
    {
      id: 8,
      icon: serviceIcon2,
      title: 'Livre numérique',
      desc:
        'A partir de vos photos, nous vous accompagnons pour la création d\'un objet unique.',
      link: '#Devis',
    },
    {
      id: 9,
      icon: serviceIcon3,
      title: 'Prise de vue',
      desc:
        'Besoin d\e photo pour votre e-boutique en ligne ou votre communication, le studio mobile est à votre service.',
      link: '#prisedevue',
    },
    {
      id: 10,
      icon: serviceIcon4,
      title: 'Site WEB',
      desc:
        'A partir de plateforme standard, nous construisons votre site.',
      link: '#',
    },
    {
      id: 11,
      icon: serviceIcon5,
      title: 'Image aérienne',
      desc:
        'L\'image aérienne vecteur de votre communication ou de vos relevés 3D.',
      link: '#',
    },
    {
      id: 12,
      icon: serviceIcon6,
      title: 'Initiation',
      desc:
        'De la prise en main ou la composition, vous proposons des parcours découverte photo.',
      link: '#',
    },
  ],
  accordion: [
    {
      id: 1,
      expend: true,
      title: 'Promouvoir votre environnment',
      description: `Votre Patrimoine, commune touristique ou nouvelle insfrasturure mérite des images fixes ou animées de qualité.  Une visite virtuelle sur un 360° permet de capter un flux d'intérêts pour votre activité économique.`,
    },
    {
      id: 2,
      title: 'Préparer une demande de subvention',
      description: `L'image au coeur de vos dossiers pour préparer votre futur. Une série d'images est aussi nécessaire pour réaliser une simulation de 3D d'une bâtiment pour une rénovation.`,
    },
    {
      id: 3,
      title: "Réaliser un suivi de chantier",
      description: `Une série d'images réalisées à partir du même point GPS durant la période du chantier pour valider une étape. La photogrammétrie permet la mesure de volume (ex extraction de matière).`,
    },
  ],

  workHardList: [
    { id: 1, title: 'visite virtuelle' },
    { id: 2, title: 'vidéo 4K' },
    { id: 3, title: 'time-lapse' },
    { id: 4, title: '360° et panoramique' },
    { id: 5, title: 'photogrammétrie' },
    { id: 6, title: 'studio mobile (objets)' },
    { id: 7, title: 'portraits' },
    { id: 8, title: 'livre photo' },
    { id: 9, title: 'montage vidéo' },
    { id: 10, title: 'diaporama' },    
  ],
  pricing: [
    {
      id: 1,
      package_name: 'Starter Pack',
      price: '18.99',
      trial_day: 15,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: false,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      package_name: 'Premium Pack',
      price: '29.99',
      trial_day: 30,
      isRecommended: true,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: false,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 3,
      package_name: 'Custom Pack',
      price: '23.99',
      trial_day: 30,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: false,
        },
      ],
    },
    {
      id: 4,
      package_name: 'Ultimate Pack',
      price: '35.99',
      trial_day: 45,
      isRecommended: false,
      features: [
        {
          id: 1,
          name: 'Full Access Library',
          isAvailable: true,
        },
        {
          id: 2,
          name: 'Multiple user',
          isAvailable: true,
        },
        {
          id: 3,
          name: 'Refund Policy',
          isAvailable: true,
        },
        {
          id: 4,
          name: 'Google Analytics',
          isAvailable: true,
        },
        {
          id: 5,
          name: '24/7 support',
          isAvailable: true,
        },
      ],
    },
  ],
  
  helps: [
    {
      id: 1,
      icon: support1,
      title: 'Livre photos',
      desc:
        '2 heures pour vous lancer: la session comprend la présentation et l\'installation du logiciel. Un peu de théorie sera dispenser pour organiser vos photos. On parlera aussi de composition du livre.',
    },
    {
      id: 2,
      icon: support2,
      title: 'Site web',
      desc:
        '2 heures pour commencer la création de votre site: conseils, feuille de route, evaluation des choix ...',
    },
  ],
  newsFeed: [
    {
      id: 1,
      image: news1,
      title: "L'estran de Port-Blanc, une richesse à préserver",
      desc:
        'Brian Halligan knows that you need more than a great product to have a great brand.',
      link: 'https://www.behance.net/gallery/107535375/Port-de-Ploumanach',
    },
    {
      id: 2,
      image: news2,
      title:
        'New banking application has  developed and we expecting good feedback',
      desc: '',
      link: 'https://lerhun.fr/2019/11/28/pourquoi-vouloir-un-point-de-vue-unique/',
    },
    {
      id: 3,
      image: news3,
      title: 'Ui/UX industry are doing great job in previous year history',
      desc: '',
      link: '',
    },
    {
      id: 4,
      image: news4,
      title: 'Develop you design experience with figma features.',
      desc: '',
      link: '',
    },
  ],
  footerNav: [
    {
      id: 1,
      title: 'accueil  ',
      link: '#accueil',
    },
    {
      id: 2,
      title: 'ambition  ',
      link: '#ambition',
    },
    {
      id: 3,
      title: 'formation  ',
      link: '#teleassistance',
    },
    {
      id: 4,
      title: 'services  ',
      link: '#services',
    },
    {
      id: 5,
      title: 'collectivites  ',
      link: '#collectivites',
    },
  ],
};

export default data;
