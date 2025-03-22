import Link from 'next/link';
import Image from 'next/image';
import { FiUsers, FiImage, FiGlobe, FiTrendingUp } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003559] to-[#004B7A] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              À Propos de Congo Stock Images
            </h1>
            <p className="text-gray-200 mb-6">
              Nous sommes la première banque d'images dédiée à la République Démocratique du Congo, créée pour mettre en valeur la beauté et la diversité de ce pays extraordinaire.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <Image
              src="/placeholder-sunset.jpg"
              alt="Paysage congolais"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Notre Histoire */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-8">
            Notre Histoire
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Congo Stock Images est né d'un constat simple : la richesse culturelle, naturelle et humaine de la République Démocratique du Congo est sous-représentée dans les grandes banques d'images internationales. Notre fondateur, photographe passionné originaire de Kinshasa, a décidé de changer cela en créant une plateforme dédiée exclusivement au contenu visuel congolais.
            </p>
            <p>
              Lancée en 2023, notre plateforme réunit aujourd'hui des centaines de créateurs talentueux - photographes, illustrateurs et vidéastes - qui partagent leur vision unique de la RDC. Nous sommes fiers de contribuer à changer les perceptions et à montrer la beauté de ce pays aux mille contrastes.
            </p>
            <p>
              Notre mission s'étend au-delà de la simple vente d'images. Nous œuvrons à construire un patrimoine visuel congolais accessible au monde entier, tout en permettant aux créateurs locaux de vivre de leur passion et de développer leur talent.
            </p>
          </div>
        </div>
      </div>

      {/* Ce que nous offrons */}
      <div className="py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-12">
          Ce Que Nous Offrons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mb-4">
              <FiImage className="h-6 w-6 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">Contenu Authentique et Divers</h3>
            <p className="text-gray-600">
              Des milliers de photos, illustrations et vidéos représentant la richesse et la diversité de la RDC. Notre collection couvre l'ensemble du pays, des grandes villes aux villages reculés, des parcs nationaux aux sites industriels, des scènes du quotidien aux grands événements culturels.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mb-4">
              <FiUsers className="h-6 w-6 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">Soutien aux Créateurs Locaux</h3>
            <p className="text-gray-600">
              Une plateforme équitable qui permet aux artistes congolais de présenter leur travail au monde entier et d'en tirer un revenu stable. Nous offrons des commissions parmi les plus élevées du marché et des outils pour développer leur carrière créative.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mb-4">
              <FiGlobe className="h-6 w-6 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">Rayonnement International</h3>
            <p className="text-gray-600">
              Une vitrine mondiale pour la culture et les paysages congolais, permettant aux médias, entreprises et particuliers du monde entier de découvrir et d'utiliser des images authentiques de la RDC dans leurs projets.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mb-4">
              <FiTrendingUp className="h-6 w-6 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">Innovation Continue</h3>
            <p className="text-gray-600">
              Une plateforme en constante évolution, intégrant les dernières technologies pour offrir une expérience utilisateur optimale et des fonctionnalités adaptées aux besoins spécifiques des créateurs et clients intéressés par le contenu congolais.
            </p>
          </div>
        </div>
      </div>

      {/* Notre Équipe */}
      <div className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-12">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
            <div className="h-64 relative">
              <Image 
                src="/placeholder-person.jpg" 
                alt="Jean Mutombo" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#003559]">Jean Mutombo</h3>
              <p className="text-[#FFDD15] font-medium mb-3">Fondateur & CEO</p>
              <p className="text-gray-600 text-sm">
                Photographe passionné et entrepreneur, Jean a créé Congo Stock Images avec la vision de partager la beauté de son pays natal avec le monde entier.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
            <div className="h-64 relative">
              <Image 
                src="/placeholder-person.jpg" 
                alt="Marie Kabongo" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#003559]">Marie Kabongo</h3>
              <p className="text-[#FFDD15] font-medium mb-3">Directrice Artistique</p>
              <p className="text-gray-600 text-sm">
                Avec son œil expert pour la qualité et l'authenticité, Marie supervise le contenu de notre plateforme et accompagne les créateurs dans leur développement.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center">
            <div className="h-64 relative">
              <Image 
                src="/placeholder-person.jpg" 
                alt="Pascal Mbenza" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#003559]">Pascal Mbenza</h3>
              <p className="text-[#FFDD15] font-medium mb-3">Directeur Technique</p>
              <p className="text-gray-600 text-sm">
                Ingénieur en informatique, Pascal est le cerveau derrière notre plateforme, assurant une expérience fluide et sécurisée pour tous nos utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Valeurs */}
      <div className="py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-8">
          Nos Valeurs
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none px-4">
            <h3 className="text-[#003559]">Authenticité</h3>
            <p>
              Nous valorisons les représentations authentiques et respectueuses de la RDC, de ses habitants et de sa culture. Chaque image raconte une histoire vraie.
            </p>
            
            <h3 className="text-[#003559]">Équité</h3>
            <p>
              Nous croyons en un modèle économique équitable qui respecte et valorise le travail des créateurs. Notre plateforme est conçue pour maximiser les retombées pour les artistes congolais.
            </p>
            
            <h3 className="text-[#003559]">Inclusion</h3>
            <p>
              Nous célébrons la diversité de la RDC sous toutes ses formes. Notre plateforme est ouverte à tous les talents et représente toutes les régions, cultures et perspectives du pays.
            </p>
            
            <h3 className="text-[#003559]">Excellence</h3>
            <p>
              Nous aspirons à l'excellence dans la qualité de notre contenu, de notre service client et de notre plateforme technique. Nous nous améliorons constamment pour offrir la meilleure expérience possible.
            </p>
            
            <h3 className="text-[#003559]">Impact</h3>
            <p>
              Nous sommes motivés par l'impact positif que nous pouvons avoir, tant sur la perception mondiale de la RDC que sur les opportunités économiques pour les créateurs congolais.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003559] mb-6">
            Rejoignez l'Aventure Congo Stock Images
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Que vous soyez un créateur de contenu souhaitant partager votre vision de la RDC ou un client en quête d'images authentiques, nous vous invitons à rejoindre notre communauté grandissante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/creator/join" className="px-6 py-3 bg-[#FFDD15] text-[#003559] font-semibold rounded-md hover:bg-[#FFE75C] transition-colors">
              Devenir Créateur
            </Link>
            <Link href="/browse/photos" className="px-6 py-3 bg-[#003559] text-white font-semibold rounded-md hover:bg-[#004B7A] transition-colors">
              Explorer Notre Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-12 bg-white shadow-sm rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#003559] mb-4">
            Contactez-Nous
          </h2>
          <p className="text-gray-600 mb-6">
            Vous avez des questions ou souhaitez en savoir plus sur Congo Stock Images ?
          </p>
          <Link href="/contact" className="text-[#003559] font-semibold hover:underline inline-flex items-center">
            Envoyez-nous un message <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
      
    </div>
  );
} 