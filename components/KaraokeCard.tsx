import React from 'react';
import eventMenus from '@/data/karaokeData';

export default function KaraokeCard() {
  return (
    <>
      {eventMenus.map((event, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl border-2 border-dashed border-[#e6ccb2] p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between group"
        >
          {/* Badge Date décoratif */}
          <div className="mb-4">
            <span className="inline-block bg-[#0f2a4a] text-[#fdf6f0] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2">
              Événement Spécial
            </span>
            <h3 className="text-lg font-black text-[#6b1d2f] leading-snug group-hover:text-[#b1344d] transition-colors">
              {event.date}
            </h3>
          </div>

          {/* Plats & Formule */}
          <div className="space-y-4">
            {event.plats.map((plat, i) => (
              <div key={i} className="bg-[#fdf6f0]/40 border border-[#e6ccb2]/40 p-4 rounded-xl flex flex-col justify-between h-full">
                <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-medium">
                  {plat.nom}
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-dashed border-[#e6ccb2]">
                  <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">Tarif Formule</span>
                  <span className="text-xl font-black text-[#0f2a4a]">
                    {plat.prix}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Petites encoches style "ticket" sur les côtés sur grand écran */}
          <div className="hidden md:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#fdf6f0] border-r border-[#e6ccb2] rounded-r-full" />
          <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#fdf6f0] border-l border-[#e6ccb2] rounded-l-full" />
        </div>
      ))}
    </>
  );
}