import Link from "next/link";
import styles from "./AboutPreview.module.css";

const principles = [
  {
    title: "Engineering first",
    description:
      "We approach technology through strong engineering fundamentals, thoughtful architecture and maintainable code.",
  },
  {
    title: "Business aware",
    description:
      "Technology should support a business objective. We build around the problem, the people and the outcome.",
  },
  {
    title: "Built to evolve",
    description:
      "Our systems are designed with the future in mind, allowing products and businesses to grow without unnecessary complexity.",
  },
  {
    title: "Security minded",
    description:
      "Security, reliability and responsible engineering are considered throughout the development process.",
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>

        {/* Introduction */}

        <div className={styles.introduction}>
          <div>
            <p className={styles.eyebrow}>ABOUT KING CODE STUDIO</p>

            <h2>
              Technology with
              <span> purpose.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            King Code Studio is an independent technology company focused on
            building software, digital products and intelligent systems for
            businesses and people around the world.
          </p>
        </div>

        {/* Main statement */}

        <div className={styles.statement}>
          <h3>
            We believe great technology should be
            <span> useful, reliable and built to last.</span>
          </h3>
        </div>

        {/* Principles */}

        <div className={styles.principles}>
          {principles.map((principle) => (
            <article
              className={styles.principle}
              key={principle.title}
            >
              <div className={styles.icon}>
                +
              </div>

              <div>
                <h4>{principle.title}</h4>

                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Company link */}

        <div className={styles.bottom}>
          <p>
            From early ideas to evolving digital systems, we aim to become a
            technology partner our clients can build with for the long term.
          </p>

          <Link
            href="/about"
            className={styles.link}
          >
            <span>Discover KCS</span>

            <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
    </section>
  );
}