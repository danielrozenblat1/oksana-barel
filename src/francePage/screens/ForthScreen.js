import Button from "../../components/button/Button"
import FAQItem from "../../components/questions/Questions"
import styles from "./ForthScreen.module.css"

const ForthScreen = () => {

 return <>
   <div className={styles.title} id="שאלות נפוצות">Questions Réponses</div>
   <div className={styles.description}>Si vous êtes arrivé(e) ici et qu'il vous reste encore quelques questions.. Je suis là pour vous répondre à toutes. Cliquez sur chaque question et la réponse s'ouvrira</div>
   
   <FAQItem
     question="J'ai déjà essayé des esthéticiennes par le passé et ça n'a pas fonctionné. Pourquoi faire confiance à nouveau ?"
     answer="Vous n'êtes pas la seule à ressentir cela. Et c'est pourquoi il est important pour moi de commencer par un examen, il est important pour moi de comprendre ce qu'on vous a fait, ce qu'on n'a pas fait, quel est votre objectif. Je n'aime pas promettre des résultats sans raison. Contactez-moi et nous verrons ensemble comment je peux vous aider"
   />

   <FAQItem
     question="J'ai peur que les traitements me fassent mal, ma peau est sensible. Est-ce que ça fait vraiment mal ?"
     answer="C'est une crainte légitime. Il est important pour moi que vous sachiez qu'aujourd'hui il existe des anesthésiants grâce auxquels vous ne sentirez presque rien et en plus des produits anesthésiants, je travaille en douceur, j'adapte le style de travail selon votre peau et d'ailleurs.. j'ai des clientes qui s'endorment pendant le traitement, alors je crois qu'on s'en sortira :)"
   />

   <FAQItem
     question="Il y a plein de méthodes pour le maquillage permanent. Comment savoir ce qui me convient le mieux ?"
     answer="Vous n'avez pas besoin de le savoir. J'examine votre type de peau, la densité des poils, les couleurs, et ensuite je recommande ce qui tiendra le mieux et ce qui paraîtra naturel. Chacune reçoit une adaptation personnalisée"
   />

   <FAQItem
     question="Après le traitement, je peux continuer normalement ou ça me handicape ?"
     answer="Dans la plupart des traitements, vous vous levez et continuez votre journée normalement. Pas besoin de jours de maladie ou de congé spécial. C'est totalement adapté à la routine"
   />

   <FAQItem
     question="Après combien de temps voit-on des résultats dans les soins du visage ?"
     answer="Dans certains cas, on voit un changement notable dès le premier traitement. Quand il s'agit de cicatrices post-acné ou d'acné inflammatoire, un processus adapté à ce cas spécifique est nécessaire que j'adapte avec vous, avec une explication précise et un équipement dédié"
   />

   <FAQItem
     question="J'ai la peau cicatrisée par l'acné. Peut-on faire quelque chose ?"
     answer="Certainement. J'utilise la technologie avancée RF Fractional qui estompe les cicatrices et améliore la texture de la peau. C'est une technologie qui demande de la précision, et je travaille avec depuis des années"
   />

   <FAQItem
     question="Si ma génétique est problématique, y a-t-il une chance que le traitement aide ?"
     answer="Je ne change pas la génétique, mais je sais améliorer une peau fatiguée, grisâtre ou cicatrisée. Les bons traitements font un changement significatif dans la sensation et l'apparence"
   />

   <FAQItem
     question="J'ai pensé prendre Roaccutane. N'est-ce pas une façon plus simple ? Quels sont les risques ?"
     answer="Le Roaccutane est un médicament relativement fort qui aidera dans certains cas mais pas tous. Mais il faut prendre en compte les effets secondaires non simples du médicament.
Comme la sécheresse excessive des lèvres, du visage, l'humeur, l'interdiction d'exposition au soleil et plus.

Avec un traitement correct et un équipement adapté, on peut arriver à de beaux résultats, sans nuire à votre santé."
   />

   <FAQItem
     question="J'ai de l'acné active et j'ai honte de ma peau. Peut-on traiter cela ?"
     answer="Oui. Je traite beaucoup de clients qui viennent me voir avec une peau enflammée ou cicatrisée"
   />
   
   <Button text="Pour plus de questions cliquez ici"/>
 </>
}

export default ForthScreen