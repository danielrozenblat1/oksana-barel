import styles from './Recs.module.css';

// Import your images
import result1 from "../../images/אוקסנה בראל המלצות 1.png";
import result2 from "../../images/אוקסנה בראל המלצות 2.png";
import result3 from "../../images/אוקסנה בראל המלצות 3.png";
import result4 from "../../images/אוקסנה בראל המלצות 4.png";
import result5 from "../../images/אוקסנה בראל המלצות 5.png";
import result6 from "../../images/אוקסנה בראל המלצות 6.png";
import result7 from "../../images/אוקסנה בראל המלצות 7.png";
import Button from '../button/Button';

const Recs = () => {
 const images = [
   result1, result2, result3, result4, result5, result6, result7
 ];

 return (
   <>
     <div className={styles.explain}>
       Et que se passe-t-il après les traitements ? Ça ressemble à ça :
     </div>
  
     <div className={styles.container}>
       <div className={styles.scrollTrack}>
         {/* Premier groupe d'images */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`first-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`Recommandation ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
         {/* Deuxième groupe identique d'images */}
         <div className={styles.scrollContainer}>
           {images.map((img, index) => (
             <div key={`second-${index}`} className={styles.imageWrapper}>
               <img
                 src={img}
                 alt={`Recommandation ${index + 1}`}
                 className={styles.image}
               />
             </div>
           ))}
         </div>
       </div>
     </div>
     <Button text="Cliquez ici pour nous contacter"/>
   </>
 );
};

export default Recs;