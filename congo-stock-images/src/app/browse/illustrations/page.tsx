import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { BsVectorPen, BsStars } from 'react-icons/bs';

// Exemple de données (normalement cela viendrait de Firebase)
const mockCategories = [
  { id: 'digital', name: 'Art Digital' },
  { id: 'vector', name: 'Illustrations Vectorielles' },
  { id: 'character', name: 'Design de Personnages' },
  { id: 'infographic', name: 'Infographies' },
  { id: 'concept', name: 'Art Conceptuel' },
  { id: 'traditional', name: 'Art Traditionnel' },
];

// Illustrations fictives
const mockIllustrations = [
  { id: 1, title: 'Design de personnage congolais', artist: 'Marie Lumba', price: '45 €', isFeatured: true },
  { id: 2, title: 'Scène de marché colorée', artist: 'Jean Kimpesa', price: '32 €', isFeatured: false },
  { id: 3, title: 'Nature abstraite de la RDC', artist: 'Alex Mboma', price: '28 €', isFeatured: false },
  { id: 4, title: 'Infographie: Culture congolaise', artist: 'Sarah Lutumba', price: '40 €', isFeatured: false },
  { id: 5, title: 'Motifs traditionnels stylisés', artist: 'Pierre Kabongo', price: '35 €', isFeatured: true },
  { id: 6, title: 'Personnages de conte congolais', artist: 'Caroline Yongo', price: '50 €', isFeatured: false },
];

export default function IllustrationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#003559] mb-2">Illustrations</h1>
          <p className="text-gray-600">
            Explorez notre collection d'illustrations créées par des artistes congolais
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Rechercher des illustrations..." 
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
        <h2 className="text-xl font-semibold text-[#003559] mb-4">Styles d'illustrations</h2>
        <div className="flex flex-wrap gap-2">
          {mockCategories.map(category => (
            <Link 
              href={`/browse/illustrations/category/${category.id}`} 
              key={category.id}
              className="px-4 py-2 bg-gray-100 hover:bg-[#FFDD15]/20 text-[#003559] rounded-full transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Grille d'illustrations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {mockIllustrations.map(illustration => (
          <div key={illustration.id} className="relative group overflow-hidden rounded-lg shadow-md">
            <div className="aspect-square relative">
              <Image
                src="/placeholder-sunset.jpg"
                alt={illustration.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                {illustration.isFeatured && (
                  <div className="absolute top-2 right-2 bg-[#FFDD15] text-[#003559] px-2 py-1 rounded-md flex items-center text-sm font-semibold">
                    <BsStars className="mr-1" /> Tendance
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-[#003559] mb-1">{illustration.title}</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <BsVectorPen className="text-gray-500 mr-1" />
                  <span className="text-gray-600 text-sm">{illustration.artist}</span>
                </div>
                <span className="font-bold text-[#003559]">{illustration.price}</span>
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