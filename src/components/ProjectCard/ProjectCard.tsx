"use client";

import Link from "next/link";
import { useMemo } from "react";
import styles from "./ProjectCard.module.css";
import { GitHubProject } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = useMemo(() => {
    if (!project.updated_at) return "";
    try {
      return new Date(project.updated_at).toLocaleDateString();
    } catch {
      return project.updated_at;
    }
  }, [project.updated_at]);

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

      {formattedDate && (
        <p className={styles.updated}>Last updated: {formattedDate}</p>
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

      <details className={styles.readme}>
        <summary>README Preview</summary>
        <pre suppressHydrationWarning>{readmePreview}</pre>
      </details>
    </article>
  );
}
