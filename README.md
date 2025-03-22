# Congo Stock Images

![Congo Stock Images Logo](/public/logo-congostock.png)

## Description

Congo Stock Images est une plateforme de banque d'images spécialisée dans le contenu authentique de la République Démocratique du Congo. Le projet vise à créer un écosystème où les créateurs congolais peuvent partager et monétiser leurs œuvres (photos, vidéos, illustrations) et où les utilisateurs peuvent trouver du contenu unique représentant la RDC.

## Technologies utilisées

- **Frontend**: [Next.js 14](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentification**: [Next-Auth](https://next-auth.js.org/)
- **Base de données**: [Firebase](https://firebase.google.com/)
- **Icônes**: [React Icons](https://react-icons.github.io/react-icons/)
- **Optimisation des images**: [Sharp](https://sharp.pixelplumbing.com/) et composant Image de Next.js

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/fkazadi2/congo-stock-images.git
cd congo-stock-images

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Construire pour la production
npm run build

# Lancer en production
npm start
```

## Architecture du projet

Le projet adopte une architecture moderne de pages avec des composants React, et utilise le système de routage de Next.js. La structure est organisée de manière logique avec séparation des préoccupations entre les composants UI, la logique métier et les services.

### Structure des dossiers

```
congo-stock-images/
├── public/              # Fichiers statiques
├── src/
│   ├── app/             # Routes Next.js
│   │   ├── api/         # API Routes
│   │   ├── auth/        # Pages d'authentification
│   │   ├── browse/      # Pages de navigation
│   │   ├── creator/     # Espace créateurs
│   │   └── ...
│   ├── components/      # Composants React réutilisables
│   │   ├── ui/          # Composants d'interface
│   │   ├── content/     # Composants liés au contenu
│   │   └── search/      # Composants de recherche
│   ├── lib/             # Services et utilitaires
│   ├── models/          # Interfaces et types
│   └── styles/          # Styles globaux
└── ...
```

## Design et interface utilisateur

- **Palette de couleurs**: Principalement bleu marine (#003559) et jaune (#FFDD15)
- **Design responsive**: Adapté aux mobiles et aux ordinateurs
- **Interface utilisateur**: Moderne et intuitive

### Points forts du design

- Interface de recherche centralisée et conviviale
- Système de navigation par catégories clair et accessible
- Design épuré avec une hiérarchie visuelle bien définie
- Transitions et animations subtiles améliorant l'expérience utilisateur

## Fonctionnalités principales

1. **Recherche avancée**: 
   - Barre de recherche centrale
   - Filtrage par type de média (photos, vidéos, illustrations)
   - Recherche par image

2. **Navigation par catégories**:
   - Photos
   - Vidéos
   - Éditorial
   - Musique
   - Effets sonores
   - Modèles
   - Génération IA

3. **Espace créateurs**:
   - Inscription des artistes
   - Téléversement de contenu
   - Tableau de bord des ventes
   - Gestion des licences

4. **Espace utilisateurs**:
   - Création de compte
   - Système de panier d'achat
   - Historique des achats
   - Collections personnalisées

5. **Système de licences**:
   - Différentes options de licences
   - Gestion des droits d'utilisation
   - Suivi des achats

## Développement futur

### Améliorations recommandées

1. **Contenu d'exemple**: Ajouter des exemples de contenu de qualité pour les catégories
2. **Monétisation**: Développer différentes formules de licences et options d'abonnement
3. **Référencement**: Optimiser le SEO pour augmenter la visibilité
4. **Communauté**: Ajouter des fonctionnalités sociales pour les créateurs et utilisateurs
5. **Performance**: Optimiser le chargement des images pour les connexions à faible débit
6. **Mobile**: Assurer une expérience parfaite sur les appareils mobiles

### Roadmap

- [ ] Système de commentaires et d'évaluation
- [ ] Abonnements premium
- [ ] Galeries et collections personnalisées
- [ ] Fonctionnalités IA avancées
- [ ] Application mobile
- [ ] Intégration des paiements locaux

## Conclusion

Congo Stock Images représente une initiative prometteuse pour mettre en valeur le contenu créatif congolais et offrir une plateforme dédiée aux créateurs locaux tout en répondant à une demande mondiale pour du contenu authentique d'Afrique.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Développé avec ❤️ pour la RDC
