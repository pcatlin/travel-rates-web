import styles from './header.module.css';
import logoUrl from '../assets/logo-transparent.png';
import "@fontsource/catamaran/600.css";


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt='Travel Rates' className={styles.logo} />
                <h2>Travel Rates Cheatsheet</h2>
            </div>
            <nav>
                <a className={styles.navLink} href='/'>Home</a>
                <a className={styles.navLink} href='/privacy'>Privacy</a>
                <a className={styles.navLink} href='/terms'>Terms</a>
            </nav>
        </header>
    );
}