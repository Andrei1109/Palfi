import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from '../servicii/servicii.module.css';

export default function PortofoliuPage() {
  return (
    <>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>
            Proiecte <span className={styles.highlight}>realizate</span>
          </h1>
          <p className={styles.pageSubtitle}>
            În curând vei vedea aici proiectele noastre
          </p>
        </div>
      </div>

      {/* Projects */}
      <Section background="gray">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>

            {/* Project 1 */}
            <Card className={styles.projectCard} style={{ overflow: 'hidden', border: 'none', background: '#1e1e1e', padding: 0 }}>
              <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                <Image
                  src="/images/projects/cip-barber.png"
                  alt="Cip Barber Shop Preview"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className={styles.cardTitle} style={{ marginBottom: '0.5rem', color: '#fff' }}>Cip Barber Shop</h3>
                <p className={styles.cardText} style={{ marginBottom: '1.5rem', opacity: 0.8, color: '#ccc' }}>
                  Un site web premium pentru un barbershop modern, cu accente aurii și design dark mode.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Button href="https://cip-barber-shop.vercel.app/" variant="secondary">
                    Vezi site
                  </Button>
                </div>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className={styles.projectCard} style={{ overflow: 'hidden', border: 'none', background: '#1e1e1e', padding: 0 }}>
              <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                <Image
                  src="/images/projects/noa-clinceni.png"
                  alt="Noa Clinceni Preview"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 className={styles.cardTitle} style={{ marginBottom: '0.5rem', color: '#fff' }}>Noa Clinceni</h3>
                <p className={styles.cardText} style={{ marginBottom: '1.5rem', opacity: 0.8, color: '#ccc' }}>
                  Prezentare imobiliară elegantă pentru un ansamblu rezidențial, punând accent pe luminozitate și spațiu.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Button href="https://noa-clinceni.vercel.app/" variant="secondary">
                    Vezi site
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Următorul proiect poate fi al tău</h2>
        <p className={styles.ctaText}>
          Fiecare proiect începe cu o discuție. Hai să vorbim despre afacerea ta.
        </p>
        <Button href="/contact" variant="primary">
          Hai să discutăm
        </Button>
      </div>
    </>
  );
}
