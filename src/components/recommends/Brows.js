
import styles from './RecommendsR.module.css';


// Import your images
import result1 from "../../images/אוקסנה בראל גבות 1.png";
import result2 from "../../images/אוקסנה בראל גבות 2.png";
import result3 from "../../images/אוקסנה בראל גבות 3.png";
import result4 from "../../images/אוקסנה בראל גבות 4.png";
import result5 from "../../images/אוקסנה בראל גבות 5.png";
import result6 from "../../images/אוקסנה בראל גבות 6.png";
import result7 from "../../images/אוקסנה בראל גבות 7.png";
import result8 from "../../images/אוקסנה בראל גבות 8.png";
import result9 from "../../images/אוקסנה בראל גבות 9.png";
import result10 from "../../images/אוקסנה בראל גבות 10.png";
import result11 from "../../images/אוקסנה בראל גבות 11.png";
import result12 from "../../images/אוקסנה בראל גבות 12.png";
import result13 from "../../images/אוקסנה בראל גבות 13.png";
import result14 from "../../images/אוקסנה בראל גבות 14.png";
import result15 from "../../images/אוקסנה בראל גבות 15.png";
const Brows = () => {
  const images = [
  result1, result2, result3, result4, result5, result6, result7, result8, 
    result9, result10, result11, result12, result13, result14, result15
  ];

  return (
    <>

     <div className={styles.title}>
    Brows
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

export default Brows;