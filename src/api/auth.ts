import { LoginFormData, SignUpFormData } from "../types/auth.type";
import { api } from "./client";

export interface AuthResponse {
  token: string;
  type: string;
  prefix: string;
  expiresAt: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
}

export const authApi = {
  login: async (credentials: LoginFormData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/user/login", credentials);
    return response.data;
  },

  signUp: async (userData: SignUpFormData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/user", userData);
    return response.data;
  },
};
