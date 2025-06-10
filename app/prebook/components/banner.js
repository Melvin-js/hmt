import styles from './banner.module.css';
import react from 'react';
import Image from 'next/image';
import todaysMenu from '/public/images/This Week’s Menu.png';


function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={todaysMenu} alt="Today's Menu" className={styles.bannerImage} height={55} />
            <p> Select items for each day or a slot, add it to your cart and
                checkout all items together.
            </p>
        </div>
    )
}
export default Banner;