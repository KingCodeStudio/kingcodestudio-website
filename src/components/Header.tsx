import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="King Code Studio home"
        >
          <Image
            src="/brand/Logo_Round.png"
            alt="King Code Studio"
            width={48}
            height={48}
            priority
          />

          <span>KING CODE STUDIO</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
        </nav>

        <Link href="/contact" className={styles.cta}>
          <span>Start a project</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}