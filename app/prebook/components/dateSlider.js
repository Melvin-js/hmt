import { useEffect, useState } from 'react';
import styles from './dateSlider.module.css'; // Import the CSS module

function getTwoWeeksDates() {
  const today = new Date();
  const dates = [];

  // Loop through 14 days starting from today
  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i); // Add i days to today

    // Format the date: weekday and day of the month
    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    dates.push(formatted);
  }

  return dates;
}

export default function DateSlider( {sendData}) {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const d = getTwoWeeksDates();
    setDates(d);
    setSelectedDate(d[0]); // Set today's date as the default selected date
  }, []);

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    sendData(true);
    setSelectedTime(time);
  };

  return (
    <>
      <div className={styles['slider-container']}>
        <div className={styles.slider}>
          {dates.map((date, index) => (
            <div
              key={index}
              className={`${styles['date-card']} ${selectedDate === date ? styles.selected : ''}`}
              onClick={() => handleDateClick(date)}
            >
              <div className="day"> {date.split(',')[0]}</div>
              <div className="date">{date.split(',')[1]}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.time}>
        <button className={`${styles['timeCard']} ${selectedTime === '12:30 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('12:30 PM')}>12:30 PM
        </button>
        <button className={`${styles['timeCard']} ${selectedTime === '02:30 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('02:30 PM')}>2:30 PM
        </button>
        <button className={`${styles['timeCard']} ${selectedTime === '05:00 PM' ? styles.selectedTime : ''}`}
          onClick={() => handleTimeClick('05:00 PM')}>05:00 PM
        </button>
      </div>
    </>
  );
}
