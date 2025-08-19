'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './banner.module.css';

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

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.carousel} id="carouselExampleFade">
       <div className={styles.event}>
         <a href="/karaoke"> 🎶 🎤 Venez Découvrir nos soirées karaoké 🎶 🎤</a> 
      </div> 
       <a href="tel:0650729588" className={styles.callButton}>
        📞 Réserver au 06 50 72 95 88
      </a>
        <div className={styles.btnContainer}>
            <motion.a 
              className={styles.btn} 
              href="/#menu"
              ref={ref1}  
              initial={{ opacity: 0, x: -50 }} 
              animate={{
                opacity: inView1 ? 1 : 0,
                x: inView1 ? 0 : -50,
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            > 
              Suggestion de la semaine
            </motion.a>
            <motion.a 
              className={styles.btn2} 
              href="/#suggestion"
              ref={ref2}  
              initial={{ opacity: 0, x: 50 }} 
              animate={{
                opacity: inView2 ? 1 : 0,
                x: inView2 ? 0 : 50,
              }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            > 
              Suggestion du week-end
            </motion.a>
           
        </div>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '85vh', 
            }}
          />
        ))}
      </div>   
    </div>
  );
}
