'use client'
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';
// import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navContainer} ${isActive ? styles.active : ''}`}>
                <Link href="/" className={styles.navLogo}>MyApp</Link>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/user">user</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blogclient">Blog in client</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blogsrever">Blog in srever</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/signup">signup</Link>
                    </li>
                </ul>
                <div className={styles.navToggle} onClick={toggleNavbar}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
