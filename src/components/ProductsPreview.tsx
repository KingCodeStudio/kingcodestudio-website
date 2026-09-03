import Link from "next/link";
import styles from "./ProductsPreview.module.css";

const products = [
  {
    type: "SOFTWARE",
    title: "Business Software",
    description:
      "Purpose-built software products designed to simplify operations, improve productivity and solve meaningful business problems.",
  },
  {
    type: "APPLICATIONS",
    title: "Digital Applications",
    description:
      "Thoughtful web and mobile applications created around real users, useful experiences and evolving digital needs.",
  },
  {
    type: "AI PRODUCTS",
    title: "Intelligent Systems",
    description:
      "AI-powered products and automation systems exploring new ways to make technology more useful and accessible.",
  },
  {
    type: "GAMES",
    title: "Interactive Experiences",
    description:
      "Games and interactive digital experiences combining technology, creativity and engaging user experiences.",
  },
];

export default function ProductsPreview() {
  return (
    <section className={styles.products}>
      <div className={styles.inner}>

        {/* Introduction */}

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>KCS PRODUCTS</p>

            <h2>
              Building what
              <span> comes next.</span>
            </h2>
          </div>

          <p className={styles.introText}>
            Beyond client work, King Code Studio is developing its own ideas,
            applications and technology products for the future.
          </p>
        </div>

        {/* Product list */}

        <div className={styles.productList}>
          {products.map((product) => (
            <article
              className={styles.product}
              key={product.title}
            >
              <div className={styles.productType}>
                {product.type}
              </div>

              <div className={styles.productMain}>
                <h3>{product.title}</h3>

                <p>{product.description}</p>
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

        {/* Future direction */}

        <div className={styles.future}>
          <div>
            <p className={styles.futureLabel}>
              THE ROAD AHEAD
            </p>

            <h3>
              Some ideas are being built.
              <br />
              Others are still taking shape.
            </h3>
          </div>

          <p>
            We are continuously exploring new software, AI, applications and
            interactive experiences that can become useful products of their
            own.
          </p>
        </div>

        {/* View products */}

        <Link
          href="/products"
          className={styles.viewAll}
        >
          <span>Explore KCS products</span>

          <span aria-hidden="true">↗</span>
        </Link>

      </div>
    </section>
  );
}