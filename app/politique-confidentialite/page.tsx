import React from 'react';

export default function Confidentialite() {
  return (
    <main className="w-full min-h-screen bg-[#fdf6f0] text-zinc-700 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-[#e6ccb2] shadow-sm">
        
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-[#6b1d2f] mb-2 text-center">
          Politique de Confidentialité
        </h1>
        <div className="w-16 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-10" />

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">1. Collecte et Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est la société <strong>PICARFRITES</strong>, située au 26 Avenue de Perpignan, 66280 Saleilles. Les données collectées via notre formulaire (Nom, e-mail, contenu du message) sont basées sur votre consentement légitime à communiquer avec notre établissement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">2. Finalités de la collecte</h2>
            <p>
              Vos informations personnelles sont uniquement utilisées pour :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 font-medium text-zinc-600">
              <li>Organiser, valider et gérer vos demandes de réservations de table.</li>
              <li>Étudier vos projets de groupes ou de privatisation des espaces du restaurant.</li>
              <li>Répondre à vos messages et questions de manière personnalisée.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">3. Non-prospection et Confidentialité (RGPD)</h2>
            <p>
              Conformément à l'article 21 du règlement européen 2016/679 (RGPD), la direction rappelle que l'entreprise s'oppose formellement à toute utilisation ou mise à disposition de ses fichiers à des fins de prospection commerciale tierce. Vos données restent confidentielles et ne sont jamais vendues ou échangées.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">4. Conservation et Droits des utilisateurs</h2>
            <p>
              Vos données de contact sont stockées de façon sécurisée pour une durée maximale de 36 mois. Vous bénéficiez d’un droit permanent d’accès, de modification, de portabilité et de suppression de vos données personnelles. Pour faire valoir ce droit, contactez-nous par e-mail à : <span className="text-[#6b1d2f] font-semibold">bernard.yanwei@gmail.com</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}