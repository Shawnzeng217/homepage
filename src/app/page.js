import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.preHeader}>Team Innovation Showcase</span>
          <h1 className={styles.heroTitle}>Refining the Future of <br />Hospitality</h1>
          <p className={styles.heroText}>
            Explore our latest experiments in AI-driven guest experiences and internal productivity tools.
            Designed for Hilton. For the Stay.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/customer" className="btn btn-primary">Guest Experience</Link>
            <Link href="/productivity" className="btn btn-outline">Productivity</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
