# 🎯 Portfolio Maël Lecomte

Un portfolio professionnel premium construit avec **Next.js 14**, **TypeScript**, **TailwindCSS** et **Framer Motion**.

## ✨ Caractéristiques

- ✅ **Design moderne et fluide** — Inspiré par Apple, Linear, Vercel
- ✅ **Animations Framer Motion** — Transitions douces et élégantes
- ✅ **Dark Mode** — Toggle thème clair/sombre
- ✅ **Responsive** — Mobile-first design
- ✅ **Performance** — Optimisé pour lighthouse
- ✅ **TypeScript** — Typage complet
- ✅ **SEO Ready** — Métadonnées et structure sémantique

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── layout.tsx              # Layout racine
│   ├── page.tsx                # Accueil / À propos
│   ├── competences/page.tsx    # Compétences
│   ├── experiences/page.tsx    # Expériences
│   ├── projets/
│   │   ├── page.tsx            # Liste des projets
│   │   └── [slug]/page.tsx     # Détail projet dynamique
│   └── contact/page.tsx        # Contact
├── components/
│   ├── Navbar.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   ├── MotionFade.tsx          # Composant animation
│   ├── SectionTitle.tsx        # Titre section
│   └── Providers.tsx           # Providers (thème, etc.)
├── lib/
│   ├── projects.ts             # Données projets
│   ├── experiences.ts          # Données expériences
│   └── skills.ts               # Données compétences
├── styles/
│   └── globals.css             # Styles globaux
└── package.json
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
cd portfolio
npm install
# ou
yarn install
```

### Développement

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build production

```bash
npm run build
npm start
```

## 📄 Pages disponibles

| Route | Description |
|-------|-------------|
| `/` | Accueil avec présentation personnelle |
| `/competences` | Grille de compétences avec filtres |
| `/experiences` | Timeline des expériences |
| `/projets` | Galerie des projets |
| `/projets/[slug]` | Page détaillée d'un projet |
| `/contact` | Formulaire et infos de contact |

## 🎨 Personnalisation

### Couleurs

Modifier les variables TailwindCSS dans `tailwind.config.ts`.

### Contenu

Les données (projets, expériences, compétences) sont stockées dans `/lib`:
- `projects.ts` — Ajouter/modifier les projets
- `experiences.ts` — Ajouter/modifier les expériences
- `skills.ts` — Ajouter/modifier les compétences

### Thème

Le thème est géré par `next-themes`. Activer/désactiver le dark mode dans le header.

## 📦 Dépendances principales

- **Next.js 14** — Framework React
- **React 18** — Bibliothèque UI
- **TailwindCSS** — Styling
- **Framer Motion** — Animations
- **lucide-react** — Icônes
- **next-themes** — Gestion du thème

## 🌐 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Push sur GitHub
2. Connecter le repo à Netlify
3. Déploiement automatique

### Autre hébergeur

```bash
npm run build
# Copier le dossier `.next` et `public` sur le serveur
npm start
```

## 📧 Contact

Pour des questions ou modifications du portfolio, contactez [contact@example.com](mailto:contact@example.com).

---

**Made with ❤️ in 2025**
