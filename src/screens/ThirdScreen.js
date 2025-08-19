import Acne from "../components/recommends/Acne"
import Brows from "../components/recommends/Brows"
import Works from "../components/recommends/Works"
import styles from "./ThirdScreen.module.css"
import lasers from "../images/לייזרים.png"
import certificates from "../images/אוקסנה תעודות.png"
import Others from "../components/recommends/Others"
const ThirdScreen=()=>{


    return <>
    
    <div className={styles.description}> בשנים האחרונות עברתי הכשרות בעשרות תחומים </div>
      <div className={styles.imageContainer}><img className={styles.image} src={certificates}/></div>
          <div className={styles.description}>ועברו אצלי אלפי נשים בתחומים הבאים:</div>
    <Works/>
    <Brows/>
    <Acne/>
    <Others/>
       
      <div className={styles.description}>הרוב המוחלט של הטיפולים מבוצעים על ידי המכשירים הכי מתקדמים שקיימים</div>
      <div className={styles.imageContainer}><img className={styles.image} src={lasers}/></div>
      <div className={styles.title}>ושנייה לפני שאנחנו מדברות..</div>
       <div className={styles.description}>הכנתי עבורך פירוט מלא עבור כל הטיפולים שלי, לחצי על כל טיפול כדי לקבל עליו הסבר מורחב וכמובן ליצירת קשר איתי</div>
    </>
}
export default ThirdScreen