import Banner from '../components/Banner';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <Banner text="About This Project" />

      <div className={styles.aboutContent}>
        <h2>Handcrafted 3D Art, Layer by Layer</h2>

        <div className={styles.aboutSection}>
          <p>
            This is my personal fusion of technology and traditional artistry.
            I transform 3D printed objects through hand-painting, giving careful
            attention to every detail and bringing them to life with color and texture.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3>The Creative Process</h3>
          <p>
            Each piece begins as a 3D printed form that I carefully prepare, prime,
            and hand-paint. The process of taking a manufactured object and
            transforming it through traditional painting techniques is where
            the magic happens where technology meets personal artistic expression.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3>Built From Passion</h3>
          <p>
            This project was born from a desire to bridge modern manufacturing
            with handmade craftsmanship. I'm building this not just as a collection
            of objects, but as a showcase of what happens when technology meets
            personal touch and artistic vision.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3>Why I Create</h3>
          <p>
            In a world of mass production, I believe there's still magic in
            personalized, hand-painted items. Each piece carries the unique character
            that only human hands can provide through brushwork. This is my creative
            outlet, a way to add personal artistry to 3D printed forms.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <h3>Personal Touch</h3>
          <p>
            Every painted object here represents hours of work, from preparation
            to the final brushstroke. This project is my personal exploration
            of how traditional painting can enhance and transform 3D printed objects,
            adding the human element to digital fabrication.
          </p>
        </div>
      </div>
    </div>
  );
}