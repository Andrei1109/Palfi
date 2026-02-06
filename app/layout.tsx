import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import './globals.css';

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Palfi – Mica ta fabricuță de site-uri',
    description: 'Facem site-uri de prezentare pentru afaceri mici care nu vor bătăi de cap cu partea tehnică. Tu îți vezi de business, noi avem grijă de tot ce înseamnă site.',
    keywords: 'site web, dezvoltare web, afaceri mici, site prezentare, Romania',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro">
            <body className={inter.variable}>
                <Header />
                <main>{children}</main>
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
