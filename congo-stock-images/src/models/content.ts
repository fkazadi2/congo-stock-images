// Types de contenu disponibles dans l'application
export type ContentType = 'photo' | 'illustration' | 'video';

// Interface pour le contenu
export interface Content {
  id: string;
  type: ContentType;
  title: string;
  description: string;
  tags: string[];
  price: number;
  creatorId: string;
  url: string;
  thumbnailUrl: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Métadonnées spécifiques pour chaque type de contenu
  metadata: PhotoMetadata | IllustrationMetadata | VideoMetadata;
  
  // Informations de licence
  license: License;
  
  // Statistiques
  stats: {
    views: number;
    downloads: number;
    likes: number;
  };
}

// Métadonnées pour les photos
export interface PhotoMetadata {
  width: number;
  height: number;
  format: string;
  orientation: 'landscape' | 'portrait' | 'square';
  camera?: string;
  location?: GeoLocation;
  colorTags?: string[];
}

// Métadonnées pour les illustrations
export interface IllustrationMetadata {
  width: number;
  height: number;
  format: string;
  software?: string;
  availableFormats?: string[];
  colorTags?: string[];
}

// Métadonnées pour les vidéos
export interface VideoMetadata {
  width: number;
  height: number;
  duration: number;
  format: string;
  fps: number;
  hasAudio: boolean;
  location?: GeoLocation;
}

// Informations de géolocalisation
export interface GeoLocation {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
  province?: string;
}

// Types de licences disponibles
export interface License {
  type: 'standard' | 'extended' | 'exclusive';
  commercial: boolean;
  editorial: boolean;
  restrictions?: string[];
} 