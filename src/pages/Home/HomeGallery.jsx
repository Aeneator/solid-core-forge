import { useState } from 'react';
import styles from './HomeGallery.module.css';
import CircularGallery from '../../react-bits/CircularGallery';

export default function HomeGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const basePath = process.env.PUBLIC_URL || '';

    // Replace with your actual project data
    const projects = [
        {
            title: "Hornet - Hollow Knight",
            images: [
                { src: `${basePath}/HomeGallery/Hornet1.jpg`, alt: "Hornet 1" },
                { src: `${basePath}/HomeGallery/Hornet2.jpg`, alt: "Hornet 2" },
                { src: `${basePath}/HomeGallery/Hornet3.jpg`, alt: "Hornet 3" },
                { src: `${basePath}/HomeGallery/Hornet4.jpg`, alt: "Hornet 4" }
            ]
        },
        {
            title: "Mercenary - Risk Of Rain 2",
            images: [
                { src: `${basePath}/HomeGallery/Mercenary1.jpg`, alt: "Mercenary 1" },
                { src: `${basePath}/HomeGallery/Mercenary2.jpg`, alt: "Mercenary 2" },
                { src: `${basePath}/HomeGallery/Mercenary3.jpg`, alt: "Mercenary 3" },
                { src: `${basePath}/HomeGallery/Mercenary4.jpg`, alt: "Mercenary 4" },
                { src: `${basePath}/HomeGallery/Mercenary5.jpg`, alt: "Mercenary 5" }
            ]
        },
        {
            title: "Trueno ae86",
            images: [
                { src: `${basePath}/HomeGallery/Trueno1.jpg`, alt: "Trueno 1" },
            ]
        },
        {
            title: "Tux",
            images: [
                { src: `${basePath}/HomeGallery/Tux1.jpg`, alt: "Tux 1" },
            ]
        },
        {
            title: "Decoration",
            images: [
                { src: `${basePath}/HomeGallery/Decoration1.jpg`, alt: "Decoration 1" },
            ]
        },
        {
            title: "Nero - Black Clover",
            images: [
                { src: `${basePath}/HomeGallery/Nero1.jpg`, alt: "Nero 1" },
            ]
        }, {
            title: "The Knight - Hollow Knight",
            images: [
                { src: `${basePath}/HomeGallery/Knight1.jpg`, alt: "The Knight 1" },
                { src: `${basePath}/HomeGallery/Knight2.jpg`, alt: "The Knight 2" }
            ]
        },
        {
            title: "Villager - Minecraft",
            images: [
                { src: `${basePath}/HomeGallery/Villager1.jpg`, alt: "Villager 1" },
            ]
        },
        {
            title: "Assorted Models",
            images: [
                { src: `${basePath}/HomeGallery/Things1.jpg`, alt: "Assorted 1" },
                { src: `${basePath}/HomeGallery/Things2.jpg`, alt: "Assorted 2" },
            ]
        }
    ];

    const circularGalleryItems = projects.map(project => ({
        image: project.images[0].src,  // Get first image
        text: project.title            // Use project title as text
    }));

    return (
        <div className={styles.container}>
            <div className={styles.circularGallerySection}>
                <h2 className={styles.projectTitle}>Featured Artwork</h2>
                <div style={{ height: '600px' }}>
                    <CircularGallery
                        items={circularGalleryItems}
                        bend={3}
                        textColor="#000000ff"
                        borderRadius={0.05}
                        // font="bold 30px Figtree"
                        scrollSpeed={2}
                        scrollEase={0.05}
                    />
                </div>
            </div>

            <div className={styles.content}>
                {projects.map((project, projectIndex) => (
                    <div key={projectIndex} className={styles.projectSection}>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                        <div className={styles.imageGrid}>
                            {project.images.map((image, imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className={styles.imageCard}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className={styles.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className={styles.modalImage}
                    />
                    <div
                        className={styles.closeButton}
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </div>
                </div>
            )}
        </div>
    );
}