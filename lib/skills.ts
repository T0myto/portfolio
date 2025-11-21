export interface Skill {
  category: string;
  items: string[];
  icon?: string;
}

export const skills: Skill[] = [
  {
    category: "Langages de Programmation",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Bash", "SQL", "C++", "C#"]
  },
  {
    category: "Systèmes & Infrastructure",
    items: ["Debian / Arch Linux", "Windows Server", "Proxmox", "Docker", "RAID", "SSH"]
  },
  {
    category: "Frontend",
    items: ["React", "CSS", "Bootstrap", "Tailwind", "TypeScript"]
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS"]
  },
  {
    category: "Outils & DevOps",
    items: ["Git", "GitHub", "VSCode", "Docker Compose", "Linux CLI", "Bash Scripts"]
  },
  {
    category: "Cybersécurité",
    items: ["TCP/IP", "SSL/TLS", "Firewall", "SSH Keys", "Monitoring"]
  }
];