'use client'
import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import cake from '/public/images/Cake.png';
import cakePopup from '/public/images/cakePopup.png';

function ItemCard({ data, cakeMsg }) {
  const [count, setCount] = useState(0); // Initial count is 0
  const [isCounterVisible, setIsCounterVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState(''); // State to hold the message input
  const [initialMessage, setInitialMessage] = useState(''); // To store the initial message when the popup is opened

  // Increment and decrement functions
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  // Toggle visibility of the counter
  const toggleCounterVisibility = () => {
    if (!isCounterVisible) {
      setCount(1); // Set initial count to 1 when the counter is shown
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

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSave = () => {
    // Save the message when Save button is clicked
    setInitialMessage(message); // Save the message
    setIsPopupVisible(false); // Close the popup
  };

  const handleCancel = () => {
    // Revert to the initial message if Cancel button is clicked
    setMessage(initialMessage); // Set the message to the initial saved message
    setIsPopupVisible(false); // Close the popup
  };

  const [msgCount, setMsgCount] = useState(1);
  const [initialMsgCount, setInitialMsgCount] = useState(1);

  const handleMsgCountChange = (event) => {
    // Update state with the selected value from the dropdown
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
        <p className={styles.weightLabel}>200gms</p>
      )}

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
                value={message} // Controlled component with state
                onChange={handleChange}
                maxLength="40" // Correct onChange handler
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
