'use client'
import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import cake from '@/public/images/cake.png';

function ItemCard({ data }) {
  const [count, setCount] = useState(0); // Initial count is 0
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  // Increment and decrement functions
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Toggle visibility of the counter
  const toggleCounterVisibility = () => {
    // When the counter is being shown for the first time, set the count to 1
    if (!isCounterVisible) {
      setCount(1);  // Set initial count to 1 when the counter is shown
    }
    setIsCounterVisible((prevState) => !prevState);
  };

  // Handle the count reaching zero
  const handleZeroCount = () => {
    if (count === 0) {
      setIsCounterVisible(false);
    }
  };

  const sendData = (count) => {
    data(count);
  };


  // Use useEffect to watch for count reaching zero and hide the counter
  useEffect(() => {
    handleZeroCount();
    sendData(count);
  }, [count]);

  return (
    <div className={styles.card}>
      <Image src={cake} alt="Cake" className={styles.cake} />
      <h5>Party Cakelet Chocolate Single 200gms</h5>
      <div className={styles.tag}>
        <h4>Rs 500</h4>

        <div style={{ textAlign: 'center' }}>
          {!isCounterVisible && (
            <button onClick={toggleCounterVisibility} className={styles.addButton}>
              ADD
            </button>
          )}
          {isCounterVisible && (
            <div className={styles.container}>
              <button className={styles.button} onClick={decrement}>
                -
              </button>
              <div className={styles.counter}>{count}</div>
              <button className={styles.button} onClick={increment}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
