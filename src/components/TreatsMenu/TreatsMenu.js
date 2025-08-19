import React, { useState, useRef, useEffect } from 'react';
import { X, Phone, MessageCircle, Users, Stethoscope, Camera } from 'lucide-react';
import styles from './TreatsMenu.module.css';

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
      image: "/api/placeholder/400/600",
      process: [
        "קבלת תמונה של הפנים להבנת הצורה המתאימה",
        "תמונה קרובה של הגבות הקיימות",
        "התאמה אישית של השיטה בהתאם לסוג העור",
        "ביצוע הטיפול בשיטה המתאימה ביותר",
        "הוראות טיפול לאחר הטיפול"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 2,
      name: "איפור קבוע לשפתיים",
      description: "החזרת צבע טבעי ותיקון סימטריה",
      suitableFor: "נשים שאיבדו צבע טבעי מהגיל או הזרקות, חוסר סימטריה בשפתיים",
      image: "/api/placeholder/400/600",
      process: [
        "בדיקת מצב השפתיים הנוכחי",
        "בחירת גוון מתאים לגוון העור",
        "אלחשה מקומית למניעת כאב",
        "ביצוע האיפור הקבוע",
        "הוראות טיפול והחלמה"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 3,
      name: "טיפול בצלקות ופוסט אקנה",
      description: "טשטוש צלקות בצלקות מאקנה במכשיר RF Fractional",
      suitableFor: "אנשים עם צלקות מאקנה ונזקי עור מאקנה",
      image: "/api/placeholder/400/600",
      process: [
        "הערכת מצב העור והצלקות",
        "קביעת מספר הטיפולים הנדרש בסדרה",
        "ביצוע טיפול ב-RF Fractional",
        "מעקב אחר התקדמות הטיפול",
        "הוראות טיפול ביתי לשמירת התוצאות"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 4,
      name: "טיפול בסימני מתיחה",
      description: "טיפול יעיל בסימני מתיחה בבטן, ירכיים וברכיים",
      suitableFor: "אנשים עם סימני מתיחה מהריון, שינויים במשקל או צמיחה",
      image: "/api/placeholder/400/600",
      process: [
        "בדיקת מיקום וחומרת סימני המתיחה",
        "קביעת תוכנית טיפול אישית",
        "ביצוע טיפולי פרקשינל RF",
        "מעקב אחר שיפור במרקם העור",
        "המלצות לטיפול ביתי תומך"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 5,
      name: "הידרהפיישל",
      description: "ניקוי עמוק עם לחות מיידית לעור חלק ורך",
      suitableFor: "נשים בכל הגילאים המחפשות רענון מיידי ולחות לעור",
      image: "/api/placeholder/400/600",
      process: [
        "ניתוח מצב העור וקביעת סוג הטיפול",
        "ניקוי עמוק עם שאיבת זיהומים",
        "קילוף עדין ועדכון תאי העור",
        "הזרקת סרום לחות מותאם",
        "מריחת הגנה והוראות המשך טיפול"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 6,
      name: "הסרת סרחי עור",
      description: "הסרה בטוחה ויעילה של סרחי עור וגידולים קטנים",
      suitableFor: "אנשים עם סרחי עור המפריעים אסתטית או פונקציונלית",
      image: "/api/placeholder/400/600",
      process: [
        "בדיקה וזיהוי של הסרח",
        "בחירת השיטה המתאימה להסרה",
        "ביצוע הטיפול בטכניקה מתקדמת",
        "טיפול באזור לאחר ההסרה",
        "מעקב והוראות לריפוי מיטבי"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 7,
      name: "הסרת שיער בלייזר",
      description: "טיפולי לייזר מתקדמים לגברים ונשים",
      suitableFor: "גברים ונשים המעוניינים בהסרת שיער יעילה וארוכת טווח",
      image: "/api/placeholder/400/600",
      process: [
        "בדיקת סוג העור והשיער",
        "קביעת מספר הטיפולים הנדרש",
        "ביצוע טיפול לייזר בטכנולוגיה מתקדמת",
        "מעקב והתאמות לפי הצורך",
        "הוראות טיפול לאחר הטיפול"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      id: 8,
      name: "הסרת כתמי גיל",
      description: "טיפול יעיל בפעולה אחת כולל הקפאה",
      suitableFor: "אנשים עם כתמי גיל וריכוזי פיגמנטציה",
      image: "/api/placeholder/400/600",
      process: [
        "זיהוי וסימון הכתמים לטיפול",
        "ביצוע טיפול הקפאה ממוקד",
        "מעקב אחר תהליך ההחלמה",
        "בדיקת תוצאות והצורך בטיפול נוסף",
        "הוראות הגנה מקרינה להמשך"
      ],
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    }
  ];

  // Create multiple copies for infinite scroll
  const infiniteTreatments = [...treatments, ...treatments, ...treatments, ...treatments, ...treatments];

  // Initialize scroll position to center
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = 320; // 300px width + 20px gap
      const centerPosition = (treatments.length * 2) * cardWidth;
      carousel.scrollLeft = centerPosition;
    }
  }, [treatments.length]);

  // Auto-scroll functionality with smooth movement
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    const autoScroll = () => {
      if (isAutoScrolling && !isDragging) {
        carousel.scrollLeft += 0.5; // Smooth auto-scroll
        
        // Check if we need to reset position for infinite effect
        const cardWidth = 320;
        const singleSetWidth = treatments.length * cardWidth;
        const currentScroll = carousel.scrollLeft;
        
        // If we've scrolled past 3 sets, reset to the middle
        if (currentScroll >= singleSetWidth * 3) {
          carousel.scrollLeft = singleSetWidth * 2;
        }
        // If we've scrolled before the first set, jump to the end
        else if (currentScroll <= singleSetWidth) {
          carousel.scrollLeft = singleSetWidth * 2;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isAutoScrolling, isDragging, treatments.length]);

  // Mouse drag functionality with smooth transitions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Smooth dragging multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    carouselRef.current.style.scrollBehavior = 'smooth';
    
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  // Touch drag functionality
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
    carouselRef.current.style.scrollBehavior = 'smooth';
    
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 3000);
  };

  // Function to get appropriate icon for each section
  const getSectionIcon = (title) => {
    if (title.includes('למי מתאים')) return <Users size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('הליך הטיפול')) return <Stethoscope size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('תמונות')) return <Camera size={20} color="rgba(255, 223, 140, 0.6)" />;
    return null;
  };

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };

  return (
    <div className={styles.container} id="מגוון הטיפולים">
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>הטיפולים שלי</h2>
        {/* <div className={styles.backgroundTitle}>My Treatments</div> */}
      </div>

      {/* Infinite Carousel */}
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carousel}
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
                    <button 
                      className={styles.infoButton}
                      onClick={() => openModal(treatment)}
                    >
                      עוד פרטים על הטיפול
                    </button>
                    <button className={styles.contactButton}>
                      <Phone size={16} />
                      יצירת קשר
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTreatment && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>{selectedTreatment.name}</h2>
              
              <div className={styles.modalSection}>
                <h3>
                  {getSectionIcon('למי מתאים הטיפול')}
                  למי מתאים הטיפול
                </h3>
                <p>{selectedTreatment.suitableFor}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>
                  {getSectionIcon('הליך הטיפול:')}
                  הליך הטיפול:
                </h3>
                <ul>
                  {selectedTreatment.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>
                  {getSectionIcon('תמונות מהטיפול:')}
                  תמונות מהטיפול:
                </h3>
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