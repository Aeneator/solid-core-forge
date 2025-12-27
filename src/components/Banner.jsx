import styles from './Banner.module.css';

import backgroundImage from '../assets/underheader.jpg';
import HeaderSpacer from './HeaderSpacer';

export default function Banner({ text }) {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <HeaderSpacer />
            <h1 className={styles.bannerText}>{text}</h1>
        </div>
    );
}
