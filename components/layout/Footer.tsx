import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h3>Palfi</h3>
          <p>Atelierul de site-uri pentru afaceri mici.</p>
          <p style={{ marginTop: '1rem' }}>Tu îți vezi de business, noi avem grijă de site.</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Navigare</h3>
          <div className={styles.navLinks}>
            <Link href="/">Acasă</Link>
            <Link href="/servicii">Servicii & Abonamente</Link>
            <Link href="/proces">Procesul Nostru</Link>
            <Link href="/portofoliu">Portofoliu</Link>
            <Link href="/despre">Despre</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>Telefon: <a href="tel:0766289639" style={{ color: 'inherit', textDecoration: 'none' }}>0766 289 639</a></p>
          <p>Program: Luni - Vineri, 9:00 - 18:00</p>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Palfi. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
