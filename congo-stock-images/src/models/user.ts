// Types d'utilisateurs
export type UserRole = 'user' | 'creator' | 'admin';

// Interface utilisateur de base
export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// Interface pour les acheteurs
export interface Customer extends User {
  // Informations de paiement
  paymentMethods?: PaymentMethod[];
  
  // Historique d'achats
  purchases: Purchase[];
  
  // Favoris
  favorites: string[]; // IDs des contenus favoris
  
  // Préférences
  preferences: {
    contentTypes: string[];
    categories: string[];
    newsletter: boolean;
  };
}

// Interface pour les créateurs
export interface Creator extends User {
  // Profil créateur
  profile: {
    bio: string;
    website?: string;
    socialLinks?: SocialLinks;
    specialty: string[];
    equipment?: string[];
  };
  
  // Statistiques
  stats: {
    totalSales: number;
    totalEarnings: number;
    totalContent: number;
    averageRating: number;
  };
  
  // Informations de paiement
  paymentInfo: {
    accountType: 'mobile' | 'bank';
    accountDetails: string;
    currency: string;
  };
}

// Méthodes de paiement
export interface PaymentMethod {
  id: string;
  type: 'mobile_money' | 'card' | 'bank';
  provider: string;
  details: {
    [key: string]: any;
  };
  isDefault: boolean;
}

// Historique d'achats
export interface Purchase {
  id: string;
  contentId: string;
  contentType: string;
  title: string;
  thumbnailUrl: string;
  price: number;
  purchaseDate: Date;
  licenseType: string;
  transactionId: string;
}

// Liens sociaux
export interface SocialLinks {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  behance?: string;
  other?: string;
} 