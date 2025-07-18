'use client'
import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import cake from '/public/images/Cake.png';
import cakePopup from '/public/images/cakePopup.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion, AnimatePresence } from 'framer-motion';


function ItemCard({ data, cakeMsg }) {
  const [count, setCount] = useState(0); 
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState(''); 
  const [initialMessage, setInitialMessage] = useState('');
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  // Increment and decrement functions
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const toggleCounterVisibility = () => {
    if (!isCounterVisible) {
      setCount(1); 
    }
    setIsCounterVisible((prevState) => !prevState);
  };

  const handleZeroCount = () => {
    if (count === 0) {
      setIsCounterVisible(false);
    }
  };

  const sendData = (count) => {
    data(count);
  };

  useEffect(() => {
    handleZeroCount();
    sendData(count);
  }, [count]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSave = () => {
   
    setInitialMessage(message); 
    setIsPopupVisible(false); 
  };

  const handleCancel = () => {
    setMessage(initialMessage); 
    setIsPopupVisible(false); 
  };

  const [msgCount, setMsgCount] = useState(1);
  const [initialMsgCount, setInitialMsgCount] = useState(1);

  const handleMsgCountChange = (event) => {
    setMsgCount(event.target.value);
  };

  const generateOptions = (max) => {
    let options = [];
    for (let i = 0; i <= max; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;

  };

  return (
    <div className={styles.card}>
      <Image src={cake} alt="Cake" className={styles.cake} />
      <h5>Party Cakelet Chocolate Single</h5>

      {cakeMsg !== 'true' && count > 0 ? (
        <div className={styles.cutomizeButton}>
          <i className="fa-solid fa-pen" style={{ fontSize: '13px' }}></i>
          <button className={styles.messageButton} onClick={() => setIsPopupVisible(!isPopupVisible)}>
            {message === '' ? 'Customize' : 'Edit Message'} {cakeMsg}
          </button>
        </div>
      ) : (
        <div className={styles.moreInfo}>
          <p className={styles.weightLabel}>200gms</p>
          <button onClick={() => setIsInfoVisible(!isInfoVisible)}>
            <i className="bi bi-info-circle" id={styles.infoIcon} style={{ color: isInfoVisible ? '#ff9d00' : 'rgb(62, 62, 62)' }}></i>
          </button>
        </div>
      )}

      <AnimatePresence>
        {isInfoVisible && (
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>Feel the fantastic fusion of nutty brownie base with soft vanilla cake, frosted with light chocolate icing in this Vanilla Brownie Cake</p>
          </motion.div>
        )}
      </AnimatePresence>


      {isPopupVisible === true && (
        <div className={styles.popupOverlay}>
          <div className={styles.messagePopup}>
            <button
              className={styles.closeButton}
              onClick={() => {
                setIsPopupVisible(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className={styles.popupContent}>
              <Image src={cakePopup} alt="Cake Popup" className={styles.popupImage} width={400} />
              <h4>Customize your order</h4>
              <p>Write a message on the cake</p>
              <textarea
                className={styles.messageInput}
                placeholder="Enter the message..."
                value={message} 
                onChange={handleChange}
                maxLength="40" 
              />
              {count > 1 && <div className={styles.countCakes}>
                <label htmlFor="cakeCount">Choose the number of cakes to add a special message on.</label>
                <select id="cakeCount" name="cakeCount" value={msgCount} onChange={handleMsgCountChange}>
                  {generateOptions(count)}
                </select>
              </div>}
              <div className={styles.popupButtons}>
                <button className={styles.popupCancel} onClick={handleCancel}>
                  Cancel
                </button>
                <button className={styles.popupSave} onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.tag}>
        <h4>Rs 500</h4>

        <div style={{ textAlign: 'center' }}>
          {!isCounterVisible && (
            <button onClick={() => {
              toggleCounterVisibility();
              setIsInfoVisible(false);
            }} className={styles.addButton}>
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
