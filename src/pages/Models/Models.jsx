import Banner from '../../components/Banner';
import '@google/model-viewer'; // Import the web component
import styles from './Models.module.css';
import SectionWebsites from './SectionWebsites';
import SectionModelViewer from './SectionModelViewer';

export default function Models() {

    return (
        <div className={styles.modelsPage}>
            <Banner text="3D Models Gallery" />
            <div className={styles.introSection}>
                <h2>3D Model resources</h2>
                <p>
                    Discover amazing 3D printable models from these popular websites:
                </p>
            </div>
            <div className={styles.modelsContent}>
                <SectionWebsites />
                <div className={styles.introSection}>
                    <h2>Interactive 3D Models</h2>
                    <p>
                        Explore some 3D model samples. Click and drag to rotate, scroll to zoom.
                    </p>
                </div>
                <SectionModelViewer />


            </div>
        </div>
    );
}