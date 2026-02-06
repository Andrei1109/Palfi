'use client';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <StyledThemeProvider theme={theme}>
            <Header />
            <main>{children}</main>
            <Footer />
        </StyledThemeProvider>
    );
}
