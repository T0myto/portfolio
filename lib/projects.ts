export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  github?: string;
  demo?: string;
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "facilock",
    title: "FaciLock",
    shortDesc: "Réaliser une sérrure connecté via reconnaissance faciale",
    fullDesc:
      "Création d'un code d'analyse faciale en python sur raspberry Pi 5 et cablage de l'ensemble du système",
    technologies: [
      "Python",
      "Raspberry",
      "SSH",
      "React",
    ],
    features: [
      "Configuration du Raspberry",
      "Création du code Python",
      "Ajout application mobile",
      "Ajout de fonctionnalité",
      "Monitoring en temps réel",
      "Sauvegardes automatiques",
    ],
    challenge:
      "Créer une sérrure connecté  à l'aide d'un raspberry avec une maximum de focntionnalités et de technologie",
    solution:
      "Programme python pour la reconaissance, application avec react",
    result:
      "Porte sécurisé avec reconaissance faciale et application connecté",
    github: "https://github.com",
    status: "completed",
  },
  {
    id: "2",
    slug: "somfy-rts",
    title: "Volets Domotiques",
    shortDesc: "Système domotique afin de controler et automatiser des volets",
    fullDesc:
      "Création d'un module radio afin de connecté et controler des volets via Home Assistant et créer des automatisations avec Node Red",
    technologies: [
      "HomeAssistant",
      "NodeRED",
      "Somfy RTS",
      "Arduino IDE",
      "ESP32",
    ],
    features: [
      "Script automatisation NodeRed",
      "Integrer HomeAssistant",
      "Code ESP32",
      "Scan frenqeuncy",
      "Virtual Remote",
    ],
    challenge:
      "Connecter et automatiser des volets non connecté",
    solution:
      "Mise en place d'une telecommande virtuelle pour controler les volets",
    result:
      "Volet devenu connecté avec HomeAssistant et automatisé avec NodeRede en fonction de l'heure",
    github: "https://github.com",
    status: "completed",
  },
  {
    id: "3",
    slug: "esp-div",
    title: "ESP-DIV",
    shortDesc: "Module radio qui brouille les ondes bluetooth et wifi à proximité",
    fullDesc:
      "ESP-32 combiné avec des antennes et mit sur batterie. Controler grace à un ecran tactile permmettent de brouiller et perturber des réseaux sans fils",
    technologies: [
      "Electronique",
      "Arduino IDE",
      "Bash",
      "Docker",
      "TailwindCSS",
    ],
    features: [
      "Dashboard en temps réel",
      "Gestion des schedules de backup",
      "Historique et restauration",
      "Alertes email/Slack",
      "Statistiques de rétention",
      "Encryption des données",
      "API REST complète",
    ],
    challenge:
      "Créer une solution de backup fiable et monitoring transparent pour l'équipe",
    solution:
      "Backend Node.js avec Cron jobs, frontend React avec WebSockets pour les updates temps réel",
    result:
      "Zéro incident de perte de données, 99.9% de taux de succès des backups",
    github: "https://github.com",
    status: "in-progress",
  },
  {
    id: "4",
    slug: "home-lab",
    title: "HomeLab",
    shortDesc: "Mise en place d'un HomeLab",
    fullDesc:
      "Installation d'un serveur et de ses services",
    technologies: [
      "Proxmox",
      "HomeAssistant",
      "Automatisation",
      "VPN",
      "VM",
      "Linux",
    ],
    features: [
      "Virtualisation Proxmox",
      "Automatisation NodeRed",
      "VPN Tailscale",
      "Add blocker Pi-hole",
      "HomeAssistant",
      "CasaOS",
      "Docker",
      "NextCloud"
    ],
    challenge:
      "Mettre en place un serveur personnel pour mon réseau",
    solution:
      "Installation d'un Proxmox avec plusieurs VM, comme un CasaOS, un Pi-hole et un Tailscale",
    result:
      "Serveur fonctionnel et joignable en dehors du réseau via le VPN",
    github: "https://github.com",
    status: "completed",
  },
  {
    id: "5",
    slug: "app-tcgp",
    title: "Application web",
    shortDesc: "Création d'une application web",
    fullDesc:
      "Créer une application web qui avec une base de données enregistre et trie les cartes Pokemon",
    technologies: [
      "Laravel 12",
      "Laravel Breeze",
      "Blade",
      "Vite",
      "Tailwind CSS",
      "PHP 8+",
      "Livewire",
      "MySQL / MariaDB",
      "Node.js / NPM",
      "Laragon",
    ],
    features: [
      "CRUD complet des cartes",
      "Upload & affichage d'images",
      "Liste interactive Livewire",
      "Frontend responsive grâce à Tailwind",
      "Compilation en temps réel avec Vite",
      "Architecture MVC",
      "Séparation Front / Back via 2 serveurs",
      "Gestion des assets (CSS/JS) optimisée",
    ],
    challenge:
      "Mettre en place une application web avec base de données",
    solution:
      "Utilisation du SQL et d'une base de données pour stocker et organiser les cartes",
    result:
      "Interface dynamique avec connection session et compte. Upload des cartes et système de recherche en live",
    github: "https://github.com",
    status: "in-progress",
  },
];
