import React from 'react';

export default function CGV() {
  return (
    <main className="w-full min-h-screen bg-[#fdf6f0] text-zinc-700 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-[#e6ccb2] shadow-sm">
        
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-[#6b1d2f] mb-2 text-center">
          Conditions Générales de Vente
        </h1>
        <div className="w-16 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-10" />

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">1. Champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente s'appliquent de plein droit à toutes les transactions, commandes et prestations de service réalisées au sein de l'établissement exploité par la société <strong>PICARFRITES</strong> (enseigne *Les Délices de Saleilles*), incluant la restauration sur place, la fabrication culinaire de plats artisanaux, le buffet à volonté, ainsi que la vente à emporter et l'activité de traiteur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">2. Tarifs et Facturation</h2>
            <p>
              Les tarifs appliqués sont ceux affichés de manière visible au sein de notre restaurant (menus, ardoises des suggestions, formules). Les prix sont exprimés en Euros (€) Toutes Taxes Comprises (TTC) au taux légal en vigueur. La formule Buffet (Entrées à volonté + plat chaud au choix + dessert) est notamment commercialisée au prix fixe de 19,80€ TTC.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">3. Réservations, Événements et Privatisation</h2>
            <p>
              Toute demande d’accueil de groupes importants ou de privatisation des infrastructures (Salle, Patio, Terrasse) donne lieu à la rédaction d’un accord ou devis. Les réservations standards de table (par exemple pour les repas du week-end ou soirées Karaoké) n'engendrent pas de frais de gestion mais le client est tenu de prévenir par téléphone en cas de modification ou d'annulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">4. Modalités de règlement</h2>
            <p>
              Le paiement est exigible immédiatement au moment du service ou du passage en caisse. L'établissement accepte les modes de règlement suivants : Espèces, Cartes Bancaires (CB, Visa, Mastercard) et Titres Restaurant, dans la limite des plafonds réglementaires français applicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">5. Droit applicable et Règlement des litiges</h2>
            <p>
              Les présentes CGV sont soumises à la législation française. En cas de contestation ou de litige portant sur l'exécution de la prestation de restauration, les parties s'engagent à privilégier une conciliation amiable avec la gérance. À défaut, le litige sera porté devant le Tribunal de commerce compétent de Perpignan.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}