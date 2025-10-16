import { fetchGitHubRepo, GitHubProject } from "@/lib/github";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./projects.module.css";

export default async function ProjectsPage() {
  const repositories = [
    { owner: "Ded-Goit", repo: "03-react-movies" },
    { owner: "Ded-Goit", repo: "06-notehub-nextjs" },
  ];

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
