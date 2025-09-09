import Acne from "../../components/recommends/Acne"
import Brows from "../../components/recommends/Brows"
import Works from "../../components/recommends/Works"
import styles from "./ThirdScreen.module.css"
import lasers from "../../images/לייזרים.png"
import certificates from "../../images/אוקסנה תעודות.png"
import Others from "../../components/recommends/Others copy"

const ThirdScreen = () => {
    return <>
        <div className={styles.description}>
            Ces dernières années, j'ai suivi des formations dans des dizaines de domaines
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={certificates}/>
        </div>
        <div className={styles.description}>
            et des milliers de femmes sont passées chez moi dans les domaines suivants :
        </div>
        <Works/>
        <Brows/>
        <Acne/>
        <Others/>
       
        <div className={styles.description}>
            La grande majorité des soins sont effectués avec les appareils les plus avancés qui existent
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={lasers}/>
        </div>
        <div className={styles.title}>
            Et une seconde avant qu'on se parle..
        </div>
        <div className={styles.description}>
            J'ai préparé pour vous un détail complet de tous mes soins, cliquez sur chaque soin pour obtenir une explication détaillée et bien sûr pour me contacter
        </div>
    </>
}

export default ThirdScreen