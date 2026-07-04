export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  architectureHighlights?: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface TechCategory {
  category: string;
  icon: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  proficiency: number;
  color: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  code: string;
  status: "earned" | "preparing";
  description: string;
  color: string;
}
