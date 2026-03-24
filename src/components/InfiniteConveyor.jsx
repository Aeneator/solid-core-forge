import styles from './InfiniteConveyor.module.css';

export default function InfiniteConveyor({
    items = [],
    speedSeconds = 35,
    itemWidth = 300,
    itemHeight = 400,
    direction = 'left',
}) {
    if (!items.length) {
        return null;
    }

    // Duplicate the list so the horizontal loop is seamless.
    const loopItems = [...items, ...items];
    const isRightDirection = direction === 'right';

    return (
        <div className={styles.viewport}>
            <div
                className={`${styles.track} ${isRightDirection ? styles.trackRight : styles.trackLeft}`}
                style={{ '--duration': `${speedSeconds}s` }}
            >
                {loopItems.map((item, index) => (
                    <article
                        key={`${item.text}-${index}`}
                        className={styles.card}
                        style={{
                            '--card-width': `${itemWidth}px`,
                            '--card-height': `${itemHeight}px`,
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.text || `Gallery item ${index + 1}`}
                            className={styles.image}
                            loading="lazy"
                        />
                        {item.text && <span className={styles.label}>{item.text}</span>}
                    </article>
                ))}
            </div>
        </div>
    );
}
