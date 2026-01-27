import UseCaseSection from "@/components/UseCaseSection";
import styles from "../page.module.css";

export const metadata = {
    title: "Productivity Boosters | Hilton Innovation",
};

export default function ProductivityPage() {
    return (
        <main>
            <header className={styles.sectionHeader} style={{ paddingTop: '8rem' }}>
                <span className={styles.sectionLabel}>Productivity Boosters</span>
                <h1 className={styles.sectionDescription}>
                    Empowering our team with intelligent tools.
                </h1>
            </header>

            <UseCaseSection
                title="Auto-Scheduling Assistant"
                description="Optimizing housekeeping schedules in real-time based on guest check-out and preference data."
                masterImage=""
                details={[
                    {
                        title: "Live Updates",
                        description: "Schedules adjust automatically as guests check out.",
                        image: ""
                    },
                    {
                        title: "Team Dashboard",
                        description: "Visual overview of floor status for supervisors.",
                        image: ""
                    }
                ]}
            />

            <UseCaseSection
                title="Knowledge Base Bot"
                description="Instant answers for staff queries regarding policy, maintenance procedures, and training materials."
                masterImage=""
                details={[
                    {
                        title: "Policy Search",
                        description: "Natural language search for complex guidelines.",
                        image: ""
                    },
                    {
                        title: "Maintenance Guides",
                        description: "Step-by-step repair instructions with video.",
                        image: ""
                    }
                ]}
            />
        </main>
    );
}
