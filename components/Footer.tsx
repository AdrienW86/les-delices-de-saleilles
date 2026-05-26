import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Fond bleu d'origine avec texte clair pour la lisibilité
    <footer className="w-full bg-[#0f2a4a] text-[#fdf6f0]/80 border-t border-white/10 py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8 text-center">
        
        {/* LOGO */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 transition-all duration-300">
          <Image
            src="/logo.png"
            alt="Les Délices de Saleilles - Logo"
            fill
            sizes="(max-width: 768px) 144px, 176px"
            className="object-contain" 
          />
        </div>

        {/* RÉSEAUX SOCIAUX */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Suivez-nous sur les réseaux
          </p>
          <div className="flex items-center justify-center space-x-5">
            <Link 
              href="https://www.instagram.com/lesdelicesdesaleilles66280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-amber-400 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm group"
            >
              <Image 
                width={24}
                height={24}
                src="/instagram.svg"
                alt="Logo Instagram"
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
              />
            </Link>
            <Link 
              href="https://www.facebook.com/profile.php?id=61573077621099" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-amber-400 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm group"
            >
              <Image 
                width={24}
                height={24}
                src="/facebook.svg"
                alt="Logo Facebook"
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
              />
            </Link>
          </div>
        </div>

        {/* LIGNE DE SÉPARATION DISCRÈTE */}
        <hr className="w-full max-w-md border-white/10" />

        {/* LIENS JURIDIQUES ET OBLIGATOIRES */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#fdf6f0]/70">
          <Link href="/mentions-legales" className="hover:text-amber-400 transition-colors">
            Mentions Légales
          </Link>
          <span className="hidden sm:inline text-white/20">|</span>
          <Link href="/politique-confidentialite" className="hover:text-amber-400 transition-colors">
            Politique de Confidentialité
          </Link>
          <span className="hidden sm:inline text-white/20">|</span>
          <Link href="/cgv" className="hover:text-amber-400 transition-colors">
            CGV
          </Link>
        </nav>

        {/* CREDITS & COPYRIGHT */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-4xl text-xs text-[#fdf6f0]/60 space-y-2 md:space-y-0 pt-2 border-t border-white/5">
          <p>© {currentYear} Les Délices de Saleilles. Tous droits réservés.</p>
          
          <a 
            href="https://code-v.fr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition-colors"
          >
            Réalisé par <span className="font-bold text-[#fdf6f0] hover:text-amber-400 transition-colors">Codev</span>
          </a>
        </div>

      </div>
    </footer>
  );
}