import React from 'react'
import styles from './cardMenu.module.css'

export default function CardMenu() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Les Menus</h2>
      <div className={styles.menu}>
        <p className={styles.p3}> Fondue chinoise (sur réservation 72h avant minimum 4 personnnes)<span className={styles.label}> 40€</span> </p>  
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
          <p className={styles.p}> Salade de chèvre chaud au miel </p>
          
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Les Samoussa au poulet </p>
        <p className={styles.p4}> Plat </p>
          <p className={styles.p}> L'Andouillette de Troyes à la moutarde et au vin blanc</p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Les Gambas à la plancha</p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Rou jia mo </p>
        <p className={styles.p4}> Dessert </p>
            <p className={styles.p}> La Crème catalane </p>
          <p className={styles.p2}> ou </p>
          <p className={styles.p}> Le dessert du jour </p>   
      </div>
    </section>
  )
}