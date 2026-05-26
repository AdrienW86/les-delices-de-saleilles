'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Description() {
  // Création de 5 références d'intersection pour les blocs principaux
  const [introRef, introInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [card1Ref, card1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [card2Ref, card2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [card3Ref, card3InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [card4Ref, card4InView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      img: '/poulet.jpg',
      alt: 'Plat de poulet soigné et fait maison',
      title: 'Un savoir-faire au service du goût',
      text: 'Nos plats sont préparés avec passion, dans le respect absolu des traditions culinaires. Chaque recette reflète notre engagement pour une cuisine authentique, saine et riche en saveurs.',
      viewRef: card1Ref,
      inView: card1InView,
    },
    {
      img: '/dj.avif',
      alt: 'Ambiance soirée karaoké et dj',
      title: 'Des événements spéciaux chaque semaine',
      text: 'Venez vibrer lors de nos rendez-vous incontournables : soirées dansantes, karaokés endiablés et ambiances à thèmes pour déconnecter et s’amuser dans une atmosphère ultra-conviviale.',
      viewRef: card2Ref,
      inView: card2InView,
    },
    {
      img: '/image22.jpg',
      alt: 'Salle de restaurant privatisable',
      title: 'Privatisez le restaurant pour vos fêtes',
      text: 'Anniversaire, repas de groupe, baptême ou séminaire professionnel ? Profitez de nos espaces (salle, patio, terrasse) et concevez un menu sur-mesure totalement adapté à vos envies.',
      viewRef: card3Ref,
      inView: card3InView,
    },
    {
      img: '/salade2.jpg',
      alt: 'Salade fraîche aux ingrédients de saison',
      title: 'Des produits frais et de saison',
      text: 'Nous trions sur le volet des ingrédients de première fraîcheur, majoritairement issus de circuits locaux. La nature inspire notre carte au fil des saisons pour préserver le goût originel.',
      viewRef: card4Ref,
      inView: card4InView,
    },
  ];

  return (
    <section className="w-full bg-[#fdf6f0] text-[#6b1d2f] py-16 px-4 md:px-8 font-sans">
      
      {/* SECTION NOTRE CUISINE */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-4">Notre Cuisine</h2>
        <div className="w-16 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-10" />
      </div>

      <div 
        ref={introRef}
        className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#e6ccb2] p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-20"
      >
        <div className="w-full md:w-1/2 relative h-64 rounded-xl overflow-hidden shadow-inner">
          <Image
            src="/plat5.jpg"
            alt="Plat signature Les Délices de Saleilles"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="text-zinc-600 font-medium text-sm md:text-base leading-relaxed"
          >
            Aux <span className="text-[#6b1d2f] font-bold">Délices de Saleilles</span>, chaque plat est le fruit d’un véritable savoir-faire artisanal. Notre cuisine repose sur l’amour du métier, le respect des traditions et une passion sincère pour les saveurs authentiques. Grâce à une sélection rigoureuse d’ingrédients de saison, nous vous proposons de savoureuses recettes faites maison qui célèbrent aussi bien la tradition culinaire française que les subtilités de la gastronomie asiatique.
          </motion.p>
        </div>
      </div>

      {/* SECTION POURQUOI NOUS FAIRE CONFIANCE */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-4">Pourquoi nous faire confiance ?</h2>
        <div className="w-16 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-12" />
      </div>

      {/* LISTE DES SERVICES / ENGAGEMENTS */}
      <div className="max-w-4xl mx-auto space-y-8">
        {services.map((item, index) => (
          <div
            key={index}
            ref={item.viewRef}
            className="bg-white rounded-2xl border border-[#e6ccb2]/60 p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 overflow-hidden"
          >
            {/* Image animée (Glisse depuis la gauche) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: item.inView ? 1 : 0, x: item.inView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full md:w-1/3 relative h-48 rounded-xl overflow-hidden shrink-0"
            >
              <Image 
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </motion.div>

            {/* Texte animé (Glisse depuis la droite) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: item.inView ? 1 : 0, x: item.inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3 space-y-2"
            >
              <h3 className="text-xl font-bold text-[#6b1d2f] flex items-center gap-2">
                <span className="text-[#0f2a4a]">✔</span> {item.title}
              </h3>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}