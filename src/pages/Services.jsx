import Banner from '../components/Banner';
import styles from './Services.module.css';


import coaforImg from '../assets/services/coafor.jpg';
import frizerieImg from '../assets/services/frizerie.jpg';
import cosmeticaImg from '../assets/services/cosmetica.jpg';
import unghiiImg from '../assets/services/unghii.jpg';
import manichiuraImg from '../assets/services/manichiura.jpg';



const SERVICES = [
  {
    title: "Coafor",
    description: `
      De la tunsori clasice la coafuri moderne, stiliștii noștri sunt aici
      pentru a vă ajuta să obțineți look-ul dorit și să vă simțiți mereu
      în tendințe. Oferim coafuri pentru zi de zi sau ocazii speciale.
    `,
    image: coaforImg,
  },
  {
    title: "Frizerie",
    description: `
      O tunsoare corectă este primul pas către un look îngrijit și modern.
      Frizerii noștri oferă servicii personalizate, adaptate stilului și
      trăsăturilor dumneavoastră.
    `,
    image: frizerieImg,
  },
  {
    title: "Cosmetică",
    description: `
      Tratamente faciale profesionale pentru un ten sănătos și luminos.
      Fie că este vorba de hidratare, curățare sau rejuvenare, cosmeticienele
      noastre vă vor răsfăța cu servicii de calitate.
    `,
    image: cosmeticaImg,
  },
  {
    title: "Unghii cu Gel",
    description: `
      Unghiile cu gel oferă rezistență și un aspect impecabil pentru săptămâni
      întregi. Modele clasice sau moderne, în culori variate, realizate cu
      atenție la detalii.
    `,
    image: unghiiImg,
  },
  {
    title: "Manichiură & Pedichiură",
    description: `
      Îngrijirea mâinilor și a picioarelor este esențială pentru un aspect
      plăcut și sănătos. Vă oferim manichiură și pedichiură clasică, semipermanentă
      sau spa, într-un mediu relaxant.
    `,
    image: manichiuraImg,
  },
];

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      <Banner text="Servicii" />

      <div className={styles.servicesContainer}>
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className={`${styles.serviceSection} ${index % 2 === 1 ? styles.reverse : ""
              }`}
          >
            <div className={styles.textContent}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className={styles.imageContent}>
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
