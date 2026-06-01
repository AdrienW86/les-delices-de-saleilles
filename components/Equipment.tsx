'use client';

import React, { useState } from 'react';
import SimpleBanner from './SimpleBanner';
import SimpleBannerVideo from './SimpleBannerVideo';

export default function Equipment() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4 md:px-8 text-[#6b1d2f] font-sans">
      
      {/* SECTION PRÉSENTATION RESTAURANT */}
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          📍 À 5 minutes de Perpignan
        </span>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide mt-3 mb-6">
          Les Délices de Saleilles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-zinc-700 font-medium text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          <div className="bg-white p-6 rounded-2xl border border-[#e6ccb2]/60 shadow-sm">
            Situé au cœur de Saleilles, <strong className="text-[#6b1d2f]">Les Délices de Saleilles</strong> vous accueillent dans un cadre chaleureux et familial pour vous faire voyager à travers une cuisine unique, mêlant avec brio la richesse de la <strong className="text-[#0f2a4a]">tradition française</strong> et le raffinement des <strong className="text-[#0f2a4a]">spécialités chinoises</strong>.
          </div>
          
          <div className="flex flex-col justify-between items-center bg-white p-6 rounded-2xl border border-[#e6ccb2]/60 shadow-sm">
            <p className={`transition-all duration-300 ${isVisible ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-none'}`}>
              Notre chef met l’accent sur la convivialité, le fait-maison et le partage. Que ce soit pour un déjeuner d’affaires rapide, un moment chaleureux en famille ou un dîner festif entre amis, chaque assiette est une promesse de gourmandise et d'exotisme.
            </p>
            <button 
              onClick={toggleVisibility} 
              className="mt-4 md:hidden text-sm font-bold text-amber-500 hover:text-amber-600 underline flex items-center gap-1"
            >
              {isVisible ? 'Voir moins ▲' : 'Lire la suite ▼'}
            </button>
          </div>
        </div>
      </div>

      <hr className="border-[#e6ccb2]/40 my-16" />

      {/* BLOC ÉVÉNEMENTS & OFFRES COMMERCIALES */}
      <div className="space-y-16">
        
        {/* PROCHAINEMENT */}
        <div className="bg-white p-4 md:p-8 rounded-3xl border border-[#e6ccb2] shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-6 flex items-center justify-center gap-2">
            <span>🎉</span> Prochainement au restaurant
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <SimpleBanner url="/dj.avif" />
          </div>
        </div>

        {/* LA NOUVELLE FORMULE BUFFET (Gros argument commercial) */}
        <div className="bg-[#0f2a4a] text-[#fdf6f0] p-6 md:p-10 rounded-3xl shadow-lg border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            <span className="bg-amber-400 text-[#0f2a4a] text-xs font-black uppercase px-3 py-1 rounded-full">
              🔥 Nouveau & Exclusif
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wide">La Formule Buffet</h2>
            <p className="text-[#fdf6f0]/80 font-medium text-sm md:text-base leading-relaxed">
              Profitez d'un assortiment d'entrées à volonté sur notre tout nouveau buffet asiatique, suivi d'un plat chaud savoureux au choix (parmi 2 propositions de la cheffe) et d'un dessert gourmand pour clôturer le repas.
            </p>
            <div className="text-2xl md:text-3xl font-black text-amber-400 pt-2">
              Le Tout pour seulement <span className="underline">19,80€</span> !
            </div>
          </div>
          <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
            <SimpleBanner url="/buffet.jpg" />
          </div>
        </div>

        {/* HAPPY HOUR VIDEO */}
        <div className="bg-white p-4 md:p-8 rounded-3xl border border-[#e6ccb2] shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-6">
            🍻 Rejoignez-nous pour l'Happy Hour !
          </h2>
          <div className="rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-md">
            <SimpleBannerVideo url="/happy_hour.mp4" />
          </div>
        </div>

        {/* LES PETITS PLUS */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden border border-[#e6ccb2]/60 shadow-sm"><SimpleBanner url="/rou.png" /></div>
          <div className="rounded-xl overflow-hidden border border-[#e6ccb2]/60 shadow-sm"><SimpleBanner url="/nems-chocolat.png" /></div>
          <div className="rounded-xl overflow-hidden border border-[#e6ccb2]/60 shadow-sm"><SimpleBanner url="/sauce-piquante.png" /></div>
        </div> */}

        {/* SUGGESTION DE LA SEMAINE */}
        <div id="menu" className="scroll-mt-28 bg-white p-6 md:p-10 rounded-3xl border border-[#e6ccb2] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-4">
            <span className="bg-emerald-50 text-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded-full border border-emerald-200">
              🌱 Fraîcheur Garantie
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wide">Suggestion de la semaine</h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
              Chaque semaine, notre cheffe laisse libre cours à son imagination pour vous faire découvrir un nouveau délice. Entièrement cuisinés maison à partir d'ingrédients frais et de saison, nos plats du jour sauront vous surprendre et égayer votre pause déjeuner.
            </p>
          </div>
          <div className="md:col-span-6 rounded-2xl overflow-hidden shadow-md">
            <SimpleBanner url="/tartare.png" />
          </div>
        </div>

        {/* SUGGESTION DU WEEK-END */}
        <div id="suggestion" className="scroll-mt-28 bg-white p-6 md:p-10 rounded-3xl border border-[#e6ccb2] shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:flex-row-reverse">
          <div className="md:col-span-6 md:order-2 space-y-4">
            <span className="bg-amber-50 text-amber-600 text-xs font-bold uppercase px-3 py-1 rounded-full border border-amber-200">
              🥂 Instant Weekend
            </span>
            <h2 className="text-3xl font-black uppercase tracking-wide">Suggestion du week-end</h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
              Le week-end est placé sous le signe de la haute gourmandise et de la détente ! Venez déguster notre suggestion spéciale de fin de semaine. Une recette généreuse et festive, idéale à partager en famille ou entre amis autour d'une bonne table.
            </p>
          </div>
          <div className="md:col-span-6 md:order-1 rounded-2xl overflow-hidden shadow-md w-full">
            <SimpleBanner url="/fraginat.png" />
          </div>
        </div>

      </div>
    </section>
  );
}