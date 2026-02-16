import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ href, variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <Link href={href} className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </Link>
  );
}
