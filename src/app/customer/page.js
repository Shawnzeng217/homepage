import UseCaseSection from "@/components/UseCaseSection";
import styles from "../page.module.css"; // Reuse hero styles or create new

export const metadata = {
    title: "Customer Interaction | Hilton Innovation",
};

export default function CustomerPage() {
    return (
        <main>
            <header className={styles.sectionHeader} style={{ paddingTop: '8rem', marginBottom: 0 }}>
                <span className={styles.sectionLabel}>Customer Interaction</span>
                <h1 className={styles.sectionDescription}>
                    Reimagining how we connect with guests.
                </h1>
            </header>

            <UseCaseSection
                title="Virtual Concierge AI"
                description="A multilingual, voice-enabled concierge accessible via room tablets, providing instant local recommendations and service requests."
                masterImage=""
                details={[
                    {
                        title: "Multilingual Support",
                        description: "Real-time translation for over 30 languages.",
                        image: ""
                    },
                    {
                        title: "Instant Dispatch",
                        description: "Direct integration with housekeeping systems.",
                        image: ""
                    }
                ]}
            />

            <UseCaseSection
                title="Smart Room Controls"
                description="Seamless control of room ambiance, temperature, and entertainment through a unified mobile interface."
                masterImage=""
                details={[
                    {
                        title: "Personalized Presets",
                        description: "Guests recall their favorite settings instantly.",
                        image: ""
                    },
                    {
                        title: "Energy Efficiency",
                        description: "Auto-adjusts when room is vacant.",
                        image: ""
                    }
                ]}
            />
        </main>
    );
}
