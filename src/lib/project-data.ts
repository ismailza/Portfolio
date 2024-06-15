import fs from 'fs';
import path from 'path';

/**
 * Project properties
 */
export interface ProjectProps {
  title: string;
  slug: string;
  excerpt: string;
  overview: string;
  image: string;
  features: string[];
  category: string;
  technologies: string[];
  timeline: {start: string; end: string };
  featured: boolean;
  team: [{name: string, role?: string, linkedin?: string, github?: string}];
  goals: string[];
  tags: string[];
  github?: string;
  demo?: string;
  release?: string;
}

/**
 * Get all projects
 */
export async function getAllProjects() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects: ProjectProps[] = JSON.parse(jsonData);
  return projects;
}

/**
 * Get a project by its slug
 * @param slug
 */
export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug);
}
