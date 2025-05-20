import React from 'react'
import eventMenus from '../Karaoke/data'
import styles from './karaokeCard.module.css'

export default function KaraokeCard() {
  return (
   <>
      {eventMenus.map((event, index) => (
        <div className={styles.date} key={index}>
          <h3 className={styles.h3}>{event.date}</h3>
          {event.plats.map((plat, i) => (
            <p className={styles.p} key={i}>
              {plat.nom} - <span className={styles.span}>{plat.prix}</span>
            </p>
          ))}
        </div>
      ))}
    </>
  )
}
