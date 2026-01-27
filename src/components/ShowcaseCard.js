import Image from 'next/image';
import styles from './ShowcaseCard.module.css';

export default function ShowcaseCard({ title, category, description, imageSrc, reversed }) {
    return (
        <div className={`${styles.card} ${reversed ? styles.reversed : ''}`}>
            {/* Media Section */}
            <div className={styles.mediaWrapper}>
                <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#e5e5e5' }}>
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className={styles.media}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 900px) 100vw, 60vw"
                        />
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <button className="btn btn-outline">Explore Case Study</button>
            </div>
        </div>
    );
}
