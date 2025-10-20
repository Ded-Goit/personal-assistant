"use client";

import Timeline from "@/components/Timeline/Timeline";
import styles from "./page.module.css";

export default function SupplementPage() {
  return (
    <section className={`${styles.timelineSection} container`}>
      <h1 className="text-center">My Fullstack Developer Learning Path</h1>
      <p className="text-center">
        Fullstack Developer Certificate Extension • More: 872 hours
      </p>
      <Timeline />
    </section>
  );
}
