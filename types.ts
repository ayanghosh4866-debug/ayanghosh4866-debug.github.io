export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface StatItem {
  value: string;
  label: string;
}