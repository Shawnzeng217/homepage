import UseCaseSection from "@/components/UseCaseSection";
import styles from "../page.module.css";

export const metadata = {
    title: "Productivity Boosters | Hilton Innovation",
};

export default function ProductivityPage() {
    return (
        <main>
            <header className={styles.sectionHeader} style={{ paddingTop: '8rem', marginBottom: 0 }}>
                <span className={styles.sectionLabel}>Productivity Boosters</span>
                <h1 className={styles.sectionDescription}>
                    Empowering our team with intelligent tools.
                </h1>
            </header>

            <UseCaseSection
                title="Campaign Tracker"
                description="Monitoring competitor activity across Japan"
                masterImage="/productivity/market-intelligence-feed.png"
                link="https://competitor-tracker-gemini.vercel.app/"
                details={[
                    {
                        title: "Strategy AI chatbot",
                        description: "Real-time AI analysis of market trends and strategies.",
                        image: "/productivity/strategy-ai.png"
                    },
                    {
                        title: "History logs",
                        description: "Comprehensive activity logs for tracking all competitor moves.",
                        image: "/productivity/history-logs.png"
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
