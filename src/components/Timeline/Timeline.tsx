"use client";

import styles from "@/app/supplement/page.module.css";
import { courses } from "@/components/CourseCard/CourseCard";
import CourseCard from "@/components/CourseCard/CourseCard";
import LineAnimation from "@/components/LineAnimation/LineAnimation";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <LineAnimation />
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
}
