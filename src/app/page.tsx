import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Personal Assistant</h1>
        <p className={styles.subtitle}>
          Your smart assistant to help organize your daily life and goals.
        </p>
        <button className={styles.cta}>Get Started</button>
      </div>
    </section>
  );
}