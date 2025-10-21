"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import resourcesData from "@/data/resources.json";

import {
  FaYoutube,
  FaBookOpen,
  FaHeadphones,
  FaCalendarCheck,
  FaTasks,
  FaChartPie,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineMicrophone } from "react-icons/hi";
import { MdOutlineTimer, MdOutlineTrackChanges } from "react-icons/md";
import { BiCodeBlock, BiGitBranch, BiNotepad } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";
import ResourceForm from "@/components/ResourceForm/ResourceForm";
import { HiPaintBrush } from "react-icons/hi2";
import ResourceFilters from "@/components/ResourceFilters/ResourceFilters";

const iconsMap: Record<string, React.ReactNode> = {
  Youtube: <FaYoutube />,
  BookOpen: <FaBookOpen />,
  Headphones: <FaHeadphones />,
  CalendarCheck: <FaCalendarCheck />,
  Tasks: <FaTasks />,
  ChartPie: <FaChartPie />,
  OutlineLightBulb: <HiOutlineLightBulb />,
  OutlineMicrophone: <HiOutlineMicrophone />,
  OutlineTimer: <MdOutlineTimer />,
  OutlineTrackChanges: <MdOutlineTrackChanges />,
  CodeBlock: <BiCodeBlock />,
  GitBranch: <BiGitBranch />,
  Notepad: <BiNotepad />,
  AiOutlineDatabase: <AiOutlineDatabase />,
  HiPaintBrush: <HiPaintBrush />,
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const legend = [
    { icon: <FaYoutube />, label: "Video" },
    { icon: <HiPaintBrush />, label: "Painting" },
    { icon: <HiOutlineLightBulb />, label: "Course" },
    { icon: <FaBookOpen />, label: "Article / Summary" },
    { icon: <HiOutlineMicrophone />, label: "Podcast" },
    { icon: <FaHeadphones />, label: "Sound / Focus" },
    { icon: <FaCalendarCheck />, label: "Habit / Planning" },
    { icon: <FaTasks />, label: "Task Manager" },
    { icon: <MdOutlineTimer />, label: "Time Tracker" },
    { icon: <AiOutlineDatabase />, label: "Dataset / SQL" },
    { icon: <BiCodeBlock />, label: "Code / Dev" },
    { icon: <FaChartPie />, label: "Data Viz" },
  ];

  const filtered =
    activeCategory === null
      ? resourcesData
      : resourcesData.filter((res) => res.category === activeCategory);

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.heading}>Additional Resources</h1>
        <ResourceForm />

        {/* Filters */}
        <ResourceFilters
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          legend={legend}
        />

        {/* Grid with cards */}
        <div className={styles.grid}>
          {filtered.map((res, idx) => (
            <a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.icon}>{iconsMap[res.icon]}</div>
              <div className={styles.contentBlock}>
                <h2>{res.title}</h2>
                <p>{res.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
