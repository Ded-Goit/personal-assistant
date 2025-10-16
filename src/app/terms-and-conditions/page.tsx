"use client";
import Link from "next/link";
import styles from "@/app/cookies-policy/policypage.module.css";

export default function TermsAndConditions() {
  return (
    <main className={styles.policyPage}>
      <h1>Terms and Conditions</h1>
      <p>
        <strong>Last Updated:</strong> 2025-10-16
      </p>

      <p>
        Welcome to <strong>Personal Assistant</strong>. By accessing or using
        this Website, you agree to be bound by the following terms and
        conditions.
      </p>

      <h2>1. Use of the Website</h2>
      <p>
        You must use the Website only for lawful purposes. You agree not to
        interfere with or disrupt the functionality of the site.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        All materials, trademarks, and content on this Website are owned or
        licensed by Personal Assistant and protected by applicable laws.
      </p>

      <h2>3. Limitation of Liability</h2>
      <p>
        We are not liable for any direct, indirect, or consequential damages
        resulting from the use or inability to use our Website or services.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        Our Website may contain links to external sites. We are not responsible
        for their content or privacy practices.
      </p>

      <h2>5. Modifications</h2>
      <p>
        We may revise these Terms at any time. Continued use of the Website
        indicates acceptance of updated terms.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        For questions about these Terms, email us at{" "}
        <a href="mailto:info@assistant.com">info@assistant.com</a>.
      </p>

      <hr />
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
    </main>
  );
}
