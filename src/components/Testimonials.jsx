import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
    { name: "Georgiana", text: "Felele sunt fantastice ori de câte ori merg la ele. fie că la tuns sau sprâncene,fie la recepție sau la telefon,au o atitudine prietenoasă. Felicitari" },
    { name: "Cristina Ilie", text: "Profesionalism, ambient plăcut ❤️ Multumesc frumos pentru coafura realizata perfect si pentru devotamentul de care ati dat dovada, cu siguranta am sa mai revin❤️" },
    { name: "Diana Mitrana", text: "Am avut parte de o experiență foarte plăcută în cadrul acestui salon. Personalul a fost foarte amabil și competent. Recomand!" },
    { name: "Mihaela Ene", text: "Totul perfect, calitate 🥰🥰🥰" },
    { name: "Ana Maria Burtescu", text: "Recomand cu mare încredere" },
    { name: "Rodica Baracea", text: "Cel mai bun și frumos salon, la care merg de 20 ani. Personal amabil, aproape același de atâția ani! Cred că cine nu este mulțumit, este invidios! Mult succes dragelor, aștept cu nerăbdare să vă vizitez." },
    { name: "Aurelia Patrascu", text: "Un salon curat, personal amabil, merg de 3 ani la doamna Cristina, manichiura si pedichiura, profesionista si dedicata meseriei. Multumesc frumos si multa sanatate!" },
    { name: "Albert Mihai", text: "Recomand aceasta salon. Eu personal ma simt foarte multumit de serviciile oferite. Atmosfera este foarte placuta, iar personalul este foarte amabil si profesionist." },
];

// Map testimonials to carousel items
const items = TESTIMONIALS.map((t, idx) => (
    <div key={idx} className={styles.testimonialCard}>
        <p className={styles.text}>"{t.text}"</p>
        <p className={styles.name}>— {t.name}</p>
    </div>
));

export default function Testimonials() {
    return (
        <div className={styles.testimonialsSection}>
            <h2>Testimoniale</h2>
            <AliceCarousel
                mouseTracking
                items={items}
                infinite
                keyboardNavigation
                disableDotsControls={true}
                responsive={{
                    0: { items: 1 },      // from 0px → 1 item
                    768: { items: 2 },    // from 768px → 2 items
                    1024: { items: 3 },   // from 1024px → 3 items
                }}
                controlsStrategy="responsive"
            />
        </div>
    );
}
