"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import logo from '/public/images/SqOne_Logo.png';
import ham_icon from '/public/vectors/hamburger_icon.png';
import banner from '/public/images/banner.png';
import cakes from '/public/vectors/CategoryIcons/cakes.png';
import condiments from '/public/vectors/CategoryIcons/condiments.png';
import snacks from '/public/vectors/CategoryIcons/snacks.png';
import takeaways from '/public/vectors/CategoryIcons/takeaways.png';
import specials from '/public/vectors/CategoryIcons/specials.png';
import ItemCard from './components/card';
import Banner from './components/banner';
import adBanner from '/public/images/adBanner.png';
import menuIcon from '/public/vectors/menu_icon.png';
import Footer from '../components/footer';
import DateSlider from './components/dateSlider';



export default function DailyTreatsPage() {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 0 && setQuantity(quantity - 1);

    const [open, setOpen] = useState(false)
    const [sortBy, setSortBy] = useState('Price') // default sorting

    const handleSortChange = (method) => {
        setSortBy(method)
        setOpen(false)
    }

    const [data, setData] = useState(0)
    const handleItemData = (count) => {
        setData(count);
    }

    const [selectedCategory, setSelectedCategory] = useState('Cakes');

    const categories = [
        { name: 'Cakes', image: cakes },
        { name: 'Snacks', image: snacks },
        { name: 'Condiments', image: condiments },
        { name: 'Takeaways', image: takeaways },
        { name: 'Specials', image: specials }
    ];


    const [openFloatingMenu, setOpenFloatingMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setOpenFloatingMenu(!openFloatingMenu);

    const [dateTime, setDateTime] = useState();

    const handleTimeDate = (data) => {
        setDateTime(true);
        console.log(`Selected date and time: ${data}`);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <Image src={logo} alt="Logo" className={styles.logo} unoptimized />
                    <div className={styles.navLinks}>
                        <div className={styles.navLinkText}>
                            <a href="/dailyTreats">LOGIN</a>
                            <a href="/dailyTreats">MY ORDERS</a>
                        </div>

                        <a href="/dailyTreats"><Image src={ham_icon} alt="Icon" className={styles.ham_icon} height={18} /></a>
                    </div>
                </div>
                <Banner />
                <div className={styles.content}>
                    <div className={styles.leftPane}>

                        <div className={styles.dateSlider}><DateSlider sendData={handleTimeDate} /></div>

                        <div className={styles.category}>
                            {categories.map((category, index) => (
                                <div
                                    key={category.name}
                                    className={`${styles.categoryItem} ${selectedCategory === category.name ? styles.activeCate : ''}`}
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <Image src={category.image} alt={category.name} className={styles.categoryIcons} />
                                    <h5>{category.name}</h5>
                                </div>
                            ))}
                        </div>
                        
                        <button className={styles.floatingIcon} onClick={toggleMenu}>
                            <Image src={menuIcon} alt="Menu Icon" className={styles.menuIcon} height={20} />
                            <h4>Menu</h4>
                        </button>
                        

                        <div className={styles.floatingCategory}>
                            {openFloatingMenu && <div className={styles.floatingMenu}>
                                {categories.map((category, index) => (
                                    <div
                                        key={category.name}
                                        className={`${styles.floatingCategoryItem} ${selectedCategory === category.name ? styles.activeFloatCate : ''}`}
                                        onClick={() => {
                                            toggleMenu();
                                            setSelectedCategory(category.name)
                                        }}
                                    >
                                        <h5>{category.name}</h5>
                                    </div>
                                ))}
                            </div>}
                        </div>
                        

                        {openFloatingMenu && <div className={styles.floatingMenuOverlay}></div>}


                        <div className={styles.itemContainer}>
                            <ItemCard data={handleItemData} />
                            <ItemCard data={handleItemData} />
                            <ItemCard data={handleItemData} />
                            <ItemCard data={handleItemData} />
                            <ItemCard data={handleItemData} />
                            <ItemCard data={handleItemData} />
                        </div>
                        
                    </div>
                    <div className={styles.rightPane}>
                        {data !== 0 && <div className={styles.cart}>
                            <h2>Summary</h2>

                            <div className={styles.items}>
                                <>
                                    {Array(data).fill(null).map((_, index) => (
                                        <div key={index} className={styles.item}>
                                            <p>Party Cakelet Chocolate Single 200gms </p>
                                            <p style={{ whiteSpace: 'nowrap' }}>Rs 500</p>
                                        </div>
                                    ))}
                                </>
                            </div>

                            <h4><strong>Total Items: </strong>{data}</h4>
                            <h4><strong>Total Amount: </strong> Rs {data * 500} </h4>
                            <button className={styles.checkoutButton}>CHECKOUT</button>
                        </div>}
                        <div className={styles.bannerImage}>
                            <Image src={adBanner} alt="Ad Banner" className={styles.adBanner} />
                        </div>
                    </div>
                </div>
            </div>
            {data !== 0 && <div className={styles.bottomPane}>
                <div>
                    <h4 className={styles.bottomPaneText}><strong>Total Items: </strong>{data}</h4>
                    <h4><strong>Total Amount: </strong> Rs {data * 500} </h4>
                </div>
                <button className={styles.checkoutButtonMobile}>CHECKOUT</button>
            </div>
            }

            <Footer />
        </>
    );
}
