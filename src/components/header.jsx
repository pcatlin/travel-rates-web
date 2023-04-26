import styles from './header.module.css';
import logoUrl from '../assets/logo-transparent.png';
import "@fontsource/catamaran/600.css";


export default function Header({h1}) {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logoUrl} alt='Travel Rates' className={styles.logo} />
                {h1 ? <h1>Travel Rates Cheatsheet</h1> : <h2>Travel Rates Cheetsheet</h2>}
            </div>
            <nav>
                <a className={styles.navLink} href='/'>Home</a>
                <a className={styles.navLink} href='https://app.travel-rates.com'>Convert</a>
                <a className={styles.navLink} href='/privacy'>Privacy</a>
            </nav>
        </header>
    );
}