"use client";

import React, { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import logo from '@/public/images/SqOne_Logo.png';
import ham_icon from '@/public/vectors/hamburger_icon.png';
import banner from '@/public/images/banner.png';
import cakes from '@/public/vectors/CategoryIcons/cakes.png';
import condiments from '@/public/vectors/CategoryIcons/condiments.png';
import snacks from '@/public/vectors/CategoryIcons/snacks.png';
import takeaways from '@/public/vectors/CategoryIcons/takeaways.png';
import specials from '@/public/vectors/CategoryIcons/specials.png';
import ItemCard from './components/card';

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

    const [selectedCategory, setSelectedCategory] = useState('Cakes');

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Image src={logo} alt="Logo" className={styles.logo} unoptimized />
                <div className={styles.navLinks}>
                    <a href="/dailyTreats">LOGIN</a>
                    <a href="/dailyTreats">MY ORDERS</a>
                    <a href="/dailyTreats"><Image src={ham_icon} alt="Icon" className={styles.ham_icon} /></a>
                </div>
            </div>
            <Image src={banner} alt="Banner" className={styles.banner} unoptimized />

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
                        <div
                            className={`${styles.categoryItem} ${selectedCategory === 'Cakes' ? styles.activeCate : ''}`}
                            onClick={() => setSelectedCategory('Cakes')}
                        >
                            <Image src={cakes} alt="Cakes" className={styles.categoryIcons} />
                            <h5>Cakes</h5>
                        </div>

                        <div
                            className={`${styles.categoryItem} ${selectedCategory === 'Snacks' ? styles.activeCate : ''}`}
                            onClick={() => setSelectedCategory('Snacks')}
                        >
                            <Image src={snacks} alt="Snacks" className={styles.categoryIcons} />
                            <h5>Snacks</h5>
                        </div>

                        <div
                            className={`${styles.categoryItem} ${selectedCategory === 'Condiments' ? styles.activeCate : ''}`}
                            onClick={() => setSelectedCategory('Condiments')}
                        >
                            <Image src={condiments} alt="Condiments" className={styles.categoryIcons} />
                            <h5>Condiments</h5>
                        </div>

                        <div
                            className={`${styles.categoryItem} ${selectedCategory === 'Takeaways' ? styles.activeCate : ''}`}
                            onClick={() => setSelectedCategory('Takeaways')}
                        >
                            <Image src={takeaways} alt="Takeaways" className={styles.categoryIcons} />
                            <h5>Takeaways</h5>
                        </div>

                        <div
                            className={`${styles.categoryItem} ${selectedCategory === 'Specials' ? styles.activeCate : ''}`}
                            onClick={() => setSelectedCategory('Specials')}
                        >
                            <Image src={specials} alt="Specials" className={styles.categoryIcons} />
                            <h5>Specials</h5>
                        </div>
                    </div>

                    <ItemCard />
                </div>

            </div>


        </div>
    );
}
