import { Roadmap } from "../types/roadmap.type";
import { api } from "./client";

export interface CreateRoadmapData {
  targetOccupation: string;
  description: string;
}

export interface RoadmapResponse {
  id: number;
  userId: number;
  targetOccupation: string;
  description: string;
  checkpoints: Array<{
    id: number;
    title: string;
    description: string;
    order: number;
    courses: Array<{
      id: number;
      name: string;
      platform: string;
      url: string;
      description: string;
      durationHours: number;
    }>;
  }>;
}

export const roadmapApi = {
  createRoadmap: async (
    userId: number,
    data: CreateRoadmapData
  ): Promise<RoadmapResponse> => {
    const response = await api.post<RoadmapResponse>(
      `/roadmap/user/${userId}`,
      data
    );
    return response.data;
  },

  getRoadmapsByUserId: async (userId: number): Promise<Roadmap[]> => {
    const response = await api.get<RoadmapResponse[]>(
      `/roadmap/user/${userId}`
    );

    return response.data.map((roadmap) => ({
      id: roadmap.id,
      userId: roadmap.userId,
      userName: "",
      targetOccupation: roadmap.targetOccupation,
      description: roadmap.description,
      checkpoints: roadmap.checkpoints,
    }));
  },

  getRoadmapById: async (id: number): Promise<RoadmapResponse> => {
    const response = await api.get<RoadmapResponse>(`/roadmap/${id}`);
    return response.data;
  },

  deleteRoadmap: async (id: number): Promise<void> => {
    await api.delete(`/roadmap/${id}`);
  },
};
