
import { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import logo from '/public/images/SqOne_Logo.png';
import ham_icon from '/public/vectors/hamburger_icon.png';
import { motion, AnimatePresence } from 'framer-motion';
import RightPane from './rightPane'

export default function Navbar({ onPage }) {
    
    const [isRightPaneOpen, setIsRightPaneOpen] = useState(false);

    return (
        <>
            <div className={styles.navbar}>
                <Image src={logo} alt="Logo" className={styles.logo} unoptimized />
                <div className={styles.navLinks}>
                    <div className={styles.navLinkText}>
                        <a href="/dailyTreats">LOGIN</a>
                        <a href="/dailyTreats">MY ORDERS</a>
                    </div>

                     <button onClick={() => setIsRightPaneOpen(true)} className={styles.iconButton}> {/*Make it true for side Panel */}
                        <Image src={ham_icon} alt="Icon" className={styles.ham_icon} height={18} />
                    </button>

                    <AnimatePresence>
                        {isRightPaneOpen && (
                            <>
                                {/* Overlay */}
                                <motion.div
                                    className={styles.overlay}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.2 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setIsRightPaneOpen(false)}  // clicking overlay closes panel
                                />

                                {/* Right Pane */}
                                <motion.div
                                    key="rightPane"
                                    className={styles.rightPane}
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                >
                                    <RightPane onClose={() => setIsRightPaneOpen(false)} onPage={onPage} />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>


                </div>
            </div>
        </>
    );
}