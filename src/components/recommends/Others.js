
import styles from './RecommendsR.module.css';


// Import your images
import result1 from "../../images/אוקסנה שאר הטיפולים 1.png";
import result2 from "../../images/אוקסנה שאר הטיפולים 2.png";
import result3 from "../../images/אוקסנה שאר הטיפולים 3.png";
import result4 from "../../images/אוקסנה שאר הטיפולים 4.png";
import result5 from "../../images/אוקסנה שאר הטיפולים 5.png";
import result6 from "../../images/אוקסנה שאר הטיפולים 6.png";
import result7 from "../../images/אוקסנה שאר הטיפולים 7.png";
import result8 from "../../images/אוקסנה שאר הטיפולים 8.png";
import result9 from "../../images/אוקסנה שאר הטיפולים 9.png";
import result10 from "../../images/אוקסנה שאר הטיפולים 10.png";

const Others = () => {
  const images = [
  result1, result2, result3, result4, result5, result6, result7, result8, 
    result9, result10,
  ];

  return (
    <>

     <div className={styles.title}>
    And Many Others..
      </div>
   <div className={styles.explain}>
הסרת איפור קבוע, טיפול בסימני מתיחה בבטן/ ירכיים/ברכיים, הידרהפשיאל, הסרת סרחי עור, מיצוק העור ועוד עשרות סוגי טיפולים
      </div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Others;