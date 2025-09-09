import React, { useState } from 'react';
import { X, Phone, Users, Stethoscope, Camera } from 'lucide-react';
import styles from './TreatsMenu.module.css';
import ipurkavuagabot from "../../../images/איפור קבוע לגבות ראשית.png";
import gabot1 from "../../../images/איפור קבוע לגבות נוספות 1.png";
import gabot2 from "../../../images/איפור קבוע לגבות נוספות 2.png";
import gabot3 from "../../../images/איפור קבוע לגבות נוספות 3.png";
import gabot4 from "../../../images/אוקסנה בראל תמונה ראשית.png"
import sfataim1 from "../../../images/איפור קבוע לשפתיים ראשית.png";
import lips1 from "../../../images/איפור קבוע לשפתיים נוספות 1.png";
import lips2 from "../../../images/איפור קבוע לשפתיים נוספות 2.png";
import lips3 from "../../../images/איפור קבוע לשפתיים נוספות 3.png";
import acneMain from "../../../images/אקנה תמונה ראשית.png";
import acneMore1 from "../../../images/צלקות ואקנה נוספות 1.png";
import acneMore2 from "../../../images/צלקות ואקנה נוספות 2.png";
import acneMore3 from "../../../images/צלקות ואקנה נוספות 3.png";
import metihaMain from "../../../images/אוקסנה סימני מתיחה ראשית.png";
import mitzuk1 from "../../../images/סימני מתיחה נוספות 1.png"
import mitzuk2 from "../../../images/מיצוק נוספות 2.png"
import mitzuk3 from "../../../images/מיצוק נוספות 3.png"
import mitzuk4 from "../../../images/מיצוק נוספות 4.png"
import mitzuk from "../../../images/מיצוק ראשית.png";
import sirheyOr from "../../../images/סרחי עור ראשית.png";
import ktamim from "../../../images/כתמי גיל ראשית.png";
import gil from "../../../images/כתמי גיל נוספות.png"
import gil1 from "../../../images/כתמי גיל נוספות 1.png"
import gil2 from "../../../images/כתמי גיל נוספות 2.png"

