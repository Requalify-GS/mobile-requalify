import { api } from "./client";

export interface ResumeDTO {
  occupation: string;
  summary: string;
  skills: string[];
  educations: Array<{
    institution: string;
    course: string;
    educationLevel: string;
    startDate: string;
    endDate?: string;
    inProgress: boolean;
  }>;
  experiences: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    currentJob: boolean;
    description: string;
  }>;
  certifications: Array<{
    name: string;
    issuingOrganization: string;
  }>;
}

export interface ResumeResponse extends ResumeDTO {
  id: number;
  userId: number;
}

export const resumeApi = {
  createResume: async (
    userId: number,
    resumeData: ResumeDTO
  ): Promise<ResumeResponse> => {
    const response = await api.post<ResumeResponse>(
      `/resume/user/${userId}`,
      resumeData
    );
    return response.data;
  },

  getResumeByUserId: async (userId: number): Promise<ResumeResponse> => {
    const response = await api.get<ResumeResponse>(`/resume/user/${userId}`);
    return response.data;
  },

  updateResume: async (
    resumeId: number,
    resumeData: ResumeDTO
  ): Promise<ResumeResponse> => {
    const response = await api.put<ResumeResponse>(
      `/resume/${resumeId}`,
      resumeData
    );
    return response.data;
  },

  deleteResume: async (resumeId: number): Promise<void> => {
    await api.delete(`/resume/${resumeId}`);
  },
};
