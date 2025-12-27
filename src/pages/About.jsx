import Banner from '../components/Banner';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <Banner text="Despre Noi" />

      <div className={styles.aboutContent}>
        <h2>Cine suntem</h2>
        <p>
          La <strong>Gentlecut</strong>, credem că frumusețea și îngrijirea personală
          sunt mai mult decât simple servicii – sunt o experiență. Echipa noastră
          de profesioniști este dedicată să ofere cele mai bune servicii de
          coafor, cosmetică și îngrijire personală într-un mediu prietenos și relaxant.
        </p>

        <h2>Misiunea noastră</h2>
        <p>
          Ne dorim să aducem un zâmbet pe chipul fiecărui client și să oferim o
          experiență de răsfăț și relaxare. Punem accent pe calitate,
          profesionalism și atenția la detalii, pentru ca tu să te simți mereu
          încrezător(are) și îngrijit(ă).
        </p>
      </div>
    </div>
  );
}
