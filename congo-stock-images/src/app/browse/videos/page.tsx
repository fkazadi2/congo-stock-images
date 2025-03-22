import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiFilter, FiClock, FiPlay } from 'react-icons/fi';

// Exemple de données (normalement cela viendrait de Firebase)
const mockCategories = [
  { id: 'nature', name: 'Nature' },
  { id: 'culture', name: 'Événements culturels' },
  { id: 'urbanlife', name: 'Vie urbaine' },
  { id: 'documentary', name: 'Documentaire' },
  { id: 'aerial', name: 'Vues aériennes' },
  { id: 'timelapse', name: 'Time-lapse' },
];

// Vidéos fictives
const mockVideos = [
  { id: 1, title: 'Coucher de soleil sur Kinshasa', duration: '0:45', price: '25 €' },
  { id: 2, title: 'Festival culturel à Goma', duration: '1:22', price: '32 €' },
  { id: 3, title: 'Fleuve Congo au crépuscule', duration: '0:36', price: '18 €' },
  { id: 4, title: 'Vie quotidienne à Lubumbashi', duration: '1:05', price: '27 €' },
  { id: 5, title: 'Danse traditionnelle congolaise', duration: '2:18', price: '35 €' },
  { id: 6, title: 'Vue aérienne du Parc Virunga', duration: '0:58', price: '40 €' },
];

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#003559] mb-2">Vidéos</h1>
          <p className="text-gray-600">
            Découvrez des séquences vidéo authentiques et uniques de la RDC
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher des vidéos..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FFDD15]"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="ml-2 bg-[#003559] text-white p-2 rounded-full hover:bg-[#004B7A] transition-colors">
            <FiFilter />
          </button>
        </div>
      </div>
      
      {/* Catégories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-[#003559] mb-4">Catégories populaires</h2>
        <div className="flex flex-wrap gap-2">
          {mockCategories.map(category => (
            <Link 
              href={`/browse/videos/category/${category.id}`} 
              key={category.id}
              className="px-4 py-2 bg-gray-100 hover:bg-[#FFDD15]/20 text-[#003559] rounded-full transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Grille de vidéos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {mockVideos.map(video => (
          <div key={video.id} className="relative group overflow-hidden rounded-lg shadow-md">
            <div className="aspect-video relative">
              <Image
                src="/placeholder-sunset.jpg"
                alt={video.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#FFDD15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiPlay size={30} className="text-[#003559] ml-1" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-md flex items-center text-sm">
                  <FiClock size={14} className="mr-1" />
                  {video.duration}
                </div>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-[#003559] mb-1">{video.title}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">HD • 1080p</span>
                <span className="font-bold text-[#003559]">{video.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex space-x-1">
          <a href="#" className="px-4 py-2 border border-gray-300 rounded-l-md text-[#003559] hover:bg-[#FFDD15]/10">Précédent</a>
          <a href="#" className="px-4 py-2 border border-gray-300 bg-[#FFDD15]/10 text-[#003559]">1</a>
          <a href="#" className="px-4 py-2 border border-gray-300 text-[#003559] hover:bg-[#FFDD15]/10">2</a>
          <a href="#" className="px-4 py-2 border border-gray-300 text-[#003559] hover:bg-[#FFDD15]/10">3</a>
          <a href="#" className="px-4 py-2 border border-gray-300 rounded-r-md text-[#003559] hover:bg-[#FFDD15]/10">Suivant</a>
        </nav>
      </div>
    </div>
  );
} 