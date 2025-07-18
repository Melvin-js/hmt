'use client';

import { useState } from 'react';
import styles from './rightPane.module.css';
import Image from 'next/image';
import logo from '/public/images/SqOne_Logo.png';
import { useRouter } from 'next/navigation';

export default function RightPane({ onClose, onPage }) {
  const router = useRouter();

  const [showSubMenu, setShowSubMenu] = useState(false);

  const menuButtons = [
    { label: 'Home', route: '/home' },
    { label: "Today's Menu", route: '/dailyTreats' },
    { label: 'Pre-book Menu', route: '/prebook' },
    { label: 'Made to Order', route: '/advanceOrders' },
    { label: 'My Address', route: '/myAddress' },
    { label: 'Pay Advance', route: '/payAdvance' },
    { label: 'Contact', route: '/contact' },
    { label: 'About Us', route: '/aboutUs' },
  ];

  const subMenuItems = [
    { label: 'Cakes', path: '/advanceOrders/custom' },
    { label: 'Snacks and Savouries', path: '/advanceOrders/bulk' },
    { label: 'Takeaway Treats', path: '/advanceOrders/bulk' },
    { label: 'Condiments', path: '/advanceOrders/bulk' },
    { label: 'Specials', path: '/advanceOrders/bulk' },
  ];

  return (
    <div className={styles.rightPane}>
      <div className={styles.title}>
        <button onClick={onClose} className={styles.closeBtn}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <button className={styles.loginBtn}>LOGIN</button>
      </div>

      <div className={styles.menu}>
        {menuButtons.map(({ label, route }) => {
          const isActive = onPage === route.slice(1);
          const isMadeToOrder = label === 'Made to Order';

          return (
            <div key={route}>
              <button
                className={
                  onPage === 'prebook'
                    ? styles.redClass
                    : onPage === 'advanceOrders'
                      ? styles.blueClass
                      : styles.menuBtn
                }
                disabled={isActive}
                onClick={() => {
                  if (isMadeToOrder) {
                    setShowSubMenu(prev => !prev);
                  } else {
                    router.push(route);
                    onClose?.();
                  }
                }}
                style={{
                  background: onPage === 'prebook' && isActive
                    ? 'linear-gradient(to left, rgba(249, 159, 159, 0.9) 30%, rgba(255, 255, 255, 0) 100%)'
                    : onPage === 'dailyTreats' && isActive
                      ? 'linear-gradient(to left, rgb(255, 201, 125), rgba(255, 255, 255, 0))'
                      : onPage === 'advanceOrders' && isActive
                        ? 'linear-gradient(to left, rgb(125, 136, 255), rgba(255, 255, 255, 0))'
                        : isActive
                          ? 'linear-gradient(to left, rgb(255, 201, 125), rgba(255, 255, 255, 0))'
                          : '',
                  paddingRight: isActive ? '0px' : '30px',
                  color: onPage === 'prebook' && isActive
                    ? 'rgb(179, 9, 9)'
                    : onPage === 'dailyTreats' && isActive
                      ? 'rgb(183, 111, 3)'
                      : onPage === 'advanceOrders' && isActive
                        ? 'rgb(0, 51, 170)'
                        : isActive
                          ? 'rgb(183, 111, 3)'
                          : ''
                }}
              >
                {label}
                {isActive && <div className={styles.rightBorder}
                  style={{
                    backgroundColor: onPage === 'prebook' && isActive
                      ? 'red'
                      : onPage === 'dailyTreats' && isActive
                        ? 'orange'
                        : onPage === 'advanceOrders' && isActive
                        ? 'blue'
                        : 'orange', 
                  }}
                ></div>}
                {isMadeToOrder && (
                  <i
                    className={`fa-solid ${showSubMenu ? 'fa-angle-up' : 'fa-angle-down'}`}
                    style={{ fontSize: '15px' }}
                  ></i>
                )}
              </button>

              {isMadeToOrder && showSubMenu && (
                <div className={styles.subMenu}>
                  {subMenuItems.map(({ label, path }) => (
                    <button
                      key={label}
                      className={styles.subMenuBtn}
                      onClick={() => {
                        router.push(path);
                        onClose?.();
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
