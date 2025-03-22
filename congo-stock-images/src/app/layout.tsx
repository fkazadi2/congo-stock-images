import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/ui/Header';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Congo Stock Images - Banque d\'Images Africaines',
  description: 'Découvrez et achetez des photos, illustrations et vidéos authentiques de la République Démocratique du Congo.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="bg-[#003559] text-white py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image 
                  src="/logo-congostock_footer.png" 
                  alt="CongoStock Logo" 
                  width={200} 
                  height={50} 
                  className="mb-4"
                />
                <p className="text-sm text-gray-300">
                  La première banque d'images dédiée à la République Démocratique du Congo.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Explorer</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/browse/photos" className="hover:text-[#FFDD15] transition-colors">Photos</Link></li>
                  <li><Link href="/browse/illustrations" className="hover:text-[#FFDD15] transition-colors">Illustrations</Link></li>
                  <li><Link href="/browse/videos" className="hover:text-[#FFDD15] transition-colors">Vidéos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Entreprise</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-[#FFDD15] transition-colors">À propos</Link></li>
                  <li><Link href="/contact" className="hover:text-[#FFDD15] transition-colors">Contact</Link></li>
                  <li><Link href="/creator/join" className="hover:text-[#FFDD15] transition-colors">Devenir créateur</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms" className="hover:text-[#FFDD15] transition-colors">Conditions d'utilisation</Link></li>
                  <li><Link href="/privacy" className="hover:text-[#FFDD15] transition-colors">Politique de confidentialité</Link></li>
                  <li><Link href="/licenses" className="hover:text-[#FFDD15] transition-colors">Licences</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#004B7A] text-sm text-center">
              <p>© {new Date().getFullYear()} Congo Stock Images. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
