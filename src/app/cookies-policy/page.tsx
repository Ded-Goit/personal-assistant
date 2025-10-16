"use client";
import Link from "next/link";
import styles from "./policypage.module.css";

export default function CookiesPolicy() {
  return (
    <main className={styles.policyPage}>
      <h1>Cookies Policy</h1>
      <p>
        <strong>Last Updated:</strong> 2025-10-16
      </p>

      <p>
        This Cookies Policy explains how <strong>Personal Assistant</strong>{" "}
        uses cookies and similar technologies on our Website.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device to improve browsing
        experience and collect analytics data.
      </p>

      <h2>2. How We Use Cookies</h2>
      <ul>
        <li>To remember user preferences and settings.</li>
        <li>To improve site performance and functionality.</li>
        <li>To analyze traffic and user interaction using analytics tools.</li>
      </ul>

      <h2>3. Managing Cookies</h2>
      <p>
        You can disable cookies through your browser settings, but some parts of
        the Website may not function properly.
      </p>

      <h2>4. Third-Party Cookies</h2>
      <p>
        We may use cookies from third-party services like Google Analytics. For
        details, visit:{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Cookies Policy
        </a>
        .
      </p>

      <h2>5. Updates</h2>
      <p>
        This Cookies Policy may be updated periodically. Changes will be
        reflected on this page.
      </p>

      <hr />
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </main>
  );
}
