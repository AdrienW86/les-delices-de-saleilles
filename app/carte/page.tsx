"use client";

import { useState } from "react";
import menuData from "@/data/menuData";

// Formatage des prix en euros
const formatPrice = (price: number | { normal: number; xl: number }) => {
  if (typeof price === "number") {
    return `${price.toFixed(2)} €`;
  }
  return `T1: ${price.normal.toFixed(2)}€ | T2: ${price.xl.toFixed(2)}€`;
};

export default function CartePage() {
  // Liste des catégories pour les onglets principaux (Menu Découverte ajouté en premier)
  const categories = [
    { id: "menu-decouverte", label: "✨ Formule & Menu" },
    { id: "plats", label: "Côté Cuisine (Terre & Mer)" },
    { id: "asiatique", label: "Spécialités Asiatiques" },
    { id: "entrees", label: "Entrées & Salades" },
    { id: "desserts", label: "Desserts" },
    { id: "boissons", label: "Boissons & Vins" },
  ];

  // Le menu s'ouvre par défaut sur la formule Découverte
  const [activeTab, setActiveTab] = useState("menu-decouverte");

  // Données locales du menu découverte
  const menuDecouverteData = {
    title: "Menu Découverte",
    price: 24.90, // Modifie le prix ici si nécessaire
    description: "Le parfait équilibre entre fraîcheur, tradition et évasion culinaire.",
    sections: [
      {
        name: "Entrées au choix",
        items: ["Salade de chèvre chaud au miel", "Jambon Serrano et melon", "Samoussa au poulet"]
      },
      {
        name: "Plats au choix",
        items: ["Brochette de bœuf", "Gambas à l'ail et persil", "Rou Jia Mo (Spécialité maison)"]
      },
      {
        name: "Desserts au choix",
        items: ["Glace vanille", "Dessert du jour"]
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-[#fdf6f0] text-[#6b1d2f] py-12 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-2">
            Notre Carte
          </h1>
          <div className="w-24 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 max-w-md mx-auto text-sm md:text-base font-medium">
            Des produits frais, des plats cuisinés maison et des saveurs uniques à Saleilles.
          </p>
        </div>

        {/* ONGLETS RESPONSIVES NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#e6ccb2] pb-4">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm md:text-base font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#6b1d2f] text-[#fdf6f0] shadow-md scale-105"
                  : "bg-white text-[#6b1d2f] hover:bg-[#6b1d2f]/10 border border-[#e6ccb2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GRILLE DES PLATS DYNAMIQUE SELON L'ONGLET */}
        <div className="space-y-12">
          
          {/* ONGLET : MENU DÉCOUVERTE PRESTIGE */}
          {activeTab === "menu-decouverte" && (
            <div className="w-full max-w-4xl mx-auto animate-fade-in">
              <div className="relative bg-white border border-[#e6ccb2] rounded-3xl p-6 md:p-10 shadow-md overflow-hidden">
                
                {/* Badge d'appel */}
                <div className="absolute top-0 right-0 bg-[#6b1d2f] text-[#fdf6f0] text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl">
                  Le Choix Gourmand
                </div>

                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">
                    {menuDecouverteData.title}
                  </h2>
                  <p className="text-xs md:text-sm text-zinc-500 italic max-w-md mx-auto mb-4 font-medium">
                    {menuDecouverteData.description}
                  </p>
                  <div className="inline-block bg-[#fdf6f0] border border-[#e6ccb2] text-[#6b1d2f] font-black text-xl md:text-2xl px-6 py-1.5 rounded-xl">
                    {menuDecouverteData.price.toFixed(2)} €
                  </div>
                </div>

                {/* Structure en 3 colonnes fluides */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  {menuDecouverteData.sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="flex flex-col bg-[#fdf6f0]/40 p-5 rounded-2xl border border-[#e6ccb2]/30"
                    >
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#6b1d2f] mb-4 pb-1 border-b border-[#6b1d2f]/10 text-center md:text-left">
                        {section.name}
                      </h3>
                      
                      <ul className="space-y-3 flex-grow flex flex-col justify-center">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs md:text-sm font-semibold text-zinc-700 leading-snug flex items-start gap-2">
                            <span className="text-amber-500 text-[10px] mt-0.5">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {idx < 2 && (
                        <div className="md:hidden text-center text-[9px] font-bold text-zinc-400 my-4 uppercase tracking-widest">
                          — ou —
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-center text-[10px] text-zinc-400 mt-8 pt-4 border-t border-zinc-100 font-medium">
                  * Plats cuisinés avec passion, servis midi & soir.
                </p>
              </div>
            </div>
          )}
          
          {/* ONGLET : CÔTÉ CUISINE (VIANDES & MER) */}
          {activeTab === "plats" && (
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🥩 Les Viandes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData.viandes.map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🐟 Côté Mer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData.mer.map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET : SPÉCIALITÉS ASIATIQUES */}
          {activeTab === "asiatique" && (
            <div>
              <h2 className="text-2xl font-black mb-2 border-b border-[#e6ccb2] pb-2">🥡 Plats Traditionnels & Vapeurs</h2>
              <p className="text-xs text-zinc-500 mb-6 font-medium italic">Fait maison par notre cheffe</p>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.platsChinois.map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
            </div>
          )}

          {/* ONGLET : ENTRÉES & SALADES */}
          {activeTab === "entrees" && (
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🥗 Les Salades Repas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData.salades.map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🍽️ Les Entrées</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {menuData.entrees.map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET : DESSERTS */}
          {activeTab === "desserts" && (
            <div>
              <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🍰 Douceurs & Sucré</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.desserts.map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
            </div>
          )}

          {/* ONGLET : BOISSONS & VINS */}
          {activeTab === "boissons" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">☕ Chaudes</h3>
                <div className="space-y-3 mb-6">{menuData.boissons.chaudes.map((b, i) => <DrinkItem key={i} {...b} />)}</div>

                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🥤 Sans Alcool</h3>
                <div className="space-y-3">{menuData.boissons.nonAlcoolisees.map((b, i) => <DrinkItem key={i} {...b} />)}</div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🍻 Bières Pression & Bouteilles</h3>
                <div className="space-y-3 mb-6">
                  {menuData.boissons.bierePression.map((b, i) => <DrinkItem key={i} {...b} />)}
                  {menuData.boissons.biereBouteilles.map((b, i) => <DrinkItem key={i} {...b} />)}
                </div>

                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🍷 Cave & Apéritifs</h3>
                <div className="space-y-3">
                  {menuData.boissons.aperitifs.map((b, i) => <DrinkItem key={i} {...b} />)}
                  {menuData.boissons.vin.map((b, i) => <DrinkItem key={i} {...b} />)}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

{/* COMPOSANT ENFANT INDÉPENDANT POUR UN PLAT DE LA CARTE */}
function MenuItem({ name, description, price }: { name: string; description?: string; price: number | { normal: number; xl: number } }) {
  const isNew = name.toLowerCase().includes("nouveauté") || name.toLowerCase().includes("spécialité");
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-bold text-base md:text-lg text-[#6b1d2f] group-hover:text-[#b1344d] transition-colors">
            {name}
            {isNew && <span className="ml-2 inline-block bg-amber-100 text-amber-800 text-[10px] uppercase px-2 py-0.5 rounded-full font-extrabold tracking-wide">Populaire</span>}
          </h3>
          <span className="font-black text-sm md:text-base whitespace-nowrap text-[#6b1d2f]">
            {formatPrice(price)}
          </span>
        </div>
        {description && (
          <p className="text-zinc-500 text-xs md:text-sm mt-2 leading-relaxed font-medium">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

{/* COMPOSANT ENFANT ULTRA LIGHT POUR LES LIGNES DE BOISSONS */}
function DrinkItem({ name, size, price }: { name: string; size?: string; price: number }) {
  return (
    <div className="flex justify-between items-center bg-white/40 p-2 rounded-lg border-b border-dashed border-[#e6ccb2]/40 text-sm">
      <span className="font-medium text-zinc-800">
        {name} {size && <span className="text-xs text-zinc-400 font-normal">({size})</span>}
      </span>
      <span className="font-bold text-[#6b1d2f]">{price.toFixed(2)} €</span>
    </div>
  );
}