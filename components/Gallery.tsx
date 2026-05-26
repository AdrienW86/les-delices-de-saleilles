'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/facade.avif', alt: 'Façade du restaurant Les Délices de Saleilles' },
    { src: '/terrasse.avif', alt: 'Terrasse ombragée extérieure' },
    { src: '/salle.avif', alt: 'Salle intérieure du restaurant' },
    { src: '/noel.avif', alt: 'Décoration de table festive pour Noël' },
    { src: '/dj.avif', alt: 'Soirée dansante et animation DJ' },
    { src: '/nems.avif', alt: 'Nems maison croustillants' },
    { src: '/tartare_mangue.avif', alt: 'Tartare de boeuf revisité à la mangue' },
    { src: '/ravioles.avif', alt: 'Ravioles vapeurs artisanales' },
    { src: '/paella.avif', alt: 'Plat de paëlla géante conviviale' },
    { src: '/plat.avif', alt: 'Suggestion de la cheffe' },
    { src: '/plat2.avif', alt: 'Plat signature fait maison' },
    { src: '/plat3.avif', alt: 'Plat de bistrot traditionnel' },
    { src: '/pizza_jambon_parme.avif', alt: 'Pizza italienne au jambon de Parme et roquette' },
    { src: '/tarte_pomme.avif', alt: 'Tarte fine aux pommes maison' },
    { src: '/creme.avif', alt: 'Crème catalane caramélisée' },
    { src: '/chocolat.avif', alt: 'Fondant au chocolat et chantilly' },  
    { src: '/lapin.jpg', alt: 'Spécialité mijotée de lapin' },
    { src: '/poulet.jpg', alt: 'Poulet sauté aux arachides' },  
    { src: '/couscous.jpg', alt: 'Couscous royal du week-end' },  
    { src: '/brochette.jpg', alt: 'Brochettes de viandes grillées' },  
    { src: '/fraise.jpg', alt: 'Dessert gourmand aux fraises fraîches' }, 
    { src: '/salade.jpg', alt: 'Grande salade fraîcheur' },  
    { src: '/salade2.jpg', alt: 'Salade repas composée' }, 
    { src: '/plat2.jpg', alt: 'Cuisine traditionnelle' },  
    { src: '/plat3.jpg', alt: 'Plat cuisiné de la semaine' }, 
    { src: '/tarte.jpg', alt: 'Tarte sucrée du jour' },  
    { src: '/plat5.jpg', alt: 'Plat à emporter fait maison' }, 
    { src: '/pizza.jpg', alt: 'Pizza artisanale' },  
    { src: '/pizza2.jpg', alt: 'Pizza cuite au four' }, 
    { src: '/pizza3.jpg', alt: 'Pizza garnie' },  
    { src: '/pizza4.jpg', alt: 'Pizza base crème' }, 
    { src: '/image1.jpg', alt: 'Ambiance du restaurant' },
    { src: '/image2.jpg', alt: 'Instant gourmand' },
    { src: '/image3.jpg', alt: 'Cuisine maison' },
    { src: '/image4.jpg', alt: 'Événement festif' },
    { src: '/image5.jpg', alt: 'Plat traditionnel' },
    { src: '/image6.jpg', alt: 'Ambiance conviviale' },
    { src: '/image7.jpg', alt: 'Spécialités de la cheffe' },
    { src: '/image8.jpg', alt: 'Dessert fait maison' },
    { src: '/image9.jpg', alt: 'Cuisine du marché' },
    { src: '/image10.jpg', alt: 'Plat du jour' },
    { src: '/image11.jpg', alt: 'Entrée fraîcheur' },
    { src: '/image12.jpg', alt: 'Soirée à thème' },
    { src: '/image13.jpg', alt: 'Spécialité asiatique' },
    { src: '/image14.jpg', alt: 'Instant festif' },
    { src: '/image15.jpg', alt: 'Buffet gourmand' },
    { src: '/image16.jpg', alt: 'Terrasse couverte' },
    { src: '/image17.jpg', alt: 'Patio climatisé' },
    { src: '/image18.jpg', alt: 'Repas de groupe' },
    { src: '/image19.jpg', alt: 'Plat signature' },
    { src: '/image20.jpg', alt: 'Douceur sucrée' },
    { src: '/image21.jpg', alt: 'Sélection de la semaine' },
    { src: '/image22.jpg', alt: 'Cuisine traditionnelle' },
    { src: '/image23.jpg', alt: 'Plat de la mer' },
    { src: '/image24.jpg', alt: 'Suggestion du week-end' },
    { src: '/image25.jpg', alt: 'Saveurs uniques' },
    { src: '/image26.jpg', alt: 'Ambiance Karaoké' },
    { src: '/image27.jpg', alt: 'Les Délices de Saleilles' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {/* GRILLE TAILWIND FLUIDE & RESPONSIVE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            className="relative aspect-square rounded-2xl overflow-hidden border border-[#e6ccb2]/60 shadow-sm cursor-pointer group bg-zinc-100" 
            key={index} 
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt || "Photo du restaurant Les Délices de Saleilles"}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX ULTRA MODERNE EN PURE TAILWIND */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in cursor-zoom-out" 
          onClick={closeLightbox}
        >
          {/* Bouton de fermeture d'en haut à droite */}
          <button 
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-amber-400 transition-colors bg-white/10 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none z-50"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Image de la lightbox maximisée */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img 
              src={currentImage} 
              alt="Aperçu plein écran" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10 animate-scale-up" 
            />
          </div>
        </div>
      )}
    </div>
  );
}