import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#003559] py-6 px-6 text-center">
          <h1 className="text-2xl font-bold text-white">Créer un compte</h1>
          <p className="text-gray-200 text-sm mt-2">
            Rejoignez notre communauté d'amateurs de photos, vidéos et illustrations congolaises
          </p>
        </div>
        
        <div className="p-6">
          <form className="space-y-4">
            {/* Nom complet */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Votre nom complet"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#FFDD15] focus:ring-1 focus:ring-[#FFDD15]"
                  required
                />
              </div>
            </div>
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.com"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#FFDD15] focus:ring-1 focus:ring-[#FFDD15]"
                  required
                />
              </div>
            </div>
            
            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="8 caractères minimum"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#FFDD15] focus:ring-1 focus:ring-[#FFDD15]"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Le mot de passe doit contenir au moins 8 caractères.
              </p>
            </div>
            
            {/* Confirmer mot de passe */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmez votre mot de passe"
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-[#FFDD15] focus:ring-1 focus:ring-[#FFDD15]"
                  required
                />
              </div>
            </div>
            
            {/* Conditions d'utilisation */}
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
                  J'accepte les <Link href="/terms" className="text-[#003559] hover:underline">conditions d'utilisation</Link> et la <Link href="/privacy" className="text-[#003559] hover:underline">politique de confidentialité</Link>
                </label>
              </div>
            </div>
            
            {/* Bouton d'inscription */}
            <button
              type="submit"
              className="w-full bg-[#FFDD15] text-[#003559] font-semibold py-2 px-4 rounded-md hover:bg-[#FFE75C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFDD15] focus:ring-offset-2"
            >
              Créer un compte
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous avez déjà un compte?{' '}
              <Link href="/auth/signin" className="text-[#003559] font-semibold hover:underline">
                Connectez-vous
              </Link>
            </p>
          </div>
          
          {/* Alternatives de connexion */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou inscrivez-vous avec</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex justify-center items-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFDD15]"
              >
                <FaGoogle className="h-5 w-5 mr-2 text-red-500" />
                Google
              </button>
              <button
                type="button"
                className="w-full bg-[#4267B2] border border-[#4267B2] rounded-md py-2 px-4 flex justify-center items-center text-sm font-medium text-white hover:bg-[#365899] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4267B2]"
              >
                <FaFacebook className="h-5 w-5 mr-2" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 