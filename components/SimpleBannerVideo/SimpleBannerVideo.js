'use client';

import styles from './simpleBanner.module.css';

export default function SimpleBannerVideo({ url }) {
  return (
    <div className={styles.banner}>
      <video
        className={styles.bannerVideo}
        src={url}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* <a href="tel:0650729588" className={styles.callButton}>
        📞 Réserver au 06 50 72 95 88
      </a> */}
    </div>
  );
}
