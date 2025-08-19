import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/אוקסנה בראל אייקון.png";
import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const openWhatsApp = () => {
    const phone = '972544948282';
    const message = 'היי אוקסנה הגעתי מהדף, אשמח לשמוע ממך עוד על';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const menuItems = [
    
    { name: 'מי אני', to: 'מי אני', offset: -100 },
    { name: 'מגוון הטיפולים', to: 'מגוון הטיפולים', offset: -100 },
    { name: 'שאלות נפוצות', to: 'שאלות נפוצות', offset: 0 },
  ];

  return (
    <>
      <nav className={`
        ${styles.navbar} 
        ${isVisible ? styles.visible : styles.hidden}
      `}>
        <div className={styles.navbarInner}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>

          <button className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonText}>לפתיחת התפריט</span>
            </div>
          </button>
        </div>
      </nav>

      {(isMenuOpen || isClosing) && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuLogo}></div>
          </div>

          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={toggleMenu}
                className={styles.mobileMenuItem}
              >
                {item.name}
              </ScrollLink>
            ))}

            <div
              className={styles.mobileMenuItem}
              onClick={openWhatsApp}
            >
              יצירת קשר
            </div>

            <div className={styles.center}>
              <img className={styles.centerLogo} src={logo} alt="אוקסנה בראל לוגו" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarNew;
