import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={`${styles.navbar} glass`}>
            <div className={styles.inner}>
                <Link href="/" aria-label="Hilton For The Stay">
                    <div style={{ position: 'relative', width: '220px', height: '60px' }}>
                        <Image
                            src="/assets/logos/Hilton_FTS_Logo_CMYK_Horiz_Black.png"
                            alt="Hilton Logo"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'left' }}
                            priority
                            sizes="220px"
                        />
                    </div>
                </Link>
                <div className={styles.links}>
                    <Link href="/customer" className={styles.link}>Customer Interaction</Link>
                    <Link href="/productivity" className={styles.link}>Productivity</Link>
                </div>
            </div>
        </nav>
    );
}
