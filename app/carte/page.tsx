"use client";

import { useState } from "react";
import menuData from "@/data/menuData";

// Formatage des prix en euros (nombre ou objet de prix)
const formatPrice = (price?: number | { normal: number; xl: number } | { uneBoule: number; deuxBoules: number; supplementChantilly: number }) => {
  if (typeof price === "number") {
    return `${price.toFixed(2)} €`;
  }
  if (price && "normal" in price) {
    return `T1: ${price.normal.toFixed(2)}€ | T2: ${price.xl.toFixed(2)}€`;
  }
  if (price && "uneBoule" in price) {
    return `1 boule: ${price.uneBoule.toFixed(2)}€ | 2 boules: ${price.deuxBoules.toFixed(2)}€`;
  }
  return "";
};

export default function CartePage() {
  // Liste des catégories pour la navigation
  const categories = [
    { id: "menu-decouverte", label: "✨ Formule & Menus" },
    { id: "plats", label: "Côté Cuisine (Terre & Mer)" },
    { id: "asiatique", label: "Spécialités Asiatiques" },
    { id: "entrees", label: "Entrées & Salades" },
    { id: "desserts", label: "Desserts" },
    { id: "boissons", label: "Boissons & Vins" },
  ];

  const [activeTab, setActiveTab] = useState("menu-decouverte");

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

        {/* ONGLETS NAVIGATION */}
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

        {/* CONTENU SELON L'ONGLET SÉLECTIONNÉ */}
        <div className="space-y-12">
          
          {/* ONGLET : FORMULES ET MENUS */}
          {activeTab === "menu-decouverte" && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {(menuData.menusEtFormules || []).map((menu, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-[#e6ccb2] shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-3 border-b border-[#e6ccb2] pb-3">
                      <h2 className="text-xl font-black uppercase tracking-wide text-[#6b1d2f]">{menu.name}</h2>
                      <span className="bg-[#fdf6f0] border border-[#e6ccb2] text-[#6b1d2f] font-black text-lg px-4 py-1 rounded-xl whitespace-nowrap">
                        {menu.price.toFixed(2)} €
                      </span>
                    </div>

                    {menu.details && (
                      <p className="text-xs text-zinc-500 italic mb-4 font-medium">{menu.details}</p>
                    )}

                    {/* Affichage des compositions / étapes du menu */}
                    {Array.isArray(menu.composition) && (
                      <ul className="space-y-2 mb-4">
                        {menu.composition.map((item, idx) => (
                          <li key={idx} className="text-xs md:text-sm font-semibold text-zinc-700 flex items-center gap-2">
                            <span className="text-amber-500 text-[10px]">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {typeof menu.composition === "string" && (
                      <p className="text-sm font-semibold text-zinc-700 mb-4">{menu.composition}</p>
                    )}

                    {menu.entrees && (
                      <div className="mb-3">
                        <span className="text-xs font-black uppercase text-[#6b1d2f] block mb-1">Entrées :</span>
                        <p className="text-xs text-zinc-700 font-medium">
                          {Array.isArray(menu.entrees) ? menu.entrees.join(" — ") : menu.entrees}
                        </p>
                      </div>
                    )}

                    {menu.plats && (
                      <div className="mb-3">
                        <span className="text-xs font-black uppercase text-[#6b1d2f] block mb-1">Plats :</span>
                        <p className="text-xs text-zinc-700 font-medium">
                          {Array.isArray(menu.plats) ? menu.plats.join(" — ") : menu.plats}
                        </p>
                      </div>
                    )}

                    {menu.desserts && (
                      <div className="mb-3">
                        <span className="text-xs font-black uppercase text-[#6b1d2f] block mb-1">Desserts :</span>
                        <p className="text-xs text-zinc-700 font-medium">
                          {Array.isArray(menu.desserts) ? menu.desserts.join(" — ") : menu.desserts}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {menu.accompagnement && (
                    <p className="text-[11px] text-zinc-400 italic mt-4 pt-2 border-t border-zinc-100">
                      * Accompagnement : {menu.accompagnement}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* ONGLET : CÔTÉ CUISINE (VIANDES & POISSONS) */}
          {activeTab === "plats" && (
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🥩 Les Viandes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(menuData.viandes || []).map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🐟 Côté Mer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(menuData.poissons || []).map((item, i) => <MenuItem key={i} {...item} />)}
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
                {(menuData.nosPlatsChinois || []).map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
            </div>
          )}

          {/* ONGLET : ENTRÉES & SALADES */}
          {activeTab === "entrees" && (
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🥗 Les Salades Repas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(menuData.salades || []).map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🍽️ Les Entrées</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {(menuData.entrees || []).map((item, i) => <MenuItem key={i} {...item} />)}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET : DESSERTS */}
          {activeTab === "desserts" && (
            <div>
              <h2 className="text-2xl font-black mb-6 border-b border-[#e6ccb2] pb-2">🍰 Douceurs & Sucré</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {(menuData.desserts || []).map((item, i) => <MenuItem key={i} {...item} />)}
              </div>
            </div>
          )}

          {/* ONGLET : BOISSONS & VINS */}
          {activeTab === "boissons" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">☕ Chaudes</h3>
                <div className="space-y-3 mb-6">{(menuData.boissons?.chaudes || []).map((b, i) => <DrinkItem key={i} {...b} />)}</div>

                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🥤 Sans Alcool</h3>
                <div className="space-y-3">{(menuData.boissons?.nonAlcoolisees || []).map((b, i) => <DrinkItem key={i} {...b} />)}</div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🍻 Bières Pression & Bouteilles</h3>
                <div className="space-y-3 mb-6">
                  {(menuData.boissons?.bierePression || []).map((b, i) => <DrinkItem key={i} {...b} />)}
                  {(menuData.boissons?.biereBouteilles || []).map((b, i) => <DrinkItem key={i} {...b} />)}
                </div>

                <h3 className="font-bold text-xl mb-4 text-[#b1344d] border-b border-[#e6ccb2] pb-1">🍷 Cave & Apéritifs</h3>
                <div className="space-y-3">
                  {(menuData.boissons?.aperitifs || []).map((b, i) => <DrinkItem key={i} {...b} />)}
                  {(menuData.boissons?.vin || []).map((b, i) => <DrinkItem key={i} {...b} />)}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

{/* COMPOSANT ENFANT POUR UN PLAT */}
function MenuItem({ name, description, price, prices }: { name: string; description?: string; price?: number; prices?: any }) {
  const isNew = name.toLowerCase().includes("nouveauté") || name.toLowerCase().includes("création");
  return (
    <div className="bg-white p-5 rounded-2xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-bold text-base md:text-lg text-[#6b1d2f] group-hover:text-[#b1344d] transition-colors">
            {name}
            {isNew && <span className="ml-2 inline-block bg-amber-100 text-amber-800 text-[10px] uppercase px-2 py-0.5 rounded-full font-extrabold tracking-wide">Spécialité</span>}
          </h3>
          <span className="font-black text-sm md:text-base whitespace-nowrap text-[#6b1d2f]">
            {formatPrice(price || prices)}
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

{/* COMPOSANT ENFANT POUR LES BOISSONS */}
function DrinkItem({ name, size, price }: { name: string; size?: string; price: number }) {
  return (
    <div className="flex justify-between items-center bg-white/40 p-2 rounded-lg border-b border-dashed border-[#e6ccb2]/40 text-sm">
      <span className="font-medium text-zinc-800">
        {name} {size && <span className="text-xs text-zinc-400 font-normal">({size})</span>}
      </span>
      <span className="font-bold text-[#6b1d2f]">{price?.toFixed(2)} €</span>
    </div>
  );
}