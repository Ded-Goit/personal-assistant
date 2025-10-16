import { fetchGitHubRepo, GitHubProject } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./projects.module.css";
import { repositories } from "@/constant/repo";

export default async function ProjectsPage() {
  const projects: GitHubProject[] = await Promise.all(
    repositories.map(async ({ owner, repo }) => fetchGitHubRepo(owner, repo))
  );

  return (
    <main className={styles.projectsPage}>
      <h1>My Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
