import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiFilter } from 'react-icons/fi';

// Exemple de données (normalement cela viendrait de Firebase)
const mockCategories = [
  { id: 'nature', name: 'Nature' },
  { id: 'culture', name: 'Culture' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'people', name: 'Personnes' },
  { id: 'food', name: 'Gastronomie' },
  { id: 'wildlife', name: 'Faune' },
];

// Photos fictives pour l'affichage
const mockPhotos = [
  { id: 1, title: 'Coucher de soleil sur le fleuve Congo', price: '25 €', author: 'Jean Kimpesa' },
  { id: 2, title: 'Gorilles des montagnes', price: '35 €', author: 'Marie Tshanga' },
  { id: 3, title: 'Architecture moderne de Kinshasa', price: '20 €', author: 'Patrice Lumumba' },
  { id: 4, title: 'Danseurs traditionnels', price: '30 €', author: 'Sarah Lutumba' },
  { id: 5, title: 'Marché local coloré', price: '22 €', author: 'Daniel Mbemba' },
  { id: 6, title: 'Cascade dans la forêt tropicale', price: '28 €', author: 'Léa Kalala' },
  { id: 7, title: 'Portrait d\'enfants congolais', price: '32 €', author: 'François Tshisekedi' },
  { id: 8, title: 'Artisanat local', price: '18 €', author: 'Claire Mumbela' },
];

export default function PhotosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#003559] mb-2">Photos</h1>
          <p className="text-gray-600">
            Découvrez des milliers de photos authentiques de la RDC
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FFDD15]"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button className="ml-2 px-4 py-2 flex items-center text-white bg-[#003559] rounded-full hover:bg-[#00456E] transition-colors">
            <FiFilter className="mr-1" size={18} />
            Filtres
          </button>
        </div>
      </div>
      
      {/* Catégories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-[#003559]">Catégories</h2>
        <div className="flex flex-wrap gap-2">
          {mockCategories.map((category) => (
            <Link 
              key={category.id}
              href={`/browse/photos/category/${category.id}`}
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-[#FFDD15]/20 hover:border-[#FFDD15] transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Contenu Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockPhotos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder-sunset.jpg"
                alt={photo.title}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-[#003559] truncate">{photo.title}</h3>
              <p className="text-gray-500 text-sm mb-2">par {photo.author}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">Photo</span>
                <span className="font-bold text-[#003559]">{photo.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md disabled:opacity-50">
            Précédent
          </button>
          <button className="px-3 py-1 bg-[#FFDD15] text-[#003559] rounded-md">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">3</button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">10</button>
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
            Suivant
          </button>
        </nav>
      </div>
    </div>
  );
} 