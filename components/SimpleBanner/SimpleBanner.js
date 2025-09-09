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
    </div>
  );
}