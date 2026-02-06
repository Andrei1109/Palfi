export const theme = {
    colors: {
        primary: '#2563EB',
        secondary: '#F59E0B',
        textDark: '#1F2937',
        textMedium: '#6B7280',
        background: '#F9FAFB',
        white: '#FFFFFF',
    },
    spacing: {
        xs: '8px',
        sm: '16px',
        md: '32px',
        lg: '48px',
        xl: '80px',
    },
    borderRadius: {
        sm: '8px',
        md: '12px',
    },
    container: {
        maxWidth: '1200px',
    },
    breakpoints: {
        mobile: '640px',
        tablet: '768px',
        desktop: '1024px',
    },
};

export type Theme = typeof theme;
