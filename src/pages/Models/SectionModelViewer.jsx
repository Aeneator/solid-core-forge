import { useState, useRef } from 'react';
import '@google/model-viewer';
import styles from './SectionModelViewer.module.css';

import caesar from '../../assets/models/caesar.glb';
import caesarThumbnail from '../../assets/models/caesar.jpg';
import whaleShark from '../../assets/models/ArticulatedWhaleShark.glb';
import whaleSharkThumbnail from '../../assets/models/ArticulatedWhaleShark.jpg';
import happypot from '../../assets/models/happy-pot.glb';
import happypotThumbnail from '../../assets/models/happy-pot.jpg';
import low_poly_shark from '../../assets/models/low_poly_shark.glb';
import low_poly_shark_thumbnail from '../../assets/models/low-poly-shark.jpg';
import knightPenHolder from '../../assets/models/KnightPenHolder.glb';
import knightPenHolderThumbnail from '../../assets/models/KnightPenHolder.jpg';
import meAndYou from '../../assets/models/MeNYou.glb';
import meAndYouThumbnail from '../../assets/models/MeNYou.jpg';
import cutecat from '../../assets/models/cutecat.glb';
import cutecatThumbnail from '../../assets/models/cutecat.jpg';

const exampleModels = [
    {
        name: "Cute Cat",
        modelUrl: cutecat,
        thumbnail: cutecatThumbnail,
        backgroundColor: "#ffffffff",
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "Sylex3D",
        license: "CC BY 4.0",
        source: "https://makerworld.com/en/models/1756186-cute-cat"
    },
    {
        name: "Knight Pen Holder",
        modelUrl: knightPenHolder,
        thumbnail: knightPenHolderThumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "TwoBit2",
        license: "CC BY-SA 4.0",
        source: "https://www.thingiverse.com/thing:7252176"
    },
    {
        name: "Me & You",
        modelUrl: meAndYou,
        thumbnail: meAndYouThumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "madgallo79",
        license: "CC BY 4.0",
        source: "https://makerworld.com/en/models/2175859-me-you#profileId-2360618"
    },
    {
        name: "Julius Caesar in Toga Bust | Roman statue",
        modelUrl: caesar,
        thumbnail: caesarThumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "octv h",
        license: "CC0",
        source: "https://www.printables.com/model/1523971-julius-caesar-in-toga-bust-roman-statue"
    },
    {
        name: "Articulated Whale Shark",
        modelUrl: whaleShark,
        thumbnail: whaleSharkThumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "Jopek Design",
        license: "CC BY-NC-ND 4.0",
        source: "https://www.printables.com/model/507275-articulated-whale-shark",
        note: "Non-commercial use only, no derivatives allowed"
    },
    {
        name: "Happy Pot",
        modelUrl: happypot,
        thumbnail: happypotThumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "Keetah",
        license: "CC BY-NC-SA 4.0",
        source: "https://www.printables.com/model/116323-happy-pot",
        note: "Non-commercial use only, share-alike required"
    },
    {
        name: "Low Poly Articulated Shark",
        modelUrl: low_poly_shark,
        thumbnail: low_poly_shark_thumbnail,
        cameraOrbit: "45deg 55deg 4m",
        cameraTarget: "0m 0.5m 0m",
        author: "HexAxis3D (Remix of McGybeer's design)",
        license: "CC BY-NC-SA 4.0",
        source: "https://www.printables.com/model/366344-low-poly-articulated-shark",
        note: "Remix of McGybeer's Articulated Shark. Non-commercial use only."
    },



];

const modelsWithIds = exampleModels.map((model, index) => ({
    id: index + 1,
    ...model
}));

// Helper to get license badge color
const getLicenseColor = (license) => {
    if (license.includes('CC0')) return '#4CAF50'; // Green for public domain
    if (license.includes('CC BY')) return '#2196F3'; // Blue for standard attribution
    if (license.includes('NC')) return '#FF9800'; // Orange for non-commercial
    if (license.includes('SA')) return '#9C27B0'; // Purple for share-alike
    return '#757575'; // Default gray
};

const isCommercialAllowed = (license) => {
    return !license.includes('NC') && !license.includes('NonCommercial');
};

