import Header from "../components/header.jsx";
import StoreBadge from "../components/storeBadge.jsx"
import styles from './home.module.css';

export default function Home() {
    return (
        <div className="app">
            <Header/>
            <main className='page home'>
                <p>Get the latest exchange rates for your next trip.</p>
                <p>FREE!</p>

                <div className={styles.storeBadges}>
                    <StoreBadge size='small' store='apple'/>
                    <StoreBadge size='small' store='google'/>
                </div>
            </main>
        </div>
    );
}
