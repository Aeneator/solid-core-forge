import { useState, useEffect } from 'react';
import styles from './HomeGallery.module.css';
import InfiniteConveyor from '../../components/InfiniteConveyor';

export default function HomeGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const basePath = process.env.PUBLIC_URL || '';

    // Load projects from generated manifest
    useEffect(() => {
        const loadProjects = async () => {
            try {
                const response = await fetch(`${basePath}/gallery-manifest.json`);
                if (!response.ok) {
                    throw new Error('Failed to load gallery manifest');
                }
                const data = await response.json();
                // Add basePath to image sources
                const projectsWithPaths = data.map(project => ({
                    ...project,
                    images: project.images.map(image => ({
                        ...image,
                        src: `${basePath}${image.src}`
                    }))
                }));
                setProjects(projectsWithPaths);
            } catch (error) {
                console.error('Error loading gallery projects:', error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, [basePath]);

    const conveyorItems = projects.map(project => ({
        image: project.images[0].src,  // Get first image
        text: project.title            // Use project title as text
    }));

    if (loading) {
        return <div className={styles.container}><p>Loading gallery...</p></div>;
    }

    if (projects.length === 0) {
        return <div className={styles.container}><p>No projects found</p></div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.circularGallerySection}>
                <h2 className={styles.projectTitle}>Featured Projects</h2>
                <InfiniteConveyor
                    items={conveyorItems}
                    speedSeconds={70}
                    itemWidth={340}
                    itemHeight={420}
                    direction="left"
                />


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