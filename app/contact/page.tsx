

import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import styles from '../servicii/servicii.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Palfi - Hai să vorbim despre proiectul tău',
  description: 'Contactează-ne pentru o discuție gratuită despre site-ul tău. Suntem disponibili telefonic și pe WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>
            Hai să <span className={styles.highlight}>vorbim</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Sună-ne sau scrie-ne pe WhatsApp pentru mai multe detalii
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <Section background="dark">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Button href="tel:0766289639" variant="primary">
              Sună-ne acum
            </Button>
            <Button href="https://wa.me/40766289639" variant="secondary">
              Scrie-ne pe WhatsApp
            </Button>
          </div>

          <p className={styles.cardText} style={{ fontSize: '1.125rem' }}>
            <strong style={{ color: '#00d9ff' }}>Program:</strong> Luni - Vineri, 9:00 - 18:00
          </p>
        </div>
      </Section>
    </>
  );
}
