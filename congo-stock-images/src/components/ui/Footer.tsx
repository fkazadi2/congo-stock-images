import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Congo<span className="text-primary">Stock</span>Images
            </h2>
            <p className="mb-4 text-gray-300">
              La première plateforme congolaise de vente d'images, illustrations et vidéos, 
              connectant les créateurs locaux avec le monde entier.
            </p>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse/photos" className="text-gray-300 hover:text-primary">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/browse/illustrations" className="text-gray-300 hover:text-primary">
                  Illustrations
                </Link>
              </li>
              <li>
                <Link href="/browse/videos" className="text-gray-300 hover:text-primary">
                  Vidéos
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Informations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-primary">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Congo Stock Images. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 