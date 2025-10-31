import styles from './header.module.css';
import logoUrl from '../assets/logo-transparent.png';
import "@fontsource/catamaran/600.css";


export default function Header({h1}) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt='Travel Rates' className={styles.logo} />
                {h1 ? <h1 className={styles.mainTitle}>Travel Rates Cheat Sheet</h1> : <h2 className={styles.mainTitle}>Travel Rates Cheat Sheet</h2>}
            </div>
            <nav>
                <a className={styles.navLink} href='/'>Home</a>
                <a className={styles.navLink} href='/other-handy-apps'>Other Handy Apps</a>
                <a className={styles.navLink} href='/privacy'>Privacy</a>
            </nav>
        </header>
    );
}