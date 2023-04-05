import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h2>Travel Rates Cheatsheet</h2>
            <nav>
                <a className={styles.navLink} href='/'>Home</a>
                <a className={styles.navLink} href='/privacy'>Privacy</a>
                <a className={styles.navLink} href='/terms'>Terms</a>
            </nav>
        </header>
    );
}