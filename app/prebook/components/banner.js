import styles from './banner.module.css';
import react from 'react';
import Image from 'next/image';
import todaysMenu from '/public/images/This Week’s Menu.png';
import { useRouter } from 'next/navigation';

function Banner() {

    const router = useRouter();

    return (
        <div className={styles.banner}>
            <Image src={todaysMenu} alt="Today's Menu" className={styles.bannerImage} height={55} />
            <p> Select items for each day or a slot, add it to your cart and
                checkout all items together.
            </p>
            <div className={styles.left} onDoubleClick={() => router.push('/dailyTreats')}></div>
            <div className={styles.right} onDoubleClick={() => router.push('/dailyTreats')}></div>
        </div>
    )
}
export default Banner;