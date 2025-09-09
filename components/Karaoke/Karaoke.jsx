import React from 'react'
import styles from './karaoke.module.css'
import KaraokeCard from '../KaraokeCard/KaraokeCard'

export default function Karaoke() {
  return (
    <section className={styles.container}>        
      <h1 className={styles.title}> 🎤 Soirées Karaoké aux Délices de Saleilles ! 🎶 </h1>
        <article className={styles.article}>
          Préparez-vous à vivre des soirées inoubliables aux Délices de Saleilles 
          avec nos soirées karaoké ! Que vous soyez 
          chanteur amateur ou star en devenir, c’est l’occasion parfaite de monter 
          sur scène, micro en main, et de partager un moment convivial en famille 
          ou entre amis.
        </article>
        <h2 className={styles.h2}> Au programme : </h2>
          <p className={styles.p}> ✨ Une ambiance festive et chaleureuse </p>         
          <p className={styles.p}> 🎧 Un DJ passionné pour mettre le feu à la soirée </p>       
          <p className={styles.p}> 🎤 Un large choix de chansons pour tous les goûts </p>   
          <p className={styles.p}> 🍽️ Un bon repas à savourer dans une atmosphère détendue </p>                  
        <h2 className={styles.h3}> Les prochaines dates de nos soirées karaoké </h2> 
       <KaraokeCard />
        
    </section>
  )
}