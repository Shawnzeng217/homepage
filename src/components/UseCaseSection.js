import Image from 'next/image';
import styles from './UseCaseSection.module.css';

export default function UseCaseSection({
    title,
    description,
    masterImage,
    details = [],
    link
}) {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Master Content */}
                <div className={styles.masterGrid}>
                    <div className={styles.masterMediaWrapper}>
                        {masterImage && (
                            <Image
                                src={masterImage}
                                alt={title}
                                fill
                                className={styles.masterMedia}
                            />
                        )}
                    </div>
                    <div className={styles.masterContent}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-primary">View Demo</button>
                            </a>
                        )}
                    </div>
                </div>

                {/* Details Content */}
                {details.length > 0 && (
                    <div className={styles.detailsGrid}>
                        {details.map((item, index) => (
                            <div key={index} className={styles.detailItem}>
                                <div className={styles.detailImageWrapper}>
                                    {item.image && (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className={styles.detailImage}
                                        />
                                    )}
                                </div>
                                <div className={styles.detailText}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
