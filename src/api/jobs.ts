import axios from "axios";

const JOBS_API_URL = "http://192.168.3.100:3000/api"; // Sua API Express

export interface LinkedInJob {
  position: string;
  company: string;
  companyLogo: string;
  location: string;
  date: string;
  agoTime: string;
  salary: string;
  jobUrl: string;
}

export const jobsApi = {
  searchJobs: async (keyword: string): Promise<LinkedInJob[]> => {
    try {
      const response = await axios.get(`${JOBS_API_URL}/jobs`, {
        params: {
          keyword,
          location: "Brasil",
          limit: "20",
        },
      });
      return response.data.jobs || [];
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
      throw error;
    }
  },
};
