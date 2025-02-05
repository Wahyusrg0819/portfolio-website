export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  technologies: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
} 