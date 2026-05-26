"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  '/facade.avif',
  '/terrasse.avif',
  '/salle.avif',
  '/paella.avif',
  '/tarte_pomme.avif',
  '/dj.avif',
  '/tartare_mangue.avif',
  '/ravioles.avif',
  '/dessert_roule.avif',
  '/noel.avif',
  '/pizza_jambon_parme.avif',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pour animer les boutons au scroll
  const { ref: btnRef1, inView: btnInView1 } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: btnRef2, inView: btnInView2 } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden bg-zinc-900">
      
      {/* 1. BANDEAU ÉVÉNEMENT (Karaoké) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-lg text-center">
        <a 
          href="/karaoke" 
          className="inline-block w-full bg-[#6b1d2f] text-[#fdf6f0] font-bold text-sm md:text-base py-2 px-4 rounded-full shadow-lg border border-[#e6ccb2] hover:bg-[#b1344d] transition-colors duration-300 animate-pulse"
        >
          🎶 🎤 Venez Découvrir nos soirées karaoké 🎶 🎤
        </a> 
      </div> 

      {/* 2. BOUTON APPEL / RÉSERVATION FLOTTANT */}
      <a 
        href="tel:0650729588" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm md:text-base whitespace-nowrap"
      >
        <span>📞</span> <span>Réserver au 06 50 72 95 88</span>
      </a>
      
      {/* 3. BOUTONS SUGGESTIONS (Milieu d'écran) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <motion.a 
          href="/#menu"
          ref={btnRef1}  
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: btnInView1 ? 1 : 0, x: btnInView1 ? 0 : -50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full sm:w-auto text-center bg-[#fdf6f0] text-[#6b1d2f] font-bold py-3 px-6 rounded-xl shadow-lg border border-[#e6ccb2] hover:bg-[#6b1d2f] hover:text-[#fdf6f0] transition-all duration-300 backdrop-blur-sm bg-opacity-90"
        > 
          Suggestion de la semaine
        </motion.a>
        
        <motion.a 
          href="/#suggestion"
          ref={btnRef2}  
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: btnInView2 ? 1 : 0, x: btnInView2 ? 0 : 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full sm:w-auto text-center bg-[#fdf6f0] text-[#6b1d2f] font-bold py-3 px-6 rounded-xl shadow-lg border border-[#e6ccb2] hover:bg-[#6b1d2f] hover:text-[#fdf6f0] transition-all duration-300 backdrop-blur-sm bg-opacity-90"
        > 
          Suggestion du week-end
        </motion.a>
      </div>

      {/* 4. LE CARROUSEL D'IMAGES OPTIMISÉ */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* L'overlay sombre pour garder le texte lisible */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            <Image
              src={images[currentIndex]}
              alt="Les Délices de Saleilles - Visuel"
              fill
              priority={currentIndex === 0} // Charge la première image en priorité absolue
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>   
    </div>
  );
}