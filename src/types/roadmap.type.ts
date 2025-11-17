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

export type RoadmapNavigationParams = {
  roadmap: Roadmap;
};
