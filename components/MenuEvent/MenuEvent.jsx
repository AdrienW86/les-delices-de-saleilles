import Image from 'next/image';
import styles from './menuEvent.module.css';

export default function MenuEvent() {
  return (
    <div className={styles.banner}>
      <Image
        src="/menu-event.png"
        alt="Image exemple"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );
}
