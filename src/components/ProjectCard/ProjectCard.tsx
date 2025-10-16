"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import styles from "./ProjectCard.module.css";
import { GitHubProject } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Форматуємо дату лише на клієнті
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (project.updated_at) {
      try {
        setFormattedDate(new Date(project.updated_at).toLocaleDateString());
      } catch {
        setFormattedDate(project.updated_at);
      }
    }
  }, [project.updated_at]);

  // Форматуємо прев’ю README
  const readmePreview = useMemo(() => {
    if (!project.readme) return "No README available.";
    return (
      project.readme.slice(0, 500) + (project.readme.length > 500 ? "..." : "")
    );
  }, [project.readme]);

  return (
    <article className={styles.card}>
      <header>
        <h2>{project.name}</h2>
        {project.description && (
          <p className={styles.desc}>{project.description}</p>
        )}
      </header>

      {/* suppressHydrationWarning прибирає можливий mismatch */}
      {formattedDate && (
        <p className={styles.updated} suppressHydrationWarning>
          Last updated: {formattedDate}
        </p>
      )}

      <div className={styles.links}>
        <Link href={project.html_url} target="_blank" className={styles.link}>
          GitHub →
        </Link>

        {project.homepage && (
          <Link href={project.homepage} target="_blank" className={styles.link}>
            Live Demo →
          </Link>
        )}
      </div>

      {/* suppressHydrationWarning усуває різницю між SSR і клієнтом у <details> */}
      <details className={styles.readme} suppressHydrationWarning>
        <summary>README Preview</summary>
        <pre>{readmePreview}</pre>
      </details>
    </article>
  );
}
