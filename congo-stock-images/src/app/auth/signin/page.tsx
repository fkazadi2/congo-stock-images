import Link from 'next/link';

export default function SignIn() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-secondary dark:text-text-light mb-6">
            Connexion
          </h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-secondary-light"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Se souvenir de moi
                </label>
              </div>
              
              <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
                Mot de passe oublié?
              </Link>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-secondary font-semibold rounded-md hover:bg-primary-dark transition-colors"
              >
                Se connecter
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-secondary text-gray-500 dark:text-gray-400">Ou continuer avec</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-secondary-light"
              >
                Google
              </button>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-secondary-light"
              >
                Facebook
              </button>
            </div>
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Pas encore de compte?{' '}
            <Link href="/auth/signup" className="text-primary hover:underline">
              S'inscrire
            </Link>
          </p>
          
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/creator/join" className="text-primary hover:underline">
              Devenir créateur
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 