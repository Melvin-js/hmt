"use client";

import { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import cakes from '/public/vectors/CategoryIcons/cakes.png';
import condiments from '/public/vectors/CategoryIcons/condiments.png';
import snacks from '/public/vectors/CategoryIcons/snacks.png';
import takeaways from '/public/vectors/CategoryIcons/takeaways.png';
import specials from '/public/vectors/CategoryIcons/specials.png';
import ItemCard from './components/card';
import Banner from './components/banner';
import adBanner from '/public/images/adBanner.png';
import menuIcon from '/public/vectors/Menu_icon.png';
import Footer from '../components/footer';
import Navbar from '../components/navbar'


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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.navbar}><Navbar onPage={'dailyTreats'} /></div>
                <Banner />
                <div className={styles.content}>
                    <div className={styles.leftPane}>
                        <div className={styles.searchSort}>
                            <div className={styles.search}>
                                <i className="fas fa-search text-gray-500 text-sm"></i>
                                <input type="text" placeholder="Search for items.." className={styles.searchInput} />
                            </div>

                            <div className={styles.sort}>
                                <div className={styles.dropdown}>
                                    <button
                                        className={styles.dropdownButton}
                                        onClick={() => setOpen(!open)}
                                    >
                                        Sort by: <b>{sortBy}</b>
                                    </button>
                                    {open && (
                                        <div className={styles.dropdownContent}>
                                            <a href="#" onClick={() => handleSortChange('Price')}>Price</a>
                                            <a href="#" onClick={() => handleSortChange('Newest')}>Newest</a>
                                            <a href="#" onClick={() => handleSortChange('Alphabetic Order')}>Alphabetic Order</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.category}>
                            {categories.map((category, index) => (
                                <div
                                    key={category.name}
                                    className={`${styles.categoryItem} ${selectedCategory === category.name ? styles.activeCate : ''}`}
                                    onClick={() => setSelectedCategory(category.name)}
                                >
                                    <Image src={category.image} alt={category.name} className={styles.categoryIcons} height={50} width={50} />
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
