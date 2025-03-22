import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiUser, FiFileText } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003559] mb-4">
          Contactez-Nous
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vous avez des questions, des suggestions ou vous souhaitez en savoir plus sur nos services ? Notre équipe est là pour vous répondre.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#003559] mb-6">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    placeholder="Objet de votre message"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FiMessageCircle className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFDD15] focus:border-[#FFDD15]"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-[#FFDD15] focus:ring-[#FFDD15] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="text-gray-600">
                    J'accepte que mes données soient traitées conformément à la <Link href="/privacy" className="text-[#003559] hover:underline">politique de confidentialité</Link>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FFDD15] text-[#003559] font-semibold py-3 px-4 rounded-md hover:bg-[#FFE75C] transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#003559] mb-6">
              Nos coordonnées
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDD15]/20 flex items-center justify-center">
                  <FiMail className="h-5 w-5 text-[#003559]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#003559]">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@congostockimages.com" className="hover:underline">
                      contact@congostockimages.com
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Nous répondons généralement dans les 24 heures
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDD15]/20 flex items-center justify-center">
                  <FiPhone className="h-5 w-5 text-[#003559]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#003559]">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+243123456789" className="hover:underline">
                      +243 123 456 789
                    </a>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Du lundi au vendredi, de 9h à 17h (heure de Kinshasa)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDD15]/20 flex items-center justify-center">
                  <FiMapPin className="h-5 w-5 text-[#003559]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#003559]">Adresse</h3>
                  <p className="text-gray-600">
                    123 Avenue du Commerce<br />
                    Gombe, Kinshasa<br />
                    République Démocratique du Congo
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDD15]/20 flex items-center justify-center">
                  <FiClock className="h-5 w-5 text-[#003559]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#003559]">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h - 17h<br />
                    Samedi: 10h - 14h<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-[#003559] mb-3">
                  Support technique
                </h3>
                <p className="text-gray-600 mb-4">
                  Pour toute question technique concernant la plateforme ou votre compte, contactez notre équipe de support :
                </p>
                <a 
                  href="mailto:support@congostockimages.com" 
                  className="inline-flex items-center text-[#003559] font-semibold hover:underline"
                >
                  support@congostockimages.com
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-[#003559] mb-6 text-center">
          Questions fréquentes
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Comment puis-je devenir créateur sur Congo Stock Images ?
            </h3>
            <p className="text-gray-600">
              Pour devenir créateur, visitez notre <Link href="/creator/join" className="text-[#003559] hover:underline">page d'inscription créateur</Link> et suivez les étapes indiquées. Après examen de votre candidature, vous pourrez commencer à télécharger votre contenu.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Comment acheter du contenu sur votre plateforme ?
            </h3>
            <p className="text-gray-600">
              Créez un compte, parcourez notre collection, ajoutez les éléments souhaités à votre panier et procédez au paiement. Une fois la transaction complétée, vous pourrez télécharger immédiatement votre contenu.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Quels sont les modes de paiement acceptés ?
            </h3>
            <p className="text-gray-600">
              Nous acceptons les cartes de crédit (Visa, Mastercard), PayPal, et plusieurs méthodes de paiement mobile populaires en RDC comme M-Pesa et Orange Money.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Puis-je demander du contenu sur mesure ?
            </h3>
            <p className="text-gray-600">
              Oui, nous proposons des services personnalisés pour les entreprises et organisations. Contactez-nous via le formulaire ci-dessus en précisant vos besoins, et notre équipe vous répondra avec une proposition adaptée.
            </p>
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="max-w-5xl mx-auto mt-16 h-[400px] bg-gray-200 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">Carte interactive de notre emplacement (à intégrer)</p>
      </div>
      
    </div>
  );
} 