import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003559] mb-4 text-center">
          Politique de Confidentialité
        </h1>
        <p className="text-gray-600 text-center mb-2">
          Dernière mise à jour: 1er Novembre 2023
        </p>
        <div className="h-1 w-24 bg-[#FFDD15] mx-auto mt-6 mb-8"></div>
        <p className="text-gray-600">
          Chez Congo Stock Images, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2>1. Informations que nous collectons</h2>
          <p>
            Nous collectons différents types d'informations lorsque vous utilisez notre site et nos services, notamment :
          </p>
          
          <h3>1.1. Informations fournies directement par vous</h3>
          <ul>
            <li><strong>Informations d'inscription :</strong> Lorsque vous créez un compte, nous collectons votre nom, adresse e-mail, mot de passe et pays de résidence.</li>
            <li><strong>Informations de profil :</strong> Si vous êtes un créateur de contenu, nous pouvons également collecter votre biographie, photo de profil, liens vers vos sites web ou réseaux sociaux, et informations professionnelles.</li>
            <li><strong>Informations de paiement :</strong> Pour traiter les achats, nous collectons vos informations de paiement, y compris le nom du titulaire de la carte, l'adresse de facturation et les détails de la carte de crédit (ces derniers étant traités directement par nos prestataires de services de paiement).</li>
            <li><strong>Communications :</strong> Lorsque vous nous contactez, nous conservons vos messages et vos coordonnées pour vous répondre et améliorer notre service client.</li>
          </ul>
          
          <h3>1.2. Informations collectées automatiquement</h3>
          <ul>
            <li><strong>Informations d'utilisation :</strong> Nous recueillons des informations sur vos interactions avec notre site, comme les pages visitées, les fonctionnalités utilisées, les liens cliqués, le contenu visualisé, et le temps passé sur notre site.</li>
            <li><strong>Informations sur l'appareil :</strong> Nous collectons des informations sur l'appareil que vous utilisez pour accéder à notre site, y compris le type d'appareil, le système d'exploitation, le navigateur, l'adresse IP et autres identifiants uniques.</li>
            <li><strong>Cookies et technologies similaires :</strong> Nous utilisons des cookies et technologies similaires pour collecter des informations sur votre navigation, mémoriser vos préférences et personnaliser votre expérience.</li>
          </ul>

          <h2>2. Comment nous utilisons vos informations</h2>
          <p>
            Nous utilisons les informations collectées pour les finalités suivantes :
          </p>
          <ul>
            <li><strong>Fournir nos services :</strong> Gérer votre compte, traiter vos transactions, vous permettre de télécharger ou acheter du contenu, et vous fournir le service que vous avez demandé.</li>
            <li><strong>Personnaliser votre expérience :</strong> Adapter le contenu et les recommandations en fonction de vos préférences et de votre historique d'utilisation.</li>
            <li><strong>Améliorer nos services :</strong> Analyser l'utilisation de notre site pour identifier les problèmes, optimiser les fonctionnalités et développer de nouveaux services.</li>
            <li><strong>Communiquer avec vous :</strong> Vous envoyer des notifications sur votre compte, des confirmations de transactions, des réponses à vos questions, et des informations sur les modifications importantes de nos services.</li>
            <li><strong>Marketing et promotions :</strong> Vous envoyer des communications marketing sur nos services, événements et promotions (vous pouvez vous désabonner à tout moment).</li>
            <li><strong>Sécurité et protection :</strong> Protéger la sécurité et l'intégrité de notre site, prévenir la fraude, et faire respecter nos conditions d'utilisation.</li>
            <li><strong>Obligations légales :</strong> Se conformer aux lois applicables et répondre aux demandes légales des autorités publiques.</li>
          </ul>

          <h2>3. Comment nous partageons vos informations</h2>
          <p>
            Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes :
          </p>
          <ul>
            <li><strong>Prestataires de services :</strong> Nous partageons des informations avec des prestataires de services tiers qui nous aident à fournir nos services, comme le traitement des paiements, l'hébergement de sites web, l'analyse de données, et le service client.</li>
            <li><strong>Créateurs de contenu :</strong> Si vous achetez du contenu, nous partageons certaines informations sur la transaction avec le créateur du contenu, comme le type de licence achetée et l'utilisation prévue.</li>
            <li><strong>Partenaires commerciaux :</strong> Nous pouvons partager des informations agrégées ou anonymisées avec nos partenaires commerciaux pour des analyses de marché ou des rapports sectoriels.</li>
            <li><strong>Conformité légale :</strong> Nous pouvons divulguer des informations si nous estimons de bonne foi que cela est nécessaire pour se conformer à la loi, protéger nos droits légaux, ou en cas d'urgence pour protéger la sécurité de toute personne.</li>
            <li><strong>Transferts d'entreprise :</strong> En cas de fusion, acquisition, réorganisation ou vente d'actifs, vos informations peuvent être transférées dans le cadre de cette transaction.</li>
          </ul>

          <h2>4. Vos droits et choix</h2>
          <p>
            Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos informations personnelles, notamment :
          </p>
          <ul>
            <li><strong>Accès et portabilité :</strong> Vous pouvez demander une copie de vos informations personnelles que nous détenons et, dans certains cas, demander qu'elles soient transmises à un autre fournisseur de services.</li>
            <li><strong>Rectification :</strong> Vous pouvez mettre à jour ou corriger vos informations personnelles à tout moment en accédant aux paramètres de votre compte ou en nous contactant.</li>
            <li><strong>Effacement :</strong> Dans certains cas, vous pouvez demander la suppression de vos informations personnelles de nos systèmes.</li>
            <li><strong>Restriction et opposition :</strong> Vous pouvez demander que nous limitions le traitement de vos données ou vous opposer à certains traitements, notamment à des fins de marketing direct.</li>
            <li><strong>Consentement :</strong> Lorsque nous traitons vos données sur la base de votre consentement, vous pouvez retirer ce consentement à tout moment.</li>
          </ul>
          <p>
            Pour exercer ces droits, veuillez nous contacter à <a href="mailto:privacy@congostockimages.com" className="text-[#003559] hover:underline">privacy@congostockimages.com</a>. Nous répondrons à votre demande dans les délais prévus par la loi applicable.
          </p>

          <h2>5. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques, administratives et physiques appropriées pour protéger vos informations personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération et la destruction. Ces mesures comprennent le chiffrement des données sensibles, les contrôles d'accès, les pare-feu et la formation régulière de notre personnel sur les pratiques de protection des données.
          </p>
          <p>
            Malgré nos efforts, aucune méthode de transmission ou de stockage électronique n'est totalement sécurisée. Par conséquent, nous ne pouvons garantir une sécurité absolue. Si vous avez des raisons de croire que votre interaction avec nous n'est plus sécurisée, veuillez nous en informer immédiatement.
          </p>

          <h2>6. Conservation des données</h2>
          <p>
            Nous conservons vos informations personnelles aussi longtemps que nécessaire pour vous fournir nos services, respecter nos obligations légales, résoudre les litiges et faire appliquer nos accords. Lorsque nous n'avons plus besoin de vos informations personnelles, nous les supprimons ou les anonymisons de manière sécurisée.
          </p>

          <h2>7. Transferts internationaux de données</h2>
          <p>
            Congo Stock Images est basé en République Démocratique du Congo, mais nos opérations peuvent impliquer le transfert de vos informations vers d'autres pays. Lorsque nous transférons des données personnelles en dehors de votre pays de résidence, nous prenons des mesures pour assurer un niveau de protection adéquat, conformément aux lois applicables en matière de protection des données.
          </p>

          <h2>8. Protection de la vie privée des enfants</h2>
          <p>
            Nos services ne s'adressent pas aux personnes de moins de 18 ans, et nous ne collectons pas sciemment des informations personnelles auprès d'enfants de moins de 18 ans. Si vous êtes parent ou tuteur et que vous pensez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures appropriées.
          </p>

          <h2>9. Cookies et technologies similaires</h2>
          <p>
            Nous utilisons des cookies et des technologies similaires pour collecter des informations sur votre utilisation de notre site, mémoriser vos préférences et vous fournir une expérience personnalisée. Vous pouvez gérer vos préférences en matière de cookies en modifiant les paramètres de votre navigateur. Toutefois, désactiver certains cookies peut limiter votre capacité à utiliser certaines fonctionnalités de notre site.
          </p>
          <p>
            Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre <Link href="/cookies" className="text-[#003559] hover:underline">Politique de Cookies</Link>.
          </p>

          <h2>10. Liens vers d'autres sites</h2>
          <p>
            Notre site peut contenir des liens vers d'autres sites web qui ne sont pas exploités par nous. Si vous cliquez sur un lien tiers, vous serez dirigé vers le site de ce tiers. Nous vous recommandons vivement de consulter la politique de confidentialité de chaque site que vous visitez. Nous n'avons aucun contrôle et n'assumons aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques des sites ou services tiers.
          </p>

          <h2>11. Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre en réponse à des changements juridiques, techniques ou commerciaux. Lorsque nous effectuons des modifications importantes, nous vous en informerons par e-mail ou par un avis sur notre site, et mettrons à jour la date de "dernière mise à jour" en haut de cette politique.
          </p>
          <p>
            Nous vous encourageons à consulter régulièrement cette politique pour rester informé de nos pratiques en matière de protection des données.
          </p>

          <h2>12. Nous contacter</h2>
          <p>
            Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :
          </p>
          <p>
            <strong>Congo Stock Images</strong><br />
            Adresse : 123 Avenue du Commerce, Gombe, Kinshasa, RDC<br />
            Email : <a href="mailto:privacy@congostockimages.com" className="text-[#003559] hover:underline">privacy@congostockimages.com</a><br />
            Téléphone : +243 123 456 789
          </p>
          <p>
            Si vous n'êtes pas satisfait de notre réponse, vous avez le droit de déposer une plainte auprès de l'autorité de protection des données compétente dans votre pays de résidence.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-gray-600 mb-4">
          Cette politique doit être lue conjointement avec nos autres politiques :
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/terms" className="text-[#003559] hover:underline">
            Conditions d'Utilisation
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/licenses" className="text-[#003559] hover:underline">
            Licences d'Utilisation
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/cookies" className="text-[#003559] hover:underline">
            Politique de Cookies
          </Link>
        </div>
      </div>
    </div>
  );
} 