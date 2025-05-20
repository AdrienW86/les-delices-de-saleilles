import React from 'react'
import styles from './karaoke.module.css'

export default function Karaoke() {
  return (
    <section className={styles.container}>        
         <h1 className={styles.h2}> 🎤 Soirées Karaoké avec DJ’s Revolution – Ambiance garantie aux Délices de Saleilles ! 🎶 </h1>
            <article className={styles.article}>
                Préparez-vous à vivre des soirées inoubliables aux Délices de Saleilles 
                avec nos soirées karaoké animées par DJ’s Revolution ! Que vous soyez 
                chanteur amateur ou star en devenir, c’est l’occasion parfaite de monter 
                sur scène, micro en main, et de partager un moment convivial en famille 
                ou entre amis.
            </article>
           <h2 className={styles.h3}> Au programme : </h2>
                <p className={styles.p}> ✨ Une ambiance festive et chaleureuse </p>         
                <p className={styles.p}> 🎧 Un DJ passionné pour mettre le feu à la soirée </p>       
                <p className={styles.p}> 🎤 Un large choix de chansons pour tous les goûts </p>   
                <p className={styles.p}> 🍽️ Un bon repas à savourer dans une atmosphère détendue </p>                  
           <h2 className={styles.title}> Les prochaines dates de nos soirées karaoké </h2> 
                <p className={styles.p}> Vendredi 23 mai à 19h - <span className={styles.span}> Parillade Catalane </span> </p>
                <p className={styles.p}> Vendredi 30 mai à 19h - <span className={styles.span}> Couscous </span> </p>
                <p className={styles.p}> Dimanche 1er juin à 12h - <span className={styles.span}> Trio de brochettes </span> </p>
                <p className={styles.p}> Vendredi 20 juin à 19h - <span className={styles.span}> Paella </span> </p>
                
                <p className={styles.p}> Vendredi 11 juillet à 19h - <span className={styles.span}> Prochainement... </span></p>
                <p className={styles.p}> Vendredi 25 juillet à 19h - <span className={styles.span}> Prochainement... </span></p>
                <p className={styles.p}> Vendredi 8 août à 19h - <span className={styles.span}> Prochainement... </span></p>
                <p className={styles.p}> Vendredi 22 août à 19h - <span className={styles.span}> Prochainement... </span></p>
    </section>
  )
}
