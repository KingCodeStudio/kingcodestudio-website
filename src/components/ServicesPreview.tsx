import Link from "next/link";
import styles from "./ServicesPreview.module.css";

const services = [
  {
    title: "Software Development",
    description:
      "Scalable software systems designed around your business, users and long-term goals.",
  },
  {
    title: "Web & Digital Platforms",
    description:
      "High-performance websites and digital platforms built for modern businesses.",
  },
  {
    title: "Mobile Applications",
    description:
      "Thoughtful mobile experiences for customers, teams and connected products.",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent workflows and AI-powered solutions that turn repetitive work into efficient systems.",
  },
  {
    title: "Cybersecurity",
    description:
      "Security-minded engineering that helps protect applications, infrastructure and data.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, deployment pipelines and systems built to scale.",
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>

        {/* Introduction */}

        <div className={styles.introduction}>
          <div>
            <p className={styles.eyebrow}>WHAT WE DO</p>

            <h2>
              Technology built around
              <span> your ambition.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            From software engineering to intelligent automation, we create
            digital systems that solve real problems and create measurable
            value.
          </p>
        </div>

        {/* Services */}

        <div className={styles.grid}>
          {services.map((service) => (
            <article
              className={styles.service}
              key={service.title}
            >
              <div>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <span
                className={styles.arrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        {/* View all services */}

        <Link
          href="/services"
          className={styles.viewAll}
        >
          <span>View all services</span>

          <span aria-hidden="true">↗</span>
        </Link>

      </div>
    </section>
  );
}