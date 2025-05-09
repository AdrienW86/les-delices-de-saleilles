import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Qui sommes-nous ?</h1>
      <p className={styles.p}>
        Notre restaurant, c’est avant tout une histoire de passion pour la cuisine et le partage.
        Situé au cœur de la région, nous vous accueillons dans une ambiance chaleureuse et conviviale,
        où chaque plat est préparé avec soin, authenticité et générosité.
      </p>

      <h2 className={styles.h2}>Un lieu de vie, une cuisine de cœur</h2>
      <p className={styles.p}>
        Ici, nous croyons que la bonne cuisine commence par des produits de qualité.
        Nos plats sont élaborés à partir d’ingrédients frais, de saison, sélectionnés auprès de producteurs locaux
        dans la mesure du possible. Que vous veniez pour un déjeuner entre collègues, un dîner en amoureux ou un repas de famille,
        notre équipe met tout en œuvre pour faire de chaque moment un instant de plaisir.
      </p>

      <h2 className={styles.h2}>Une équipe passionnée</h2>
      <p className={styles.p}>
        Derrière chaque assiette, une équipe investie et passionnée vous propose une cuisine savoureuse
        aux influences variées, mêlant tradition et créativité. Notre personnel en salle et en cuisine travaille main dans la main
        pour vous garantir un service attentionné et des plats faits maison, généreux et savoureux.
      </p>

      <h2 className={styles.h2}>Un engagement pour la qualité</h2>
      <p className={styles.p}>
        Nous avons à cœur de vous offrir une expérience culinaire authentique.
        De l’accueil au dessert, notre priorité est votre satisfaction. Le respect des saveurs, la fraîcheur des produits,
        l’ambiance du lieu et la qualité du service sont au centre de nos engagements quotidiens.
      </p>

      <p className={styles.p}>
        Plus qu’un restaurant, un lieu où l’on vient pour bien manger, bien boire et surtout bien vivre.
        Bienvenue chez nous !
      </p>
    </section>
  )
}
