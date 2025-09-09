import { useState, useEffect, useRef } from 'react';
import styles from "./SecondScreen.module.css"
import laser from "../../icons/wired-outline-1001-shop-scanner-hover-pinch.json"
import { Player } from '@lordicon/react';
import acne from "../../icons/wired-outline-1276-acne-herpes-hover-pinch (1).json"
import spa from "../../icons/wired-outline-1582-aroma-spa-hover-pinch (1).json"
import needle from "../../icons/wired-outline-775-needle-hover-pinch (2).json"
import skin from "../../icons/wired-outline-1558-shaving-foam-hover-pinch (1).json"
import pmu from "../../images/איפור קבוע.png"
import panim from "../../images/אקנה ופוסט אקנה 1.png"
import hairemove from "../../images/לייזר להסרת שיער.png"
import tzalakot from "../../images/צלקות.png"
import botox from "../../images/אוקסנה הזרקות.png"
import syringe from "../../icons/wired-outline-428-injection-hover-pinch.json" // Importe la nouvelle icône

// Composant carte de service individuelle avec état indépendant
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
        {/* Arrière-plan image */}
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
                    colorize='black'
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
  const [titleInView, setTitleInView] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const titleText = "Tout en un seul endroit";

  const services = [
    {
      id: 1,
      title: "Maquillage permanent",
      subtitle: "Maquillage permanent sourcils et lèvres avec toutes les techniques",
      icon: needle, // Icône aiguille pour maquillage permanent
      image: pmu,
      subServices: [
        "Cachemire - technique de poils délicats",
        "Microblading précis", 
        "Poudre douce et naturelle",
        "Maquillage permanent lèvres",
        "Détatouage au laser",
        "Eye-liner",
        "Ligne de cils",
      ]
    },
    {
      id: 2,
      title: "Soins du visage",
      subtitle: "Soins avec appareils avancés | Pour tout type de peau",
      icon: spa, // Icône spa pour soins du visage
      image: panim,
      subServices: [
        "Nettoyage profond avec technologie avancée",
        "Soin acné spécialisé",
        "Raffermissement et renouvellement cutané",
        "Mésothérapie professionnelle",
        "HydraFacial apaisant"
      ]
    },
    {
      id: 3,
      title: "Traitement des cicatrices",
      subtitle: "Pour tous ceux qui souffrent de cicatrices et vergetures sur tout le corps",
      icon: acne, // Icône acné pour traitement cicatrices
      image: tzalakot,
      subServices: [
        "Cicatrices post-acné",
        "Vergetures",
        "RF Fractional avancé",
        "Estompage et renouvellement professionnel"
      ]
    },
    {
      id: 4,
      title: "Épilation",
      subtitle: "Épilation au laser avancé sur toutes les parties du corps",
      icon: laser, // Icône laser pour épilation
      image: hairemove,
      subServices: [
        "Soins pour hommes et femmes",
        "Technologie de pointe",
        "Séries personnalisées",
        "Toutes les zones du corps"
      ]
    },
    {
      id: 5,
      title: "Injections", // Nouvelle carte
      subtitle: "Soins d'injections pour améliorer l'apparence du visage",
      icon: syringe, // Nouvelle icône seringue
      image: botox, // Nouvelle image
      subServices: [
        "Sculpture faciale",
        "Ligne de mâchoire", 
        "Botox",
        "Comblement des rides",
        "Traitement des varices et vaisseaux"
      ]
    },
    {
      id: 6,
      title: "Soins spéciaux",
      subtitle: "Gamme de soins supplémentaires",
      icon: skin, // Icône peau/rasage pour soins spéciaux
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=300&fit=crop",
      subServices: [
        "Élimination des taches de vieillesse",
        "Élimination des excroissances cutanées",
        "Conseils professionnels et personnalisés"
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
        
        // Effet d'apparition du titre - déclenchement unique
        if (titleRef.current && !titleInView) {
          const titleRect = titleRef.current.getBoundingClientRect();
          const titleCenter = titleRect.top + titleRect.height / 2;
          const triggerPoint = windowHeight * 0.7; // Quand le titre arrive à 70% de l'écran
          
          if (titleCenter < triggerPoint) {
            setTitleInView(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [titleInView]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.backgroundElements}>
        {/* Éléments flottants améliorés */}
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        <div className={styles.floatingElement}></div>
        
        {/* Nouvelles bulles dégradées */}
        <div className={styles.gradientBlob1}></div>
        <div className={styles.gradientBlob2}></div>
        
        {/* Particules magiques améliorées */}
        <div className={styles.magicParticles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--delay': `${i * 0.3}s` }}></div>
          ))}
        </div>
        
        {/* Nouvelles étincelles */}
        <div className={styles.sparkles}>
          {[...Array(15)].map((_, i) => (
            <div key={i} className={styles.sparkle} style={{ '--sparkle-delay': `${i * 0.5}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className={styles.titleWrapper}>
      
        
        <div 
          className={`${styles.title} ${titleInView ? styles.titleRevealed : ''}`}
          ref={titleRef}
          style={{ '--scroll-progress': scrollProgress }}
        >
          {titleText.split('').map((letter, index) => {
            const isSpace = letter === ' ';
            
            return (
              <span
                key={index}
                className={styles.titleLetter}
                style={{ 
                  '--letter-delay': `${index * 0.06}s`,
                  '--letter-index': index
                }}
              >
                {isSpace ? '\u00A0' : letter}
              </span>
            );
          })}
        </div>
        
        <div className={styles.titleLine}></div>
        <div className={styles.subtitle}>Institut de beauté boutique avec soins avancés</div>
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
          <p>Soins personnalisés • Équipement avancé • Service professionnel</p>
          <div 
            className={styles.ctaButton}
            onClick={() => {
              const phoneNumber = "+972545064300";
              const message = "Salut Oxana, je viens de votre page, j'aimerais prendre rendez-vous pour une consultation concernant...";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
     
            <span>Cliquez ici pour une consultation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;