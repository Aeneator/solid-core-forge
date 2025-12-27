import { useState } from "react";
import styles from "./Gallery.module.css";
import HeaderSpacer from "../components/HeaderSpacer";
import Banner from "../components/Banner";

const imagesObj = import.meta.glob('../assets/gallery/*.{jpg,png,jpeg,webp}', { eager: true });
const IMAGES = Object.values(imagesObj).map(img => img.default || img);

export default function Gallery({ itemsPerPage = 15 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [zoomedImage, setZoomedImage] = useState(null);

    const totalPages = Math.ceil(IMAGES.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImages = IMAGES.slice(startIndex, startIndex + itemsPerPage);

    const handleZoom = (img) => setZoomedImage(img);
    const closeZoom = () => setZoomedImage(null);

    return (
        <div className={styles.galleryPage}>
            <Banner text="Galerie" />
            <div className={styles.gallery}>
                <div className={styles.grid}>
                    {currentImages.map((img, index) => (
                        <div
                            key={index}
                            className={styles.gridItem}
                            onClick={() => handleZoom(img)}
                        >
                            <img src={img} alt={`Gallery ${index}`} />
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span>
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Zoom Overlay */}
                {zoomedImage && (
                    <div className={styles.zoomOverlay} onClick={closeZoom}>
                        <img src={zoomedImage} alt="Zoomed" className={styles.zoomImage} />
                    </div>
                )}
            </div>
        </div>
    );
}
