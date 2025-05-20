'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './menuEvent.module.css';

export default function MenuEvent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.banner} onClick={() => setIsOpen(true)}>
        <Image
          src="/menu-event.png"
          alt="Image exemple"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            cursor: 'zoom-in',
          }}
        />
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent}>
            <Image
              src="/menu-event.png"
              alt="Image agrandie"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
