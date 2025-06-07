import React from 'react'
import styles from './cardMenu.module.css'

export default function CardMenu() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Les Menus</h2>
      <div className={styles.menu}>
        <p className={styles.p3}> Fondue chinoise (sur réservation minimum 4 personnnes)<span className={styles.label}> 35€</span> </p>  
      </div>
       <div className={styles.menu}>
        <p className={styles.p3}> Menu "Petit loup" (enfant - 10 ans) <span className={styles.label}>  12€ </span></p>  
        <p className={styles.p}> Nuggets de poulet avec frites </p>
        <p className={styles.p}> ou </p>
          <p className={styles.p}> Jambon frites </p>
          <p className={styles.p}> + </p>
          <p className={styles.p}> 1 boule de glace au choix </p>
      </div>
      <div className={styles.menu}>
        <p className={styles.p3}> Menu Découverte <span className={styles.label}>  28.90€ </span></p>      
        <p className={styles.p4}> Entrée </p>
          <p className={styles.p}> La Salade de thon composée </p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Le Croustillant de chèvre </p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Les Samoussa au poulet </p>
        <p className={styles.p4}> Plat </p>
          <p className={styles.p}> L'Andouillette de Troyes à la moutarde et au vin blanc</p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Les Gambas à la plancha</p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Les Ravioles Royales ( 4 pièces Ravioles de porc et veau maison et 4 pièces Siomai crevettes  ) </p>
        <p className={styles.p4}> Dessert </p>
            <p className={styles.p}> La Crème catalane </p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Le dessert du jour </p>   
      </div>
    </section>
  )
}