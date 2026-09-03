import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>KING CODE STUDIO</p>

          <h1>
            We build digital systems{" "}
            <span>that matter.</span>
          </h1>

          <p className={styles.description}>
            King Code Studio is a technology company delivering custom
            software, digital products and intelligent solutions for
            ambitious businesses worldwide.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryButton}>
              <span>Start a project</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link href="/work" className={styles.secondaryButton}>
              <span>Explore our work</span>
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.location}>
          <span>BASED IN</span>
          <strong>INDIA · WORKING WORLDWIDE</strong>
        </div>
      </div>
    </section>
  );
}