import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from '../servicii/servicii.module.css';

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>
            Despre <span className={styles.highlight}>Palfi</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Cine sunt și de ce poți avea încredere în mine
          </p>
        </div>
      </div>

      {/* About Content */}
      <Section background="gray">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p className={styles.cardText} style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Sunt un programator full-stack cu ~5 ani experiență în front-end și back-end.
            Am lucrat la proiecte mici și mari, dar cel mai mult îmi place să ajut afaceri
            mici să intre online fără stres.
          </p>
          <p className={styles.cardText} style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Nu sunt o corporație, nu am &quot;departamente&quot;. Sunt eu, omul tău de pe web. Vorbești
            direct cu mine, îți explic tot pe înțelesul tău și răspund eu la mesajele tale.
          </p>
          <p className={styles.cardText} style={{ fontSize: '1.25rem' }}>
            Cred că un site nu e doar &quot;să existe&quot;, ci să te ajute să-ți crești afacerea. De
            aceea te consiliez sincer și construiesc exact ce ai nevoie – nici mai mult, nici mai puțin.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section background="dark">
        <h2 className={styles.sectionTitle}>De ce Palfi?</h2>
        <div className={styles.paymentGrid}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))' }}>
                🎯
              </div>
              <h3 className={styles.cardTitle}>Focus pe rezultate</h3>
              <p className={styles.cardText}>
                Nu fac site-uri doar să arate frumos. Le fac să aducă clienți și să crească afacerea.
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))' }}>
                💬
              </div>
              <h3 className={styles.cardTitle}>Comunicare clară</h3>
              <p className={styles.cardText}>
                Fără jargon tehnic. Vorbim pe românește și îți explic tot în termeni simpli.
              </p>
            </div>
          </Card>

          <Card>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.3))' }}>
                🤝
              </div>
              <h3 className={styles.cardTitle}>Parteneriat pe termen lung</h3>
              <p className={styles.cardText}>
                Nu dispar după lansare. Rămân alături de tine cu abonament și suport continuu.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Hai să lucrăm împreună</h2>
        <p className={styles.ctaText}>
          Dacă cauți pe cineva de încredere pentru site-ul afacerii tale, hai să vorbim.
        </p>
        <Button href="/contact" variant="primary">
          Contactează-mă
        </Button>
      </div>
    </>
  );
}
