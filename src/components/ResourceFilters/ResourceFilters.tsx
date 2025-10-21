"use client";

import React, { useEffect, useState } from "react";
import styles from "./ResourceFilters.module.css";
import ResourceForm from "@/components/ResourceForm/ResourceForm";

type FilterItem = {
  icon: React.ReactNode;
  label: string;
};

interface ResourceFiltersProps {
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
  legend: FilterItem[];
}

export default function ResourceFilters({
  activeCategory,
  onSelect,
  legend,
}: ResourceFiltersProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Top filter bar + button */}
      <div
        className={`${styles.filtersBar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.filtersList}>
          <button
            className={`${styles.filterBtn} ${
              activeCategory === null ? styles.active : ""
            }`}
            onClick={() => onSelect(null)}
          >
            All
          </button>

          {legend.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.filterBtn} ${
                activeCategory === item.label ? styles.active : ""
              }`}
              onClick={() => onSelect(item.label)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </button>
          ))}

          <button
            className={`${styles.filterBtn} ${styles.addBtn}`}
            onClick={() => setShowForm((prev) => !prev)}
          >
            + Add Resource
          </button>
        </div>
      </div>

      <div className={`${styles.formContainer} ${showForm ? styles.open : ""}`}>
        <ResourceForm />
      </div>
    </div>
  );
}
