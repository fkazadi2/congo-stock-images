import Link from 'next/link';
import Image from 'next/image';
import { FiUpload, FiDollarSign, FiSearch, FiImage, FiVideo, FiPenTool, FiMusic } from 'react-icons/fi';
import { AiOutlineSound } from 'react-icons/ai';
import { MdOutlineArticle, MdOutlineModelTraining } from 'react-icons/md';
import { RiRobot2Line } from 'react-icons/ri';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex flex-col items-center justify-center py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vibrant-portrait-person-bright-environment.jpg"
            alt="Congo Stock Images"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Navigation Categories */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <Link href="/browse/photos" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <FiImage size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Images</span>
            </Link>
            
            <Link href="/browse/videos" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <FiVideo size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Vidéo</span>
            </Link>
            
            <Link href="/browse/editorial" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <MdOutlineArticle size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Éditorial</span>
            </Link>
            
            <Link href="/browse/music" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <FiMusic size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Musique</span>
            </Link>
            
            <Link href="/browse/sound-effects" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <AiOutlineSound size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Effets sonores</span>
            </Link>
            
            <Link href="/browse/templates" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <MdOutlineModelTraining size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Modèles</span>
            </Link>
            
            <Link href="/ai-generator" className="flex flex-col items-center group">
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                <RiRobot2Line size={24} />
              </div>
              <span className="text-white text-sm group-hover:text-[#FFDD15] transition-colors">Générateur IA</span>
            </Link>
          </div>
          
          {/* Presentation Text */}
          <div className="text-center mb-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Découvrez la RDC à travers des images authentiques
            </h1>
            <p className="text-xl text-white mb-8">
              La première banque d'images dédiée à la République Démocratique du Congo.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl mb-6">
            <div className="flex">
              <div className="relative">
                <button className="h-12 px-4 rounded-l-lg bg-white border-r border-gray-300 flex items-center gap-2">
                  <FiImage size={18} className="text-[#003559]" />
                  <span className="text-gray-700 text-sm">Toutes les images</span>
                  <span className="ml-2">▼</span>
                </button>
              </div>
              
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Rechercher des images"
                  className="w-full h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#FFDD15]"
                />
              </div>
              
              <button className="h-12 w-12 bg-[#003559] text-white flex items-center justify-center hover:bg-[#00254d] transition-colors">
                <FiSearch size={20} />
              </button>
              
              <button className="h-12 px-4 ml-3 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:border-[#FFDD15] transition-colors">
                <FiSearch size={18} className="text-[#003559]" />
                <span className="text-gray-700 text-sm">Rechercher par image</span>
              </button>
            </div>
          </div>
          
          {/* Trending Keywords */}
          <div className="text-white text-sm">
            <span className="mr-2">Les tendances :</span>
            <Link href="/browse/photos?q=joyeux+anniversaire" className="text-white hover:text-[#FFDD15] transition-colors mr-2">
              joyeux anniversaire,
            </Link>
            <Link href="/browse/photos?q=merci" className="text-white hover:text-[#FFDD15] transition-colors mr-2">
              merci,
            </Link>
            <Link href="/browse/photos?q=arrière-plan" className="text-white hover:text-[#FFDD15] transition-colors mr-2">
              arrière-plan,
            </Link>
            <Link href="/browse/photos?q=félicitations" className="text-white hover:text-[#FFDD15] transition-colors mr-2">
              félicitations,
            </Link>
            <Link href="/browse/photos?q=business" className="text-white hover:text-[#FFDD15] transition-colors mr-2">
              business,
            </Link>
            <Link href="/browse/photos?q=bienvenue" className="text-white hover:text-[#FFDD15] transition-colors">
              bienvenue
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explorez nos catégories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/browse/photos" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60">
                  <Image
                    src="/category-photos.jpg"
                    alt="Photos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#003559] transition-colors">
                      Photos
                    </h3>
                    <FiImage className="text-[#FFDD15]" size={24} />
                  </div>
                  <p className="text-gray-600">
                    Des milliers de photos authentiques capturant la beauté, la culture et la vie en RDC.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/browse/videos" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60">
                  <Image
                    src="/category-videos.jpg"
                    alt="Vidéos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#003559] transition-colors">
                      Vidéos
                    </h3>
                    <FiVideo className="text-[#FFDD15]" size={24} />
                  </div>
                  <p className="text-gray-600">
                    Des séquences vidéo haute qualité pour vos projets audiovisuels et documentaires.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/browse/illustrations" className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60">
                  <Image
                    src="/category-illustrations.jpg"
                    alt="Illustrations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#003559] transition-colors">
                      Illustrations
                    </h3>
                    <FiPenTool className="text-[#FFDD15]" size={24} />
                  </div>
                  <p className="text-gray-600">
                    Des illustrations créatives et originales inspirées de la richesse culturelle congolaise.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir Congo Stock Images ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFDD15] text-white mb-4 mx-auto">
                <FiDollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Prix Compétitifs</h3>
              <p className="text-gray-600 text-center">
                Des tarifs adaptés à tous les budgets avec différentes options de licences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFDD15] text-white mb-4 mx-auto">
                <FiSearch size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Contenu Unique</h3>
              <p className="text-gray-600 text-center">
                Des images authentiques de la RDC que vous ne trouverez nulle part ailleurs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFDD15] text-white mb-4 mx-auto">
                <FiUpload size={24} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Devenez Créateur</h3>
              <p className="text-gray-600 text-center">
                Partagez vos créations et gagnez de l'argent en rejoignant notre communauté.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about" className="inline-block bg-[#003559] text-white px-8 py-3 rounded-lg hover:bg-[#00254d] transition-colors">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
