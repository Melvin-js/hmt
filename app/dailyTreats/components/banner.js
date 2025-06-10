import styles from './banner.module.css';
import react from 'react';
import Image from 'next/image';
import todaysMenu from '/public/images/TodaysMenu.png';

function Banner () {
    return(
        <div className={styles.banner}>
            <Image src={todaysMenu} alt="Today's Menu" className={styles.bannerImage} height={55} />
            <p>View our products available at the Pattom shop, today! 
            Order while stock lasts.</p>
        </div>
    )
}
export default Banner;