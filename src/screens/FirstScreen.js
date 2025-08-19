import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FirstScreen.module.css';
import middleImage from "../images/אוקסנה בראל תמונה ראשית.png";
import rightImage from "../images/אוקסנה בראל תמונה ראשית.png";
import leftImage from "../images/אוקסנה בראל תמונה ראשית.png";
import Loader from '../components/loader/Loader';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.container} id="עמוד הבית">
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>Oksana Barel</h1>
        <div className={styles.description}>קליניקה למגוון טיפולים קוסמטיים לכל הגילאים</div>
        
        {/* אייקון גלילה למטה */}
        <div className={styles.scrollIndicator} onClick={handleScrollDown}>
          <ChevronDown className={styles.scrollIcon} size={32} />
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;