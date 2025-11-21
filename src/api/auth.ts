import { LoginFormData, SignUpFormData } from "../types/auth.type";
import { api } from "./client";

export interface AuthResponse {
  token: string;
  username: string;
  id: number;
  name?: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface UpdateUserData {
  name?: string;
  username?: string;
  password?: string;
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

  updateUser: async (id: number, userData: UpdateUserData): Promise<User> => {
    const response = await api.put<User>(`/user/${id}`, userData);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/user/${id}`);
  },

  getUser: async (id: number): Promise<User> => {
    const response = await api.get<User>(`/user/${id}`);
    return response.data;
  },
};
