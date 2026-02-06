import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Palfi<br />
          mica ta <span className={styles.highlight}>fabricuță de site-uri</span>
        </h1>
        <p className={styles.subtitle}>
          Facem site-uri de prezentare pentru afaceri mici care nu vor bătăi de cap cu partea tehnică.
          Tu îți vezi de business, noi avem grijă de tot ce înseamnă site.
        </p>
        <div className={styles.buttons}>
          <Button href="/contact" variant="primary">
            Cere o ofertă
          </Button>

        </div>
      </div>
      <div className={styles.scrollIndicator}>
        Scroll ↓
      </div>
    </div>
  );
}
