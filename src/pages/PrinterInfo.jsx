import styles from './PrinterInfo.module.css';
import printerImage from '../assets/creality-ender-3-max-neo.png';
import { FaCog, FaPrint, FaTachometerAlt, FaRuler, FaCube, FaTemperatureHigh, FaMicrochip, FaCheckCircle, FaShieldAlt, FaLeaf, FaTools, FaBolt, FaUsers, FaExpand } from 'react-icons/fa';
import { MdPrecisionManufacturing, MdBuildCircle } from 'react-icons/md';
import { RiPrinterLine, RiSettings3Line } from 'react-icons/ri';
import Banner from '../components/Banner';

export default function PrinterInfo() {
    const printerFeatures = [
        { icon: <FaRuler />, title: 'Large Build Volume', desc: '300 x 300 x 320mm capacity for bigger projects', spec: '300×300×320mm' },
        { icon: <MdPrecisionManufacturing />, title: 'CR-Touch Auto Leveling', desc: 'Automatic bed leveling for perfect first layers', spec: 'Auto-Leveling' },
        { icon: <FaTemperatureHigh />, title: 'Direct Drive Extruder', desc: 'High-performance filament feeding system', spec: 'Direct Drive' },
        { icon: <FaBolt />, title: 'Dual Z-Axis', desc: 'Enhanced stability and precision with dual motors', spec: 'Dual Z-Axis' },
        { icon: <FaTachometerAlt />, title: 'Fast Heating', desc: 'Rapid heat-up with PEI magnetic bed', spec: 'PEI Magnetic Bed' },
        { icon: <FaShieldAlt />, title: 'Resume Print', desc: 'Power failure recovery to prevent print loss', spec: 'Power Recovery' },
    ];

    const printCapabilities = [
        { icon: <FaCube />, title: 'Prototyping', desc: 'Perfect for product development and concept testing' },
        { icon: <MdBuildCircle />, title: 'Functional Parts', desc: 'Create durable components for practical applications' },
        { icon: <FaTools />, title: 'Tooling & Jigs', desc: 'Custom fixtures and manufacturing aids' },
        { icon: <RiPrinterLine />, title: 'Creative Projects', desc: 'Artistic sculptures, decorative items, and models' },
    ];

    const whyChooseThisPrinter = [
        { icon: <FaCheckCircle />, title: 'Reliability', desc: 'Consistent performance with minimal maintenance required' },
        { icon: <FaLeaf />, title: 'Value', desc: 'Professional-grade features at an accessible price point' },
        { icon: <FaUsers />, title: 'Community', desc: 'Backed by one of the largest 3D printing communities' },
        { icon: <RiSettings3Line />, title: 'Versatility', desc: 'Works with wide range of materials including PLA, ABS, PETG, TPU' },
    ];

    return (
        <div className={styles.mainContainer}>
            <Banner text="Creality Ender-3 Max Neo" />

            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.printerTag}>
                        <span className={styles.tag}>Flagship 3D Printer</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Precision Meets Performance
                        <span className={styles.highlight}>Creality Ender-3 Max Neo</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Experience professional-grade 3D printing with enhanced reliability, larger capacity,
                        and advanced features designed for creators who demand precision and quality.
                    </p>

                    <div className={styles.specHighlights}>
                        <div className={styles.specItem}>
                            <FaExpand />
                            <span className={styles.specValue}>300×300×320mm</span>
                            <span className={styles.specLabel}>Build Volume</span>
                        </div>
                        <div className={styles.specItem}>
                            <MdPrecisionManufacturing />
                            <span className={styles.specValue}>CR-Touch</span>
                            <span className={styles.specLabel}>Auto Leveling</span>
                        </div>
                        <div className={styles.specItem}>
                            <FaBolt />
                            <span className={styles.specValue}>Dual Z-Axis</span>
                            <span className={styles.specLabel}>Stability</span>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <img
                        src={printerImage}
                        alt="Creality Ender-3 Max Neo 3D Printer"
                        className={styles.printerImg}
                    />
                    <div className={styles.imageBadge}>
                        <FaUsers className={styles.badgeIcon} />
                        <span>Industry Standard for Creators</span>
                    </div>
                </div>
            </section>

            {/* Key Features Section - Full Width */}
            <section className={`${styles.fullWidthSection} ${styles.featuresSection}`}>
                <div className={styles.featuresContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCog className={styles.titleIcon} />
                            Advanced Features
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Engineered for precision, reliability, and exceptional print quality
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        {printerFeatures.map((feature, index) => (
                            <div key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDesc}>{feature.desc}</p>
                                <div className={styles.featureSpec}>
                                    <FaCube className={styles.specIcon} />
                                    <span>{feature.spec}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Print Capabilities Section - Full Width */}
            <section className={`${styles.fullWidthSection} ${styles.capabilitiesSection}`}>
                <div className={styles.capabilitiesContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaPrint className={styles.titleIcon} />
                            What You Can Create
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Versatile printing capabilities for various applications
                        </p>
                    </div>

                    <div className={styles.capabilitiesGrid}>
                        {printCapabilities.map((capability, index) => (
                            <div key={index} className={styles.capabilityCard}>
                                <div className={styles.capabilityIcon}>{capability.icon}</div>
                                <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                                <p className={styles.capabilityDesc}>{capability.desc}</p>
                                {/* <div className={styles.capabilityExamples}>
                                    <span>Prototypes</span>
                                    <span>Parts</span>
                                    <span>Models</span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Printer Section - Full Width */}
            <section className={`${styles.fullWidthSection} ${styles.whySection}`}>
                <div className={styles.whyContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaCheckCircle className={styles.titleIcon} />
                            Why Creators Choose This Printer
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            The ideal balance of performance, reliability, and value
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        {whyChooseThisPrinter.map((reason, index) => (
                            <div key={index} className={styles.reasonCard}>
                                <div className={styles.reasonIcon}>{reason.icon}</div>
                                <div>
                                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                                    <p className={styles.reasonDesc}>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications Section - Full Width */}
            <section className={`${styles.fullWidthSection} ${styles.specsSection}`}>
                <div className={styles.specsContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>
                            <FaMicrochip className={styles.titleIcon} />
                            Technical Specifications
                        </h2>
                    </div>
                    <div className={styles.specsTable}>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Build Volume</span>
                            <span className={styles.specValue}>300 × 300 × 320 mm</span>
                        </div>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Print Speed</span>
                            <span className={styles.specValue}>Up to 180 mm/s</span>
                        </div>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Hotend Temperature</span>
                            <span className={styles.specValue}>Up to 260°C</span>
                        </div>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Bed Temperature</span>
                            <span className={styles.specValue}>Up to 110°C</span>
                        </div>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Filament Diameter</span>
                            <span className={styles.specValue}>1.75 mm</span>
                        </div>
                        <div className={styles.specRow}>
                            <span className={styles.specLabel}>Layer Resolution</span>
                            <span className={styles.specValue}>0.1 - 0.4 mm</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}