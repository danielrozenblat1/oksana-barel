import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import oksanaImage from "../../images/אוקסנה ללא רקע.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  const handleWhatsAppMessage = () => {
    const phoneNumber = "972544948282";
    const message = "היי אוקסנה הגעתי מהדף שלך, אשמח לשמוע עוד על";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={containerRef} className={styles.section} id="מי אני">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={oksanaImage} alt="אוקסנה בראל" className={styles.image} />
        </div>

        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>נעים מאוד, אוקסנה בראל</h2>

          <div className={styles.quoteContainer}>
            <p className={styles.quote}>
              "לא נולדתי קוסמטיקאית, אבל אחרי טיפול קבוע שפגע לי בפנים - ידעתי שמהיום, אני זאת שתעשה את זה נכון. באמת."
            </p>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              עבדתי שנים כמנהלת חשבונות. משרד, אקסלים, טלפונים. הכל זרם, אבל בתוכי - ידעתי שאני לא במקום הנכון. התחברתי תמיד לעולם של טיפוח, עיצוב, ודיוק. ואז זה קרה - ביצעו עלי טיפול איפור קבוע שיצא גרוע. ולא גרוע בקטנה, גרוע ברמה של “איך אני יוצאת מהבית עכשיו?”.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              החלטתי ללמוד את זה לעומק. מתוך רעב אמיתי להבין איך עושים את זה הכי נכון. למדתי קוסמטיקה רפואית, איפור קבוע, חקרתי כל טכנולוגיה, כל שיטה, כל מכשיר שיכול לעזור. אני אוהבת לדעת מה עומד מאחורי כל פעולה - לא לזרום על עיוור.
            </p>

            <div className={styles.divider}></div>
<p className={styles.paragraph}>
  היום כל מי שנכנס לקליניקה שלי מקבל אבחנה מדויקת, יחס אישי, ותיאום ציפיות אמיתי. אין אצלי שבלונות ואין “נעשה ונראה”. אני בודקת, מתאימה, ואם צריך גם אומרת "לא". כי לא כל טיפול מתאים לכל אחד, והפנים שלך זה לא מקום לניחושים. כל תוצאה שמתקבלת פה היא תוצאה שנבנתה על בסיס ידע, הקשבה וניסיון.
</p>

            <div className={styles.divider}></div>

            <p className={styles.finalText}>
              אם את מתוסכלת מהמראה, אם ניסית קוסמטיקאית וזה לא עבד, אם את כבר לא יודעת מה כן - בואי נדבר. בלי הבטחות. עם כנות מלאה. אני אגיד לך בדיוק מה אפשרי, מה פחות, מה ידרוש התמדה ואולי גם נצא לדרך :) <br /><br />
 
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsAppMessage}>
            <span className={styles.buttonIcon}>💬</span>
           לכל התייעצות, לחצי כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
