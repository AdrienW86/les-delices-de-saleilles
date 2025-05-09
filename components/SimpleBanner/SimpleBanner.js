'use client';

import styles from './simpleBanner.module.css';

export default function SimpleBanner({ url }) {
  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerImage}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <a href="tel:0650729588" className={styles.callButton}>
        📞 Réserver au 06 50 72 95 88
      </a>
    </div>
  );
}
