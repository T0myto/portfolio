export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Production Virtuel",
    company: "BAO Virtuelle",
    period: "2023 (4 semaines)",
    description: "Stage au sein d'une entreprise de création et de réalisation virtuelle.",
    technologies: ["Developpement", "Configuration", "Réalité Virtuelle"],
    highlights: [
      "Découverte de l'environement virtuelle",
      "Configuration des produits clients",
      "Traduction d'un code entre 2 language",
    ],
  },
  {
    id: "2",
    title: "Installation et Maintenance Informatique  ",
    company: "DAD Informatique",
    period: "2024 (6 semaines)",
    description: "Assemblage, maintenance, nettoyage de matériel informatique en stage.",
    technologies: ["Système", "ERP", "Assemblage"],
    highlights: [
      "Assemblage de machines clients",
      "Nettoyage de machines inffectés",
      "Maintenance matériel",
    ],
  },
  {
    id: "3",
    title: "Technicien SAV",
    company: "Bodet Time & Sport",
    period: "2024 (7 semaines)",
    description: "Maintenance électronique et système",
    technologies: ["Technologie ermbarqué", "Tests", "Configuration"],
    highlights: [
      "Configuration de matériel embarqué",
      "Maintenance électronique sur retour produits",
    ],
  },
];
