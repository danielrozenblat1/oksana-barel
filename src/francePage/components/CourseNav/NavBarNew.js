import React, { useState, useEffect, useCallback } from 'react';
import styles from './NavBarNew.module.css';
import logo from "../../../images/אוקסנה בראל אייקון.png";
import { FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Fonction de défilement fluide personnalisée
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
      }, 10); // Retard de vérification de 10ms pour de meilleures performances
    };

    // Ajout de l'événement avec passive: true pour de meilleures performances
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
    const message = 'Salut Oksana, je viens de votre site, j\'aimerais en savoir plus sur';
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
    { name: 'Qui suis-je', id: 'מי אני', offset: -100 },
    { name: 'Gamme de traitements', id: 'מגוון הטיפולים', offset: -100 },
    { name: 'Questions fréquentes', id: 'שאלות נפוצות', offset: 0 },
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

          {/* Drapeaux */}
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
              <span className={styles.buttonText}>Ouvrir le menu</span>
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
              Contact
            </button>

            {/* Drapeaux dans le menu mobile */}
            <div className={styles.mobileFlagsContainer}>
              <button className={styles.mobileFlagButton} onClick={handleFranceClick}>
                <span className={styles.mobileFlagIcon}>🇫🇷</span>
                <span className={styles.mobileFlagText}>Français</span>
              </button>
              <button className={styles.mobileFlagButton} onClick={handleIsraelClick}>
                <span className={styles.mobileFlagIcon}>🇮🇱</span>
                <span className={styles.mobileFlagText}>עברית</span>
              </button>
            </div>

            <div className={styles.center}>
              <img className={styles.centerLogo} src={logo} alt="Logo Oksana Barel" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarNew;