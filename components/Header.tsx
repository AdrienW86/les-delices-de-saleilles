"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuLinks = [
  { href: "/", label: "Accueil" },
  { href: "/pictures", label: "Photos" },
  { href: "/carte", label: "La Carte" },
  { href: "/event", label: "Évènements" },
  { href: "/savoir-faire", label: "Qui sommes-nous ?" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 bg-[#0f2a4a] shadow-md border-b border-white/10' 
        : 'py-5 bg-[#0f2a4a]'
    }`}>
      
      {/* LOGO */}
      <Link href="/" className="relative z-50 block">
        <div className={`relative transition-all duration-300 origin-left ${
          isScrolled ? 'w-16 h-16 md:w-20 md:h-20' : 'w-24 h-24 md:w-32 md:h-32'
        }`}>
          <Image
            src="/logo.png"
            alt="Les Délices de Saleilles - Logo"
            fill
            priority
            sizes="(max-width: 768px) 80px, 128px"
            className="object-contain"
          />
        </div>
      </Link>   
     
      {/* MENU DESKTOP */}
      <nav className="hidden lg:flex items-center space-x-8">
        {menuLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            className="text-[#fdf6f0] hover:text-amber-400 font-semibold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300 pb-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* BOUTON HAMBURGER MOBILE (Forcé en z-50 pour rester au-dessus de tout) */}
      <div className="lg:hidden relative z-50"> 
        <button 
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none" 
          onClick={handleMenuToggle} 
          aria-label="Menu principal"
        >
          <span className={`block w-6 h-0.5 bg-[#fdf6f0] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#fdf6f0] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#fdf6f0] transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MENU MOBILE PLEIN ÉCRAN (ZÉRO CONFLIT) */}
      <div className={`fixed inset-0 bg-[#0f2a4a] flex flex-col justify-center items-center lg:hidden transition-all duration-300 z-40 ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto visible' 
          : 'opacity-0 pointer-events-none invisible'
      }`}>
        <ul className="flex flex-col items-center space-y-8 text-center">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link 
                className="text-2xl font-bold text-[#fdf6f0] hover:text-amber-400 transition-colors block py-2 px-4" 
                href={link.href} 
                onClick={handleMenuToggle}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}