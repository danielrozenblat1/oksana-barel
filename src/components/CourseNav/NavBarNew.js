import React, { useState, useEffect, useCallback } from 'react';
import styles from './NavBarNew.module.css';
import logo from "../../images/אוקסנה בראל אייקון.png";
import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // פונקציה לגלילה חלקה משלנו
  const smoothScrollTo = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > 200);
      }, 10); // דחיית הבדיקה ב-10ms לביצועים טובים יותר
    };

    // הוספת האירוע עם passive: true לביצועים טובים יותר
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
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

  const handleMenuItemClick = (elementId, offset) => {
    smoothScrollTo(elementId, offset);
    toggleMenu();
  };

  const handleFranceClick = () => {
    window.location.href = '/france';
  };

  const handleIsraelClick = () => {
    window.location.href = '/';
  };

  const menuItems = [
    { name: 'מי אני', id: 'מי אני', offset: -100 },
    { name: 'מגוון הטיפולים', id: 'מגוון הטיפולים', offset: -100 },
    { name: 'שאלות נפוצות', id: 'שאלות נפוצות', offset: 0 },
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

          {/* דגלים */}
          <div className={styles.flagsContainer}>
            <button className={styles.flagButton} onClick={handleIsraelClick} title="עברית">
              <div className={styles.flagIcon}>🇮🇱</div>
            </button>
            <button className={styles.flagButton} onClick={handleFranceClick} title="Français">
              <div className={styles.flagIcon}>🇫🇷</div>
            </button>
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
              <button
                key={index}
                onClick={() => handleMenuItemClick(item.id, item.offset)}
                className={styles.mobileMenuItem}
              >
                {item.name}
              </button>
            ))}

            <button
              className={styles.mobileMenuItem}
              onClick={openWhatsApp}
            >
              יצירת קשר
            </button>

            {/* דגלים במובייל מניו */}
            <div className={styles.mobileFlagsContainer}>
              <button className={styles.mobileFlagButton} onClick={handleIsraelClick}>
                <span className={styles.mobileFlagIcon}>🇮🇱</span>
                <span className={styles.mobileFlagText}>עברית</span>
              </button>
              <button className={styles.mobileFlagButton} onClick={handleFranceClick}>
                <span className={styles.mobileFlagIcon}>🇫🇷</span>
                <span className={styles.mobileFlagText}>Français</span>
              </button>
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