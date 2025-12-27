import styles from './PrinterInfo.module.css';
import printerImage from '../assets/creality-ender-3-max-neo.png';
import Testimonials from '../components/Testimonials';
import { FaCog, FaPrint, FaTachometerAlt, FaRuler, FaCube, FaTemperatureHigh, FaMicrochip, FaCheckCircle, FaBusinessTime, FaShieldAlt, FaLeaf, FaClock, FaTools, FaBolt, FaUsers } from 'react-icons/fa';
import { MdPrecisionManufacturing, MdLocalShipping, MdSupportAgent } from 'react-icons/md';

export default function PrinterInfo() {
    const businessBenefits = [
        { icon: <FaBusinessTime />, title: 'Fast Turnaround', desc: '24-48 hour production time for standard orders' },
        { icon: <MdPrecisionManufacturing />, title: 'High Precision', desc: '±0.1mm accuracy for professional results' },
        { icon: <FaShieldAlt />, title: 'Reliability', desc: '95%+ success rate with minimal print failures' },
        { icon: <FaLeaf />, title: 'Cost Effective', desc: 'Low material cost with optimized printing' },
    ];



    return (
        <div className={styles.container}>
            {/* Business Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.businessTag}>
                        <span className={styles.tag}>Professional 3D Printing Service</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Premium 3D Printing
                        <span className={styles.highlight}>Powered by Creality Ender-3 Max Neo</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We transform your ideas into high-quality physical products using state-of-the-art
                        printing technology. Fast, reliable, and professional results guaranteed.
                    </p>

                    <div className={styles.ctaButtons}>
                        <button className={styles.primaryButton}>
                            <FaPrint /> Request a Quote
                        </button>
                        <button className={styles.secondaryButton}>
                            <FaClock /> Check Production Timeline
                        </button>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img
                        src={printerImage}
                        alt="Professional 3D Printing Setup"
                        className={styles.printerImg}
                    />
                    <div className={styles.imageBadge}>
                        <FaUsers className={styles.badgeIcon} />
                        <span>Trusted by 200+ Businesses</span>
                    </div>
                </div>
            </section>

            {/* Business Benefits */}
            <section className={styles.benefitsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        <FaBusinessTime className={styles.titleIcon} />
                        Why Choose Our Printing Service?
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Professional 3D printing solutions for businesses and creators
                    </p>
                </div>

                <div className={styles.benefitsGrid}>
                    {businessBenefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitCard}>
                            <div className={styles.benefitIcon}>{benefit.icon}</div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitDesc}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Support & Guarantee */}
            <section className={styles.guaranteeSection}>
                <div className={styles.guaranteeCard}>
                    <div className={styles.guaranteeIcon}>
                        <MdSupportAgent />
                    </div>
                    <div className={styles.guaranteeContent}>
                        <h2 className={styles.guaranteeTitle}>
                            100% Satisfaction Guarantee
                        </h2>
                        <p className={styles.guaranteeText}>
                            If you're not satisfied with the print quality, we'll reprint it or provide a full refund.
                            Our team provides expert consultation and design optimization for every project.
                        </p>
                        <div className={styles.guaranteeBadges}>
                            <span className={styles.badge}>Quality Assured</span>
                            <span className={styles.badge}>Expert Support</span>
                            <span className={styles.badge}>Fast Response</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCta}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Bring Your Ideas to Life?</h2>
                    <p className={styles.ctaText}>
                        Upload your 3D model today and get an instant quote.
                        Our team will optimize your design for the best results.
                    </p>
                    <div className={styles.ctaButtons}>
                        <button className={styles.ctaPrimary}>
                            <FaPrint /> Get Instant Quote
                        </button>
                        <button className={styles.ctaSecondary}>
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}