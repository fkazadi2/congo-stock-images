# Congo Stock Images

Plateforme de vente d'images, illustrations et vidéos de la République Démocratique du Congo. Congo Stock Images permet aux créateurs congolais de vendre leur contenu et aux utilisateurs d'acheter du contenu visuel authentique via des moyens de paiement locaux.

## Technologies utilisées

- **Frontend**: Next.js (App Router) avec React & TypeScript
- **Backend**: API Routes de Next.js, Firebase Cloud Functions
- **Base de données**: Firebase Firestore
- **Stockage**: Google Cloud Storage
- **Authentification**: Firebase Auth via NextAuth.js
- **Paiements**: Intégration avec moyens de paiement locaux (à implémenter)

## Configuration requise

- Node.js 18+ 
- npm ou yarn

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-nom/congo-stock-images.git
cd congo-stock-images
```

2. Installez les dépendances :

```bash
npm install
```

3. Configurez Firebase:
   - Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
   - Créez une application web dans votre projet Firebase
   - Copiez les identifiants de configuration Firebase dans le fichier `.env.local`

4. Lancez le serveur de développement :

```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
congo-stock-images/
├── src/
│   ├── app/                # Routes Next.js (App Router)
│   │   ├── api/            # API Routes
│   │   ├── auth/           # Pages d'authentification
│   │   ├── browse/         # Pages de navigation du contenu
│   │   ├── content/        # Pages de détail du contenu
│   │   ├── creator/        # Espace créateurs
│   │   └── ...
│   ├── components/         # Composants React réutilisables
│   │   ├── content/        # Composants pour le contenu
│   │   ├── search/         # Composants de recherche
│   │   └── ui/             # Composants d'interface utilisateur
│   ├── lib/                # Utilitaires et configuration
│   └── models/             # Types et interfaces
├── public/                 # Fichiers statiques
├── .env.local              # Variables d'environnement (créer à partir de .env.example)
└── ...
```

## Fonctionnalités principales

1. **Pour les utilisateurs**:
   - Navigation et recherche du contenu (photos, illustrations, vidéos)
   - Téléchargement d'images avec différentes licences
   - Paiement via moyens locaux

2. **Pour les créateurs**:
   - Téléchargement et gestion de contenu
   - Tableau de bord des ventes
   - Systèmes de paiement des royalties

## Personnalisation

Vous pouvez personnaliser les couleurs et le thème en modifiant le fichier `src/app/globals.css`. Les couleurs principales sont:

- Primary: `#ffd600` (jaune)
- Secondary: `#00334e` (bleu marine)

## Déploiement

L'application peut être déployée sur Vercel, Netlify ou tout autre service compatible avec Next.js.

## Licence

[MIT](LICENSE)

## Crédits

Développé avec ❤️ pour la RDC.
