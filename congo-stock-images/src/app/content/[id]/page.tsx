import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

// Données d'exemple - normalement récupérées de Firebase
const mockContent = {
  id: 'photo-123',
  type: 'photo' as const,
  title: 'Coucher de soleil sur le fleuve Congo',
  description: 'Magnifique coucher de soleil capturé sur les rives du fleuve Congo près de Kinshasa. Cette image illustre la beauté naturelle de la RDC avec des couleurs vibrantes et une composition parfaite.',
  tags: ['nature', 'paysage', 'fleuve', 'coucher de soleil', 'kinshasa'],
  price: 25000,
  creatorId: 'creator-456',
  creatorName: 'Jean Mutombo',
  url: '/placeholder-sunset.jpg',
  thumbnailUrl: '/placeholder-sunset.jpg',
  createdAt: new Date('2023-10-15'),
  license: {
    type: 'standard',
    commercial: true,
    editorial: true,
    restrictions: []
  },
  metadata: {
    width: 4500,
    height: 3000,
    format: 'jpg',
    orientation: 'landscape' as const,
    camera: 'Canon EOS R5',
    location: {
      city: 'Kinshasa',
      country: 'République Démocratique du Congo'
    }
  },
  stats: {
    views: 1250,
    downloads: 48,
    likes: 136
  }
};

export default function ContentDetailPage({ params }: { params: { id: string } }) {
  // Vous utiliseriez params.id pour récupérer le contenu depuis Firebase
  const content = mockContent;
  
  // Formater le prix
  const formattedPrice = new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'CDF',
    maximumFractionDigits: 0,
  }).format(content.price);
  
  // Formater la date
  const formattedDate = new Intl.DateTimeFormat('fr-CD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(content.createdAt);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/browse/photos" className="text-primary hover:underline flex items-center">
          <FiArrowLeft className="mr-1" size={16} />
          Retour aux photos
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Image principale */}
        <div className="lg:col-span-3 bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-[60vh]">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <Image
                src="/placeholder-sunset.jpg"
                alt={content.title}
                fill
                style={{ objectFit: 'contain' }}
              />
              {/* Filigrane demo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <p className="text-5xl font-bold text-black dark:text-white transform rotate-[-30deg]">
                  CONGO STOCK IMAGES
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Informations */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-secondary dark:text-text-light mb-2">
              {content.title}
            </h1>
            
            <div className="mb-4">
              <Link href={`/creator/${content.creatorId}`} className="text-primary hover:underline">
                Par {content.creatorName}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Publié le {formattedDate}
              </p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {content.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-secondary dark:text-text-light mb-2">
                Détails
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-600 dark:text-gray-400">Type</div>
                <div className="text-secondary dark:text-text-light font-medium capitalize">{content.type}</div>
                
                <div className="text-gray-600 dark:text-gray-400">Résolution</div>
                <div className="text-secondary dark:text-text-light font-medium">
                  {content.metadata.width} × {content.metadata.height} px
                </div>
                
                <div className="text-gray-600 dark:text-gray-400">Format</div>
                <div className="text-secondary dark:text-text-light font-medium uppercase">{content.metadata.format}</div>
                
                <div className="text-gray-600 dark:text-gray-400">Licence</div>
                <div className="text-secondary dark:text-text-light font-medium capitalize">{content.license.type}</div>
              </div>
            </div>
            
            <div className="border-t dark:border-gray-700 pt-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-secondary dark:text-text-light">{formattedPrice}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Licence standard</span>
              </div>
              
              <button className="w-full bg-primary text-secondary font-semibold rounded-full py-3 hover:bg-primary-dark transition-colors mb-3">
                Acheter maintenant
              </button>
              
              <button className="w-full bg-transparent border-2 border-primary text-primary font-semibold rounded-full py-3 hover:bg-primary/10 transition-colors">
                Ajouter au panier
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-secondary dark:text-text-light mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.tags.map(tag => (
                  <Link 
                    key={tag} 
                    href={`/search?q=${tag}`}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-secondary transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 