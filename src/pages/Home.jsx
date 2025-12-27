import styles from './Home.module.css';
import backgroundImage from '../assets/home-background.jpg';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <div
        className={styles.homePage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.homeContent}>
          <h1>Bring your ideas to life</h1>
          <p>Create anything</p>
        </div>

      </div>

      <div className={styles.spacer}></div>
    </div>
  );
}
