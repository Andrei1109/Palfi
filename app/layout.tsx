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
    metadataBase: new URL('https://palfi.ro'),
    title: {
        default: 'Palfi – Web Design & Dezvoltare pentru Afaceri Mici',
        template: '%s | Palfi'
    },
    description: 'Realizăm site-uri de prezentare și aplicații web pentru afaceri mici. Fără jargon tehnic, cu abonamente de dezvoltare incluse. Tu îți vezi de business, noi avem grijă de site.',
    keywords: ['site web', 'web design', 'creare site', 'dezvoltare web', 'afaceri mici', 'site prezentare', 'magazin online', 'Romania', 'abonament mentenanta'],
    authors: [{ name: 'Andrei Palfi' }],
    creator: 'Andrei Palfi',
    openGraph: {
        type: 'website',
        locale: 'ro_RO',
        url: 'https://palfi.ro',
        title: 'Palfi – Web Design & Dezvoltare pentru Afaceri Mici',
        description: 'Site-uri moderne și performante pentru afacerea ta. Soluții complete de web design și dezvoltare cu suport continuu.',
        siteName: 'Palfi Web Design',
        images: [
            {
                url: '/og-image.jpg', // Make sure to add an og-image.jpg to public folder or use a remote url
                width: 1200,
                height: 630,
                alt: 'Palfi Web Design Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Palfi – Web Design & Dezvoltare',
        description: 'Site-uri moderne și performante pentru afacerea ta.',
        images: ['/og-image.jpg'], // Same as OG image
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
