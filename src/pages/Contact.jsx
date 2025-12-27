import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from './Contact.module.css';

import Banner from "../components/Banner";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <Banner text="Contact" />

      <div className={styles.contactContainer}>
        {/* Left column: contact info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <MapPin size={28} className={styles.icon} />
            <p>Strada Almaș nr 18, București, Romania</p>
          </div>

          <div className={styles.contactItem}>
            <Phone size={28} className={styles.icon} />
            <p>0761 087 255</p>
          </div>

          <div className={styles.contactItem}>
            <Mail size={28} className={styles.icon} />
            <p>contact@yourdomain.com</p>
          </div>

          {/* Simplified Program */}
          <div className={styles.programContainer}>
            <h3><Clock size={20} className={styles.clockIcon} /> Program</h3>
            <div className={styles.day}>
              <span>Luni – Vineri</span>
              <span>08:00 – 20:00</span>
            </div>
            <div className={styles.day}>
              <span>Sâmbătă</span>
              <span>08:00 – 16:00</span>
            </div>
            <div className={styles.day}>
              <span>Duminică</span>
              <span>08:00 – 13:00</span>
            </div>
          </div>
        </div>

        {/* Right column: map */}
        <div className={styles.mapContainer}>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1251628192636!2d26.02874611579004!3d44.48539107910336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203c099efd327%3A0x7895c1e275da2fc1!2sStrada%20Alma%C8%99%2018%2C%20Bucure%C8%99ti%2C%20Romania!5e0!3m2!1sen!2sus!4v1695925690000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
