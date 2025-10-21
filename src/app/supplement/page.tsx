"use client";

import styles from "./page.module.css";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { FaUserTie } from "react-icons/fa";

interface Course {
  id: string;
  title: string;
  link: string;
  hours: string;
  summary: string;
  topics: string[];
  icon: React.ReactNode;
}

const courses: Course[] = [
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
    icon: <SiHtml5 color="#E34F26" size={32} />,
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
    icon: <SiJavascript color="#F7DF1E" size={32} />,
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
    icon: <SiReact color="#61DAFB" size={32} />,
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
    icon: <SiNextdotjs color="#333333" size={32} />,
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
    icon: <SiNodedotjs color="#339933" size={32} />,
  },
  {
    id: "career",
    title: "Career Skills",
    link: "https://goit.global/",
    hours: "over 10 hours of learning",
    summary:
      "Professional communication, teamwork, and personal branding essentials.",
    topics: ["Soft Skills, CV, Interview Preparation, Career Growth"],
    icon: <FaUserTie color="#0A66C2" size={32} />,
  },
];

export default function SupplementPage() {
  return (
    <section className={`${styles.timelineSection} container`}>
      <h1 className="text-center">My Fullstack Developer Learning Path</h1>
      <p className="text-center">
        Fullstack Developer Certificate Extension • More: 872 hours
      </p>

      <div className={styles.timeline}>
        {courses.map((course, index) => (
          <a
            key={course.id}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${
              index % 2 === 0 ? styles.left : styles.right
            } ${styles.fadeIn}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={styles.content}>
              <div className={styles.icon}>{course.icon}</div>
              <h2 className={styles.title}>{course.title}</h2>
              <p className={styles.hours}>{course.hours}</p>
              <p className={styles.summary}>{course.summary}</p>
              <ul className={styles.topics}>
                {course.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
