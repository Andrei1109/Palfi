'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoSpan}>Palfi</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Acasă</Link></li>
          <li><Link href="/servicii" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Servicii</Link></li>
          <li><Link href="/proces" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Proces</Link></li>
          <li><Link href="/portofoliu" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Portofoliu</Link></li>
          <li><Link href="/despre" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Despre</Link></li>
          <li><Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
