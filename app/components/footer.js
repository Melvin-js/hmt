import React, { useState, useEffect } from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import logo from '/public/images/SqOneFooter.png';

const Footer = () => {

    return (
        <>
        <div className={styles.footer}>
            <div className={styles.leftSection}>
                <div className={styles.column}>
                    <h4>INFORMATION</h4>
                    <a>SITEMAP</a>
                    <a>SHIPPING & RETURNS</a>
                    <a>PRIVACY NOTICE</a>
                    <a>BLOG</a>
                    <a>FORUMS</a>
                    <a>FAQS</a>
                </div>
                <div className={styles.column}>
                    <h4>CONTANCT</h4>
                    <a>EMAIL: MAIL@SQUAREONETREATS.COM</a>
                    <a href="tel:+91-471-4010445">PH: +91-471-4010445</a>
                    <a>PRIVACY NOTICE</a>
                    <a href="tel:+91-9495400800">FOR STORE ORDERS: +91-9495400800</a>
                </div>
            </div>
            <div className={styles.rightSection}>
                <Image src={logo} alt="Logo" className={styles.logo} width={160} />
                <div className={styles.socialIcons}>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className={styles.copywrite}>
            <p>All prices are entered including tax. Excluding shipping<br />
            Copyright © 2025 Square One HomemadeTreats. All rights reserved.</p>
        </div>
        </>
    );
};

export default Footer;