'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from './description.module.css';

export default function Description() {
  const refs = Array.from({ length: 13 }, () => useInView({ triggerOnce: false, threshold: 0.0 }));

  const services = [
    {
      img: '/plat3.avif',
      alt: 'plat soigné',
      p: 'Un savoir-faire au service du goût',
      text: 'Nos plats sont préparés avec passion, dans le respect des traditions culinaires. Chaque recette reflète notre engagement pour une cuisine maison, généreuse et authentique.',
      imgRef: 5,
      pRef: 6,
    },
    {
      img: '/dj.avif',
      alt: 'soirée avec dj',
       p: 'Des événements spéciaux chaque semaine',
    text: 'Venez découvrir nos suggestions du week-end : des plats uniques, élaborés avec soin, pour vous surprendre et éveiller vos papilles dans une ambiance conviviale.',
      imgRef: 8,
      pRef: 7,
    },
    {
      img: '/paella.avif',
      alt: 'photo de la salle',
       p: 'Privatisez notre restaurant pour vos événements',
    text: 'Anniversaire, repas de groupe ou occasion spéciale ? Nous vous offrons la possibilité de louer notre salle et de créer un menu sur mesure selon vos envies.',
    imgRef: 3,
      imgRef: 9,
      pRef: 10,
    },
    {
      img: '/tartare_mangue.avif',
      alt: 'ingredients frais',
     p: 'Des produits frais et de saison',
    text: 'Nous sélectionnons des ingrédients locaux et de qualité, pour une cuisine saine et savoureuse. Chaque saison inspire notre carte, pour toujours plus de fraîcheur dans vos assiettes.',
      imgRef: 12,
      pRef: 11,
    },
  ];

  return (
    <AnimatePresence>
      <section className={styles.description}>
        <div className={styles.box}>
          <h2 className={styles.h2}>Notre Cuisine</h2>
        </div>
        <motion.section className={styles.localisation}>
          <Image
            src="/facade.avif"
            alt="facade du restaurant"
            width={400}
            height={400}
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <div className={styles.intro}>
            <motion.p
              ref={refs[3].ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: refs[3].inView ? 1 : 0, y: refs[3].inView ? 0 : 50 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Aux Délices de Saleilles, chaque plat est le fruit d’un véritable savoir-faire artisanal. 
              Notre cuisine repose sur l’amour du métier, le respect des traditions et une passion sincère 
              pour les saveurs authentiques. Grâce à une sélection rigoureuse d’ingrédients frais et de saison, 
              nous vous proposons des recettes généreuses, faites maison, qui célèbrent aussi bien la richesse culinaire 
              française que les subtilités de la gastronomie chinoise.
            </motion.p>
          </div>
        </motion.section>

        <div className={styles.box}>
          <h2 className={styles.h2}>Pourquoi nous faire confiance ?</h2>
        </div>
        <section className={styles.background}>
          <div className={styles.article}>
            <ul>
              {services.map((item, index) => (
                <li key={index} className={styles.li}>
                  <motion.img
                    ref={refs[item.imgRef].ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: refs[item.imgRef].inView ? 1 : 0, x: refs[item.imgRef].inView ? 0 : -100 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    src={item.img}
                    alt={item.alt}
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                  />
                  <motion.p
                    ref={refs[item.pRef].ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: refs[item.pRef].inView ? 1 : 0, x: refs[item.pRef].inView ? 0 : 100 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className={styles.p}
                  >
                    <span className={styles.span}>{item.p}</span>
                    {item.text}
                  </motion.p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </AnimatePresence>
  );
}