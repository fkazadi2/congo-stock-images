import Link from 'next/link';
import Image from 'next/image';
import { FiTrash2, FiShoppingCart, FiChevronLeft, FiCreditCard } from 'react-icons/fi';

// Articles de panier fictifs
const cartItems = [
  {
    id: 1,
    title: 'Coucher de soleil sur Kinshasa',
    type: 'Photo',
    license: 'Standard',
    price: 25,
    thumbnail: '/placeholder-sunset.jpg',
  },
  {
    id: 2,
    title: 'Design de personnage congolais',
    type: 'Illustration',
    license: 'Commerciale',
    price: 45,
    thumbnail: '/placeholder-sunset.jpg',
  },
  {
    id: 3,
    title: 'Fleuve Congo au crépuscule',
    type: 'Vidéo',
    license: 'Standard',
    price: 36,
    thumbnail: '/placeholder-sunset.jpg',
  },
];

export default function CartPage() {
  // Calcul du total
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.2; // TVA à 20%
  const total = subtotal + tax;

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold text-[#003559] mb-6">Votre Panier</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-[#003559] mb-4">Articles ({cartItems.length})</h2>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md relative">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.title}</h3>
                          <p className="ml-4">{item.price} €</p>
                        </div>
                        <div className="mt-1 flex text-sm text-gray-500">
                          <p className="bg-gray-100 px-2 py-0.5 rounded text-xs">{item.type}</p>
                          <p className="ml-2 border-l border-gray-200 pl-2">Licence {item.license}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <button
                          type="button"
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <FiTrash2 className="mr-1" /> Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Link
                  href="/browse/photos"
                  className="flex items-center text-[#003559] hover:text-[#004B7A] text-sm font-medium"
                >
                  <FiChevronLeft className="mr-1" /> Continuer vos achats
                </Link>
              </div>
            </div>
          </div>
          
          {/* Résumé de la commande */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-[#003559] mb-4">Résumé de la commande</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Sous-total</p>
                  <p>{subtotal.toFixed(2)} €</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>TVA (20%)</p>
                  <p>{tax.toFixed(2)} €</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold">
                  <p>Total</p>
                  <p className="text-[#003559]">{total.toFixed(2)} €</p>
                </div>
              </div>
              
              <button
                type="button"
                className="mt-6 w-full bg-[#FFDD15] text-[#003559] font-semibold py-3 px-4 rounded-md hover:bg-[#FFE75C] transition-colors flex items-center justify-center"
              >
                <FiCreditCard className="mr-2" /> Procéder au paiement
              </button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Nous acceptons les cartes de crédit et PayPal</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="bg-gray-100 p-1 rounded">Visa</span>
                  <span className="bg-gray-100 p-1 rounded">Mastercard</span>
                  <span className="bg-gray-100 p-1 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <FiShoppingCart size={36} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-[#003559] mb-2">Votre panier est vide</h2>
          <p className="text-gray-600 mb-6">
            Vous n'avez pas encore ajouté d'articles à votre panier.
          </p>
          <Link
            href="/browse/photos"
            className="bg-[#FFDD15] text-[#003559] font-semibold py-2 px-4 rounded-md hover:bg-[#FFE75C] transition-colors inline-flex items-center"
          >
            <FiChevronLeft className="mr-1" /> Parcourir notre collection
          </Link>
        </div>
      )}
    </div>
  );
} 