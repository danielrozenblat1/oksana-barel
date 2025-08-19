import { useState, useEffect, useRef } from 'react';
import styles from "./SecondScreen.module.css"
import laser from "../icons/wired-outline-1001-shop-scanner-hover-pinch.json"
import { Player } from '@lordicon/react';
import acne from "../icons/wired-outline-1276-acne-herpes-hover-pinch (1).json"
import spa from "../icons/wired-outline-1582-aroma-spa-hover-pinch (1).json"
import needle from "../icons/wired-outline-775-needle-hover-pinch (2).json"
import skin from "../icons/wired-outline-1558-shaving-foam-hover-pinch (1).json"
import pmu from "../images/איפור קבוע.png"
import panim from "../images/אקנה ופוסט אקנה 1.png"
import hairemove from "../images/לייזר להסרת שיער.png"
import tzalakot from "../images/צלקות.png"
// קומפוננטת כרטיס בודד עם state עצמאי
const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const playerRef = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, []);

  const toggleService = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`${styles.serviceCard} ${isExpanded ? styles.expanded : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
      onClick={toggleService}
    >
      <div className={styles.cardGlass}>
        {/* Image background */}
        <div className={styles.cardImage}>
          <img src={service.image} alt={service.title} />
          <div className={styles.imageOverlay}></div>
        </div>
        
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <div className={styles.serviceInfo}>
              <div className={styles.serviceIcon}>
                <div className={styles.icon}>
                  <Player 
                    icon={service.icon} 
                    ref={playerRef} 
                    size="100%" 
                    onComplete={handleComplete}
                  />
                </div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceSubtitle}>{service.subtitle}</p>
            </div>
            <div 
              className={`${styles.expandButton} ${isExpanded ? styles.rotated : ''}`}
            >
              <div className={styles.expandIcon}>
                {isExpanded ? '−' : '+'}
              </div>
            </div>
          </div>
          
          <div className={`${styles.subServices} ${isExpanded ? styles.visible : ''}`}>
            {service.subServices.map((subService, subIndex) => (
              <div 
                key={subIndex} 
                className={styles.subServiceItem}
                style={{ '--sub-delay': `${subIndex * 0.05}s` }}
              >
                <div className={styles.subServiceDot}></div>
                <span>{subService}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondScreen = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "איפור קבוע",
      subtitle: "איפור קבוע בגבות ובשפתיים בכל השיטות",
      icon: needle, // אייקון מחט לאיפור קבוע
      image: pmu,
      subServices: [
        "קשמיר - שיטת השערה עדינה",
        "מיקרובליידינג מדויק", 
        "פודרה רכה וטבעית",
        "איפור קבוע שפתיים",
        "הסרת איפור קבוע בלייזר"
      ]
    },
    {
      id: 2,
      title: "טיפולי פנים",
      subtitle: "טיפולים עם מכשירים מתקדמים | לכל סוג עור",
      icon: spa, // אייקון ספא לטיפולי פנים
      image: panim,
      subServices: [
        "ניקוי עמוק עם טכנולוגיה מתקדמת",
        "טיפול אקנה ייעודי",
        "מיצוק וחידוש העור",
        "מיזותרפיה מקצועית",
        "הידרה פייסיאל מרגיע"
      ]
    },
    {
      id: 3,
      title: "טיפול צלקות",
      subtitle: "לכל מי שסובל מצלקות וסימני מתיחה בכל הגוף",
      icon: acne, // אייקון אקנה לטיפול צלקות
      image: tzalakot,
      subServices: [
        "צלקות פוסט אקנה",
        "סימני מתיחה",
        "RF Fractional מתקדם",
        "טשטוש וחידוש מקצועי"
      ]
    },
    {
      id: 4,
      title: "הסרת שיער",
      subtitle: "הסרת שיער עם לייזר מתקדם בכל חלקי הגוף",
      icon: laser, // אייקון לייזר להסרת שיער
      image: hairemove,
      subServices: [
        "טיפולים לגברים ונשים",
        "טכנולוגיה חדישה",
        "סדרות מותאמות אישית",
        "כל אזורי הגוף"
      ]
    },
    {
      id: 5,
      title: "טיפולים מיוחדים",
      subtitle: "שלל טיפולים נוספים",
      icon: skin, // אייקון עור/גילוח לטיפולים מיוחדים
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop",
      subServices: [
        "הסרת כתמי גיל",
        "הסרת סרחי עור",
        "טיפולי הקפאה עדינים",
        "ייעוץ מקצועי ומותאם"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const element = containerRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const startScroll = windowHeight;
        const endScroll = -elementHeight;
        const totalScrollDistance = startScroll - endScroll;
        const currentProgress = (startScroll - elementTop) / totalScrollDistance;
        
        setScrollProgress(Math.max(0, Math.min(1, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.backgroundElements}>
        {/* Enhanced floating elements */}
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        
        {/* New gradient blobs */}
        <div className={styles.gradientBlob1}></div>
        <div className={styles.gradientBlob2}></div>
        
        {/* Enhanced magic particles */}
        <div className={styles.magicParticles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.3}s` }}></div>
          ))}
        </div>
        
        {/* New sparkles */}
        <div className={styles.sparkles}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className={styles.sparkle} style={{ '--sparkle-delay': `${i * 0.5}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className={styles.titleWrapper}>
      
        
        <div 
          className={styles.title}
          style={{ '--scroll-progress': scrollProgress }}
        >
          הכל במקום אחד
        </div>
        
        <div className={styles.titleLine}></div>
        <div className={styles.subtitle}>מכון יופי בוטיק עם טיפולים מתקדמים</div>
        <div className={styles.titleGlow}></div>
      </div>
      
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.bottomCard}>
          <p>טיפולים מותאמים אישית • מכשור מתקדם • יחס מקצועי</p>
          <div 
            className={styles.ctaButton}
            onClick={() => {
              const phoneNumber = "972544948282";
              const message = "היי אוקסנה הגעתי מהדף שלך, אשמח לקבוע פגישת ייעוץ בנושא...";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
     
            <span>לשיחת ייעוץ לחצי כאן</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;