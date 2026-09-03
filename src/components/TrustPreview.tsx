import Link from "next/link";
import styles from "./TrustPreview.module.css";

const capabilities = [
  "Custom software engineering",
  "Web & digital platforms",
  "Mobile applications",
  "AI & intelligent automation",
  "Cybersecurity-minded development",
  "Cloud & DevOps",
];

const industries = [
  "Technology",
  "Logistics",
  "Finance",
  "Education",
  "Healthcare",
  "Professional services",
];

export default function TrustPreview() {
  return (
    <section className={styles.trust}>
      <div className={styles.inner}>

        {/* =========================================
            INTRODUCTION
            ========================================= */}

        <div className={styles.introduction}>

          <div>
            <p className={styles.eyebrow}>
              TRUSTED TECHNOLOGY PARTNERS
            </p>

            <h2>
              Built to work
              <span> with you.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            Whether we are building a new product or improving an existing
            system, we work closely with our clients to understand the
            challenge, define the right solution and deliver technology that
            creates lasting value.
          </p>

        </div>


        {/* =========================================
            TRUST STATEMENT
            ========================================= */}

        <div className={styles.statement}>

          <p className={styles.statementLabel}>
            HOW WE WORK
          </p>

          <h3>
            Strong partnerships create
            <span> stronger technology.</span>
          </h3>

        </div>


        {/* =========================================
            CAPABILITIES
            ========================================= */}

        <div className={styles.columns}>

          <div className={styles.column}>

            <p className={styles.columnLabel}>
              CAPABILITIES
            </p>

            <div className={styles.list}>

              {capabilities.map((capability) => (
                <div
                  className={styles.listItem}
                  key={capability}
                >
                  <span className={styles.plus}>
                    +
                  </span>

                  <span>
                    {capability}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* =========================================
              INDUSTRIES
              ========================================= */}

          <div className={styles.column}>

            <p className={styles.columnLabel}>
              INDUSTRIES
            </p>

            <div className={styles.list}>

              {industries.map((industry) => (
                <div
                  className={styles.listItem}
                  key={industry}
                >
                  <span className={styles.plus}>
                    +
                  </span>

                  <span>
                    {industry}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>


        {/* =========================================
            BOTTOM CTA
            ========================================= */}

        <div className={styles.bottom}>

          <div>
            <p className={styles.bottomLabel}>
              HAVE A CHALLENGE?
            </p>

            <p className={styles.bottomText}>
              Tell us what you are trying to build, improve or solve.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            <span>
              Start a conversation
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