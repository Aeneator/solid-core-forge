import { useRef } from 'react';
import styles from './Home.module.css';
import LiquidChrome from '../../react-bits/LiquidChrome';
import VariableProximity from '../../react-bits/VariableProximity';
import HomeGallery from './HomeGallery';


export default function Home() {
  const containerRef = useRef(null);
  return (
    <div>
      <div
        className={styles.homePage}
      >
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={.1}
          amplitude={0.6}
          interactive={true}
        />

        <div className={styles.homeContent} ref={containerRef}>

          <VariableProximity
            label={'SOLID CORE FORGE'}
            className={`variable-proximity-demo ${styles.largeText}`}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
          <br />
          <VariableProximity
            label={'Bring your ideas to life'}
            className={`variable-proximity-demo ${styles.mediumText}`}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />

        </div>
      </div>

      <HomeGallery />

      <div className={styles.spacer}></div>
    </div>
  );
}
