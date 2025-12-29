import { useState, useRef } from 'react'; // Add useRef

import '@google/model-viewer'; // Import the web component
import styles from './SectionModelViewer.module.css';

import caesar from '../../assets/models/caesar.glb';
import caesarThumbnail from '../../assets/models/caesar.jpg';
import whaleShark from '../../assets/models/ArticulatedWhaleShark.glb';
import whaleSharkThumbnail from '../../assets/models/whale-shark.jpg';
import happypot from '../../assets/models/happy-pot.glb';
import happypotThumbnail from '../../assets/models/happy-pot.jpg';
import low_poly_shark from '../../assets/models/low_poly_shark.glb';
import low_poly_shark_thumbnail from '../../assets/models/low-poly-shark.jpg';


const exampleModels = [
    {
        id: 1,
        name: "Caesar Bust",
        modelUrl: caesar,
        thumbnail: caesarThumbnail,
        backgroundColor: "#ffffffff",
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
    },
    {
        id: 2,
        name: "Whale Shark",
        modelUrl: whaleShark,
        thumbnail: whaleSharkThumbnail,
        backgroundColor: "#ffffffff",
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
    },
    {
        id: 3,
        name: "Happy Pot",
        modelUrl: happypot,
        thumbnail: happypotThumbnail,
        backgroundColor: "#ffffffff",
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
    }
    ,
    {
        id: 4,
        name: "Low Poly Shark",
        modelUrl: low_poly_shark,
        thumbnail: low_poly_shark_thumbnail,
        backgroundColor: "#ffffffff",
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
    }
];
export default function SectionModelViewer() {
    const [selectedModel, setSelectedModel] = useState(exampleModels[0]);
    const viewerRef = useRef(null);

    const handleModelClick = (model) => {
        setSelectedModel(model);

        // Scroll to the viewer section instead of top of page
        if (viewerRef.current) {
            viewerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div>
            < div className={styles.viewerSection} ref={viewerRef} >
                <div className={styles.viewerContainer}>
                    <div className={styles.viewerHeader}>
                        <div className={styles.modelTitle}>
                            <h3>{selectedModel.name}</h3>
                        </div>

                        <div className={styles.viewerControls}>
                            <button
                                className={styles.controlBtn}
                                onClick={() => document.querySelector('model-viewer')?.resetTurntableRotation()}
                                title="Reset view"
                            >
                                ↺ Reset View
                            </button>
                        </div>
                    </div>

                    {/* Model Viewer Component */}
                    <div className={styles.modelViewerWrapper}>
                        <model-viewer
                            src={selectedModel.modelUrl}
                            alt={selectedModel.name}
                            camera-controls
                            auto-rotate={true}
                            shadow-intensity="1"
                            exposure={0.15}
                            style={{
                                width: '100%',
                                height: '70vh',
                                backgroundColor: selectedModel.backgroundColor,
                            }}
                        />

                        <div className={styles.viewerInstructions}>
                            <div className={styles.instructionItem}>
                                <span className={styles.instructionIcon}>↔️</span>
                                <span>Click & Drag to Rotate</span>
                            </div>
                            <div className={styles.instructionItem}>
                                <span className={styles.instructionIcon}>↕️</span>
                                <span>Scroll to Zoom</span>
                            </div>
                            <div className={styles.instructionItem}>
                                <span className={styles.instructionIcon}>🖱️</span>
                                <span>Right-click to Pan</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            < div className={styles.modelsGallery} >
                <h3>Browse All Models</h3>
                <p className={styles.gallerySubtitle}>
                    Click any model to view it in the 3D viewer
                </p>

                <div className={styles.galleryGrid}>
                    {exampleModels.map((model) => (
                        <div
                            key={model.id}
                            className={`${styles.modelCard} ${selectedModel.id === model.id ? styles.selected : ''}`}
                            onClick={() => handleModelClick(model)}
                        >
                            <div className={styles.modelThumbnail}>
                                <div className={styles.thumbnailContainer}>
                                    <img
                                        src={model.thumbnail || '/images/default-thumb.jpg'}
                                        alt={model.name}
                                        className={styles.thumbnailImage}
                                    />
                                    <div className={styles.thumbnailOverlay}>
                                        <span className={styles.view3D}>3D View</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modelCardContent}>
                                <h4>{model.name}</h4>


                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div>
    );
}