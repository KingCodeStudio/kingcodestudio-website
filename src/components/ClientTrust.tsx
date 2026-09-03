import Link from "next/link";
import styles from "./ClientTrust.module.css";

const industries = [
  "Technology",
  "Logistics",
  "Finance",
  "Education",
  "Healthcare",
  "Professional Services",
];

export default function ClientTrust() {
  return (
    <section className={styles.trust}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>
            CLIENTS & PARTNERS
          </p>

          <div className={styles.headerContent}>
            <h2>
              Built for ambitious
              <span> teams.</span>
            </h2>

            <p>
              We work with businesses and teams that see technology
              as an opportunity to build better products, improve
              operations and move forward.
            </p>
          </div>
        </div>

        <div className={styles.industrySection}>
          <p className={styles.label}>
            INDUSTRIES WE WORK WITH
          </p>

          <div className={styles.industryGrid}>
            {industries.map((industry) => (
              <div
                className={styles.industry}
                key={industry}
              >
                <span className={styles.mark}>
                  —
                </span>

                <span>
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.future}>
          <div>
            <p className={styles.futureLabel}>
              GROWING TOGETHER
            </p>

            <p className={styles.futureText}>
              As KCS grows, this space will feature the
              businesses, teams and people we are proud
              to build with.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.link}
          >
            <span>
              Work with KCS
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}