import Header from "../components/header.jsx";
import StoreBadge from "../components/storeBadge.jsx"
import styles from './home.module.css';
import AdSense from "../components/adSense.jsx";

export default function Home() {
    return (
        <div className="app">
            <Header h1={true}/>
            <main className='page home'>
                <h2>Exchange rates</h2>
                <p>Travel Rates Cheatsheet simplifies currency conversion for travellers. With daily exchange rates,
                    users can easily convert their currency to the currency of their destination, ensuring they can
                    make informed decisions when managing their finances while on the go.</p>

                <h2>Quick</h2>
                <p>This app offers a user-friendly interface that allows travellers to quickly convert multiple
                    currencies, simply by entering the desired amount. Users can also view exchange rates for various
                    currencies, making it easier to plan for their expenses. No signal, no problem. The app will
                    remember the last rates downloaded for when you are not getting data in your travels.</p>

                <h2>Essential</h2>
                <p>Travel Rates Cheatsheet app is an essential tool for any traveller looking to
                    manage their finances while on the go. Its easy-to-use interface, real-time and cached exchange
                    rates, easy lookup cheatsheet table make it a must-have app for any traveller.</p>

                <AdSense/>

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
