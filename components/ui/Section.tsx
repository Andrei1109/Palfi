import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  background?: 'dark' | 'gray';
  className?: string;
}

export default function Section({ children, background = 'dark', className = '' }: SectionProps) {
  return (
    <section className={`${styles.section} ${background === 'gray' ? styles.gray : ''} ${className}`}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
}