export default function SectionModelViewer() {
    const [selectedModel, setSelectedModel] = useState(modelsWithIds[0]);
    const [showAttribution, setShowAttribution] = useState(false);
    const viewerRef = useRef(null);

    const handleModelClick = (model) => {
        setSelectedModel(model);
        if (viewerRef.current) {
            viewerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const generateAttributionText = (model) => {
        if (model.license === 'CC0') {
            return `"${model.name}" by ${model.author} (Public Domain)`;
        }
        let attribution = `"${model.name}" by ${model.author} is licensed under ${model.license}`;
        if (model.note && model.note.includes("Original creator")) {
            attribution += `\n${model.note}`;
        }
        return attribution;
    };

    return (
        <div>
            <div className={styles.viewerSection} ref={viewerRef}>
                <div className={styles.viewerContainer}>
                    <div className={styles.viewerHeader}>
                        <div className={styles.modelTitle}>
                            <h3>{selectedModel.name}</h3>
                            <div
                                className={styles.licenseBadge}
                                style={{ backgroundColor: getLicenseColor(selectedModel.license) }}
                                onClick={() => setShowAttribution(!showAttribution)}
                                title="Click for license details"
                            >
                                {selectedModel.license}
                                {!isCommercialAllowed(selectedModel.license)}
                            </div>
                        </div>

                        <div className={styles.viewerControls}>
                            <button
                                className={styles.controlBtn}
                                onClick={() => setShowAttribution(!showAttribution)}
                                title="Show attribution"
                            >
                                📋 Attribution
                            </button>
                            <button
                                className={styles.controlBtn}
                                onClick={() => document.querySelector('model-viewer')?.resetTurntableRotation()}
                                title="Reset view"
                            >
                                ↺ Reset View
                            </button>
                        </div>
                    </div>

                    {/* Attribution Panel */}
                    {showAttribution && (
                        <div className={styles.attributionPanel}>
                            <div className={styles.attributionHeader}>
                                <h4>📋 Model Attribution</h4>
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setShowAttribution(false)}
                                >
                                    ✕
                                </button>
                            </div>
                            <div className={styles.attributionContent}>
                                <p><strong>Title:</strong> {selectedModel.name}</p>
                                <p><strong>Author:</strong> {selectedModel.author}</p>
                                <p><strong>License:</strong> {selectedModel.license}</p>
                                {selectedModel.source && (
                                    <p>
                                        <strong>Source:</strong>{' '}
                                        <a
                                            href={selectedModel.source}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.sourceLink}
                                        >
                                            View original
                                        </a>
                                    </p>
                                )}
                                {selectedModel.note && (
                                    <p className={styles.licenseNote}>
                                        <strong>Note:</strong> {selectedModel.note}
                                    </p>
                                )}
                                <div className={styles.attributionCode}>
                                    <pre>{generateAttributionText(selectedModel)}</pre>
                                    <button
                                        className={styles.copyBtn}
                                        onClick={() => navigator.clipboard.writeText(generateAttributionText(selectedModel))}
                                    >
                                        📋 Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

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
                                backgroundColor: "#ffffffff",
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

                    {/* Minimal attribution footer (always visible) */}
                    <div className={styles.minimalAttribution}>
                        <span>Model by {selectedModel.author}</span>
                        {selectedModel.license && (
                            <span className={styles.licenseText}> • {selectedModel.license}</span>
                        )}
                        {!isCommercialAllowed(selectedModel.license) && (
                            <span className={styles.note}> • Non-commercial</span>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.modelsGallery}>
                <h3>Browse All Models</h3>
                <p className={styles.gallerySubtitle}>
                    Click any model to view it in the 3D viewer
                </p>

                <div className={styles.galleryGrid}>
                    {modelsWithIds.map((model) => (
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
                                    <div
                                        className={styles.licenseIndicator}
                                        style={{ backgroundColor: getLicenseColor(model.license) }}
                                        title={model.license}
                                    >
                                        {model.license.includes('CC0') ? 'PD' : 'CC'}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.modelCardContent}>
                                <h4>{model.name}</h4>
                                <div className={styles.modelMeta}>
                                    <div className={styles.modelAuthor}>
                                        <span>by {model.author}</span>
                                    </div>
                                    <div className={styles.modelLicense}>
                                        {model.license}
                                        {/* {!isCommercialAllowed(model.license) && (
                                            <span className={styles.ncWarning} title="Non-commercial use only"> ⚠️</span>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}