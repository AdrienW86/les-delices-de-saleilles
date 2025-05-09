import React from 'react'
import Image from 'next/image'
import styles from './evenement.module.css'

export default function Evenement() {
   return (
    <section className={styles.container}>
        <h1 className={styles.title}>Nos Soirées à thème</h1>
          <section className={styles.boxCard}>
            <div className={styles.box}>     
                <Image 
                    id="karaoke"               
                    src="/image5.avif"
                    alt="image"
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                />
                <div className={styles.p}>
                    <h2 className={styles.h2}> Karaoké</h2>
                        <p>
                            🎤 Soirées Karaoké – Tous les vendredis soirs !
                            Venez libérer la star qui est en vous ! Ambiance conviviale, micro ouvert à tous, rires et bonne humeur garantis.
                            Que vous chantiez juste ou faux, l’essentiel c’est de s’amuser !
                            Rendez-vous chaque vendredi à partir de 20h.
                        </p>
                </div>
            </div>
             <div className={styles.box}>     
                <Image                  
                    src="/image4.avif"
                    alt="image"
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                />
                <div className={styles.p}>
                     <h2 className={styles.h2}> Soirées à thème</h2>
                        <p>
                            🎉 Soirées à Thèmes – Une ambiance différente à chaque fois !
                            Voyagez le temps d'une soirée avec nos soirées à thèmes !
                            Cuisine du monde, décorations immersives, déguisements et surprises…
                            Chaque événement est l’occasion de vivre une expérience unique et festive.
                            Laissez-vous surprendre !
                        </p>
                </div>
            </div>
             <div className={styles.box}>     
                <Image                  
                    src="/image9.avif"
                    alt="image"
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                />
                <div className={styles.p}>
                     <h2 className={styles.h2}> Menu de fête</h2>
                        <p>
                            🍽️ Menus de Fête – Pour des instants gourmands et conviviaux
                            À l’occasion des grandes fêtes, notre chef vous propose des menus spéciaux, élaborés avec des produits d’exception.
                            Laissez-vous tenter par une cuisine festive, généreuse et pleine de saveurs, pour des moments inoubliables en famille ou entre amis.
                        </p>
                </div>
            </div>
             <div className={styles.box}>     
                <Image                  
                    src="/image1.avif"
                    alt="image"
                    width={300}
                    height={300}
                    sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.picture}
                />
                <div className={styles.p}>
                     <h2 className={styles.h2}> Evènement personnalisé</h2>
                        <p>
                            🎉 Organisez vos événements au restaurant !
                            Anniversaires, repas de famille, fêtes entre amis ou événements d’entreprise… 
                            La salle du restaurant, Le Patio ainsi que la terrasse peuvent être mis à votre disposition sur demande.
                            Profitez d’un service sur mesure et d’une ambiance unique pour faire de votre événement un véritable succès !
                        </p>
                </div>
            </div>
          </section>     
    </section>
  )
}
