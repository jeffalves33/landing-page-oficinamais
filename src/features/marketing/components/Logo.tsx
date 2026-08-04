import Image from "next/image";
import Link from "next/link";
import styles from "../styles/marketing.module.css";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={styles.logo} href="/" aria-label="Oficina Mais — página inicial">
      <Image className={styles.logoImage} src="/marketing/images/brand-mark.png" alt="" width={48} height={48} priority />
      <span className={inverse ? styles.logoTextInverse : styles.logoText}>Oficina <strong>Mais</strong></span>
    </Link>
  );
}