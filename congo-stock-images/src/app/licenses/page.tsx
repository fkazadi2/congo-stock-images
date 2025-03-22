import Link from 'next/link';
import { FiCheck, FiX } from 'react-icons/fi';

export default function LicensesPage() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003559] mb-4 text-center">
          Licences d'Utilisation
        </h1>
        <p className="text-gray-600 text-center mb-2">
          Comprendre comment vous pouvez utiliser notre contenu
        </p>
        <div className="h-1 w-24 bg-[#FFDD15] mx-auto mt-6 mb-8"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          Nous proposons différentes licences pour répondre à vos besoins spécifiques. Chaque licence offre des droits d'utilisation différents pour nos photos, illustrations et vidéos.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="prose prose-lg max-w-none">
          <p>
            Chez Congo Stock Images, nous offrons deux principaux types de licences : <strong>Standard</strong> et <strong>Étendue</strong>. Chacune définit ce que vous pouvez faire avec le contenu que vous achetez. Veuillez lire attentivement les termes de chaque licence pour choisir celle qui correspond le mieux à vos besoins.
          </p>
          <p>
            Notre objectif est de vous fournir la flexibilité nécessaire pour utiliser notre contenu tout en protégeant les droits de nos créateurs. Si vous avez des besoins spécifiques qui ne sont pas couverts par ces licences, n'hésitez pas à <Link href="/contact" className="text-[#003559] hover:underline">nous contacter</Link> pour discuter de solutions personnalisées.
          </p>
        </div>
      </div>

      {/* License Comparison */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-[#003559] mb-8 text-center">
          Comparaison des licences
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="px-6 py-4 text-left font-semibold text-[#003559] min-w-[250px]">Droits d'utilisation</th>
                <th className="px-6 py-4 text-center font-semibold text-[#003559]">
                  <span className="block text-lg mb-1">Licence Standard</span>
                  <span className="block text-sm text-gray-500">À partir de 5€</span>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-[#003559]">
                  <span className="block text-lg mb-1">Licence Étendue</span>
                  <span className="block text-sm text-gray-500">À partir de 25€</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Usage personnel</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Usage commercial</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Utilisation dans les médias sociaux</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Sites web et blogs</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Marketing et publicité</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Nombre d'utilisateurs</td>
                <td className="px-6 py-4 text-center text-gray-700">1 utilisateur</td>
                <td className="px-6 py-4 text-center text-gray-700">Illimité</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Nombre d'impressions/vues</td>
                <td className="px-6 py-4 text-center text-gray-700">Jusqu'à 500 000</td>
                <td className="px-6 py-4 text-center text-gray-700">Illimité</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Utilisation dans des produits à la revente</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiX className="h-5 w-5 text-red-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Merchandising</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiX className="h-5 w-5 text-red-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-gray-700">Utilisation dans des templates à la revente</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiX className="h-5 w-5 text-red-500" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <FiCheck className="h-5 w-5 text-green-500" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Attribution requise</td>
                <td className="px-6 py-4 text-center text-gray-700">
                  Pas obligatoire, mais appréciée
                </td>
                <td className="px-6 py-4 text-center text-gray-700">
                  Non requise
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* License Details */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#003559] mb-8 text-center">
          Détails des licences
        </h2>
        
        <div className="space-y-12">
          {/* Standard License */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003559] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Licence Standard</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <p>
                  La licence standard est idéale pour la plupart des utilisations courantes, notamment pour les sites web, les réseaux sociaux, les présentations, la publicité en ligne et les documents marketing.
                </p>
                
                <h4>Ce que vous pouvez faire :</h4>
                <ul>
                  <li>Utiliser le contenu pour des projets personnels ou commerciaux</li>
                  <li>Modifier ou adapter le contenu pour l'adapter à votre projet</li>
                  <li>Utiliser le contenu dans les médias sociaux, sites web, blogs, applications mobiles</li>
                  <li>Utiliser le contenu dans des publicités en ligne et imprimées</li>
                  <li>Utiliser le contenu dans des présentations, rapports et documents internes</li>
                  <li>Utiliser le contenu dans des émissions de télévision, films ou vidéos (jusqu'à 500 000 vues)</li>
                </ul>
                
                <h4>Ce que vous ne pouvez pas faire :</h4>
                <ul>
                  <li>Revendre ou redistribuer le contenu comme élément autonome</li>
                  <li>Utiliser le contenu dans des produits destinés à la revente (t-shirts, tasses, cartes postales, etc.)</li>
                  <li>Utiliser le contenu dans des templates ou des thèmes destinés à la revente</li>
                  <li>Utiliser le contenu d'une manière qui pourrait être considérée comme diffamatoire, obscène ou illégale</li>
                  <li>Revendiquer la propriété du contenu</li>
                </ul>
                
                <p>
                  <strong>Durée :</strong> Perpétuelle (sans limite dans le temps)<br />
                  <strong>Territoire :</strong> Mondial<br />
                  <strong>Prix :</strong> À partir de 5€ (varie selon le contenu)
                </p>
              </div>
            </div>
          </div>
          
          {/* Extended License */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003559] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Licence Étendue</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <p>
                  La licence étendue offre tous les droits de la licence standard, plus le droit d'utiliser le contenu dans des produits destinés à la revente et des applications à distribution massive.
                </p>
                
                <h4>Ce que vous pouvez faire (en plus des droits de la licence standard) :</h4>
                <ul>
                  <li>Utiliser le contenu dans des produits destinés à la revente (t-shirts, tasses, affiches, cartes, etc.)</li>
                  <li>Utiliser le contenu dans des templates ou des thèmes destinés à la revente</li>
                  <li>Utiliser le contenu dans des applications mobiles ou des jeux vidéo distribués commercialement</li>
                  <li>Distribuer le contenu à un nombre illimité d'utilisateurs ou de clients</li>
                  <li>Utiliser le contenu dans des émissions de télévision, films ou vidéos sans limite de vues</li>
                </ul>
                
                <h4>Ce que vous ne pouvez toujours pas faire :</h4>
                <ul>
                  <li>Revendre ou redistribuer le contenu comme élément autonome</li>
                  <li>Utiliser le contenu d'une manière qui pourrait être considérée comme diffamatoire, obscène ou illégale</li>
                  <li>Revendiquer la propriété du contenu</li>
                </ul>
                
                <p>
                  <strong>Durée :</strong> Perpétuelle (sans limite dans le temps)<br />
                  <strong>Territoire :</strong> Mondial<br />
                  <strong>Prix :</strong> À partir de 25€ (varie selon le contenu)
                </p>
              </div>
            </div>
          </div>
          
          {/* Custom License */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-[#003559] px-6 py-4">
              <h3 className="text-xl font-bold text-white">Licence Personnalisée</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <p>
                  Si vos besoins ne sont pas couverts par nos licences standard ou étendue, nous pouvons élaborer une licence personnalisée adaptée à vos exigences spécifiques.
                </p>
                
                <p>
                  Les licences personnalisées sont idéales pour :
                </p>
                <ul>
                  <li>Les grandes organisations avec des besoins complexes</li>
                  <li>Les projets nécessitant des droits exclusifs</li>
                  <li>Les utilisations à très grande échelle</li>
                  <li>Les situations nécessitant des termes juridiques spécifiques</li>
                </ul>
                
                <p>
                  Pour discuter d'une licence personnalisée, veuillez nous contacter à <a href="mailto:licenses@congostockimages.com" className="text-[#003559] hover:underline">licenses@congostockimages.com</a> ou via notre <Link href="/contact" className="text-[#003559] hover:underline">formulaire de contact</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-bold text-[#003559] mb-8 text-center">
          Questions fréquentes sur les licences
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Ai-je besoin d'attribuer l'œuvre à son créateur ou à Congo Stock Images ?
            </h3>
            <p className="text-gray-600">
              Pour la licence standard, l'attribution n'est pas obligatoire mais est appréciée. Pour la licence étendue, aucune attribution n'est requise. Si vous choisissez d'attribuer le contenu, vous pouvez le faire en mentionnant "[Nom du créateur] via Congo Stock Images".
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Puis-je modifier le contenu que j'achète ?
            </h3>
            <p className="text-gray-600">
              Oui, vous pouvez modifier, recadrer, retoucher ou adapter le contenu pour l'adapter à votre projet. Toutefois, vous ne pouvez pas altérer le contenu d'une manière qui pourrait être préjudiciable à la réputation du créateur ou des sujets représentés.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Que se passe-t-il si j'utilise le contenu au-delà des termes de ma licence ?
            </h3>
            <p className="text-gray-600">
              L'utilisation du contenu au-delà des termes de votre licence constitue une violation des droits d'auteur. Si vous souhaitez étendre votre utilisation, vous devez soit mettre à niveau votre licence, soit obtenir une licence supplémentaire.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Pendant combien de temps puis-je utiliser le contenu ?
            </h3>
            <p className="text-gray-600">
              Les deux licences (standard et étendue) sont perpétuelles, ce qui signifie que vous pouvez utiliser le contenu sans limite de temps, tant que vous respectez les termes de la licence.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-[#003559] mb-2">
              Existe-t-il des restrictions sur les pays où je peux utiliser le contenu ?
            </h3>
            <p className="text-gray-600">
              Non, nos licences sont valables dans le monde entier. Vous pouvez utiliser le contenu dans n'importe quel pays, à condition de respecter les lois locales.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#003559] mb-6">
          Prêt à acquérir du contenu ?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Parcourez notre collection unique d'images et de vidéos authentiques de la République Démocratique du Congo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/browse/photos" className="px-6 py-3 bg-[#FFDD15] text-[#003559] font-semibold rounded-md hover:bg-[#FFE75C] transition-colors">
            Explorer les photos
          </Link>
          <Link href="/browse/illustrations" className="px-6 py-3 bg-[#FFDD15] text-[#003559] font-semibold rounded-md hover:bg-[#FFE75C] transition-colors">
            Découvrir les illustrations
          </Link>
          <Link href="/browse/videos" className="px-6 py-3 bg-[#FFDD15] text-[#003559] font-semibold rounded-md hover:bg-[#FFE75C] transition-colors">
            Parcourir les vidéos
          </Link>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-xl">
        <p className="text-sm text-gray-500 text-center">
          Cette page est fournie à titre informatif uniquement et ne constitue pas un conseil juridique. Les termes complets de nos licences sont disponibles lors de l'achat du contenu. En cas de doute sur l'utilisation autorisée, veuillez nous contacter avant d'utiliser le contenu.
        </p>
      </div>
    </div>
  );
} 