import React from 'react'
import styles from './cardMenu.module.css'

export default function CardMenu() {
  return (
     <section className={styles.section}>
      <h2 className={styles.title}>Les Menus</h2>
      <div className={styles.menu}>
        <p className={styles.p}> Fondue chinoise (sur réservation minimum 4 personnnes)<span className={styles.label}> 35€</span> </p>                 

 
      </div>
        <div className={styles.menu}>
        <p className={styles.p3}> Menu Découverte <span className={styles.label}>  33.90 </span></p>                 
        
 
      </div>
          <p className={styles.p4}> Entrée </p>
              <p className={styles.p}> Pan con tomate </p>
        <p className={styles.p2}> ou </p>
        <p className={styles.p}> Samoussa au poulet </p>
        <p className={styles.p4}> Plat </p>
             <p className={styles.p}> Porc caramélisé de 380gr (cuit pendant 3h à basse température et assaisonné avec des épices chinoises ) </p>
        <p className={styles.p2}> ou </p>
        <p className={styles.p}> Rumsteak de boeuf très tendre </p>
         <p className={styles.p2}> ou </p>
        <p className={styles.p}> Filet de poisson du jour sauce ail et persil </p>
        <p className={styles.p4}> Dessert </p>
             <p className={styles.p}> Crème catalane </p>
        <p className={styles.p2}> ou </p>
        <p className={styles.p}> Tarte aux pommes </p>
        <p className={styles.p2}> ou </p>
        <p className={styles.p5}> 2 boules de glace au choix </p>
    
    </section>
  )
}
