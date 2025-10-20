"use client";

import { motion } from "framer-motion";
import styles from "@/app/supplement/page.module.css";

export default function LineAnimation() {
  return (
    <div className={styles.lineWrapper}>
      <motion.span
        className={styles.line}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}
