'use client';

import React, { useState } from 'react';
import SimpleBanner from '../SimpleBanner/SimpleBanner';
import SimpleBanner2 from '../SimpleBanner2/SimpleBanner2';
import SimpleBannerVideo from '../SimpleBannerVideo/SimpleBannerVideo';
import styles from "./equipment.module.css";

export default function Equipment() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Les Délices de Saleilles</h1>
        <section className={styles.section}>
          <div className={styles.column}>
            Situé au cœur de Saleilles, à quelques minutes de Perpignan, 
            Les Délices de Saleilles vous accueillent dans un cadre chaleureux 
            et familial pour vous faire découvrir une cuisine savoureuse mêlant 
            tradition française et spécialités chinoises.          
          </div>
          {isVisible && (
            <div className={styles.column}>
              Notre restaurant vous propose une carte riche et variée, 
              élaborée avec des produits frais et de qualité. Que vous soyez amateur 
              de plats faits maison, de recettes traditionnelles ou de délices asiatiques, 
              vous trouverez forcément de quoi ravir vos papilles. <br /><br />
              Dans notre restaurant, nous mettons l’accent sur la convivialité, 
              le fait-maison et le partage des saveurs. Notre équipe passionnée 
              vous accueille midi et soir dans une ambiance détendue pour un moment 
              gourmand, que ce soit en famille, entre amis ou lors d’un déjeuner professionnel.
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button onClick={toggleVisibility} className={styles.toggleButton}>
              {isVisible ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        </section> 
          <h2 className={styles.h1}> 
            Prochainement
          </h2> 
       <SimpleBanner url="/delice.jpg" />
       
          
           <h2 className={styles.h1}> Nouveau </h2>
           <SimpleBanner url="/cantonnais.png" />
          <SimpleBannerVideo url="/happy_hour.mp4" />
        {/* <h2 className={styles.h1}>  Ce week-end aux Délices de Saleilles</h2> 
          <p className={styles.p2}> 
           
          </p>   
         <SimpleBanner url="/choucroute.png" /> */}
        
         <SimpleBanner url="/rou.png" /> 
       <SimpleBanner url="/nems-chocolat.png" /> 
        <SimpleBanner url="/sauce-piquante.png" /> 
        <h2 id="menu" className={styles.h1}> Suggestion de la semaine </h2>
          <p className={styles.p}> 
            Chaque semaine, un nouveau délice à découvrir.
            Nos plats du jour sont entièrement faits maison, préparés avec des 
            ingrédients frais, de saison et soigneusement sélectionnés. 
            Laissez-vous surprendre par des saveurs authentiques et une cuisine généreuse, 
            concoctée avec passion par notre cheffe.
          </p>              
            <SimpleBanner url="/tartare.png" />      
        <h2 id="suggestion" className={styles.h1}> Suggestion du week-end</h2>
          <p className={styles.p}> 
            Un week-end sous le signe de la gourmandise.
            Chaque fin de semaine, notre chef vous propose une suggestion spéciale,
            préparée maison avec des produits frais et de saison. Une occasion idéale de
            découvrir de nouvelles saveurs et de partager un moment convivial autour d’une
            assiette généreuse.
          </p>
          <SimpleBanner url="/fraginat.png" />
    </section>
  );
}