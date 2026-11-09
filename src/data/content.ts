export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'batiment' | 'genie-civil' | 'vrd' | 'renovation';
  categoryLabel: string;
  location: string;
  surface?: string;
  year: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export const COMPANY_INFO = {
  name: "EBRA Service BTP Bénin",
  tagline: "Excellence constructive, rigueur technique & engagement durable",
  address: "Womey, Abomey-Calavi (Grand Cotonou), République du Bénin",
  locationId: "ChIJga0ynjtVIxARR5Ox33cA_w0",
  googleMapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJga0ynjtVIxARR5Ox33cA_w0",
  googleMapsEmbed: "https://www.google.com/maps?q=place_id:ChIJga0ynjtVIxARR5Ox33cA_w0&output=embed",
  phone: "+229 01 47 33 00 64",
  phoneDisplay: "+229 01 47 33 00 64",
  whatsapp: "2290147330064",
  whatsappMessage: "Bonjour EBRA Service BTP, je souhaite obtenir un devis ou des renseignements pour un projet de construction ou travaux au Bénin.",
  email: "contact@ebraservice.com",
  hours: "Lun - Sam : 07h30 - 18h30 | Dépannages & urgences 24h/24 & 7j/7",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "gros-oeuvre",
    title: "Bâtiment & Gros Œuvre",
    subtitle: "Résidentiel haut standing, bureaux & édifices commerciaux",
    category: "Construction neuve",
    description: "Conception structurale et érection d'édifices modernes respectant les normes de béton armé les plus strictes. Des fondations profondes aux finitions de prestige, nous assurons une solidité à toute épreuve.",
    features: [
      "Fondations spéciales et radiers étanches",
      "Structures poteaux-poutres en béton armé vibré",
      "Élévation de murs et dalles allégées ou pleines",
      "Contrôle continu de la résistance du béton"
    ],
    image: "/images/btp-01.jpg",
    badge: "Cœur de métier"
  },
  {
    id: "genie-civil",
    title: "Génie Civil & Ouvrages d'Art",
    subtitle: "Infrastructures lourdes, dalots, ponts & caniveaux",
    category: "Travaux Publics",
    description: "Réalisation d'infrastructures pérennes indispensables au développement territorial béninois. Ouvrages de franchissement, soutènements, dalots armés et réseaux d'assainissement pluvial.",
    features: [
      "Ouvrages de franchissement et dalots bétonnés",
      "Murs de soutènement et parois de protection",
      "Collecteurs d'eaux pluviales et d'assainissement",
      "Calculs géotechniques et descentes de charges"
    ],
    image: "/images/btp-07.jpg",
    badge: "Haute précision"
  },
  {
    id: "vrd-asphaltage",
    title: "Voirie & Réseaux Divers (VRD)",
    subtitle: "Pavage autobloquant, asphaltage & aménagement urbain",
    category: "Voirie & Réseaux",
    description: "Aligné sur la dynamique d'asphaltage et de modernisation des voiries urbaines au Bénin. Nous aménageons voies d'accès, parkings industriels, plateformes logistiques et réseaux enterrés.",
    features: [
      "Pose de pavés autobloquants haute résistance",
      "Terrassement, compactage et reprofilage de sols",
      "Réseaux d'adduction d'eau et fourreaux techniques",
      "Bordures normalisées et éclairage public intégré"
    ],
    image: "/images/btp-12.jpg",
    badge: "Modernisation urbaine"
  },
  {
    id: "renovation",
    title: "Rénovation & Réhabilitation",
    subtitle: "Reprise sous œuvre, renforcement structural & modernisation",
    category: "Rénovation",
    description: "Restauration et valorisation de bâtiments existants. Traitement des pathologies du béton, réfection complète de toitures, redistribution spatiale et amélioration thermique adaptée au climat tropical.",
    features: [
      "Diagnostic structural des fissures et tassements",
      "Renforcement carbone ou profilés métalliques",
      "Étanchéité bitumineuse ou résine liquide certifiée",
      "Modernisation complète des façades architecturales"
    ],
    image: "/images/btp-08.jpg",
    badge: "Transformation"
  },
  {
    id: "bureau-etudes",
    title: "Bureau d'Études & Modélisation BIM",
    subtitle: "Plans d'exécution, métrés détaillés & calculs de structures",
    category: "Ingénierie",
    description: "Avant chaque coup de pioche, notre équipe technique affine les plans architecturaux en modèles 3D exploitables, garantissant zéro imprévu budgétaire et une coordination fluide entre corps d'état.",
    features: [
      "Modélisation architecturale 3D & visualisations",
      "Notes de calculs conformes aux règles BAEL/Eurocodes",
      "Métrés et devis quantitatifs estimatifs précis (DQE)",
      "Plans de ferraillage et de coffrage détaillés"
    ],
    image: "/images/btp-21.jpg",
    badge: "Ingénierie 3D"
  },
  {
    id: "coordination-tce",
    title: "Coordination TCE & Conduite de Travaux",
    subtitle: "Pilotage clé en main, approvisionnement & sécurité HSE",
    category: "Management",
    description: "Gestion intégrale de votre chantier : planification rigoureuse, contrôle de la chaîne d'approvisionnement des matériaux locaux, coordination des sous-traitants et respect strict du calendrier de livraison.",
    features: [
      "Planification par chemin critique et livrables phasés",
      "Sécurité stricte sur site : EPI et signalisation",
      "Rapports hebdomadaires illustrés pour le maître d'ouvrage",
      "Réception des travaux avec PV de conformité"
    ],
    image: "/images/btp-22.jpg",
    badge: "Clé en main"
  },
  {
    id: "electricite-plomberie",
    title: "Électricité, Plomberie & Dépannage 24/7",
    subtitle: "Réseaux électriques de puissance, plomberie sanitaire & urgences",
    category: "Fluides & Énergie",
    description: "Installation complète des colonnes montantes, tableaux divisionnaires, réseaux d'adduction d'eau et évacuations sanitaires. Service réactif de dépannage technique d'urgence 24h/24 et 7j/7 sur tout le Grand Cotonou.",
    features: [
      "Schémas électriques normalisés et protection différentielle",
      "Réseaux d'eau sous pression, surpresseurs et cuves tampons",
      "Assainissement autonome et fosses toutes eaux",
      "Équipe d'astreinte et intervention d'urgence 24h/24 & 7j/7"
    ],
    image: "/images/btp-06.jpg",
    badge: "Intervention 24/7"
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Résidence Contemporaine Les Palmiers",
    category: "batiment",
    categoryLabel: "Bâtiment Résidentiel",
    location: "Cotonou — Haie Vive",
    surface: "650 m² R+2",
    year: "2024",
    description: "Villa d'architecte contemporaine avec structure béton armé apparente, grandes baies vitrées et toiture-terrasse étanchée.",
    image: "/images/btp-05.jpg",
    highlights: ["Structure antisismique", "Dalle post-tendue", "Finitions premium"]
  },
  {
    id: "proj-2",
    title: "Aménagement d'Axe Urbain & Voirie Pavée",
    category: "vrd",
    categoryLabel: "VRD & Assainissement",
    location: "Abomey-Calavi — Zone Universitaire",
    surface: "1.8 km de voirie",
    year: "2024",
    description: "Pose mécanique de pavés autobloquants 8cm, caniveaux doubles à redents et enfouissement des réseaux secs.",
    image: "/images/btp-13.jpg",
    highlights: ["Caniveau pluvial renforcé", "Pavage lourd 60T", "Drainage durable"]
  },
  {
    id: "proj-3",
    title: "Immeuble Tertiaire & Siège Professionnel",
    category: "batiment",
    categoryLabel: "Bâtiment Commercial",
    location: "Cotonou — Boulevard Saint-Michel",
    surface: "1 450 m² R+4",
    year: "2023",
    description: "Bâtiment de bureaux à haute performance énergétique avec mur rideau ventilé et parking sous-sol imperméabilisé.",
    image: "/images/btp-15.jpg",
    highlights: ["Fondations sur pieux", "Sous-sol étanche cuvelé", "Structure modulaire"]
  },
  {
    id: "proj-4",
    title: "Dalot Hydraulique & Ouvrage de Franchissement",
    category: "genie-civil",
    categoryLabel: "Génie Civil",
    location: "Sèmè-Kpodji",
    surface: "Ouvrage 3x3m double pertuis",
    year: "2023",
    description: "Ouvrage de décharge hydraulique en zone inondable permettant de désenclaver les quartiers périphériques.",
    image: "/images/btp-26.jpg",
    highlights: ["Béton hydrofuge C35", "Ferraillage haute densité", "Périmètre sécurisé"]
  },
  {
    id: "proj-5",
    title: "Réhabilitation Lourde d'un Entrepôt Logistique",
    category: "renovation",
    categoryLabel: "Rénovation Industrielle",
    location: "Zone Portuaire de Cotonou",
    surface: "2 800 m² couvercle",
    year: "2024",
    description: "Remplacement de charpente métallique, surélévation de planchers pour stockage lourd et dallage industriel quartzé.",
    image: "/images/btp-32.jpg",
    highlights: ["Dallage quartzé 5T/m²", "Étanchéité bac acier", "Renforts métalliques"]
  },
  {
    id: "proj-6",
    title: "Complexe Résidentiel Éco-Conçu",
    category: "batiment",
    categoryLabel: "Éco-Construction",
    location: "Ouidah — Route des Pêches",
    surface: "8 Villas groupées",
    year: "2024",
    description: "Programme de villas bioclimatiques alliant matériaux locaux sélectionnés et ventilation naturelle optimisée.",
    image: "/images/btp-43.jpg",
    highlights: ["Briques de terre stabilisée", "Isolation toiture thermo-réfléchissante", "Énergie solaire intégrée"]
  }
];

