import Section from '@/components/ui/Section';
import styles from '../servicii/servicii.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Termeni și Condiții | Palfi',
    description: 'Termenii și condițiile de utilizare a site-ului și serviciilor Palfi.',
};

export default function TermeniSiConditiiPage() {
    return (
        <>
            <div className={styles.pageHero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.pageTitle}>
                        Termeni și <span className={styles.highlight}>Condiții</span>
                    </h1>
                </div>
            </div>

            <Section background="dark">
                <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ccc', lineHeight: '1.6' }}>
                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>1. Introducere</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Prezenții Termeni și Condiții reglementează utilizarea site-ului palfi.ro (numit în continuare „Site-ul”) administrat de ANDREI PASUNE SOFTWARE AND SUPPORT SRL. Prin accesarea și utilizarea acestui Site, sunteți de acord să respectați regulile descrise mai jos.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>2. Caracterul Informativ al Site-ului</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Acest Site are un scop strict prezentativ și publicitar. Informațiile afișate nu constituie o ofertă fermă de contractare în sens juridic, ci o invitație la negociere. Detaliile specifice fiecărui serviciu (Web Design, Dezvoltare, Mentenanță) vor fi stabilite exclusiv prin contracte de prestări servicii semnate separat.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>3. Relația Comercială</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        <strong>Comenzi:</strong> Site-ul nu permite plasarea de comenzi directe sau efectuarea de plăți online.
                        <br /><br />
                        <strong>Contractare:</strong> Colaborarea se confirmă doar prin semnarea unui contract scris sau acceptarea unei oferte comerciale oficiale trimise prin email.
                        <br /><br />
                        <strong>Plăți:</strong> Toate plățile se efectuează prin transfer bancar, în baza facturilor fiscale emise conform contractului, fără a se utiliza procesatori de plăți pe acest Site.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>4. Proprietate Intelectuală</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Toate materialele (texte, logo-ul PALFI, elemente grafice) de pe acest Site sunt proprietatea prestatorului.
                        <br /><br />
                        <strong>Drepturi de Autor:</strong> Drepturile de utilizare asupra proiectelor livrate clienților sunt transferate acestora doar după achitarea integrală a serviciilor, conform clauzelor contractuale.
                        <br /><br />
                        PALFI își rezervă dreptul de a include proiectele realizate în portofoliul propriu, cu excepția cazului în care s-a agreat altfel prin contract.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>5. Limitarea Răspunderii</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Site-ul este oferit „ca atare”. Prestatorul nu garantează că Site-ul va funcționa neîntrerupt sau fără erori. Nu ne asumăm răspunderea pentru eventuale pierderi rezultate din utilizarea informațiilor de pe Site sau din imposibilitatea accesării acestuia.
                    </p>

                    <h2 style={{ color: '#fff', marginBottom: '1rem' }}>6. Litigii</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Orice dispută va fi soluționată pe cale amiabilă. Dacă acest lucru nu este posibil, competența revine instanțelor judecătorești din România.
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginTop: '3rem', fontSize: '0.9rem', color: '#ccc' }}>
                        <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.2rem' }}>7. Date de Identificare Firmă</h3>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Denumire:</strong> ANDREI PASUNE SOFTWARE AND SUPPORT SRL</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>CUI:</strong> 49285288</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Nr. Reg. Com.:</strong> J2023008437238 (EUID: ROONRC.J2023008437238)</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Sediul Social:</strong> Str. Diamantului 111 A, Bl. 2, Sc. 1, Et. 2, Ap. 11, Bragadiru, Jud. Ilfov, Cod 077025</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Telefon:</strong> 0766 289 639</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
