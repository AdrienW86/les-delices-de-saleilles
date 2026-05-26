import React from 'react';

export default function About() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 text-[#6b1d2f] font-sans">
      
      {/* EN-TÊTE PRINCIPAL */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-2">
          Qui sommes-nous ?
        </h1>
        <div className="w-24 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-6" />
        <p className="text-zinc-600 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">
          "Notre restaurant, c’est avant tout une histoire de passion pour la cuisine et le partage.
          Situé au cœur de la région, nous vous accueillons dans une ambiance chaleureuse et conviviale,
          où chaque plat est préparé avec soin, authenticité et générosité."
        </p>
      </div>

      {/* BLOCS DE CONTENU EN GRILLE OU EN PILIER */}
      <div className="space-y-12">
        
        {/* PARAGRAPHE 1 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🍳</span>
            <h2 className="text-2xl font-bold text-[#6b1d2f]">
              Un lieu de vie, une cuisine de cœur
            </h2>
          </div>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
            Ici, nous croyons que la bonne cuisine commence par des produits de qualité.
            Nos plats sont élaborés à partir d’ingrédients frais, de saison, sélectionnés auprès de producteurs locaux
            dans la mesure du possible. Que vous veniez pour un déjeuner entre collègues, un dîner en amoureux ou un repas de famille,
            notre équipe met tout en œuvre pour faire de chaque moment un instant de plaisir.
          </p>
        </div>

        {/* PARAGRAPHE 2 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">❤️</span>
            <h2 className="text-2xl font-bold text-[#6b1d2f]">
              Une équipe passionnée
            </h2>
          </div>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
            Derrière chaque assiette, une équipe investie et passionnée vous propose une cuisine savoureuse
            aux influences variées, mêlant tradition et créativité. Notre personnel en salle et en cuisine travaille main dans la main
            pour vous garantir un service attentionné et des plats faits maison, généreux et savoureux.
          </p>
        </div>

        {/* PARAGRAPHE 3 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✨</span>
            <h2 className="text-2xl font-bold text-[#6b1d2f]">
              Un engagement pour la qualité
            </h2>
          </div>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
            Nous avons à cœur de vous offer une expérience culinaire authentique.
            De l’accueil au dessert, notre priorité est votre satisfaction. Le respect des saveurs, la fraîcheur des produits,
            l’ambiance du lieu et la qualité du service sont au centre de nos engagements quotidiens.
          </p>
        </div>

      </div>

      {/* MOT DE LA FIN STYLE BANDEAU INVITATION */}
      <div className="mt-16 text-center bg-[#0f2a4a] text-[#fdf6f0] p-8 rounded-3xl shadow-inner border border-white/10">
        <p className="text-lg md:text-xl font-black uppercase tracking-wider mb-2">
          Plus qu’un restaurant
        </p>
        <p className="text-sm md:text-base text-[#fdf6f0]/80 font-medium">
          Un lieu où l’on vient pour bien manger, bien boire et surtout bien vivre.
        </p>
        <span className="inline-block mt-4 text-amber-400 font-extrabold text-lg tracking-wide">
          Bienvenue chez nous ! 👋
        </span>
      </div>

    </section>
  );
}