import { useRef } from 'react';
import styles from './Banner.module.css';
import Dither from '../react-bits/Dither';
import HeaderSpacer from './HeaderSpacer';
import VariableProximity from '../react-bits/VariableProximity';

export default function Banner({ text }) {
    const containerRef = useRef(null);
    return (
        <div className={styles.banner} ref={containerRef}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 0, overflow: 'hidden' }}>
                <Dither
                    waveColor={[0.5, 0.5, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={false}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                >
                </Dither>
            </div>

            <HeaderSpacer />
            {/* <VariableProximity
                label={text}
                className={`variable-proximity-demo ${styles.bannerText}`}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            /> */}
            <h1 className={styles.bannerText}>{text}</h1>
        </div >

    );
}
