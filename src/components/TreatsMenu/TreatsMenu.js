import React, { useState, useRef, useEffect } from 'react';
import { X, Phone, Users, Stethoscope, Camera } from 'lucide-react';
import styles from './TreatsMenu.module.css';
import ipurkavuagabot from "../../images/איפור קבוע לגבות ראשית.png";
import gabot1 from "../../images/איפור קבוע לגבות נוספות 1.png";
import gabot2 from "../../images/איפור קבוע לגבות נוספות 2.png";
import gabot3 from "../../images/איפור קבוע לגבות נוספות 3.png";
import sfataim1 from "../../images/איפור קבוע לשפתיים ראשית.png";
import lips1 from "../../images/איפור קבוע לשפתיים נוספות 1.png";
import lips2 from "../../images/איפור קבוע לשפתיים נוספות 2.png";
import lips3 from "../../images/איפור קבוע לשפתיים נוספות 3.png";
import acneMain from "../../images/אקנה תמונה ראשית.png";
import acneMore1 from "../../images/צלקות ואקנה נוספות 1.png";
import acneMore2 from "../../images/צלקות ואקנה נוספות 2.png";
import acneMore3 from "../../images/צלקות ואקנה נוספות 3.png";
import metihaMain from "../../images/אוקסנה סימני מתיחה ראשית.png";
import mitzuk1 from "../../images/סימני מתיחה נוספות 1.png"
import mitzuk2 from "../../images/מיצוק נוספות 2.png"
import mitzuk3 from "../../images/מיצוק נוספות 3.png"
import mitzuk4 from "../../images/מיצוק נוספות 4.png"
import mitzuk from "../../images/מיצוק ראשית.png";
import sirheyOr from "../../images/סרחי עור ראשית.png";
import ktamim from "../../images/כתמי גיל ראשית.png";
import gil from "../../images/כתמי גיל נוספות.png"
import gil1 from "../../images/כתמי גיל נוספות 1.png"
import gil2 from "../../images/כתמי גיל נוספות 2.png"

