import Link from 'next/link';
import Image from 'next/image';
import { FiCheck, FiCamera, FiVideo, FiPenTool, FiUploadCloud, FiDollarSign, FiUsers } from 'react-icons/fi';

export default function CreatorJoinPage() {
  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003559] to-[#004B7A] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez notre communauté de créateurs
            </h1>
            <p className="text-gray-200 mb-6">
              Partagez votre vision de la RDC avec le monde entier et gagnez de l'argent avec votre talent créatif.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FFDD15] flex items-center justify-center mt-0.5">
                  <FiCheck className="h-4 w-4 text-[#003559]" />
                </div>
                <p className="ml-3 text-white">
                  Vendez vos photos, illustrations et vidéos à un public mondial
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FFDD15] flex items-center justify-center mt-0.5">
                  <FiCheck className="h-4 w-4 text-[#003559]" />
                </div>
                <p className="ml-3 text-white">
                  Gagnez jusqu'à 70% de commission sur chaque vente
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FFDD15] flex items-center justify-center mt-0.5">
                  <FiCheck className="h-4 w-4 text-[#003559]" />
                </div>
                <p className="ml-3 text-white">
                  Rejoignez une communauté qui valorise l'art et la culture congolaise
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <Image
              src="/placeholder-sunset.jpg"
              alt="Créateur congolais"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <div className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-12">
          Comment ça marche
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUploadCloud className="h-8 w-8 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">1. Téléchargez votre contenu</h3>
            <p className="text-gray-600">
              Téléchargez vos photos, vidéos ou illustrations dans votre portfolio en ligne. Ajoutez des descriptions et des mots-clés pertinents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiDollarSign className="h-8 w-8 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">2. Fixez vos prix</h3>
            <p className="text-gray-600">
              Définissez les tarifs de vos œuvres et les licences disponibles. Vous conservez le contrôle total sur vos prix.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-[#FFDD15]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="h-8 w-8 text-[#003559]" />
            </div>
            <h3 className="text-xl font-semibold text-[#003559] mb-2">3. Touchez votre public</h3>
            <p className="text-gray-600">
              Nous nous occupons du marketing, des paiements et du support client. Vous recevez vos gains directement sur votre compte.
            </p>
          </div>
        </div>
      </div>

      {/* Types de contenu */}
      <div className="py-12 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-8">
          Quel type de contenu pouvez-vous vendre ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <Image 
                src="/placeholder-sunset.jpg" 
                alt="Photos" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <div className="bg-[#FFDD15] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                    <FiCamera className="text-[#003559]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Photos</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Paysages, portraits, scènes urbaines, culture et traditions congolaises, photographies de la faune et flore locale...
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <Image 
                src="/placeholder-sunset.jpg" 
                alt="Illustrations" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <div className="bg-[#FFDD15] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                    <FiPenTool className="text-[#003559]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Illustrations</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Art digital, illustrations vectorielles, design de personnages, infographies, motifs traditionnels stylisés...
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <Image 
                src="/placeholder-sunset.jpg" 
                alt="Vidéos" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <div className="bg-[#FFDD15] w-10 h-10 rounded-full flex items-center justify-center mb-2">
                    <FiVideo className="text-[#003559]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Vidéos</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Séquences de la vie quotidienne, événements culturels, vues aériennes, timelapse, scènes urbaines ou naturelles...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire d'inscription */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-[#003559] py-6 px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Rejoignez-nous dès aujourd'hui</h2>
            <p className="text-gray-200 text-sm mt-1">
              Commencez à partager votre talent et à gagner de l'argent
            </p>
          </div>
          
          <div className="p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                  required
                />
              </div>

              <div>
                <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de contenu principal
                </label>
                <select
                  id="contentType"
                  name="contentType"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                  required
                >
                  <option value="">Sélectionnez votre spécialité</option>
                  <option value="photos">Photos</option>
                  <option value="illustrations">Illustrations</option>
                  <option value="videos">Vidéos</option>
                  <option value="mixed">Contenu mixte</option>
                </select>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 text-[#FFDD15] focus:ring-[#FFDD15] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    J'accepte les <Link href="/terms" className="text-[#003559] hover:underline">conditions d'utilisation</Link>, la <Link href="/privacy" className="text-[#003559] hover:underline">politique de confidentialité</Link> et les <Link href="/creator-terms" className="text-[#003559] hover:underline">conditions spécifiques pour les créateurs</Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFDD15] text-[#003559] font-semibold py-3 px-4 rounded-md hover:bg-[#FFE75C] transition-colors"
              >
                Devenir Créateur
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?{' '}
                <Link href="/auth/signin" className="text-[#003559] font-semibold hover:underline">
                  Connectez-vous
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#003559] mb-8">
          Questions fréquentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Qui peut devenir créateur sur CongoStock ?
            </h3>
            <p className="text-gray-600">
              Tout artiste, photographe ou vidéaste congolais ou passionné par la RDC peut devenir créateur sur notre plateforme. Nous recherchons du contenu authentique qui célèbre la beauté, la culture et la diversité de la République Démocratique du Congo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Comment sont calculés mes gains ?
            </h3>
            <p className="text-gray-600">
              Vous recevez jusqu'à 70% du prix de vente de chaque licence vendue. Le pourcentage exact dépend de votre niveau d'exclusivité avec notre plateforme et du volume de ventes que vous générez.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Quand et comment suis-je payé ?
            </h3>
            <p className="text-gray-600">
              Les paiements sont effectués mensuellement lorsque votre solde atteint 50€. Nous proposons plusieurs méthodes de paiement, notamment les virements bancaires, PayPal, et les transferts d'argent mobile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Dois-je céder les droits de mes œuvres ?
            </h3>
            <p className="text-gray-600">
              Non, vous conservez tous les droits d'auteur de vos œuvres. Vous nous accordez simplement le droit de les commercialiser via notre plateforme selon les licences que vous choisissez de proposer.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
} 