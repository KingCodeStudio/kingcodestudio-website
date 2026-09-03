import Link from "next/link";
import styles from "./WorkPreview.module.css";

const projects = [
  {
    title: "DeepShield",
    category: "AI & Cybersecurity",
    description:
      "An intelligent security platform designed to detect and analyze sophisticated digital threats.",
  },
  {
    title: "LogiFlow",
    category: "Software Platform",
    description:
      "A modern logistics platform designed to simplify operations, improve visibility and connect business workflows.",
  },
  {
    title: "KCS Intelligence",
    category: "AI & Automation",
    description:
      "Intelligent tools and automation systems designed to help businesses work faster and make better decisions.",
  },
];

export default function WorkPreview() {
  return (
    <section className={styles.work}>
      <div className={styles.inner}>

        {/* Section introduction */}

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>SELECTED WORK</p>

            <h2>
              Ideas turned into
              <span> working systems.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            From intelligent applications to business platforms, we transform
            ambitious ideas into dependable digital products.
          </p>
        </div>

        {/* Projects */}

        <div className={styles.projects}>
          {projects.map((project) => (
            <article
              className={styles.project}
              key={project.title}
            >
              <div className={styles.projectTop}>
                <span className={styles.category}>
                  {project.category}
                </span>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className={styles.projectContent}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className={styles.projectFooter}>
                <span>View case study</span>

                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>

        {/* All work */}

        <Link
          href="/work"
          className={styles.viewAll}
        >
          <span>Explore all work</span>

          <span aria-hidden="true">↗</span>
        </Link>

      </div>
    </section>
  );
}