const TreatmentsCarousel = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);

  const treatments = [
    {
      id: 1,
      name: "איפור קבוע לגבות",
      description: "שיטות מתקדמות: קשמיר, מיקרובליידינג ופודרה",
      suitableFor: "נשים עם גבות דלילות, חוסר סימטריה או חוסר בצורה מוגדרת",
      image: ipurkavuagabot,
      process: [
        "קבלת תמונה של הפנים להבנת הצורה המתאימה",
        "תמונה קרובה של הגבות הקיימות",
        "התאמה אישית של השיטה בהתאם לסוג העור",
        "ביצוע הטיפול בשיטה המתאימה ביותר",
        "הוראות טיפול לאחר הטיפול"
      ],
      images: [gabot1, gabot2, gabot3]
    },
    {
      id: 2,
      name: "איפור קבוע לשפתיים",
      description: "החזרת צבע טבעי ותיקון סימטריה",
      suitableFor: "נשים שאיבדו צבע טבעי מהגיל או הזרקות, חוסר סימטריה בשפתיים",
      image: sfataim1,
      process: [
        "בדיקת מצב השפתיים הנוכחי",
        "בחירת גוון מתאים לגוון העור",
        "אלחשה מקומית למניעת כאב",
        "ביצוע האיפור הקבוע",
        "הוראות טיפול והחלמה"
      ],
      images: [lips1, lips2, lips3]
    },
    {
      id: 3,
      name: "טיפול בצלקות ופוסט אקנה",
      description: "טשטוש צלקות בצלקות מאקנה במכשיר RF Fractional",
      suitableFor: "אנשים עם צלקות מאקנה ונזקי עור מאקנה",
      image: acneMain,
      process: [
        "הערכת מצב העור והצלקות",
        "קביעת מספר הטיפולים הנדרש בסדרה",
        "ביצוע טיפול ב-RF Fractional",
        "מעקב אחר התקדמות הטיפול",
        "הוראות טיפול ביתי לשמירת התוצאות"
      ],
      images: [acneMore1, acneMore2, acneMore3]
    },
    {
      id: 4,
      name: "טיפול בסימני מתיחה",
      description: "טיפול יעיל בסימני מתיחה בבטן, ירכיים וברכיים",
      suitableFor: "אנשים עם סימני מתיחה מהריון, שינויים במשקל או צמיחה",
      image: metihaMain,
      process: [
        "בדיקת מיקום וחומרת סימני המתיחה",
        "קביעת תוכנית טיפול אישית",
        "ביצוע טיפולי פרקשינל RF",
        "מעקב אחר שיפור במרקם העור",
        "המלצות לטיפול ביתי תומך"
      ],
      images: [metihaMain]
    },
    {
      id: 5,
      name: "מיצוק/ היידהפיישיאל",
      description: "ניקוי עמוק עם לחות מיידית לעור חלק ורך",
      suitableFor: "נשים בכל הגילאים המחפשות רענון מיידי ולחות לעור",
      image: mitzuk,
      process: [
        "ניתוח מצב העור וקביעת סוג הטיפול",
        "ניקוי עמוק עם שאיבת זיהומים",
        "קילוף עדין ועדכון תאי העור",
        "הזרקת סרום לחות מותאם",
        "מריחת הגנה והוראות המשך טיפול"
      ],
      images: [mitzuk1,mitzuk2,mitzuk3,mitzuk4]
    },
    {
      id: 6,
      name: "הסרת סרחי עור",
      description: "הסרה בטוחה ויעילה של סרחי עור וגידולים קטנים",
      suitableFor: "אנשים עם סרחי עור המפריעים אסתטית או פונקציונלית",
      image: sirheyOr,
      process: [
        "בדיקה וזיהוי של הסרח",
        "בחירת השיטה המתאימה להסרה",
        "ביצוע הטיפול בטכניקה מתקדמת",
        "טיפול באזור לאחר ההסרה",
        "מעקב והוראות לריפוי מיטבי"
      ],
      images: [sirheyOr]
    },
    {
      id: 8,
      name: "הסרת כתמי גיל",
      description: "טיפול יעיל בפעולה אחת כולל הקפאה",
      suitableFor: "אנשים עם כתמי גיל וריכוזי פיגמנטציה",
      image: ktamim,
      process: [
        "זיהוי וסימון הכתמים לטיפול",
        "ביצוע טיפול הקפאה ממוקד",
        "מעקב אחר תהליך ההחלמה",
        "בדיקת תוצאות והצורך בטיפול נוסף",
        "הוראות הגנה מקרינה להמשך"
      ],
      images: [gil,gil1,gil2]
    }
  ];

  const infiniteTreatments = [...treatments, ...treatments, ...treatments, ...treatments, ...treatments];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = 320;
      const centerPosition = (treatments.length * 2) * cardWidth;
      carousel.scrollLeft = centerPosition;
    }
  }, []);

 
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      carouselRef.current.style.scrollBehavior = 'smooth';
      setIsAutoScrolling(true);
    }, 500);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      carouselRef.current.style.scrollBehavior = 'smooth';
      setIsAutoScrolling(true);
    }, 500);
  };

  const getSectionIcon = (title) => {
    if (title.includes('למי מתאים')) return <Users size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('הליך הטיפול')) return <Stethoscope size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('תמונות')) return <Camera size={20} color="rgba(255, 223, 140, 0.6)" />;
    return null;
  };

 const openModal = (treatment) => {
    setSelectedTreatment(treatment);
    // חסימת גלילה ברקע
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTreatment(null);
    // החזרת גלילה לרקע
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.container} id="מגוון הטיפולים">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>הטיפולים שלי</h2>
      </div>
  <div className={styles.description}>ריכזתי עבורך את כל הטיפולים שיש לקליניקה שלי להציע לך.  הליקי בין הטיפולים ולחצי על כל טיפול כדי לראות עוד פרטים עליו או ליצור איתי קשר ישירות</div>
      <div className={styles.carouselWrapper}>
        <div
          className={`${styles.carousel} ${isDragging ? styles.dragging : ''}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {infiniteTreatments.map((treatment, index) => (
            <div key={`${treatment.id}-${index}`} className={styles.treatmentCard}>
              <div className={styles.imageContainer}>
                <img src={treatment.image} alt={treatment.name} className={styles.treatmentImage} />
                <div className={styles.overlay}>
                  <div className={styles.textContent}>
                    <h3 className={styles.treatmentName}>{treatment.name}</h3>
                    <p className={styles.treatmentDescription}>{treatment.description}</p>
                  </div>
                  <div className={styles.buttons}>
                    <button className={styles.infoButton} onClick={() => openModal(treatment)}>עוד פרטים על הטיפול</button>
                    <button className={styles.contactButton}>
                      יצירת קשר
                      <Phone size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTreatment && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>{selectedTreatment.name}</h2>

              <div className={styles.modalSection}>
                <h3>{getSectionIcon('למי מתאים הטיפול')} למי מתאים הטיפול</h3>
                <p>{selectedTreatment.suitableFor}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>{getSectionIcon('הליך הטיפול:')} הליך הטיפול:</h3>
                <ul>
                  {selectedTreatment.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>{getSectionIcon('תמונות מהטיפול:')} תמונות מהטיפול:</h3>
                <div className={styles.imageGrid}>
                  {selectedTreatment.images.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedTreatment.name} ${index + 1}`} />
                  ))}
                </div>
              </div>

              <div className={styles.modalButtons}>
                <button
                  className={styles.contactModalButton}
                  onClick={() => {
                    const message = `היי אוקסנה, הגעתי דרך הדף שלך, אשמח שנדבר על ${selectedTreatment.name}`;
                    const phoneNumber = '972544948282';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <Phone size={16} />
                  אוקסנה, בואי נתאם טיפול
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentsCarousel;
