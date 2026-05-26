import React from 'react';

export default function MentionsLegales() {
  return (
    <main className="w-full min-h-screen bg-[#fdf6f0] text-zinc-700 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-[#e6ccb2] shadow-sm">
        
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-[#6b1d2f] mb-2 text-center">
          Mentions Légales
        </h1>
        <div className="w-16 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-10" />

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">1. Présentation du site internet</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-style-none pl-0 mt-4 space-y-2 bg-zinc-50 p-4 rounded-xl border border-zinc-200/60 font-medium">
              <li><strong className="text-[#6b1d2f]">Éditeur / Propriétaire :</strong> Société PICARFRITES, SARL au capital de 5 000 EUR</li>
              <li><strong className="text-[#6b1d2f]">Numéro SIREN :</strong> 788 507 549 (RCS Perpignan)</li>
              <li><strong className="text-[#6b1d2f]">Siège social :</strong> 26 Avenue de Perpignan, 66280 Saleilles, France</li>
              <li><strong className="text-[#6b1d2f]">Co-gérants et Responsables de publication :</strong> M. Bernard PICARDEAU et Mme Yanwei GENG (PICARDEAU)</li>
              <li><strong className="text-[#6b1d2f]">Code APE :</strong> 5610A - Restauration traditionnelle</li>
              <li><strong className="text-[#6b1d2f]">Contact :</strong> bernard.yanwei@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">2. Hébergement</h2>
            <p>
              Le site internet est hébergé par la société <strong>Vercel Inc.</strong>, située au 718 Highway 82 East, Suite 220, Sherman, TX 75490, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">3. Propriété intellectuelle</h2>
            <p>
              La société <strong>PICARFRITES</strong> détient les droits d’usage ou est propriétaire de tous les éléments accessibles sur le site (textes, visuels, structure, logos, icônes). Toute reproduction ou exploitation non autorisée de ces éléments, par quelque procédé que ce soit, est strictement interdite sans accord écrit préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#6b1d2f] mb-3">4. Responsabilité</h2>
            <p>
              L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, il ne saurait être tenu pour responsable des omissions, des inexactitudes ou des carences dans la mise à jour des contenus, qu'elles soient de son fait ou du fait des tiers partenaires.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}