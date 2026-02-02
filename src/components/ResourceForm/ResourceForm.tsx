"use client";
/*edit form variant*/
import { useState } from "react";
import styles from "./ResourceForm.module.css";

interface Resource {
  title: string;
  description: string;
  icon: string;
  link: string;
  category: string;
}

export default function ResourceForm() {
  const [formData, setFormData] = useState<Resource>({
    title: "",
    description: "",
    icon: "",
    link: "",
    category: "",
  });

  const [resources, setResources] = useState<Resource[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!formData.title || !formData.link) {
      alert("Please fill at least Title and Link");
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
    <div className={styles.formWrapper}>
      <h2>Add new resource</h2>

      <div className={styles.formGroup}>
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. CSS Box Shadow Generator"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short summary"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Icon (key)</label>
        <input
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          placeholder="e.g. code / lightbulb / image"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Link</label>
        <input
          name="link"
          value={formData.link}
          onChange={handleChange}
          placeholder="https://example.com"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Category</label>
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g. Розробка — Робота з тінями"
        />
      </div>

      <button onClick={handleAdd}>Add Resource</button>

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

          <button className={styles.exportBtn} onClick={exportJSON}>
            Export JSON
          </button>
        </>
      )}
    </div>
  );
}
