'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  const address = {
    name: "Les Délices de Saleilles",
    email: "bernard.yanwei@gmail.com",
    phone: "06 50 72 95 88",
    fullAddress: "26 avenue de Perpignan, 66280 Saleilles",
  };

  return (
    <div className={styles.mapWrapper}>
       <div className={styles.addressDetails}>
        <h2 className={styles.name}>{address.name}</h2>
        <p className={styles.span}>
          <strong 
          >Zone d'intervention :</strong> {address.fullAddress}
        </p>
        <p className={styles.span}>
          <strong>Téléphone :</strong> {address.phone}
        </p>
        <p className={styles.span}>
          <strong>Email :</strong> {address.email}
        </p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.284384047838!2d2.9509453410427526!3d42.65532861651548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b07b82a74f8c51%3A0xb02316d3f15b45d2!2sLes%20D%C3%A9lices%20de%20Saleilles!5e0!3m2!1sfr!2sfr!4v1746805568651!5m2!1sfr!2sfr" 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
     
    </div>
  );
}
