export interface Course {
  id: number;
  name: string;
  platform: string;
  url?: string;
  description?: string;
  durationHours?: number;
}

export interface Checkpoint {
  id: number;
  title: string;
  description: string;
  order: number;
  courses: Course[];
}

export interface Roadmap {
  id: number;
  userId: number;
  userName: string;
  targetOccupation: string;
  description?: string;
  checkpoints: Checkpoint[];
}

export interface Job {
  position: string;
  company: string;
  companyLogo: any;
  location: string;
  agoTime: string;
  jobUrl: string;
}

export type RoadmapNavigationParams = {
  roadmap: Roadmap;
};

export interface Education {
  id?: number;
  institution: string;
  course: string;
  educationLevel: string;
  startDate: string;
  endDate?: string;
  inProgress: boolean;
}

export interface Experience {
  id?: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  currentJob: boolean;
  description: string;
}

export interface Certification {
  id?: number;
  name: string;
  issuingOrganization: string;
}

export interface Resume {
  occupation: string;
  summary: string;
  skills: string[];
  educations: Education[];
  experiences: Experience[];
  certifications: Certification[];
}
