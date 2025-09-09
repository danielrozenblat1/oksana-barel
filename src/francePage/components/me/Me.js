import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import oksanaImage from "../../../images/אוקסנה ללא רקע.png";
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
    const phoneNumber = "+972545064300";
    const message = "Salut Oksana, je viens de votre page, j'aimerais en savoir plus sur";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={containerRef} className={styles.section} id="qui-je-suis">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={oksanaImage} alt="Oksana Brel" className={styles.image} />
        </div>

        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>Enchanté, Oksana Brel</h2>

          <div className={styles.quoteContainer}>
            <p className={styles.quote}>
              "Je ne suis pas née esthéticienne, mais après un soin permanent qui a abîmé mon visage - j'ai su que désormais, c'est moi qui le ferai correctement. Vraiment."
            </p>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              J'ai travaillé des années comme responsable de comptes. Bureau, Excel, téléphones. Tout coulait, mais au fond de moi - je savais que je n'étais pas au bon endroit. J'ai toujours été connectée au monde des soins, du design et de la précision. Et puis c'est arrivé - on m'a fait un maquillage permanent qui a mal tourné. Et pas mal dans le petit sens, mal au niveau de "comment je sors de chez moi maintenant ?".
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              J'ai décidé d'apprendre cela en profondeur. Avec une vraie soif de comprendre comment faire cela le plus correctement possible. J'ai étudié la cosmétique médicale, le maquillage permanent, j'ai recherché chaque technologie, chaque méthode, chaque appareil qui pourrait aider. J'aime savoir ce qui se cache derrière chaque action - ne pas foncer à l'aveuglette.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.paragraph}>
              Aujourd'hui, toute personne qui entre dans ma clinique reçoit un diagnostic précis, un traitement personnel et une vraie coordination des attentes. Il n'y a pas de modèles chez moi et pas de "on fait et on voit". J'examine, j'adapte, et si nécessaire je dis aussi "non". Parce que tous les soins ne conviennent pas à tout le monde, et votre visage n'est pas un endroit pour des suppositions. Chaque résultat obtenu ici est un résultat construit sur la base de connaissances, d'écoute et d'expérience.
            </p>

            <div className={styles.divider}></div>

            <p className={styles.finalText}>
              Si vous êtes frustrée par votre apparence, si vous avez essayé une esthéticienne et cela n'a pas marché, si vous ne savez plus quoi faire - parlons-en. Sans promesses. Avec une honnêteté totale. Je vous dirai exactement ce qui est possible, ce qui l'est moins, ce qui nécessitera de la persévérance et peut-être aussi nous prendrons la route ensemble :) <br /><br />
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsAppMessage}>
            <span className={styles.buttonIcon}>💬</span>
            Pour toute consultation, cliquez ici
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;