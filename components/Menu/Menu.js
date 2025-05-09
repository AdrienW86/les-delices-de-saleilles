// components/Menu/Menu.jsx
import React from 'react';
import styles from './menu.module.css';

export default function Menu({ title, items }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.menuList}>
        {items.map((item, index) => {
          const isComplexPrice = typeof item.price === 'object';
          const hasXL = isComplexPrice && item.price.xl;
          const hasNormal = isComplexPrice && item.price.normal;

          return (
            <div key={index} className={styles.menuItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>
                  {isComplexPrice ? (
                    <>
                      {hasNormal && (
                        <>
                          {hasXL && <span className={styles.label}> L</span>}
                           {item.price.normal}€
                        </>
                      )}
                      {hasXL && (
                        <>
                          {' / '}
                          <span className={styles.label}>XL</span> {item.price.xl}€
                        </>
                      )}
                    </>
                  ) : (
                    `${item.price}€`
                  )}
                </span>
              </div>
              {item.description && (
                <p className={styles.itemDescription}>{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

