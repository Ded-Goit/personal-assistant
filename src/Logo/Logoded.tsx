import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo({ width = 100, height = 50 }) {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/dedlogo.png"
        alt="DED Logo"
        width={width}
        height={height}
        priority
        className={styles.logoDefault}
      />      
    </Link>
  );
}