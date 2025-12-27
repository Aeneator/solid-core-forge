import { MapPin, CalendarCheck, Phone, Facebook, Instagram } from "lucide-react";
import styles from './Footer.module.css';
import logo from '../assets/logo.png'; // your logo image

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
                <div className={styles.section}>
                    <MapPin size={28} className={styles.icon} />
                    <p>Strada Almaș nr 18<br />Bucuresti Romania</p>
                </div>

                <div className={styles.section}>
                    <CalendarCheck size={28} className={styles.icon} />
                    <p>Book Appointment</p>
                </div>

                <div className={styles.section}>
                    <a
                        href={`tel:${phoneNumberTel}`}
                        aria-label={`Call ${phoneNumberDisplay}`}
                        title={`Call ${phoneNumberDisplay}`}
                        className={styles.socialIcon} // use the same class as other social icons
                    >
                        <Phone size={28} />
                        <p className={styles.phoneText}>{phoneNumberDisplay}</p>
                    </a>
                </div>
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
                    <a href="https://www.facebook.com/SpaStudiobyKaty?locale=ro_RO" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} className={styles.socialIcon} />
                    </a>
                    <a href="https://www.instagram.com/spastudiobykaty/" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} className={styles.socialIcon} />
                    </a>
                    <a href="https://maps.app.goo.gl/oHrCFjXHKt2fers3A" target="_blank" rel="noopener noreferrer">
                        <MapPin size={24} className={styles.socialIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