export const WORK_PROCESS: StepItem[] = [
  {
    number: "01",
    title: "Diagnostic & Études Préliminaires",
    subtitle: "Analyse géotechnique, topographie et cadrage des besoins",
    description: "Nous étudions minutieusement la faisabilité technique de votre projet : reconnaissance du sol béninois, relevés topographiques et cadrage budgétaire.",
    details: [
      "Visite de reconnaissance sur site",
      "Sondages géotechniques préliminaires",
      "Écoute des attentes et cahier des charges"
    ]
  },
  {
    number: "02",
    title: "Ingénierie & Modélisation 3D",
    subtitle: "Conception architecturale, plans d'exécution et DQE détaillé",
    description: "Nos ingénieurs et architectes modélisent les plans précis, calculent les descentes de charges et établissent un devis transparent sans coûts cachés.",
    details: [
      "Modélisation BIM et plans 2D/3D",
      "Calculs de structures selon les normes",
      "Devis quantitatif estimatif transparent"
    ]
  },
  {
    number: "03",
    title: "Approvisionnement & Mobilisation",
    subtitle: "Sélection des matériaux certifiés et mise en place de la base vie",
    description: "Approvisionnement en ciment de qualité, aciers certifiés et agrégats lavés. Installation de la base de chantier et de la signalisation de sécurité.",
    details: [
      "Sélection d'aciers et ciments certifiés",
      "Mise en place de la sécurité et des clôtures",
      "Planning d'intervention détaillé"
    ]
  },
  {
    number: "04",
    title: "Exécution & Contrôle Qualité",
    subtitle: "Coulage surveillé, levées de réserves continues et rapports hebdomadaires",
    description: "Chaque étape du gros œuvre fait l'objet d'essais in situ (écrasement béton, niveau laser). Le maître d'ouvrage reçoit un reporting photographique régulier.",
    details: [
      "Présence d'un conducteur de travaux dédié",
      "Essais réguliers de résistance des matériaux",
      "Rapports d'avancement transparents"
    ]
  },
  {
    number: "05",
    title: "Livraison & Clés en Main",
    subtitle: "Procès-verbal de réception, levée des réserves et garanties",
    description: "Remise officielle de l'ouvrage nettoyé et conforme au projet initial, avec documentation technique et engagement de parfait achèvement.",
    details: [
      "Visite minutieuse de réception",
      "Remise du dossier des ouvrages exécutés (DOE)",
      "Suivi post-livraison et réactivité garantie"
    ]
  }
];

export const STATS = [
  { value: "100%", label: "Respect des normes constructives", caption: "Béton armé & sécurité" },
  { value: "0", label: "Accident grave toléré", caption: "Politique stricte EPI sur chantier" },
  { value: "100%", label: "Ancrage Bénin & Sous-Région", caption: "Équipes et partenaires locaux" },
  { value: "24/48h", label: "Délai moyen d'évaluation", caption: "Chiffrage et premier contact" }
];

