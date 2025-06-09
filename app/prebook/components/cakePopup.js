import React, { useState, useEffect } from 'react';
import styles from './cakePopup.module.css';

const Popup = ({ initialValue, onSave, onCancel }) => {
  const [input, setInput] = useState(initialValue || '');

  useEffect(() => {
    setInput(initialValue || '');
  }, [initialValue]);

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupCard}>
        <h3>Make It Extra Special with a Personal Message</h3>
        <input
          type="text"
          value={input}
          maxLength={25}
          onChange={(e) => setInput(e.target.value)}
          placeholder="E.g. Happy Birthday, John!"
          className={styles.popupInput}
        />
        <div className={styles.popupActions}>
          {onCancel && <button onClick={onCancel} className={styles.cancelBtn}>Cancel</button>}
          <button onClick={() => onSave(input)} className={styles.saveBtn}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
