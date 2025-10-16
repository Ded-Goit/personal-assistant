import { repositories } from "@/constant/repo";

export interface GitHubProject {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description?: string | null;
  homepage?: string | null;
  updated_at: string;
  readme?: string;
  localName?: string;
}

export async function fetchGitHubRepo(
  owner: string,
  repo: string
): Promise<GitHubProject> {
  const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  });

  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repository: ${owner}/${repo}`);
  }

  const repoData = await repoRes.json();

  const readmeRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: { Accept: "application/vnd.github.v3.raw" },
      next: { revalidate: 3600 },
    }
  );

  const readmeText = readmeRes.ok
    ? await readmeRes.text()
    : "No README available.";

  const localRepo = repositories.find(
    (r) =>
      r.owner.toLowerCase() === owner.toLowerCase() &&
      r.repo.toLowerCase() === repo.toLowerCase()
  );

  return {
    id: repoData.id,
    name: repoData.name,
    full_name: repoData.full_name,
    html_url: repoData.html_url,
    homepage: repoData.homepage,
    description: repoData.description || "No description provided.",
    updated_at: repoData.updated_at,
    readme: readmeText,
    localName: localRepo ? localRepo.name : undefined,
  };
}
