'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/facade.avif', alt: 'photo' },
    { src: '/terrasse.avif', alt: 'photo' },
    { src: '/salle.avif', alt: 'photo' },
    { src: '/noel.avif', alt: 'photo' },
    { src: '/dj.avif', alt: 'photo' },
    { src: '/nems.avif', alt: 'photo' },
    { src: '/tartare_mangue.avif', alt: 'photo' },
    { src: '/ravioles.avif', alt: 'photo' },
    { src: '/paella.avif', alt: 'photo' },
    { src: '/plat.avif', alt: 'photo' },
    { src: '/plat2.avif', alt: 'photo' },
    { src: '/plat3.avif', alt: 'photo' },
    { src: '/pizza_jambon_parme.avif', alt: 'photo' },
    { src: '/tarte_pomme.avif', alt: 'photo' },
    { src: '/dessert_roule.avif', alt: 'photo' },
    { src: '/creme.avif', alt: 'photo' },
    { src: '/chocolat.avif', alt: 'photo' },  
    { src: '/image1.jpg', alt: '' },
    { src: '/image2.jpg', alt: '' },
    { src: '/image3.jpg', alt: '' },
    { src: '/image4.jpg', alt: '' },
    { src: '/image5.jpg', alt: '' },
    { src: '/image6.jpg', alt: '' },
    { src: '/image7.jpg', alt: '' },
    { src: '/image8.jpg', alt: '' },
    { src: '/image9.jpg', alt: '' },
    { src: '/image10.jpg', alt: '' },
    { src: '/image11.jpg', alt: '' },
    { src: '/image12.jpg', alt: '' },
    { src: '/image13.jpg', alt: '' },
    { src: '/image14.jpg', alt: '' },
    { src: '/image15.jpg', alt: '' },
    { src: '/image16.jpg', alt: '' },
    { src: '/image17.jpg', alt: '' },
    { src: '/image18.jpg', alt: '' },
    { src: '/image19.jpg', alt: '' },
    { src: '/image20.jpg', alt: '' },
    { src: '/image21.jpg', alt: '' },
    { src: '/image22.jpg', alt: '' },
    { src: '/image23.jpg', alt: '' },
    { src: '/image24.jpg', alt: '' },
    { src: '/image25.jpg', alt: '' },
    { src: '/image26.jpg', alt: '' },
    { src: '/image27.jpg', alt: '' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Ouvrir la lightbox
  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  // Fermer la lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div className={styles.imageWrapper} key={index} onClick={() => openLightbox(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <img src={currentImage} alt="Lightbox" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
}