import styles from './banner.module.css';
import react from 'react';
import Image from 'next/image';
import todaysMenu from '/public/images/TodaysMenu.png';
import { useRouter } from 'next/navigation';


function Banner() {

    const router = useRouter();

    return (
        <div className={styles.banner}>
            <Image src={todaysMenu} alt="Today's Menu" className={styles.bannerImage} height={55} />
            <p>View our products available at the Pattom shop, today!
                Order while stock lasts.</p>

            <div className={styles.left} onDoubleClick={() => router.push('/prebook')}></div>
            <div className={styles.right} onDoubleClick={() => router.push('/prebook')}></div>

        </div >
    )
}
export default Banner;