import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './servicii.module.css';

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
            Tarifuul nostru este simplu și transparent. Plătești pentru timpul efectiv lucrat,
            fără taxe ascunse sau surprize.
          </p>
        </div>
      </Section>

      {/* Abonamente Detaliate */}
      <Section background="dark">
        <h2 className={styles.sectionTitle}>Abonamente lunare de mentenanță</h2>
        <p className={styles.sectionSubtitle}>
          Alege planul care ți se potrivește și ai grijă de site-ul tău fără griji
        </p>

        <div className={styles.subscriptionGrid}>
          <Card>
            <div className={styles.subscriptionCard}>
              <h3 className={styles.subscriptionName}>Entry</h3>
              <div className={styles.subscriptionPrice}>1 oră inclusă / lună</div>
              <ul className={styles.featureList}>
                <li>✓ Modificări minore de conținut</li>
                <li>✓ Actualizări texte și poze</li>
                <li>✓ Suport email</li>
                <li>✓ Monitoring de performanță</li>
              </ul>
              <p className={styles.bestFor}>
                <strong>Perfect pentru:</strong> Afaceri mici care au nevoie ocazional de mici modificări
              </p>
              <Button href="/contact" variant="secondary">
                Alege Entry
              </Button>
            </div>
          </Card>

          <Card className={styles.popularCard}>
            <div className={styles.subscriptionCard}>

              <h3 className={styles.subscriptionName}>Mid</h3>
              <div className={styles.subscriptionPrice}>2 ore incluse / lună</div>
              <ul className={styles.featureList}>
                <li>✓ Tot de la Entry +</li>
                <li>✓ Actualizări regulate de conținut</li>
                <li>✓ Modificări prețuri și servicii</li>
                <li>✓ Suport prioritar</li>
                <li>✓ Rapoarte lunare</li>
              </ul>
              <p className={styles.bestFor}>
                <strong>Perfect pentru:</strong> Afaceri cu actualizări regulate (servicii, prețuri, promoții)
              </p>
              <Button href="/contact" variant="primary">
                Alege Mid
              </Button>
            </div>
          </Card>

          <Card>
            <div className={styles.subscriptionCard}>
              <h3 className={styles.subscriptionName}>Business</h3>
              <div className={styles.subscriptionPrice}>4 ore incluse / lună</div>
              <ul className={styles.featureList}>
                <li>✓ Tot de la Mid +</li>
                <li>✓ Landing page-uri simple</li>
                <li>✓ Secțiuni noi</li>
                <li>✓ Campanii sezoniere</li>
                <li>✓ Suport WhatsApp/Telefon</li>
                <li>✓ Consultanță strategică</li>
              </ul>
              <p className={styles.bestFor}>
                <strong>Perfect pentru:</strong> Afaceri active cu campanii dese și conținut dinamic
              </p>
              <Button href="/contact" variant="secondary">
                Alege Business
              </Button>
            </div>
          </Card>
        </div>

        <div className={styles.noteBox}>
          <p>
            <strong>Notă:</strong> Orele suplimentare peste cele incluse în abonament se facturează
            la tariful standard de 180 RON/oră.
          </p>
        </div>
      </Section>

      {/* Plata Inițială */}
      <Section background="gray">
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
      </Section>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Gata să începem?</h2>
        <p className={styles.ctaText}>
          Contactează-mă pentru o discuție gratuită de 20-30 minute
        </p>
        <Button href="/contact" variant="primary">
          Hai să vorbim
        </Button>
      </div>
    </>
  );
}
