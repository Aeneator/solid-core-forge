import styles from './SectionWebsites.module.css';



// 3D Model Websites Data
const modelWebsites = [
    {
        name: "Printables",
        url: "https://www.printables.com/model",
        description: "Large community with free and premium models",
        icon: "🖨️"
    },
    {
        name: "Thingiverse",
        url: "https://www.thingiverse.com/",
        description: "One of the largest free 3D model repositories",
        icon: "🔺"
    },
    {
        name: "MakerWorld",
        url: "https://makerworld.com/en/3d-models",
        description: "Bambu Lab's community platform",
        icon: "🌍"
    },
    {
        name: "Cults3D",
        url: "https://cults3d.com/en/categories/art?category_ids%5B%5D=23&from=category&only_featured=true&only_free=true&page=1",
        description: "Art-focused 3D models, many free",
        icon: "🎨"
    },
    {
        name: "Yeggi",
        url: "https://www.yeggi.com/",
        description: "Search engine for 3D printable models",
        icon: "🔍"
    }
];

export default function SectionWebsites() {

    return (
        <div className={styles.resourcesSection}>

            <div className={styles.websitesGrid}>
                {modelWebsites.map((website, index) => (
                    <a
                        key={index}
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.websiteCard}
                    >
                        <div className={styles.websiteIcon}>{website.icon}</div>
                        <div className={styles.websiteContent}>
                            <h3>{website.name}</h3>
                            <p>{website.description}</p>
                            <span className={styles.websiteLink}>
                                Visit Site →
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}