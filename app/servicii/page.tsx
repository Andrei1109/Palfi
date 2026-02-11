import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './servicii.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicii & Abonamente | Palfi',
  description: 'Descoperă serviciile noastre de web design și abonamentele de dezvoltare. Prețuri transparente pentru site-uri de prezentare și aplicații web complexe.',
};

export default function ServiciiPage() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.pageHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>
            Servicii & <span className={styles.highlight}>Abonamente</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Totul despre cum lucrăm, cât costă și ce primești
          </p>
        </div>
      </div>

      {/* Tarif Orar */}
      <Section background="gray">
        <h2 className={styles.sectionTitle}>Tariful orar</h2>
        <div className={styles.pricingBox}>
          <div className={styles.priceAmount}>180 RON / oră</div>
          <p className={styles.priceText}>
            Tariful nostru este simplu și transparent. Plătești pentru timpul efectiv lucrat,
            fără taxe ascunse sau surprize.
          </p>
        </div>
      </Section>

      {/* Abonamente de Mentenanță */}
      <Section background="dark">
        <h2 className={styles.sectionTitle}>Abonamente de Mentenanță</h2>
        <p className={styles.sectionSubtitle}>
          Asigură-te că site-ul tău funcționează perfect, cu ore de dezvoltare incluse lunar.
        </p>

        <div className={styles.subscriptionGrid}>
          {/* Card 1: Entry */}
          <Card>
            <div className={styles.subscriptionCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.subscriptionName}>Entry</h3>
                <span className={styles.badge}>Landing Page</span>
              </div>
              <div className={styles.subscriptionPrice}>200 RON / lună</div>
              <div className={styles.includedHours}>1 oră inclusă</div>
              <ul className={styles.featureList}>
                <li>✓ Pentru site-uri One-Page</li>
                <li>✓ Modificări text și imagini</li>
                <li>✓ Actualizări de securitate</li>
              </ul>
              <Button href="/contact" variant="secondary">
                Alege Entry
              </Button>
            </div>
          </Card>

          {/* Card 2: Business */}
          <Card className={styles.popularCard}>
            <div className={styles.subscriptionCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.subscriptionName}>Business</h3>
                <span className={styles.badge}>Site-uri Medii (5-10 pagini)</span>
              </div>
              <div className={styles.subscriptionPrice}>500 RON / lună</div>
              <div className={styles.includedHours}>3 ore incluse</div>
              <ul className={styles.featureList}>
                <li>✓ Dezvoltare funcționalități noi</li>
                <li>✓ Adăugare secțiuni noi</li>
                <li>✓ Optimizare viteză</li>
                <li>✓ Suport prioritar</li>
              </ul>
              <Button href="/contact" variant="primary">
                Alege Business
              </Button>
            </div>
          </Card>

          {/* Card 3: Enterprise */}
          <Card>
            <div className={styles.subscriptionCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.subscriptionName}>Enterprise</h3>
                <span className={styles.badge}>Complex / &gt;10 pagini</span>
              </div>
              <div className={styles.subscriptionPrice}>800 RON / lună</div>
              <div className={styles.includedHours}>5 ore incluse</div>
              <ul className={styles.featureList}>
                <li>✓ Arhitectură complexă</li>
                <li>✓ Integrări API & Baze de date</li>
                <li>✓ Consultanță tehnică dedicată</li>
                <li>✓ Monitorizare activă</li>
              </ul>
              <Button href="/contact" variant="secondary">
                Cere ofertă
              </Button>
            </div>
          </Card>
        </div >

        <div className={styles.noteBox}>
          <p style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#00d9ff' }}>* Notă importantă:</strong> Oferim servicii de mentenanță <strong>exclusiv</strong> pentru site-urile și aplicațiile dezvoltate de noi.
          </p>
          <p>
            Orele suplimentare peste cele incluse în abonament se facturează la tariful standard de 180 RON/oră.
          </p>
        </div>
      </Section >

      {/* Plata Inițială */}
      < Section background="gray" >
        <h2 className={styles.sectionTitle}>Cum funcționează plata inițială</h2>
        <div className={styles.paymentGrid}>
          <Card>
            <h3 className={styles.cardTitle}>Estimare</h3>
            <p className={styles.cardText}>
              După discuția gratuită, îți trimit o estimare clară: câte ore estimez pentru site-ul tău
              și ce înseamnă asta în RON.
            </p>
          </Card>
          <Card>
            <h3 className={styles.cardTitle}>Plata inițială</h3>
            <p className={styles.cardText}>
              Plătești 50% din estimare la început. Restul de 50% se plătește la finalizare,
              înainte de lansare.
            </p>
          </Card>
          <Card>
            <h3 className={styles.cardTitle}>Transparență totală</h3>
            <p className={styles.cardText}>
              Dacă numărul real de ore diferă de estimare, te anunț imediat și ajustăm. Fără surprize.
            </p>
          </Card>
        </div>
      </Section >

      {/* CTA */}
      < div className={styles.ctaSection} >
        <h2 className={styles.ctaTitle}>Gata să începem?</h2>
        <p className={styles.ctaText}>
          Contactează-mă pentru o discuție gratuită de 20-30 minute
        </p>
        <Button href="/contact" variant="primary">
          Hai să vorbim
        </Button>
      </div >
    </>
  );
}
