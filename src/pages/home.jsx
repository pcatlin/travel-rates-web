import Header from "../components/header.jsx";
import StoreBadge from "../components/storeBadge.jsx"
import styles from './home.module.css';
import AdSense from "../components/adSense.jsx";

export default function Home() {
    return (
        <div className="app">
            <Header h1={true}/>
            <main className='page home'>
                <p>Get the latest exchange rates for your next trip.</p>
                <p>FREE!</p>

                <AdSense />

                <div className={styles.storeBadges}>
                    <StoreBadge size='small' store='apple'/>
                    <StoreBadge size='small' store='google'/>
                </div>
                <p className={styles.legal}>App Store is a trademark of Apple Inc.</p>
                <p className={styles.legal}>Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </main>
        </div>
    );
}
