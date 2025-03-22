import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003559] mb-4 text-center">
          Conditions d'Utilisation
        </h1>
        <p className="text-gray-600 text-center mb-2">
          Dernière mise à jour: 1er Novembre 2023
        </p>
        <div className="h-1 w-24 bg-[#FFDD15] mx-auto mt-6 mb-8"></div>
        <p className="text-gray-600">
          Veuillez lire attentivement ces conditions d'utilisation avant d'utiliser notre service. En accédant à notre site ou en utilisant nos services, vous acceptez d'être lié par ces conditions.
        </p>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Les présentes Conditions d'Utilisation (les "Conditions") régissent votre accès et votre utilisation du site web Congo Stock Images, ainsi que de tous les contenus, services et fonctionnalités accessibles via le site (collectivement, le "Service"). Le Service est exploité par Congo Stock Images ("nous", "notre" ou "nos").
          </p>
          <p>
            En accédant ou en utilisant notre Service, vous reconnaissez avoir lu, compris et accepté d'être lié par ces Conditions. Si vous n'acceptez pas l'intégralité des présentes Conditions, vous n'êtes pas autorisé à accéder ou à utiliser notre Service.
          </p>

          <h2>2. Modifications des Conditions</h2>
          <p>
            Nous nous réservons le droit, à notre seule discrétion, de modifier ces Conditions à tout moment. Si nous apportons des modifications importantes, nous vous en informerons par e-mail ou par un avis sur notre site. Votre utilisation continue du Service après la publication des modifications constitue votre acceptation des nouvelles Conditions.
          </p>

          <h2>3. Accès au Service</h2>
          <p>
            Pour accéder à certaines fonctionnalités du Service, vous devrez peut-être créer un compte. Vous êtes responsable du maintien de la confidentialité de vos identifiants de compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
          </p>
          <p>
            Nous nous réservons le droit de refuser l'accès au Service, de fermer des comptes ou de supprimer ou modifier du contenu à notre seule discrétion.
          </p>

          <h2>4. Droits de Propriété Intellectuelle</h2>
          <p>
            Le contenu disponible sur Congo Stock Images, y compris mais sans s'y limiter, les images, photographies, illustrations, vidéos, textes, logos et marques de service, est protégé par des droits d'auteur, des marques de commerce et d'autres lois sur la propriété intellectuelle.
          </p>
          <p>
            Lorsque vous achetez une licence pour utiliser du contenu, vous n'acquérez pas la propriété du contenu lui-même, mais obtenez une licence non exclusive et non transférable pour utiliser le contenu conformément aux termes de la licence spécifique que vous avez acquise.
          </p>

          <h2>5. Licences d'Utilisation</h2>
          <p>
            Congo Stock Images propose plusieurs types de licences pour l'utilisation du contenu disponible sur notre Service. Les droits spécifiques accordés dépendent du type de licence que vous achetez. Pour plus de détails sur les différentes licences disponibles et leurs conditions d'utilisation, veuillez consulter notre <Link href="/licenses" className="text-[#003559] hover:underline">page des licences</Link>.
          </p>
          <p>
            Nonobstant le type de licence que vous achetez, vous n'êtes pas autorisé à :
          </p>
          <ul>
            <li>Utiliser le contenu d'une manière qui pourrait être considérée comme diffamatoire, pornographique, obscène, immorale ou illégale</li>
            <li>Utiliser le contenu pour promouvoir ou représenter des activités illégales</li>
            <li>Revendre, redistribuer ou fournir l'accès au contenu à des tiers d'une manière qui leur permettrait d'utiliser, de télécharger ou de distribuer le contenu</li>
            <li>Utiliser le contenu dans un logo, une marque de commerce ou un design de service</li>
            <li>Revendiquer la propriété du contenu ou de toute partie de celui-ci</li>
          </ul>

          <h2>6. Contenu des Utilisateurs</h2>
          <p>
            Certains utilisateurs peuvent soumettre du contenu à notre Service en tant que créateurs. En soumettant du contenu à Congo Stock Images, vous :
          </p>
          <ul>
            <li>Garantissez que vous êtes le propriétaire légitime du contenu ou que vous avez les droits nécessaires pour accorder les licences décrites dans ces Conditions</li>
            <li>Accordez à Congo Stock Images une licence mondiale, non exclusive, transférable, sous-licenciable, libre de redevances pour utiliser, reproduire, modifier, adapter, publier, traduire, distribuer et afficher ce contenu sur notre Service et pour nos activités de marketing et promotionnelles</li>
            <li>Acceptez que votre contenu puisse être vu par d'autres utilisateurs du Service et par le public</li>
          </ul>
          <p>
            Nous nous réservons le droit de retirer tout contenu qui enfreint ces Conditions ou qui est autrement répréhensible à notre seule discrétion.
          </p>

          <h2>7. Paiements et Remboursements</h2>
          <p>
            Les prix affichés sur notre Service sont en Euros (€) et n'incluent pas les taxes qui peuvent être applicables selon votre juridiction. En effectuant un achat, vous acceptez de payer tous les frais au prix affiché, y compris toutes les taxes applicables.
          </p>
          <p>
            Tous les paiements sont traités par des prestataires de services de paiement tiers. En effectuant un achat, vous acceptez également les conditions d'utilisation de ces prestataires.
          </p>
          <p>
            En raison de la nature numérique du contenu, nous n'offrons généralement pas de remboursements. Toutefois, si vous rencontrez des problèmes avec votre achat, veuillez nous contacter à <a href="mailto:support@congostockimages.com" className="text-[#003559] hover:underline">support@congostockimages.com</a>.
          </p>

          <h2>8. Compte Créateur</h2>
          <p>
            Si vous créez un compte créateur sur Congo Stock Images, vous acceptez de fournir des informations précises et complètes, et de les maintenir à jour. En plus des présentes Conditions, les créateurs sont également soumis à nos <Link href="/creator-terms" className="text-[#003559] hover:underline">Conditions pour les Créateurs</Link>, qui fournissent des détails sur les commissions, les paiements, le processus de soumission de contenu et autres aspects spécifiques aux comptes créateurs.
          </p>

          <h2>9. Limitation de Responsabilité</h2>
          <p>
            Dans la mesure maximale permise par la loi applicable, Congo Stock Images, ses dirigeants, employés, partenaires et fournisseurs ne seront pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans limitation, la perte de profits, de données, d'utilisation, de clientèle ou d'autres pertes intangibles, résultant de :
          </p>
          <ul>
            <li>Votre accès ou utilisation ou incapacité d'accéder ou d'utiliser le Service</li>
            <li>Toute conduite ou contenu d'un tiers sur le Service</li>
            <li>Tout contenu obtenu à partir du Service</li>
            <li>Accès non autorisé, utilisation ou altération de vos transmissions ou contenu</li>
          </ul>

          <h2>10. Indemnisation</h2>
          <p>
            Vous acceptez de défendre, d'indemniser et de tenir Congo Stock Images, ses dirigeants, employés et agents indemnes de toute réclamation, responsabilité, dommage, perte et dépense, y compris les frais juridiques et comptables raisonnables, découlant de ou liés à votre violation de ces Conditions ou de votre utilisation du Service.
          </p>

          <h2>11. Droit Applicable et Juridiction</h2>
          <p>
            Ces Conditions sont régies par les lois de la République Démocratique du Congo. Tout litige découlant de ou lié à ces Conditions sera soumis à la juridiction exclusive des tribunaux de Kinshasa, République Démocratique du Congo.
          </p>

          <h2>12. Contact</h2>
          <p>
            Si vous avez des questions concernant ces Conditions, veuillez nous contacter à <a href="mailto:legal@congostockimages.com" className="text-[#003559] hover:underline">legal@congostockimages.com</a>.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Ces conditions doivent être lues conjointement avec nos autres politiques :
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/privacy" className="text-[#003559] hover:underline">
            Politique de Confidentialité
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/licenses" className="text-[#003559] hover:underline">
            Licences d'Utilisation
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/creator-terms" className="text-[#003559] hover:underline">
            Conditions pour les Créateurs
          </Link>
        </div>
      </div>
    </div>
  );
} 