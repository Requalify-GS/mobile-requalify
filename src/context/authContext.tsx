import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextData {
  userId: number | null;
  userName: string | null;
  token: string | null;
  login: (token: string, id: number, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    try {
      const storedToken = await AsyncStorage.getItem("@requalify:token");
      const storedUserId = await AsyncStorage.getItem("@requalify:userId");
      const storedUserName = await AsyncStorage.getItem("@requalify:userName");

      if (storedToken && storedUserId) {
        setToken(storedToken);
        setUserId(Number(storedUserId));
        setUserName(storedUserName);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do storage:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(token: string, id: number, name?: string) {
    try {
      await AsyncStorage.setItem("@requalify:token", token);
      await AsyncStorage.setItem("@requalify:userId", String(id));
      if (name) {
        await AsyncStorage.setItem("@requalify:userName", name);
      }
      setToken(token);
      setUserId(id);
      setUserName(name || null);
    } catch (error) {
      console.error("Erro ao salvar token:", error);
    }
  }

  async function logout() {
    try {
      await AsyncStorage.removeItem("@requalify:token");
      await AsyncStorage.removeItem("@requalify:userId");
      await AsyncStorage.removeItem("@requalify:userName");
      setToken(null);
      setUserId(null);
      setUserName(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ userId, userName, token, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
