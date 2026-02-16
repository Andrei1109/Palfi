import Section from '@/components/ui/Section';
import styles from '../servicii/servicii.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politica de Confidențialitate | Palfi',
    description: 'Informatii conform GDPR despre prelucrarea datelor cu caracter personal.',
};

export default function PoliticaConfidentialitatePage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.pageTitle}>
                        Politica de <span className={styles.highlight}>Confidențialitate</span>
                    </h1>
                </div>
            </div>

            <Section background="dark">
                <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ccc', lineHeight: '1.6' }}>
                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>1. Zero Colectare Date</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Site-ul PALFI este o platformă strict informativă. Nu colectăm, nu solicităm și nu stocăm date cu caracter personal (nume, email, telefon) prin intermediul acestui site. Nu există formulare de contact sau module de creare cont.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>2. Politica &quot;Fără Cookie-uri&quot;</h2>
                    <p style={{ marginBottom: '0.5rem' }}>
                        Spre deosebire de majoritatea site-urilor, <strong>nu utilizăm cookie-uri</strong>.
                    </p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                        <li>Nu folosim cookie-uri de urmărire (tracking).</li>
                        <li>Nu folosim cookie-uri de marketing sau analiză a traficului (precum Google Analytics).</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Navigarea pe acest site este complet anonimă.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>3. Date Tehnice (Server Logs)</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Singurele informații care se generează sunt log-urile tehnice ale serverului de găzduire (ex: adresa IP anonimizată, tipul browserului), care sunt necesare exclusiv pentru securitatea infrastructurii și prevenirea atacurilor cibernetice. Aceste date nu sunt folosite pentru a identifica persoana vizitatorului.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>4. Contact direct</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Singura metodă prin care procesăm date personale este prin comunicarea directă inițiată de dumneavoastră exclusiv prin telefon (afișat pe site). În acest caz, datele vor fi folosite strict pentru a vă răspunde solicitării comerciale.
                    </p>
                </div>
            </Section>
        </>
    );
}