const TreatmentsCarousel = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const treatments = [
    {
      id: 1,
      name: "Maquillage permanent des sourcils",
      description: "Techniques avancées : Cashmere, Microblading et Poudre",
      suitableFor: "Femmes avec sourcils clairsemés, manque de symétrie ou absence de forme définie.",
      image: ipurkavuagabot,
      process: [
        "Réception d'une photo du visage pour comprendre la forme appropriée.",
        "Photo rapprochée des sourcils existants.",
        "Adaptation personnalisée de la technique selon le type de peau.",
        "Réalisation du traitement avec la technique la plus appropriée.",
        "Instructions de soins post-traitement."
      ],
      images: [gabot1, gabot2, gabot3, gabot4]
    },
    {
      id: 2,
      name: "Maquillage permanent des lèvres",
      description: "Restauration de la couleur naturelle et correction de la symétrie",
      suitableFor: "Femmes qui ont perdu leur couleur naturelle avec l'âge ou les injections, asymétrie des lèvres.",
      image: sfataim1,
      process: [
        "Examen de l'état actuel des lèvres.",
        "Choix de la teinte appropriée au teint de la peau.",
        "Anesthésie locale pour prévenir la douleur.",
        "Réalisation du maquillage permanent.",
        "Instructions de soins et de récupération."
      ],
      images: [lips1, lips2, lips3]
    },
    {
      id: 3,
      name: "Traitement des cicatrices et post-acné",
      description: "Estompage des cicatrices d'acné avec l'appareil RF Fractional",
      suitableFor: "Personnes avec cicatrices d'acné et dommages cutanés dus à l'acné.",
      image: acneMain,
      process: [
        "Évaluation de l'état de la peau et des cicatrices.",
        "Détermination du nombre de traitements nécessaires dans la série.",
        "Réalisation du traitement RF Fractional.",
        "Suivi des progrès du traitement.",
        "Instructions de soins à domicile pour maintenir les résultats."
      ],
      images: [acneMore1, acneMore2, acneMore3]
    },
    {
      id: 4,
      name: "Traitement des vergetures",
      description: "Traitement efficace des vergetures sur le ventre, les hanches et les genoux",
      suitableFor: "Personnes avec vergetures dues à la grossesse, aux changements de poids ou à la croissance.",
      image: metihaMain,
      process: [
        "Examen de l'emplacement et de la sévérité des vergetures.",
        "Établissement d'un plan de traitement personnalisé.",
        "Réalisation de traitements RF fractionnels.",
        "Suivi de l'amélioration de la texture de la peau.",
        "Recommandations pour les soins à domicile de soutien."
      ],
      images: [metihaMain]
    },
    {
      id: 5,
      name: "Raffermissement / HydraFacial",
      description: "Nettoyage en profondeur avec hydratation immédiate pour une peau lisse et douce",
      suitableFor: "Femmes de tous âges recherchant un rafraîchissement immédiat et une hydratation de la peau.",
      image: mitzuk,
      process: [
        "La procédure de traitement est adaptée personnellement à chaque cliente"
      ],
      images: [mitzuk1, mitzuk2, mitzuk3, mitzuk4]
    },
    {
      id: 6,
      name: "Suppression des excroissances cutanées",
      description: "Suppression sûre et efficace des excroissances cutanées et petites tumeurs",
      suitableFor: "Personnes avec excroissances cutanées gênantes esthétiquement ou fonctionnellement.",
      image: sirheyOr,
      process: [
        "Examen et identification de l'excroissance.",
        "Choix de la méthode appropriée pour la suppression.",
        "Réalisation du traitement avec une technique avancée.",
        "Traitement de la zone après suppression.",
        "Suivi et instructions pour une guérison optimale."
      ],
      images: [sirheyOr]
    },
    {
      id: 8,
      name: "Suppression des taches de vieillesse",
      description: "Traitement efficace en une seule intervention incluant la cryothérapie",
      suitableFor: "Personnes avec taches de vieillesse et concentrations de pigmentation.",
      image: ktamim,
      process: [
        "Identification et marquage des taches à traiter.",
        "Réalisation du traitement de cryothérapie ciblé.",
        "Suivi du processus de guérison.",
        "Vérification des résultats et besoin de traitement supplémentaire.",
        "Instructions de protection contre les radiations pour la suite."
      ],
      images: [gil, gil1, gil2]
    }
  ];

  const handleContactClick = (treatmentName) => {
    const message = `Salut Oksana, je suis arrivé(e) via votre page, j'aimerais discuter de ${treatmentName}`;
    const phoneNumber = '972544948282';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getSectionIcon = (title) => {
    if (title.includes('Pour qui convient')) return <Users size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('Procédure de traitement')) return <Stethoscope size={20} color="rgba(255, 223, 140, 0.6)" />;
    if (title.includes('Photos')) return <Camera size={20} color="rgba(255, 223, 140, 0.6)" />;
    return null;
  };

  const openModal = (treatment) => {
    setSelectedTreatment(treatment);
    // Bloquer le défilement en arrière-plan
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTreatment(null);
    // Restaurer le défilement en arrière-plan
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.container} id="Variété des traitements">
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Mes Traitements</h2>
      </div>
      <div className={styles.description}>J'ai rassemblé pour vous tous les traitements que ma clinique peut vous offrir. Naviguez entre les traitements et cliquez sur chaque traitement pour voir plus de détails à son sujet ou pour me contacter directement</div>
      
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {treatments.map((treatment) => (
            <div key={treatment.id} className={styles.treatmentCard}>
              <div className={styles.imageContainer}>
                <img src={treatment.image} alt={treatment.name} className={styles.treatmentImage} />
                <div className={styles.overlay}>
                  <div className={styles.textContent}>
                    <h3 className={styles.treatmentName}>{treatment.name}</h3>
                    <p className={styles.treatmentDescription}>{treatment.description}</p>
                  
                  </div>
                  <div className={styles.buttons}>
                    <button className={styles.infoButton} onClick={() => openModal(treatment)}>Plus de détails sur le traitement</button>
                    <button className={styles.contactButton} onClick={() => handleContactClick(treatment.name)}>
                      Contact
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
                <h3>{getSectionIcon('Pour qui convient le traitement')} Pour qui convient le traitement</h3>
                <p>{selectedTreatment.suitableFor}</p>
              </div>

              <div className={styles.modalSection}>
                <h3>{getSectionIcon('Procédure de traitement:')} Procédure de traitement:</h3>
                <ul>
                  {selectedTreatment.process.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>{getSectionIcon('Photos du traitement:')} Photos du traitement:</h3>
                <div className={styles.imageGrid}>
                  {selectedTreatment.images.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedTreatment.name} ${index + 1}`} />
                  ))}
                </div>
              </div>

              <div className={styles.modalButtons}>
                <button
                  className={styles.contactModalButton}
                  onClick={() => handleContactClick(selectedTreatment.name)}
                >
                  <Phone size={16} />
                  Oksana, planifions un traitement
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