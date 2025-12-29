import { Instagram } from "lucide-react";
import styles from './Footer.module.css';
import logo from '../assets/solid-core-forge-logo.png'; // your logo image

export default function Footer() {
    // Use an international format for the phone URI
    const phoneNumberDisplay = "0761 087 255";
    const phoneNumberTel = "+40761087255"; // no spaces, international format

    const handlePhoneClick = (e) => {
        // optional: prevent default and navigate programmatically as a fallback
        // this helps in some SPA contexts
        // NOTE: keep the anchor so default behaviour works too
        if (typeof window !== "undefined") {
            window.location.href = `tel:${phoneNumberTel}`;
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <h1>Solid Core Forge</h1>

            </div>
            {/* Bottom row */}
            <div className={styles.bottomRow}>
                <div className={styles.left}>
                    <p>2025 All Rights Reserved</p>
                </div>

                <div className={styles.center}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>

                <div className={styles.right}>

                    <a href="https://www.instagram.com/explore/search/keyword/?q=%233dprint" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className={styles.socialIcon} />
                    </a>

                </div>
            </div>
        </footer>
    );
}
