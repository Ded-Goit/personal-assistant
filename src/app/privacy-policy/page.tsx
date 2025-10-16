"use client";
import Link from "next/link";
import styles from "@/app/cookies-policy/policypage.module.css";

export default function PrivacyPolicy() {
  return (
    <main className={styles.policyPage}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> 2025-10-16
      </p>

      <p>
        This Privacy Policy applies to the <strong>Personal Assistant</strong>{" "}
        website (the “Website”). By accessing or using our services, you agree
        to the collection and use of information as described below.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> name, email address, or other
          data if voluntarily provided.
        </li>
        <li>
          <strong>Technical Data:</strong> IP address, browser type, and device
          information for analytics purposes.
        </li>
        <li>
          <strong>Cookies & Tracking:</strong> cookies are used to enhance user
          experience and analyze usage trends.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        Collected data may be used for providing and improving our services,
        analyzing website traffic, and ensuring platform security.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        We may use third-party services such as Google Analytics to track and
        analyze website traffic. These providers have their own privacy
        policies:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/policy.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Privacy Policy
          </a>
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement reasonable measures to protect your data. However, no
        internet transmission is 100% secure.
      </p>

      <h2>5. Children’s Privacy</h2>
      <p>
        Our Website is not intended for users under 13. We do not knowingly
        collect their data.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, update, or delete your personal data. For
        inquiries, contact us at{" "}
        <a href="mailto:info@assistant.com">info@assistant.com</a>.
      </p>

      <hr />
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </main>
  );
}
