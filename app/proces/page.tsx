import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from '../servicii/servicii.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Procesul de Lucru | Palfi - Cum construim site-ul tău',
    description: 'Proces transparent în 6 pași, de la discuția inițială până la lansare. Află cum lucrăm și la ce să te aștepți.',
};

export default function ProcesPage() {
    return (
        <>
            {/* Hero Section */}
            <div className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.pageTitle}>
                        Cum lucrăm <span className={styles.highlight}>împreună</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        De la primul apel până la site-ul live – totul transparent și fără stres
                    </p>
                </div>
            </div>

            {/* Process Steps */}
            <Section background="gray">
                <div className={styles.processSteps}>
                    {/* Step 1 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>01</div>
                        <div className={styles.processIcon}>💬</div>
                        <h3 className={styles.cardTitle}>Discuție inițială (gratuită)</h3>
                        <p className={styles.cardText}>
                            20-30 minute online sau telefonic. Vreau să înțeleg afacerea ta, clienții tăi și ce probleme vrei să rezolve site-ul.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Ce primești:</strong>
                            <p className={styles.cardText}>Un prim sfat sincer și recomandare dacă Palfi e alegerea potrivită pentru tine.</p>
                        </div>
                    </Card>

                    {/* Step 2 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>02</div>
                        <div className={styles.processIcon}>📋</div>
                        <h3 className={styles.cardTitle}>Ofertă & estimare clară</h3>
                        <p className={styles.cardText}>
                            Îți trimit estimarea de ore, plata inițială, recomandarea de abonament și lista paginilor propuse.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Transparență totală:</strong>
                            <p className={styles.cardText}>Știi exact ce plătești, pentru ce și când va fi gata. Fără surprize.</p>
                        </div>
                    </Card>

                    {/* Step 3 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>03</div>
                        <div className={styles.processIcon}>📸</div>
                        <h3 className={styles.cardTitle}>Strângem conținutul</h3>
                        <p className={styles.cardText}>
                            Îți trimit un document simplu cu secțiuni clare unde completezi texte, poze și logo. Te ajut cu exemple și sugestii.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Important:</strong>
                            <p className={styles.cardText}>Cu cât conținutul e mai complet de la început, cu atât mai repede mergem.</p>
                        </div>
                    </Card>

                    {/* Step 4 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>04</div>
                        <div className={styles.processIcon}>🛠️</div>
                        <h3 className={styles.cardTitle}>Dezvoltare site (max 2 săptămâni)</h3>
                        <p className={styles.cardText}>
                            Construiesc structura, implementez design-ul, adaug conținut și testez pe toate dispozitivele.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Te țin la curent:</strong>
                            <p className={styles.cardText}>La 4-5 zile îți trimit un link de preview să vezi progresul.</p>
                        </div>
                    </Card>

                    {/* Step 5 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>05</div>
                        <div className={styles.processIcon}>✏️</div>
                        <h3 className={styles.cardTitle}>Feedback & ajustări</h3>
                        <p className={styles.cardText}>
                            Îți arăt site-ul gata și tu îmi spui ce vrei modificat. Ajustările mici intră în estimarea inițială.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Obiectiv:</strong>
                            <p className={styles.cardText}>Site-ul să fie exact cum ți-l dorești, nu &quot;cam așa&quot;.</p>
                        </div>
                    </Card>

                    {/* Step 6 */}
                    <Card className={styles.processCard}>
                        <div className={styles.processNumber}>06</div>
                        <div className={styles.processIcon}>🚀</div>
                        <h3 className={styles.cardTitle}>Lansare & mentenanță</h3>
                        <p className={styles.cardText}>
                            Public site-ul pe domeniul tău și de aici intră în acțiune abonamentul lunar ales.
                        </p>
                        <div className={styles.processDetail}>
                            <strong style={{ color: '#00d9ff' }}>Comunicare:</strong>
                            <p className={styles.cardText}>Îmi scrii pe email/WhatsApp când ai nevoie de modificări. Răspund rapid cu estimare de timp.</p>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* CTA */}
            <div className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Sună simplu? Pentru că este.</h2>
                <p className={styles.ctaText}>
                    Nu trebuie să fii expert în tech ca să ai un site profesionist.
                    Hai să vorbim despre afacerea ta.
                </p>
                <Button href="/contact" variant="primary">
                    Programează o discuție gratuită
                </Button>
            </div>
        </>
    );
}
