"use client";

import { motion } from "framer-motion";
import styles from "@/app/supplement/page.module.css";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import React from "react";

export interface Course {
  id: string;
  title: string;
  link: string;
  hours: string;
  summary: string;
  topics: string[];
  iconName: string;
}

export const iconMap: Record<string, React.ReactNode> = {
  htmlcss: <SiHtml5 color="#E34F26" size={32} />,
  javascript: <SiJavascript color="#F7DF1E" size={32} />,
  react: <SiReact color="#61DAFB" size={32} />,
  nextjs: <SiNextdotjs color="#333333" size={32} />,
  nodejs: <SiNodedotjs color="#339933" size={32} />,
  career: <FaUserTie color="#0A66C2" size={32} />,
};

export const courses: Course[] = [
  {
    id: "htmlcss",
    title: "HTML + CSS",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
    hours: "over 150 hours of learning",
    summary:
      "Semantic markup, modern CSS, responsive layouts, and accessibility.",
    topics: [
      "HTML Basics, Tags and Attributes",
      "CSS Selectors, Color, Fonts",
      "Block Model, Flexbox, Forms",
      "Responsive Design",
    ],
    iconName: "htmlcss",
  },
  {
    id: "javascript",
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
    hours: "over 300 hours of learning",
    summary:
      "Core JS, DOM manipulation, async programming, and API interaction.",
    topics: [
      "Variables, Types, Loops, Functions",
      "Objects, Prototypes, Classes",
      "Async/Await, Promises, HTTP Requests",
      "DOM & Events, Local Storage, Bundlers",
    ],
    iconName: "javascript",
  },
  {
    id: "react",
    title: "React",
    link: "https://react.dev/",
    hours: "over 125 hours of learning",
    summary:
      "Component-driven development, hooks, state management, and queries.",
    topics: [
      "TypeScript Fundamentals",
      "Components and State",
      "Forms and Effects",
      "TanStack Query and Formik",
    ],
    iconName: "react",
  },
  {
    id: "nextjs",
    title: "Next.js",
    link: "https://nextjs.org/",
    hours: "over 115 hours of learning",
    summary: "Server-side rendering, routing, and performance optimization.",
    topics: [
      "Routing + API",
      "Advanced Routing",
      "Performance Optimization",
      "Authentication & Deployment",
    ],
    iconName: "nextjs",
  },
  {
    id: "nodejs",
    title: "Node.js",
    link: "https://nodejs.org/en",
    hours: "over 160 hours of learning",
    summary: "Backend development with Node.js, Express, MongoDB, and APIs.",
    topics: [
      "Node.js Basics, Express, MongoDB",
      "REST API, Validation, Auth",
      "Docker, Email, Swagger, OpenAPI",
    ],
    iconName: "nodejs",
  },
  {
    id: "career",
    title: "Career Skills",
    link: "https://goit.global/",
    hours: "over 10 hours of learning",
    summary:
      "Professional communication, teamwork, and personal branding essentials.",
    topics: ["Soft Skills, CV, Interview Preparation, Career Growth"],
    iconName: "career",
  },
];
interface Props {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: Props) {
  return (
    <motion.a
      href={course.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.content}>
        <div className={styles.icon}>{iconMap[course.iconName]}</div>
        <h2 className={styles.title}>{course.title}</h2>
        <p className={styles.hours}>{course.hours}</p>
        <p className={styles.summary}>{course.summary}</p>
        <ul className={styles.topics}>
          {course.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
