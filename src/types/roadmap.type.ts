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
