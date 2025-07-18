import { useEffect, useState } from 'react';
import styles from './dateSlider.module.css';

function getTwoWeeksDates() {
  const today = new Date();
  const dates = [];

  for (let i = 0; i < 10; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    if (date.getDay() === 0) {
      continue; 
    }

    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'short',  // Abbreviated weekday (e.g., "Sat")
      day: 'numeric',    // Day of the month (e.g., "26")
    });

    const finalFormatted = formatted.replace(' ', ', ');

    dates.push({ date: finalFormatted, dayOfWeek: date.getDay() });  
  }

  return dates;
}


export default function DateSlider({ sendData }) {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const unavailableDates = ['10, Thu'];

  useEffect(() => {
    const d = getTwoWeeksDates();
    setDates(d);
    setSelectedDate(d[0].date); 
    setSelectedTime('12:30 PM');
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    sendData(true);
    setSelectedTime(time);
  };


  const isUnavailable = (date) => {
    return unavailableDates.includes(date); 
  };

  return (
    <>
      <div className={styles['slider-container']}>
        <div className={styles.slider}>
          {dates.map(({ date, dayOfWeek }, index) => (
            <div
              key={index}
              className={`${styles['date-card']} ${selectedDate === date ? styles.selected : ''} 
                ${isUnavailable(date) ? styles.unavailable : ''}`}
              onClick={() => handleDateClick(date)}
            >
              <div className={styles.day}>{date.split(',')[1]}</div>
              <div className={styles.date}>{date.split(',')[0]}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.time}>
        <button
          className={`${styles['timeCard']} ${selectedTime === '12:30 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('12:30 PM')}
        >
          12:30 PM
        </button>
        <button
          className={`${styles['timeCard']} ${selectedTime === '02:30 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('02:30 PM')}
        >
          2:30 PM
        </button>
        <button
          className={`${styles['timeCard']} ${selectedTime === '05:00 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('05:00 PM')}
        >
          05:00 PM
        </button>
      </div>
    </>
  );
}
