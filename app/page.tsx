import Hero from '@/components/home/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Creăm site-uri de prezentare și aplicații web performante pentru afaceri mici. Soluții complete cu design modern, SEO inclus și abonamente de dezvoltare.',
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Pentru cine este Palfi */}
      <Section background="gray">
        <h2 className={styles.ctaTitle} style={{ marginBottom: '1rem' }}>
          Site-uri făcute special pentru afaceri mici
        </h2>
        <p className={styles.ctaText} style={{ marginBottom: '4rem' }}>
          Dacă ai o cafenea, un salon, o frizerie, o mică clinică, ești PFA, antrenor personal
          sau ai o mică firmă de servicii – Palfi e pentru tine.
        </p>

        <div className={styles.grid}>
          <Card>
            <div className={styles.cardContent}>
              <div className={styles.icon}>✓</div>
              <h3 className={styles.cardTitle}>Fără bătăi de cap tehnice</h3>
              <p className={styles.cardText}>
                Nu trebuie să înțelegi hosting, domenii sau cod. Eu mă ocup de tot.
                Tu îmi spui ce ai nevoie, eu fac să funcționeze.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardContent}>
              <div className={styles.icon}>💬</div>
              <h3 className={styles.cardTitle}>Comunicare pe înțelesul tuturor</h3>
              <p className={styles.cardText}>
                Vorbim pe românește, fără jargon tehnic. Îți explic clar ce se întâmplă,
                ce înseamnă fiecare pas și de ce e important.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardContent}>
              <div className={styles.icon}>🤝</div>
              <h3 className={styles.cardTitle}>Ai un om al tău pe web</h3>
              <p className={styles.cardText}>
                Nu dispar după ce fac site-ul. Rămân alături de tine cu un abonament lunar
                care îți asigură că ai cui să te adresezi când ai nevoie de modificări.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Procesul (Rezumat) */}
      <Section background="dark">
        <h2 className={styles.ctaTitle} style={{ marginBottom: '1rem' }}>
          Simplu, clar, fără stres
        </h2>
        <p className={styles.ctaText} style={{ marginBottom: '4rem' }}>
          Procesul nostru este transparent și simplu. Știi exact ce urmează în fiecare moment.
        </p>

        <div className={styles.processGrid}>
          <Card>
            <div className={styles.cardContent}>
              <div className={styles.processNumber}>01</div>
              <h3 className={styles.cardTitle}>Discutăm gratuit</h3>
              <p className={styles.cardText}>
                20-30 minute, online sau telefonic. Vreau să înțeleg afacerea ta și ce aștepți de la site.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardContent}>
              <div className={styles.processNumber}>02</div>
              <h3 className={styles.cardTitle}>Primești oferta clară</h3>
              <p className={styles.cardText}>
                Îți trimit estimarea de ore, plata inițială și recomandarea de abonament.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardContent}>
              <div className={styles.processNumber}>03</div>
              <h3 className={styles.cardTitle}>Construiesc site-ul</h3>
              <p className={styles.cardText}>
                Maximum 2 săptămâni. Te țin la curent cu progresul și îți arăt cum arată pe parcurs.
              </p>
            </div>
          </Card>

          <Card>
            <div className={styles.cardContent}>
              <div className={styles.processNumber}>04</div>
              <h3 className={styles.cardTitle}>Lansare & mentenanță</h3>
              <p className={styles.cardText}>
                Site-ul se publică pe domeniul tău. De aici intră în acțiune abonamentul ales.
              </p>
            </div>
          </Card>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button href="/proces" variant="secondary">
            Vezi procesul complet
          </Button>
        </div>
      </Section>

      {/* Abonamente */}
      <Section background="gray">
        <h2 className={styles.ctaTitle} style={{ marginBottom: '1rem' }}>
          Mentenanță pentru proiectele Palfi
        </h2>
        <p className={styles.ctaText} style={{ marginBottom: '4rem' }}>
          După ce site-ul este gata, ai opțiunea să alegi un abonament de mentenanță dedicat.
        </p>

        <div className={styles.subscriptionGrid}>
          <Card>
            <div className={styles.subscriptionCard}>
              <div className={styles.subscriptionBadge}>Entry</div>
              <div className={styles.subscriptionHours}>1 oră / lună</div>
              <p className={styles.cardText}>
                Pentru Landing Page-uri. Modificări text, imagini și suport email.
              </p>
              <Button href="/servicii" variant="secondary">
                Detalii
              </Button>
            </div>
          </Card>

          <Card className={styles.popularCard}>
            <div className={styles.subscriptionCard}>
              <div className={styles.subscriptionBadge}>Business</div>
              <div className={styles.subscriptionHours}>3 ore / lună</div>
              <p className={styles.cardText}>
                Pentru site-uri medii. Dezvoltare funcționalități și optimizare.
              </p>
              <Button href="/servicii" variant="primary">
                Detalii
              </Button>
            </div>
          </Card>

          <Card>
            <div className={styles.subscriptionCard}>
              <div className={styles.subscriptionBadge}>Enterprise</div>
              <div className={styles.subscriptionHours}>5 ore / lună</div>
              <p className={styles.cardText}>
                Pentru aplicații complexe. Monitorizare activă și consultanță tehnică.
              </p>
              <Button href="/servicii" variant="secondary">
                Detalii
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Despre mine (Mini) */}
      <Section background="dark">
        <div className={styles.aboutSection}>
          <h2 className={styles.ctaTitle} style={{ marginBottom: '2rem' }}>
            Cine sunt și de ce poți avea încredere în mine
          </h2>

          <div className={styles.aboutContent}>
            <p>
              Sunt un programator full-stack cu ~5 ani experiență în front-end și back-end.
              Am lucrat la proiecte mici și mari, dar cel mai mult îmi place să ajut afaceri
              mici să intre online fără stres.
            </p>
            <p>
              Nu sunt o corporație, nu am &quot;departamente&quot;. Sunt eu, omul tău de pe web. Vorbești
              direct cu mine, îți explic tot pe înțelesul tău și răspund eu la mesajele tale.
            </p>
            <p>
              Cred că un site nu e doar &quot;să existe&quot;, ci să te ajute să-ți crești afacerea. De
              aceea te consiliez sincer și construiesc exact ce ai nevoie – nici mai mult, nici mai puțin.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button href="/despre" variant="secondary">
              Află mai multe despre mine
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Hai să vedem ce site ți se potrivește
          </h2>
          <p className={styles.ctaText}>
            Scrie-mi câteva rânduri despre afacerea ta: ce faci, pentru cine, ce ai vrea să
            afle vizitatorii de pe site. Îți răspund rapid cu o estimare realistă și câteva sugestii.
          </p>
          <Button href="/contact" variant="primary">
            Trimite un mesaj
          </Button>
        </div>
      </div>
    </>
  );
}
