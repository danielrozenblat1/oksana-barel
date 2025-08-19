
import styles from './Recommends.module.css';


// Import your images
import result1 from "../../images/אקנה ופוסט אקנה 1.png";
import result2 from "../../images/אקנה ופוסט אקנה 2.png";
import result3 from "../../images/אקנה ופוסט אקנה 3.png";
import result4 from "../../images/אקנה ופוסט אקנה 4.png";
import result5 from "../../images/אקנה ופוסט אקנה 5.png";
import result6 from "../../images/אקנה ופוסט אקנה 6.png";

const Acne = () => {
  const images = [
  result1, result2, result3, result4, result5, result6, 
  ];

  return (
    <>

     <div className={styles.title}>
    Acne & Post Acne
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

export default Acne;