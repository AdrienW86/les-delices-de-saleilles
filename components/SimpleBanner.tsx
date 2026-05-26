'use client';

import React from 'react';
import Image from 'next/image';

interface SimpleBannerProps {
  url: string;
  title?: string; // Optionnel : si tu veux écrire le nom de la page sur la bannière
}

export default function SimpleBanner({ url, title }: SimpleBannerProps) {
  return (
    <div className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden bg-zinc-900">
      
      {/* OVERLAY SOMBRE (Protège la lisibilité si le texte est blanc ou crème) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* COMPOSANT IMAGE NEXT.JS OPTIMISÉ */}
      <Image
        src={url}
        alt={title ? `Bannière ${title}` : "Les Délices de Saleilles"}
        fill
        priority // Charge l'image immédiatement car elle est en haut de page (SEO au top)
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* TITRE OPTIONNEL AU CENTRE */}
      {title && (
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-[#fdf6f0] text-center drop-shadow-md">
            {title}
          </h1>
        </div>
      )}

    </div>
  );
}