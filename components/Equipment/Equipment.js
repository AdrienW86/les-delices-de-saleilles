'use client';

import React, { useState } from 'react';
import SimpleBanner from '../SimpleBanner/SimpleBanner';
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
        <h2 className={styles.h1}> Évènement </h2>
         <SimpleBanner url="/dusty.png" />
         <p className={styles.p}> 
            📣🎸 Soirée Concert aux Délices de Saleilles ! 🎶🍽️ <br></br>           
            Préparez-vous pour une soirée inoubliable !
            Le groupe Dusty Shoes débarque aux Délices de Saleilles le samedi 19 juillet 2025 pour vous faire vibrer au rythme du blues, rock et folk ! 🎤🎸🔥 <br></br>
            👉 Ambiance festive, musique live, et bien sûr… nos délicieuses spécialités maison à savourer entre amis ou en famille. 
            Un cocktail parfait pour une soirée d'été réussie ! 🌅✨ <br></br>
            📍 Où ? Restaurant Les Délices de Saleilles <br></br>
            📆 Quand ? Samedi 19 juillet 2025 – à partir de 20h <br></br>
            🎶 Qui ? Le groupe Dusty Shoes en live <br></br>
            📞 Réservation conseillée : 06 50 72 95 88 <br></br>
            🎟️ Entrée libre – consommation sur place <br></br>
            ➡️ Partagez l'événement, invitez vos amis et venez nombreux pour profiter d’un moment musical unique sous le ciel catalan !
          </p>
          <SimpleBanner url="/vendredi.png" />
         <p className={styles.p}> 
            🎉 Les Vendredis de Saleilles - Juillet aux Délices de Saleilles ! 🍽️ <br></br>
            Tout le mois de juillet, vos vendredis soirs riment avec bonne humeur et bons petits plats aux Délices de Saleilles ! <br></br>
            📍 Sur place, en terrasse, dans une ambiance chaleureuse et conviviale ! <br></br>
            Voici le programme de ce mois de juillet : <br></br>
            📅 Vendredi 4 juillet <br></br>
            🔥 Duo de brochettes bœuf & poulet, frites maison et salade <br></br>
            💰 20€ par personne <br></br>
            📅 Vendredi 11 juillet <br></br>
            🥘 Paella géante faite maison <br></br>
            💰 20€ par personne <br></br>
            📅 Vendredi 18 juillet <br></br>
            🐚 Moules-frites à volonté <br></br>
            💰 16€ par personne <br></br>
            📅 Vendredi 25 juillet <br></br>
            🥩 Parillade de viandes, frites et salade <br></br>
            💰 20€ par personne <br></br>
            🕗 Service à partir de 19h <br></br>
            📞 Réservation conseillée au 06 50 72 95 88 <br></br>
            👉 En famille, entre amis ou en amoureux, on vous attend nombreux pour profiter des soirées d'été à Saleilles !
          </p>
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
        <SimpleBanner url="/brochettes3.png" />
    </section>
  );
}