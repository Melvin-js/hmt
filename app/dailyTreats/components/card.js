import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import cake from '@/public/images/cake.png';

function ItemCard() {
  return (
    <div className={styles.card}>
      <Image src={cake} alt="Cake" className={styles.cake} />
      <h5>Party Cakelet Chocolate Single 200gms</h5>
      <div className={styles.tag}>
        <h4>Rs 500</h4>
        <button className={styles.addButton}>Add</button>
      </div>
    </div>
  );
}

export default ItemCard;
