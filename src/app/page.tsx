import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello <span className={styles.highlight}>Fullstack Developer</span> &{" "}
          <span className={styles.highlight}>Data Analyst</span>
        </h1>
        <p className={styles.subtitle}>
          I build modern web applications, analytical dashboards, and recommend
          tools that help people work more efficiently.
        </p>
        <a href="/projects" className={styles.cta}>
          View my projects
        </a>
      </div>
    </section>
  );
}
