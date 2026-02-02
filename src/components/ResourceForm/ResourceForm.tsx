"use client";

import { useState, useId } from "react";
import styles from "./ResourceForm.module.css";

interface Resource {
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
}

export default function ResourceForm() {
  const titleId = useId();
  const descriptionId = useId();
  const iconId = useId();
  const linkId = useId();
  const categoryId = useId();
  const errorId = useId();

  const [formData, setFormData] = useState<Resource>({
    title: "",
    description: "",
    icon: "",
    link: "",
    category: "",
  });

  const [resources, setResources] = useState<Resource[]>([]);
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.title || !formData.link) {
      setError("Title and Link are required fields.");
      return;
    }

    setResources((prev) => [...prev, formData]);
    setFormData({
      title: "",
      description: "",
      icon: "",
      link: "",
      category: "",
    });
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(resources, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resources.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit} noValidate>
      <h2>Add new resource</h2>

      <div className={styles.formGroup}>
        <label htmlFor={titleId}>Title *</label>
        <input
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. CSS Box Shadow Generator"
          required
          aria-invalid={!!error && !formData.title}
          aria-describedby={error ? errorId : undefined}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor={descriptionId}>Description</label>
        <textarea
          id={descriptionId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short summary"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor={iconId}>Icon (key)</label>
        <input
          id={iconId}
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          placeholder="e.g. code / lightbulb / image"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor={linkId}>Link *</label>
        <input
          id={linkId}
          name="link"
          type="url"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://example.com"
          required
          aria-invalid={!!error && !formData.link}
          aria-describedby={error ? errorId : undefined}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor={categoryId}>Category</label>
        <input
          id={categoryId}
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Розробка — Робота з тінями"
        />
      </div>

      {error && (
        <p id={errorId} role="alert" className={styles.error}>
          {error}
        </p>
      )}

      <button type="submit">Add Resource</button>

      {resources.length > 0 && (
        <>
          <h3>Preview ({resources.length})</h3>
          <ul className={styles.previewList}>
            {resources.map((r, i) => (
              <li key={i}>
                <b>{r.title}</b> — {r.category}
                <br />
                <a href={r.link} target="_blank" rel="noreferrer">
                  {r.link}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.exportBtn}
            onClick={exportJSON}
          >
            Export JSON
          </button>
        </>
      )}
    </form>
  );
}
